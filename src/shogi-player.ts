/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ShogiBoard } from "./shogi-board";
import { Board, Color, Hand, Piece, Square } from "./types";
import { sq2rc, p2cpt, pt2hpt } from "./utils";
import { BOARD_INIT, BOARD_NULL, HAND_ZERO, HAND_ALL } from "./constants";
import "./shogi-board";
import "./shogi-hand";

type Select = { sq: Square | null; piece: Piece };

/**
 * An element.
 *
 * @slot - This element has a slot
 */
@customElement("shogi-player")
export class ShogiPlayer extends LitElement {
  static override styles = css`
    :host {
      width: 600px;
      display: block;
      border: solid 1px gray;
      padding: 16px;
      font-family: sans-serif;
    }
    .shogi-player {
      display: flex;
      justify-content: center;
      margin: 16px 0;
    }
    .shogi-hand {
      width: 12.5%;
      display: flex;
    }
  `;

  @state()
  private _board: Board = BOARD_INIT;
  @state()
  private _hand_black: Hand = { ...HAND_ZERO };
  @state()
  private _hand_white: Hand = { ...HAND_ZERO };

  @state()
  private _selected: Select | null = null;

  /**
   * The title of shogi player
   */
  @property({ type: String })
  override title = "";

  override render() {
    return html`
      <div>${this.title}</div>
      <div class="shogi-player">
        <div
          class="shogi-hand"
          @click=${() => this._handAreaClickHandler(Color.White)}
        >
          <shogi-hand
            class="white"
            color=${Color.White}
            .hand=${this._hand_white}
            .selected=${this._selected !== null && this._selected.sq === null
              ? this._selected.piece
              : null}
            @hand-clicked=${this._handPieceClickHandler}
          ></shogi-hand>
        </div>
        <shogi-board
          @cell-clicked=${this._cellClickHandler}
          .board=${this._board}
          .selected=${this._selected !== null ? this._selected.sq : null}
        ></shogi-board>
        <div
          class="shogi-hand"
          @click=${() => this._handAreaClickHandler(Color.Black)}
        >
          <shogi-hand
            class="black"
            color=${Color.Black}
            .hand=${this._hand_black}
            .selected=${this._selected !== null && this._selected.sq === null
              ? this._selected.piece
              : null}
            @hand-clicked=${this._handPieceClickHandler}
          ></shogi-hand>
        </div>
      </div>
      <button @click="${() => this.clearBoard()}">Clear Board</button>
      <slot></slot>
    `;
  }
  private _handAreaClickHandler(c: Color) {
    if (this._selected) {
      if (this._selected.sq !== null) {
        const [row, col] = sq2rc(this._selected.sq);
        const [, pt] = p2cpt(this._selected.piece);
        this._board[row][col] = null;
        if (c === Color.Black) {
          this._hand_black[pt2hpt(pt)] += 1;
          this._hand_black = { ...this._hand_black };
        }
        if (c === Color.White) {
          this._hand_white[pt2hpt(pt)] += 1;
          this._hand_white = { ...this._hand_white };
        }
        this._selected = null;
      }
    }
  }
  private _cellClickHandler(e: CustomEvent<{ sq: Square }>) {
    const [rowdst, coldst] = sq2rc(e.detail.sq);
    const piece = this._board[rowdst][coldst];
    if (this._selected === null) {
      if (piece !== null) {
        this._selected = { sq: e.detail.sq, piece };
      }
    } else {
      const [csrc, ptsrc] = p2cpt(this._selected.piece);
      if (this._selected.sq !== null) {
        if (e.detail.sq.equals(this._selected.sq)) {
          this._selected = null;
          return;
        } else {
          const [rowsrc, colsrc] = sq2rc(this._selected.sq);
          this._board[rowsrc][colsrc] = null;
          this._board[rowdst][coldst] = this._selected.piece;
        }
      } else {
        this._board[rowdst][coldst] = this._selected.piece;
        this._board = [...this._board];
        if (csrc === Color.Black) {
          this._hand_black[pt2hpt(ptsrc)] -= 1;
          this._hand_black = { ...this._hand_black };
        }
        if (csrc === Color.White) {
          this._hand_white[pt2hpt(ptsrc)] -= 1;
          this._hand_white = { ...this._hand_white };
        }
      }
      if (piece !== null) {
        const [, ptdst] = p2cpt(piece);
        if (csrc === Color.Black) {
          this._hand_black[pt2hpt(ptdst)] += 1;
          this._hand_black = { ...this._hand_black };
        }
        if (csrc === Color.White) {
          this._hand_white[pt2hpt(ptdst)] += 1;
          this._hand_white = { ...this._hand_white };
        }
      }
      this._selected = null;
    }
  }
  private _handPieceClickHandler(e: CustomEvent<{ piece: Piece }>) {
    if (this._selected !== null) {
      if (this._selected.sq !== null) {
        return;
      }
      if (this._selected.piece === e.detail.piece) {
        this._selected = null;
        return;
      }
    }
    this._selected = { sq: null, piece: e.detail.piece };
  }

  private clearBoard() {
    this._board = BOARD_NULL;
    this._hand_black = HAND_ALL;
    this._hand_white = HAND_ALL;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "shogi-player": ShogiPlayer;
    "shogi-board": ShogiBoard;
  }
}
