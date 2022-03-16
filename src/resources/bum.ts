import { svg } from "lit/static-html.js";

export const bum = svg`
<svg xmlns="http://www.w3.org/2000/svg" width="51.716" height="60" viewBox="0 0 51.716 60">
<!--
Created by Hari Seldon and modified by orangain, licensed under Creative Commons Attribution-Share Alike 3.0 Unported.
See: https://creativecommons.org/licenses/by-sa/3.0/deed.en

Original file is available at: https://commons.wikimedia.org/wiki/File:Shogi_ryuma(svg).svg
-->
<filter id="drop-shadow">
    <feGaussianBlur in="SourceAlpha" result="blur" stdDeviation="2" />
    <feOffset result="offsetBlur" dx="2" dy="2" />
    <feBlend in="SourceGraphic" in2="offsetBlur" mode="normal" />
</filter>
<g filter="url(#drop-shadow)" transform="translate(5 5)">
    <path d="M7.56 4.532l13.045 -3.951 13.479 3.789 7.036 44.602 -40.326 -0.217z" fill="#FEEC99"/>
    <path d="M16.599 45.308C15.603 44.9 14.49 43.688 14.097 42.582 13.691 41.44 15.591 39.712 17.251 39.712 19.063 39.712 20.243 40.416 20.243 41.497 20.243 42.328 20.083 42.373 18.057 42.104 16.362 41.879 15.913 41.939 16.055 42.371 16.624 44.094 20.69 44.481 23.571 43.086 25.674 42.069 26.493 40.759 26.073 39.086 25.725 37.7 24.348 37.14 21.287 37.14 18.813 37.14 18.259 36.534 19.671 35.37 20.307 34.846 20.201 34.759 18.707 34.568 17.431 34.405 17.028 34.161 17.028 33.554 17.028 32.852 17.458 32.734 20.538 32.588 22.469 32.496 24.155 32.593 24.284 32.801 24.413 33.01 24.138 33.664 23.674 34.254L22.83 35.327 24.745 35.809C26.862 36.342 27.862 37.481 28.228 39.774 28.519 41.598 27.066 43.9 24.95 44.962 23.364 45.759 18.222 45.972 16.6 45.308ZM14.441 30.73C13.347 30.287 12.31 29.07 12.697 28.682 12.857 28.522 13.557 28.605 14.253 28.868 15.295 29.261 16.481 29.12 20.989 28.068 25.33 27.054 26.702 26.883 27.638 27.239 28.286 27.486 28.817 27.989 28.817 28.356 28.817 29.128 25.986 30.445 23.465 30.846L21.756 31.117 23.036 30.051 24.316 28.984 23.03 29.244C22.322 29.388 20.38 29.873 18.716 30.322 15.325 31.236 15.619 31.208 14.441 30.73ZM21.259 24.121C20.219 23.081 19.386 21.842 19.386 21.335 19.386 20.302 20.028 20.123 20.543 21.012 21.018 21.831 23.724 23.419 24.648 23.42 25.392 23.422 26.447 21.524 26.054 20.888 25.946 20.713 25.076 20.218 24.122 19.788 23.168 19.358 22.387 18.868 22.387 18.699 22.387 18.531 22.779 17.895 23.257 17.286L24.128 16.179 23.258 15.713C22.778 15.457 22.387 14.928 22.387 14.539 22.387 13.997 22.084 14.12 21.099 15.064 19.421 16.672 18.099 19.445 18.099 21.362 18.099 23.035 17.284 24.008 16.084 23.765 15.438 23.635 15.336 23.247 15.451 21.372 15.527 20.142 15.497 19.135 15.384 19.135 15.272 19.135 14.487 20.1 13.64 21.279 12.793 22.458 11.81 23.422 11.456 23.422 10.143 23.422 10.873 21.519 13.206 18.862 14.523 17.362 15.509 16.135 15.396 16.135 15.284 16.135 14.352 16.516 13.324 16.982 10.886 18.089 9.258 18.092 8.669 16.992 8.248 16.205 8.343 16.134 9.833 16.133 11.667 16.131 13.946 14.916 14.677 13.55 15.08 12.797 15.027 12.53 14.383 12.04 13.952 11.714 13.111 11.44 12.515 11.433 11.355 11.418 9.526 10.346 9.526 9.68 9.526 9.458 10.564 9.276 11.832 9.276 13.984 9.276 14.172 9.191 14.665 8.004 15.385 6.264 16.623 5.946 17.922 7.167 19.235 8.4 19.228 8.987 17.891 9.702 17.096 10.127 16.94 10.412 17.277 10.818 17.597 11.202 17.595 11.618 17.272 12.221 16.639 13.405 16.687 13.563 17.685 13.563 19.138 13.563 19.143 14.738 17.696 16.386 16.599 17.636 16.442 18.044 16.862 18.55 17.295 19.072 17.566 18.853 18.532 17.202 19.165 16.117 20.358 14.517 21.182 13.646 22.335 12.428 22.735 11.586 22.912 10.003 23.118 8.176 23.029 7.869 22.126 7.277 20.814 6.417 21.189 5.847 23.064 5.847 24.926 5.847 25.741 7.215 25.054 9.185L24.614 10.447 26.544 10.229C28.249 10.037 28.456 10.104 28.322 10.802 28.223 11.316 27.46 11.812 26.136 12.224 24.514 12.728 24.101 13.048 24.101 13.802 24.101 14.387 24.428 14.834 24.956 14.972 26.07 15.263 26.512 16.466 25.878 17.482 25.438 18.185 25.565 18.377 26.895 19.011 29.358 20.185 29.413 22.331 27.042 24.702 25.132 26.612 23.594 26.457 21.259 24.122ZM27.959 13.134C27.959 12.898 28.104 12.701 28.281 12.696 28.458 12.69 29.08 12.319 29.663 11.871 30.683 11.087 30.695 11.024 29.966 10.219 29.262 9.44 29.259 9.362 29.93 9.105 31.096 8.657 32.675 9.974 32.675 11.393 32.675 12.537 32.505 12.671 30.51 13.098 27.88 13.663 27.96 13.661 27.96 13.134Z" fill="#fed5d5"/>
    <path d="M16.822 45.235C13.071 43.738 13.529 39.685 17.445 39.725 19.108 39.743 20.44 40.725 20.078 41.668 19.855 42.248 19.451 42.327 17.881 42.091 15.658 41.758 15.353 42.297 17.111 43.45 20.001 45.343 26.245 43.035 26.245 40.074 26.245 37.991 24.939 37.14 21.744 37.14 20.211 37.14 18.957 36.99 18.957 36.806 18.957 36.623 19.257 36.044 19.625 35.52 20.26 34.613 20.242 34.568 19.231 34.568 17.728 34.568 16.814 34.145 16.814 33.45 16.814 33.122 16.958 32.848 17.135 32.843 17.312 32.837 18.952 32.739 20.779 32.626 23.857 32.435 24.101 32.481 24.101 33.256 24.101 33.714 23.691 34.377 23.191 34.728 22.306 35.348 22.327 35.375 23.941 35.675 26.359 36.124 27.464 37.013 27.979 38.926 28.997 42.706 25.741 45.716 20.672 45.679 19.139 45.668 17.407 45.469 16.822 45.235ZM22.531 30.556C22.964 30.287 23.639 29.832 24.031 29.544 24.679 29.07 24.666 29.021 23.886 29.008 23.413 29.001 21.678 29.381 20.029 29.852 16.423 30.883 14.749 30.932 13.479 30.042 11.787 28.857 12.792 27.922 14.569 29.03 15.132 29.381 16.391 29.22 19.742 28.37 24.149 27.253 27.438 26.907 28.342 27.466 29.846 28.396 27.598 29.983 23.805 30.672 22.201 30.963 21.918 30.937 22.531 30.556ZM22.343 25.016C20.768 23.959 18.978 21.116 19.535 20.558 19.725 20.368 20.068 20.551 20.298 20.964 20.76 21.789 23.692 23.422 24.712 23.422 25.504 23.422 26.396 21.862 26.078 21.033 25.95 20.699 25.067 20.115 24.116 19.734 23.165 19.354 22.386 18.948 22.386 18.834 22.386 18.719 22.762 18.098 23.22 17.454 24.046 16.294 24.046 16.278 23.202 15.554 22.733 15.154 22.466 14.638 22.608 14.408 23.193 13.461 22.034 14.088 20.804 15.384 18.988 17.298 18.1 19.21 18.1 21.204 18.1 23.026 17.323 24.014 16.084 23.769 15.428 23.639 15.336 23.253 15.462 21.162 15.544 19.812 15.528 18.707 15.426 18.707 15.325 18.707 14.506 19.774 13.607 21.079 11.981 23.441 11.161 23.829 10.878 22.371 10.79 21.917 11.493 20.8 12.608 19.621 16.467 15.541 16.462 15.561 13.398 16.806 10.444 18.006 8.968 18.031 8.749 16.885 8.633 16.277 8.916 16.134 10.245 16.132 12.075 16.129 14.131 14.972 14.917 13.502 15.376 12.644 15.313 12.47 14.361 11.977 13.77 11.67 12.938 11.419 12.513 11.419 11.269 11.419 10.393 10.951 9.895 10.022 9.455 9.198 9.529 9.165 11.352 9.37 13.388 9.6 14.67 9.166 14.67 8.25 14.67 7.944 15.04 7.36 15.492 6.95 16.44 6.092 17.755 6.545 18.532 7.997 18.918 8.717 18.777 8.97 17.578 9.701 16.804 10.172 16.438 10.559 16.763 10.561 17.197 10.561 17.291 10.951 17.117 12.024 16.909 13.306 17.007 13.518 17.919 13.747 19.253 14.082 19.226 14.392 17.695 16.318 17.002 17.191 16.54 18.183 16.67 18.521 17.049 19.508 17.448 19.251 18.534 17.32 19.094 16.321 20.261 14.73 21.124 13.783 22.363 12.425 22.756 11.58 22.989 9.777 23.257 7.693 23.203 7.47 22.389 7.257 21.897 7.128 21.565 6.807 21.652 6.542 21.919 5.732 23.694 5.732 24.59 6.543 25.396 7.273 25.426 7.989 24.727 9.81 24.543 10.288 24.901 10.416 26.332 10.386 28.897 10.332 28.782 11.366 26.137 12.137 24.453 12.628 24.101 12.905 24.101 13.74 24.101 14.387 24.408 14.829 24.956 14.972 26.066 15.262 26.512 16.465 25.884 17.472 25.238 18.506 25.258 18.707 26.006 18.707 26.346 18.707 27.142 19.151 27.774 19.694 28.737 20.523 28.874 20.899 28.624 22.034 28.294 23.539 25.786 25.994 24.578 25.994 24.15 25.994 23.144 25.554 22.343 25.016ZM29.215 12.276C30.655 11.04 30.669 10.996 29.899 10.145 29.126 9.29 29.134 9.275 30.379 9.275 31.903 9.275 32.675 9.956 32.675 11.301 32.675 12.36 31.911 12.799 29.245 13.273L27.745 13.54 29.215 12.277Z" fill="#feb0b0"/>
    <path d="M16.94 45.239C14.651 44.577 13.399 41.802 14.847 40.601 16.005 39.64 18.257 39.569 19.357 40.459 20.857 41.674 20.173 42.39 17.847 42.041 15.208 41.646 15.242 42.798 17.9 43.812 20.126 44.662 22 44.32 24.569 42.595 25.713 41.827 26.059 41.275 26.161 40.06 26.343 37.9 25.167 37.14 21.648 37.14 20.168 37.14 18.958 36.99 18.958 36.806 18.958 36.623 19.258 36.044 19.625 35.52 20.266 34.604 20.246 34.567 19.089 34.561 18.427 34.558 17.598 34.373 17.246 34.151 16.04 33.388 17.475 32.789 20.689 32.713 24.272 32.628 24.803 33.101 22.999 34.773L21.833 35.853 23.603 35.853C29.001 35.853 29.715 42.945 24.527 45.021 22.652 45.771 19.132 45.872 16.94 45.239ZM13.384 29.638C12.304 28.488 12.691 28.268 14.414 29.053 15.281 29.449 16.334 29.327 19.994 28.41 25.774 26.962 28.817 26.93 28.817 28.318 28.817 29.028 26.191 30.221 23.988 30.514L22.172 30.754 23.458 29.993C24.706 29.253 24.715 29.226 23.752 29.079 23.207 28.996 21.441 29.329 19.828 29.819 15.946 30.998 14.628 30.961 13.384 29.638ZM22.49 25.139C21.057 24.266 19.39 21.975 19.387 20.877 19.387 20.459 19.765 20.615 20.565 21.36 22.938 23.574 25.028 24.038 25.834 22.531 26.504 21.281 26.069 20.483 24.322 19.753 22.644 19.053 22.522 18.696 23.462 17.261 24.052 16.361 24.036 16.208 23.276 15.521 22.791 15.082 22.549 14.471 22.694 14.058 23.145 12.776 19.76 16.308 18.857 18.061 18.372 19.003 17.991 20.341 18.011 21.033 18.059 22.703 17.401 23.851 16.395 23.851 15.203 23.851 15.001 23.233 15.54 21.234 16.147 18.98 15.527 18.19 14.464 19.864 13.307 21.687 11.583 23.419 11.175 23.167 10.305 22.629 10.989 21.337 13.468 18.837 14.928 17.364 16.038 16.073 15.932 15.969 15.828 15.866 14.614 16.257 13.234 16.839 10.461 18.009 8.966 18.025 8.749 16.885 8.634 16.282 8.911 16.135 10.159 16.135 12.167 16.135 14.062 15.139 14.824 13.685 15.391 12.603 15.362 12.496 14.358 11.975 13.768 11.669 13.028 11.419 12.713 11.419 11.737 11.419 10.015 10.479 9.756 9.804 9.55 9.266 9.854 9.209 11.648 9.447 13.785 9.73 13.786 9.73 14.877 8.003 15.477 7.053 16.109 6.281 16.283 6.289 16.7 6.307 17.743 7.165 18.46 8.079 18.965 8.725 18.861 8.919 17.602 9.686 16.815 10.166 16.412 10.559 16.707 10.56 17.401 10.562 17.405 12.554 16.711 12.983 16.352 13.205 16.525 13.393 17.245 13.563 18.735 13.915 18.815 15.145 17.441 16.58 16.738 17.313 16.376 18.064 16.531 18.467 16.948 19.555 17.601 19.24 18.476 17.527 18.928 16.644 20.065 15.05 21.002 13.987 22.332 12.478 22.773 11.569 23.011 9.842 23.283 7.862 23.22 7.578 22.411 7.145 21.3 6.551 21.644 5.846 23.045 5.846 24.532 5.846 25.545 7.521 24.97 9.031 24.345 10.675 24.405 11.199 25.147 10.583 25.887 9.968 28.042 10.147 28.27 10.842 28.36 11.118 27.476 11.653 26.267 12.055 25.076 12.45 24.101 12.935 24.101 13.133 24.101 13.331 23.984 13.798 23.841 14.17 23.658 14.648 23.832 14.849 24.431 14.849 25.739 14.849 26.526 16.014 25.897 17.021 25.205 18.131 25.257 18.707 26.05 18.707 26.414 18.707 27.177 19.172 27.746 19.74 28.641 20.635 28.726 20.965 28.377 22.205 27.927 23.81 25.765 25.995 24.63 25.993 24.222 25.992 23.258 25.608 22.49 25.139ZM17.028 8.419C17.174 8.183 17.1 7.989 16.864 7.989 16.629 7.989 16.317 8.183 16.171 8.419 16.025 8.654 16.099 8.847 16.335 8.847 16.57 8.847 16.882 8.654 17.028 8.418ZM29.46 12.136C30.493 11.267 30.64 10.946 30.21 10.508 29.352 9.633 29.585 9.208 30.845 9.354 31.675 9.451 32.136 9.834 32.429 10.671 32.957 12.183 32.542 12.588 30.103 12.94L28.173 13.218 29.46 12.136Z" fill="#fe8f8f"/>
    <path d="M16.94 45.239C14.194 44.444 13.325 41.494 15.506 40.366 17.189 39.496 18.225 39.541 19.446 40.539 20.246 41.193 20.348 41.477 19.932 41.899 19.544 42.295 19.04 42.321 18.001 42.003 15.198 41.143 14.649 42.247 17.225 43.561 19.155 44.545 19.811 44.602 22.052 43.98 24.501 43.3 26.245 41.625 26.245 39.954 26.245 37.876 25.162 37.14 22.103 37.14 20.687 37.14 19.399 37.01 19.241 36.852 19.083 36.694 19.234 36.139 19.575 35.617 20.174 34.704 20.135 34.66 18.505 34.399 16.853 34.135 16.365 33.609 17.259 33.057 17.504 32.906 19.079 32.749 20.759 32.71 24.266 32.628 24.749 33.076 22.949 34.743L21.752 35.853 23.602 35.853C28.917 35.853 29.635 42.978 24.527 45.021 22.652 45.771 19.132 45.872 16.94 45.239ZM13.384 29.638C12.304 28.488 12.691 28.268 14.414 29.053 15.281 29.449 16.334 29.327 19.994 28.41 24.663 27.24 27.299 27.011 28.361 27.683 29.289 28.27 28.299 29.227 25.927 30.035 23.207 30.962 22.484 30.907 23.732 29.866L24.744 29.023 23.671 29.009C23.081 29.001 21.249 29.381 19.601 29.852 15.676 30.974 14.605 30.937 13.384 29.638ZM22.909 25.281C21.392 24.534 20.119 22.991 19.606 21.279L19.284 20.207 20.514 21.363C21.19 21.999 22.444 22.812 23.299 23.169 24.734 23.769 24.909 23.759 25.549 23.051 26.773 21.699 26.421 20.585 24.53 19.828 22.658 19.079 22.441 18.544 23.525 17.348 24.185 16.618 24.185 16.508 23.525 15.779 23.135 15.349 22.815 14.634 22.815 14.192 22.815 13.551 22.472 13.723 21.115 15.049 19.071 17.045 17.972 19.194 17.847 21.442 17.752 23.146 17.095 23.942 15.957 23.73 15.281 23.604 15.248 22.991 15.77 20.257 16.187 18.069 15.567 18.287 13.466 21.067 12.576 22.244 11.666 23.207 11.443 23.207 10.78 23.207 10.673 21.588 11.302 21.071 12.761 19.873 16.096 16.131 15.889 15.924 15.762 15.797 14.569 16.192 13.239 16.802 10.611 18.004 8.971 18.047 8.756 16.918 8.656 16.393 8.843 16.26 9.459 16.421 10.839 16.783 14.099 15.081 14.865 13.601 15.481 12.409 15.483 12.276 14.882 12.276 14.515 12.276 14.104 11.988 13.969 11.636 13.834 11.284 13.547 11.104 13.331 11.238 12.716 11.618 10.058 10.592 9.781 9.868 9.567 9.312 9.872 9.258 11.817 9.5 14.077 9.783 14.11 9.77 14.66 8.443 15.472 6.483 16.486 6.085 17.612 7.283 18.863 8.616 18.78 8.954 16.921 10.085 16.037 10.623 15.658 10.953 16.08 10.819 17.062 10.508 17.55 11.686 16.881 12.756 16.207 13.836 16.249 13.946 17.237 13.688 17.779 13.546 18.187 13.718 18.357 14.16 18.59 14.77 18.251 15.455 16.624 17.66 16.36 18.017 16.419 18.445 16.796 18.9 17.308 19.517 17.486 19.391 18.409 17.757 18.979 16.747 20.213 15.007 21.15 13.891 22.46 12.331 22.912 11.376 23.103 9.756 23.323 7.9 23.243 7.591 22.429 7.156 21.316 6.56 21.629 5.846 23.002 5.846 24.529 5.846 25.112 6.867 24.816 9.025L24.558 10.905 25.767 10.449C27.034 9.971 28.388 10.235 28.388 10.96 28.388 11.195 27.625 11.592 26.693 11.843 23.648 12.663 22.777 14.323 24.959 15.146 26.221 15.622 26.662 16.683 25.816 17.206 24.976 17.726 25.41 18.559 26.888 19.263 28.194 19.886 28.388 20.179 28.388 21.529 28.388 22.72 28.051 23.416 26.931 24.537 25.284 26.183 24.887 26.257 22.909 25.281ZM17.029 8.418C17.174 8.183 17.1 7.99 16.864 7.99 16.629 7.99 16.317 8.183 16.171 8.418 16.025 8.654 16.099 8.848 16.335 8.848 16.57 8.848 16.882 8.654 17.028 8.418ZM29.41 12.174C30.49 11.281 30.583 11.031 30.146 10.213 29.712 9.403 29.754 9.276 30.45 9.276 31.408 9.276 32.675 10.562 32.675 11.535 32.675 12.419 32.439 12.544 30.103 12.902L28.173 13.198 29.41 12.174Z" fill="#fe6f6f"/>
    <path d="M17.034 45.09C13.857 43.916 13.176 41.4 15.746 40.326 17.994 39.386 20.727 40.378 19.841 41.812 19.554 42.277 19.191 42.286 17.897 41.859 16.676 41.456 16.191 41.451 15.81 41.839 15.131 42.53 16.808 43.879 18.815 44.255 22.113 44.873 27.115 41.83 26.441 39.615 25.831 37.618 24.995 37.14 22.106 37.14 19.222 37.14 18.809 36.773 20.096 35.352 20.767 34.609 20.738 34.568 19.534 34.568 18.019 34.568 16.424 33.573 17.184 33.103 17.883 32.671 23.139 32.523 23.776 32.917 24.151 33.149 23.944 33.613 23.049 34.547L21.798 35.854 23.625 35.854C28.553 35.854 29.649 42.472 25.085 44.664 22.946 45.691 19.196 45.889 17.034 45.09ZM13.634 29.803C12.172 28.653 12.471 28.336 14.37 29.022 15.66 29.489 16.426 29.412 20.39 28.418 25.136 27.229 27.325 27.028 28.36 27.683 29.34 28.303 28.2 29.319 25.687 30.065 22.837 30.911 22.517 30.879 23.732 29.866L24.744 29.023 23.389 29.009C22.644 29.001 20.811 29.379 19.317 29.847 15.87 30.927 15.055 30.921 13.634 29.803ZM23.673 25.694C22.479 25.263 19.815 22.397 19.815 21.546 19.815 20.716 19.832 20.716 20.779 21.582 21.309 22.068 22.396 22.794 23.192 23.197 24.572 23.896 24.677 23.893 25.41 23.14 26.85 21.662 26.63 20.717 24.637 19.814 22.716 18.944 22.399 18.3 23.458 17.421 24.27 16.747 24.285 15.868 23.492 15.564 23.156 15.434 22.819 14.884 22.742 14.339 22.609 13.402 22.502 13.447 20.779 15.17 19.777 16.172 18.957 16.92 18.957 16.832 18.957 16.744 19.922 15.466 21.101 13.992 22.916 11.72 23.244 11.031 23.244 9.488 23.244 8.078 23.026 7.518 22.279 7.01 21.386 6.403 21.372 6.332 22.092 6.044 22.52 5.874 23.34 5.948 23.914 6.209 25.06 6.731 25.264 7.987 24.522 9.939 24.135 10.957 24.172 11.05 24.844 10.754 25.986 10.25 28.071 10.285 28.252 10.812 28.34 11.067 27.587 11.522 26.578 11.821 25.57 12.121 24.503 12.561 24.208 12.801 23.276 13.561 23.622 14.641 24.958 15.146 26.221 15.622 26.662 16.683 25.816 17.206 24.976 17.726 25.41 18.559 26.888 19.263 28.154 19.867 28.388 20.199 28.388 21.391 28.388 23.095 27.481 24.491 25.811 25.354 25.13 25.706 24.515 25.979 24.444 25.96 24.374 25.942 24.026 25.822 23.673 25.694ZM15.267 23.241C15.138 22.906 15.241 22.243 15.495 21.769 16.056 20.719 16.105 18.707 15.568 18.707 15.354 18.707 14.487 19.671 13.64 20.85 12.187 22.873 10.812 23.651 10.812 22.452 10.812 22.154 11.993 20.602 13.436 19.002 14.879 17.404 15.979 16.014 15.88 15.916 15.781 15.816 14.493 16.223 13.018 16.819 10.238 17.942 9.082 18.019 8.776 17.099 8.663 16.761 9.013 16.563 9.722 16.563 11.202 16.563 14.012 15.107 14.856 13.902 15.631 12.796 15.753 11.658 15.051 12.092 14.789 12.254 14.413 12.124 14.215 11.804 14.017 11.484 13.265 11.193 12.545 11.156 11.216 11.09 9.955 10.35 9.955 9.637 9.955 9.416 10.886 9.37 12.101 9.531 14.218 9.811 14.254 9.797 14.718 8.465 15.4 6.508 16.473 6.071 17.612 7.284 18.905 8.66 18.774 9.061 16.707 10.064 14.971 10.906 14.943 10.949 16.114 10.969 17.381 10.991 17.43 11.227 16.59 13.273 16.365 13.82 16.447 14.031 16.863 13.973 18.926 13.685 19.061 14.641 17.25 16.703 15.983 18.147 15.979 18.165 16.822 18.928 17.289 19.351 17.672 19.511 17.672 19.284 17.672 19.056 17.96 18.496 18.312 18.038 18.882 17.3 18.882 17.386 18.312 18.8 17.96 19.677 17.672 21.055 17.672 21.862 17.672 22.805 17.429 23.423 16.993 23.591 15.948 23.991 15.522 23.905 15.267 23.241ZM17.028 8.418C17.174 8.183 17.1 7.99 16.864 7.99 16.629 7.99 16.317 8.183 16.171 8.418 16.025 8.654 16.099 8.848 16.335 8.848 16.57 8.848 16.882 8.654 17.028 8.418ZM29.46 12.125C30.596 11.175 30.683 10.947 30.206 10.163 29.736 9.391 29.77 9.276 30.461 9.276 31.409 9.276 32.675 10.566 32.675 11.531 32.675 12.241 32.237 12.443 29.675 12.921L28.174 13.2 29.46 12.125Z" fill="#fe4e4e"/>
    <path d="M17.75 45.289C16.094 44.897 14.242 43.306 14.242 42.276 14.242 40.539 18.157 39.169 19.444 40.456 20.263 41.274 19.537 42.391 18.424 42.025 15.694 41.127 14.637 42.182 16.89 43.555 18.815 44.73 20.914 44.65 23.623 43.3 26.311 41.96 27.031 40.754 26.259 38.888 25.626 37.362 24.674 36.984 21.636 37.058 19.258 37.115 18.703 36.525 20.07 35.391 20.668 34.895 20.519 34.766 18.891 34.374 16.413 33.776 16.561 33.089 19.192 32.978 20.36 32.928 21.702 32.792 22.176 32.674 22.649 32.556 23.321 32.636 23.669 32.85 24.194 33.175 24.099 33.45 23.105 34.489L21.91 35.737 23.956 35.967C26.549 36.26 27.959 37.717 27.959 40.107 27.959 44.093 23.107 46.557 17.75 45.289ZM13.515 29.651C12.592 28.839 12.481 28.591 13.038 28.58 13.436 28.572 13.882 28.76 14.028 28.995 14.437 29.658 15.776 29.524 20.964 28.302 25.823 27.158 29.071 27.144 28.706 28.269 28.491 28.934 26.008 30.089 24.101 30.409 22.801 30.629 22.729 30.599 23.565 30.191 24.095 29.933 24.53 29.558 24.53 29.358 24.53 28.748 22.323 28.951 19.172 29.852 15.352 30.944 14.97 30.931 13.515 29.652ZM23.429 25.368C21.94 24.742 19.815 22.4 19.815 21.385 19.815 20.816 19.978 20.85 20.779 21.582 21.827 22.541 24.222 23.851 24.926 23.851 25.168 23.851 25.672 23.258 26.046 22.534 26.865 20.951 26.463 20.273 24.281 19.553 22.711 19.035 22.421 18.282 23.458 17.421 24.27 16.747 24.285 15.868 23.492 15.564 23.156 15.434 22.819 14.902 22.742 14.38 22.602 13.442 22.582 13.446 21.101 14.675 19.629 15.896 19.635 15.878 21.422 13.717 23.028 11.775 23.244 11.261 23.244 9.373 23.244 7.519 23.114 7.196 22.279 6.961 21.368 6.705 21.359 6.664 22.112 6.221 22.693 5.878 23.201 5.884 23.988 6.243 24.932 6.673 25.039 6.934 24.841 8.327 24.716 9.202 24.481 10.251 24.317 10.657 24.04 11.342 24.113 11.347 25.347 10.732 26.077 10.368 26.995 10.132 27.388 10.209 28.593 10.443 28.494 11.301 27.228 11.597 24.594 12.214 23.673 12.79 23.673 13.821 23.673 14.534 23.979 14.909 24.713 15.093 26.063 15.433 26.447 16.486 25.572 17.453 24.922 18.172 24.988 18.276 26.633 19.115 28.601 20.119 28.883 21.222 27.738 23.436 26.778 25.293 25.071 26.058 23.428 25.368ZM15.605 23.301C15.315 22.951 15.294 22.521 15.545 22.121 16.08 21.277 16.065 18.707 15.527 18.707 15.291 18.707 14.405 19.671 13.557 20.85 12.101 22.878 10.807 23.637 10.817 22.458 10.82 22.163 12.09 20.523 13.639 18.814 15.189 17.104 16.241 15.706 15.979 15.706 15.717 15.706 14.336 16.196 12.911 16.796 11.447 17.413 9.961 17.773 9.495 17.625 8.297 17.245 8.482 16.563 9.783 16.563 11.323 16.563 13.67 15.38 14.683 14.093 15.534 13.01 15.853 11.596 15.148 12.033 14.938 12.161 14.529 11.98 14.238 11.629 13.946 11.278 13.095 10.99 12.346 10.99 11.065 10.99 9.955 10.363 9.955 9.639 9.955 9.461 10.91 9.429 12.078 9.568 14.184 9.817 14.207 9.807 14.944 8.261 15.763 6.544 16.73 6.284 17.819 7.488 18.872 8.651 18.712 9.015 16.707 10.022 14.959 10.9 14.935 10.938 16.114 10.964 17.376 10.991 17.429 11.234 16.602 13.241 16.355 13.843 16.515 13.991 17.411 13.991 18.864 13.991 18.827 14.74 17.281 16.579 16.141 17.937 16.091 18.127 16.701 18.809 17.335 19.519 17.398 19.519 17.972 18.809 18.518 18.135 18.532 18.153 18.124 18.999 17.874 19.515 17.671 20.586 17.671 21.379 17.671 23.423 16.562 24.454 15.605 23.301ZM17.242 8.398C17.242 8.201 17.05 7.921 16.814 7.775 16.578 7.63 16.385 7.602 16.385 7.715 16.385 7.828 16.267 8.227 16.123 8.603 15.931 9.103 16.046 9.214 16.552 9.02 16.932 8.875 17.242 8.594 17.242 8.398ZM29.352 12.402C30.609 11.6 30.856 10.629 30.017 9.79 29.617 9.39 29.71 9.276 30.436 9.276 30.964 9.276 31.681 9.752 32.088 10.373 33.001 11.767 32.375 12.482 29.888 12.88L28.174 13.156 29.353 12.402Z" fill="#fe2e2e"/>
    <path d="M18.137 45.316C16.874 45.101 15.913 44.607 15.244 43.829 13.992 42.375 13.981 41.658 15.194 40.808 16.932 39.591 20.228 40.16 19.682 41.582 19.47 42.134 19.192 42.172 18.114 41.796 15.516 40.89 14.646 42.187 16.921 43.575 18.728 44.676 21.215 44.655 23.56 43.521 25.909 42.384 26.844 41.036 26.47 39.331 26.049 37.416 25.158 36.925 22.106 36.925 19.336 36.925 18.739 36.495 20.029 35.425 20.809 34.778 20.879 34.089 20.136 34.365 19.436 34.625 17.028 33.965 17.028 33.513 17.028 33.32 18.62 33.086 20.565 32.993 22.663 32.892 24.101 32.991 24.101 33.235 24.101 33.462 23.474 34.142 22.708 34.746L21.315 35.844 22.645 35.849C25.801 35.86 27.962 37.641 27.958 40.226 27.956 41.632 26.488 43.85 25.079 44.579 23.497 45.397 20.492 45.716 18.137 45.316ZM13.908 30.042C12.716 29.207 12.617 28.355 13.785 28.98 15.034 29.648 16.62 29.512 21.101 28.352 25.821 27.129 27.054 27.05 28.199 27.892 28.987 28.472 28.929 28.552 27.102 29.384 26.042 29.867 24.799 30.266 24.341 30.271 23.517 30.281 23.517 30.274 24.341 29.651 25.116 29.065 25.051 29.021 23.389 29.008 22.409 29.001 20.383 29.378 18.889 29.847 15.598 30.878 15.129 30.897 13.909 30.042ZM21.478 23.902C20.563 22.986 19.815 21.925 19.815 21.543 19.815 20.969 19.968 21.003 20.709 21.745 21.579 22.614 24.059 23.851 24.934 23.851 25.171 23.851 25.672 23.258 26.046 22.534 26.865 20.951 26.463 20.273 24.281 19.553 22.578 18.99 22.585 19.015 23.565 17.351 24.28 16.138 24.28 16.057 23.565 15.656 23.153 15.424 22.815 14.858 22.815 14.399 22.815 13.281 22.464 13.343 20.91 14.737 20.19 15.383 20.42 15.038 21.422 13.971 23.121 12.161 23.244 11.866 23.244 9.61 23.244 7.506 23.123 7.152 22.317 6.896 21.489 6.633 21.467 6.558 22.111 6.198 23.945 5.171 25.427 7.131 24.554 9.428 23.852 11.273 23.998 11.495 25.426 10.756 26.716 10.089 27.959 10.161 27.959 10.902 27.959 11.104 27.043 11.552 25.923 11.898 24.219 12.426 23.865 12.718 23.751 13.691 23.656 14.507 23.847 14.936 24.394 15.131 26.077 15.733 26.311 16.184 25.546 17.352 25.15 17.955 25.001 18.51 25.214 18.584 28.682 19.8 29.287 21.977 26.838 24.427 25.158 26.107 23.525 25.947 21.478 23.901ZM15.791 23.502C15.671 23.308 15.69 22.025 15.831 20.65 16.055 18.486 16.163 18.251 16.637 18.9 16.939 19.313 17.343 19.552 17.535 19.433 17.728 19.314 17.818 20.071 17.735 21.113 17.631 22.408 17.333 23.144 16.796 23.432 16.363 23.663 15.911 23.695 15.791 23.502ZM11.021 22.556C10.873 22.316 12.042 20.676 13.621 18.912 15.199 17.149 16.241 15.706 15.935 15.706 15.63 15.706 14.135 16.204 12.612 16.814 10.086 17.824 9.784 17.862 9.164 17.242 8.544 16.622 8.61 16.563 9.912 16.563 11.912 16.563 14.427 15.026 15.249 13.301 15.912 11.912 15.906 11.848 15.117 11.848 14.664 11.848 14.173 11.655 14.027 11.419 13.882 11.183 13.279 10.99 12.687 10.99 11.493 10.99 9.955 10.294 9.955 9.752 9.955 9.559 10.888 9.492 12.028 9.601 14.034 9.794 14.13 9.751 15.014 8.251 16.044 6.507 16.767 6.325 17.861 7.534 18.788 8.558 18.448 9.162 16.44 10.055L14.885 10.747 16.064 10.897C17.422 11.07 17.515 11.462 16.55 12.935 15.865 13.98 15.872 13.991 17.193 13.991 17.928 13.991 18.529 14.211 18.529 14.479 18.529 14.748 17.505 16.147 16.254 17.587 15.004 19.028 13.544 20.834 13.01 21.6 12.001 23.049 11.48 23.3 11.021 22.556ZM17.242 8.122C17.242 7.279 16.208 7.652 16.032 8.56 15.936 9.057 16.098 9.194 16.568 9.014 16.939 8.872 17.242 8.471 17.242 8.122ZM29.567 12.403C30.627 11.678 30.815 10.588 30.017 9.79 29.617 9.39 29.665 9.276 30.231 9.276 31.008 9.276 32.675 10.721 32.675 11.394 32.675 11.96 31.965 12.336 30.159 12.726 28.663 13.05 28.64 13.038 29.567 12.403Z" fill="#fe0101"/>
</g>
</svg>
`;
