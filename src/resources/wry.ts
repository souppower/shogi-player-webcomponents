import { svg } from "lit/static-html.js";

export const wry = svg`
<svg xmlns="http://www.w3.org/2000/svg" width="52.324" height="60" viewBox="0 0 52.324 60">
<!--
Created by Hari Seldon and modified by orangain, licensed under Creative Commons Attribution-Share Alike 3.0 Unported.
See: https://creativecommons.org/licenses/by-sa/3.0/deed.en

Original file is available at: https://commons.wikimedia.org/wiki/File:Shogi_ryuo(svg).svg
-->
<filter id="drop-shadow">
    <feGaussianBlur in="SourceAlpha" result="blur" stdDeviation="2" />
    <feOffset result="offsetBlur" dx="2" dy="2" />
    <feBlend in="SourceGraphic" in2="offsetBlur" mode="normal" />
</filter>
<g filter="url(#drop-shadow)" transform="translate(5 5)">
<g transform="rotate(180 21.162 25)">
    <path d="M1.591 49.399l6.395 -45.018 13.178 -3.621 13.601 3.853 6.782 45.042z" fill="#FEEC99"/>
    <path d="M18.626 46.137C17.002 45.729 15.061 44.427 14.768 43.547 14.628 43.126 14.87 43.047 15.685 43.252 16.994 43.58 17.54 42.987 16.626 42.228 15.583 41.363 15.799 38.18 16.994 36.79 17.841 35.806 18.348 35.616 20.123 35.622 22.365 35.629 22.871 35.278 22.882 33.709 22.889 32.573 21.93 32.453 20.299 33.386 18.692 34.304 16.266 34.197 15.334 33.167 14.339 32.068 14.614 31.813 16.924 31.696 17.95 31.643 19.699 31.334 20.811 31.009 22.421 30.537 23.066 30.523 23.979 30.939 25.042 31.423 25.114 31.626 24.978 33.759 24.881 35.261 25.035 36.304 25.421 36.769 25.925 37.377 25.901 37.649 25.253 38.638 24.301 40.091 22.623 41.682 20.946 42.721 19.73 43.475 19.712 43.524 20.651 43.525 21.201 43.526 22.051 43.313 22.54 43.051 23.681 42.44 25.478 43.189 25.478 44.277 25.478 45.871 21.677 46.903 18.626 46.137ZM20.545 39.584C21.399 37.897 21.539 37.287 21.128 37.032 20.564 36.684 18.786 37.202 17.832 37.995 17.134 38.574 17.112 40.598 17.796 41.283 18.746 42.232 19.412 41.82 20.545 39.583ZM23.085 28.658C21.885 27.458 21.791 26.505 22.573 23.446 22.968 21.898 22.997 20.926 22.676 19.952L22.231 18.602 20.86 20.6C19.214 22.996 18.573 24.593 18.573 26.293 18.573 28.3 16.025 30.277 15.431 28.731 15.314 28.425 15.501 27.338 15.847 26.315 16.193 25.293 16.363 24.342 16.224 24.205 16.086 24.065 15.317 24.265 14.514 24.648 13.441 25.16 12.858 25.863 12.304 27.315 11.566 29.247 10.571 29.872 10.117 28.689 9.798 27.857 10.961 25.241 12.767 22.727 13.877 21.183 14.059 20.731 13.439 21.062 12.045 21.808 10.499 21.585 9.211 20.452L8 19.388 10.025 19.374C11.139 19.366 13.419 18.854 15.091 18.234 17.991 17.158 19.436 17.094 19.436 18.041 19.436 18.28 18.874 18.765 18.188 19.121 17.501 19.475 16.318 20.551 15.558 21.509L14.178 23.253 15.354 22.806C16 22.56 16.847 22.46 17.236 22.583 17.738 22.743 18.349 22.151 19.344 20.545 20.114 19.3 21.13 17.795 21.601 17.203 22.82 15.666 23.391 7.131 22.302 6.713 21.188 6.285 21.437 5.119 22.642 5.119 24.328 5.119 25.121 6.259 24.984 8.486 24.866 10.406 24.892 10.448 26.563 11.026 27.497 11.35 28.428 11.781 28.631 11.984 29.208 12.561 28.133 13.92 26.067 15.227 24.442 16.255 24.183 16.622 24.183 17.895 24.183 18.707 24.413 19.741 24.694 20.191 25.102 20.843 25.041 21.554 24.398 23.677 23.812 25.613 23.713 26.541 24.038 27.06 24.621 27.99 26.995 28.18 29.158 27.468L30.872 26.904 30.722 24.822 30.572 22.741 32.394 24.718C34.48 26.98 34.383 27.364 31.348 28.833 30.105 29.434 28.66 29.717 26.832 29.717 24.553 29.717 23.982 29.556 23.085 28.658ZM25.855 12.174C25.065 11.223 24.615 11.506 24.615 12.954 24.615 14.287 24.632 14.299 25.476 13.536 26.133 12.941 26.223 12.618 25.855 12.174ZM25.058 24.173C25.064 24.018 25.736 23.406 26.55 22.813 27.843 21.87 27.943 21.669 27.348 21.216 26.85 20.838 26.744 20.316 26.953 19.275 27.328 17.408 27.373 16.691 27.162 15.918 26.923 15.043 28.508 14.857 29.572 15.635 30.395 16.237 30.398 16.31 29.677 17.824 28.747 19.774 28.747 19.792 29.777 19.792 30.72 19.792 31.622 21.098 31.165 21.8 30.575 22.708 25.029 24.862 25.058 24.173ZM13.804 17.441L14.796 16.386 13.34 15.75C11.986 15.16 11.96 15.112 12.963 15.066 13.573 15.039 14.379 14.554 14.817 13.952 15.584 12.899 15.581 12.887 14.541 12.887 13.963 12.887 13.031 12.505 12.471 12.038L11.452 11.19 13.394 11.17C14.462 11.16 16.064 11.031 16.954 10.884 18.402 10.644 18.573 10.714 18.573 11.536 18.573 12.042 18.358 12.456 18.096 12.456 17.833 12.456 17.013 12.966 16.272 13.589L14.925 14.722 16.749 14.414C19.436 13.96 19.135 15.007 16.026 16.925 13.051 18.762 12.427 18.907 13.804 17.441ZM15.976 8.597C17.462 7.365 17.47 7.341 16.664 6.451 16.216 5.956 16.026 5.528 16.24 5.501 18.057 5.27 19.868 6.416 19.868 7.797 19.868 8.739 17.555 9.873 15.674 9.855L14.474 9.843 15.976 8.597Z" fill="#fecfcf"/>
    <path d="M19.1 46.078C17.241 45.723 14.689 44.236 14.689 43.508 14.689 43.293 15.272 43.233 15.984 43.376 17.41 43.661 17.577 43.31 16.617 42.042 15.596 40.692 15.811 38.05 17.043 36.818 17.882 35.98 18.546 35.759 20.233 35.759 22.437 35.759 22.888 35.386 22.888 33.566 22.888 32.579 21.838 32.506 20.299 33.386 18.753 34.269 16.266 34.197 15.403 33.244 14.334 32.062 14.503 31.875 16.645 31.875 17.72 31.875 19.298 31.584 20.15 31.228 23.527 29.817 25.312 30.942 24.94 34.245 24.818 35.322 24.89 36.31 25.098 36.439 26.414 37.252 23.502 41.396 20.613 42.82L19.22 43.507 20.435 43.517C21.104 43.522 22.013 43.333 22.457 43.095 23.577 42.495 25.477 43.27 25.477 44.327 25.477 45.723 22.097 46.652 19.1 46.078ZM20.604 39.855C21.141 38.908 21.583 37.768 21.587 37.323 21.593 36.643 21.375 36.558 20.22 36.789 19.464 36.94 18.493 37.383 18.062 37.773 16.642 39.059 17.336 42.019 18.984 41.702 19.338 41.633 20.067 40.802 20.604 39.855ZM23.701 29.069C22.227 28.269 21.923 26.603 22.668 23.417 23.038 21.837 23.111 20.715 22.86 20.461 22.638 20.235 22.457 19.662 22.457 19.188 22.457 18.06 22.02 18.53 20.112 21.708 19.188 23.247 18.572 24.834 18.572 25.676 18.572 26.526 18.174 27.543 17.565 28.252 15.829 30.27 14.836 28.469 16.215 25.804 16.815 24.644 16.812 24.498 16.187 24.259 14.949 23.784 13.373 24.909 12.494 26.897 11.567 28.991 10.944 29.597 10.34 28.993 9.712 28.365 10.603 26.019 12.554 23.16 13.83 21.292 14.119 20.622 13.549 20.855 11.827 21.562 11.29 21.568 9.992 20.897 8.099 19.917 8.32 19.36 10.602 19.36 11.716 19.36 13.66 18.896 15.121 18.281 16.531 17.688 17.981 17.203 18.344 17.203 19.398 17.203 19.131 18.803 18.031 19.079 17.496 19.214 16.316 20.318 15.409 21.532 14.062 23.337 13.94 23.645 14.746 23.214 15.288 22.924 16.276 22.702 16.94 22.721 17.846 22.747 18.305 22.452 18.774 21.547 19.117 20.882 20.112 19.404 20.984 18.262 22.534 16.232 22.573 16.087 22.789 11.526 22.981 7.474 22.917 6.829 22.302 6.593 21.352 6.229 21.397 5.119 22.361 5.119 22.783 5.119 23.575 5.433 24.121 5.815 24.957 6.4 25.093 6.825 24.973 8.472 24.835 10.365 24.881 10.449 26.312 10.933 29.235 11.922 29.082 13.258 25.808 15.325 24.434 16.192 24.183 16.584 24.183 17.861 24.183 18.692 24.419 19.749 24.707 20.211 25.129 20.886 25.087 21.451 24.489 23.117 23.617 25.549 23.556 26.76 24.269 27.473 24.979 28.183 27.776 28.124 29.599 27.363 31.065 26.75 31.097 26.687 30.819 24.881L30.533 23.028 32.213 24.74C34.038 26.598 34.092 26.962 32.693 27.971 30.299 29.695 25.853 30.238 23.701 29.069ZM25.623 11.947C24.764 10.997 24.801 10.962 24.477 13.054L24.218 14.731 25.278 13.734C26.274 12.799 26.295 12.689 25.623 11.947ZM26.705 22.932C28.026 21.794 28.087 21.64 27.423 21.089 26.893 20.649 26.776 20.136 26.987 19.169 27.145 18.444 27.273 17.219 27.27 16.447 27.264 14.79 28.333 14.533 29.567 15.897 30.286 16.691 30.29 16.822 29.634 17.824 28.689 19.266 28.746 19.706 29.901 19.87 30.612 19.97 30.871 20.296 30.871 21.086 30.871 22.234 29.171 23.343 26.556 23.898L25.262 24.173 26.705 22.932ZM13.718 17.816C14.89 16.948 14.988 15.908 13.898 15.908 11.946 15.908 12.723 15.23 15.2 14.772 19.712 13.937 19.595 14.983 14.905 17.416 13.718 18.031 13.184 18.212 13.718 17.816ZM14.853 13.807C15.547 13.04 15.524 12.989 14.381 12.755 13.719 12.62 12.791 12.209 12.315 11.842 11.503 11.212 11.578 11.173 13.61 11.159 14.797 11.15 16.331 11.099 17.02 11.044 18.927 10.894 18.799 11.716 16.678 13.239 14.534 14.779 13.755 15.021 14.853 13.807ZM15.983 8.657C17.199 7.604 17.389 7.24 16.955 6.795 16.198 6.018 16.283 5.551 17.182 5.551 18.337 5.551 19.868 6.786 19.868 7.718 19.868 8.735 18.821 9.323 16.361 9.687L14.473 9.967 15.983 8.657Z" fill="#feb0b0"/>
    <path d="M16.665 45.138C14.625 43.977 14.062 42.921 15.701 43.333 17.329 43.741 17.823 43.208 16.781 42.166 16.053 41.438 15.924 40.902 16.101 39.332 16.393 36.745 17.215 36.029 20.202 35.763L22.672 35.543 22.809 33.887C22.937 32.331 22.884 32.249 21.946 32.539 21.396 32.709 20.422 33.114 19.781 33.44 18.253 34.217 16.832 34.19 15.648 33.361 14.212 32.355 14.482 31.875 16.485 31.875 17.473 31.875 19.305 31.553 20.555 31.158 22.699 30.483 22.895 30.485 23.992 31.204 25.063 31.906 25.136 32.134 24.907 34.067 24.77 35.222 24.842 36.28 25.067 36.42 26.418 37.254 23.417 41.551 20.696 42.678 19.056 43.358 19.664 44.178 21.336 43.543 23.03 42.899 24.422 42.991 25.087 43.793 25.583 44.389 25.522 44.605 24.661 45.303 23.178 46.503 18.908 46.416 16.664 45.138ZM20.604 39.855C21.141 38.908 21.583 37.768 21.587 37.323 21.593 36.643 21.375 36.558 20.22 36.789 17.669 37.299 16.416 39.268 17.583 40.933 18.481 42.216 19.466 41.864 20.604 39.855ZM24.436 29.267C23.744 29.06 23.018 28.64 22.824 28.333 22.324 27.547 22.372 24.048 22.902 22.527 23.232 21.582 23.197 20.893 22.768 19.873L22.188 18.496 21.301 19.696C19.791 21.738 18.573 24.446 18.573 25.758 18.573 26.448 18.177 27.515 17.693 28.129 16.049 30.219 14.794 28.292 16.199 25.833 17.047 24.351 16.999 24.107 15.864 24.107 14.356 24.107 12.972 25.309 12.078 27.394 11.177 29.497 10.374 29.87 10.374 28.186 10.374 26.873 11.25 25.061 13.244 22.256L14.712 20.189 13.427 20.854C11.675 21.76 11.053 21.694 9.642 20.453L8.432 19.388 10.43 19.374C11.53 19.366 13.718 18.874 15.295 18.281 16.871 17.688 18.351 17.203 18.583 17.203 19.477 17.203 18.947 18.505 17.813 19.091 17.159 19.43 15.966 20.621 15.163 21.739 14.01 23.345 13.891 23.671 14.599 23.292 15.092 23.028 16.075 22.812 16.783 22.812 17.81 22.812 18.269 22.485 19.047 21.194 19.584 20.304 20.603 18.827 21.313 17.912 22.513 16.362 22.616 15.935 22.803 11.752 22.975 7.878 22.897 7.139 22.239 6.412 21.54 5.64 21.536 5.546 22.186 5.297 22.576 5.147 23.404 5.357 24.026 5.765 25.051 6.437 25.133 6.694 24.916 8.533L24.676 10.561 26.479 11.185C28.961 12.043 28.893 13.145 26.256 14.829 24.434 15.993 24.227 16.289 24.206 17.77 24.194 18.676 24.391 19.806 24.646 20.28 24.99 20.926 24.936 21.648 24.429 23.134 23.56 25.686 23.562 27.394 24.434 27.729 25.622 28.185 28.041 28.014 29.599 27.363 31.061 26.752 31.096 26.683 30.814 24.923L30.524 23.113 32.272 24.797 34.019 26.481 32.792 27.641C30.846 29.481 27.397 30.153 24.436 29.267ZM25.677 11.845C24.91 11.28 24.804 11.31 24.55 12.162 24.395 12.68 24.25 13.487 24.226 13.956 24.188 14.72 24.306 14.686 25.353 13.639 26.499 12.493 26.506 12.456 25.677 11.845ZM26.772 22.872C28.217 21.639 28.247 21.556 27.464 20.97 26.831 20.497 26.717 20.075 26.96 19.104 27.134 18.414 27.308 17.27 27.347 16.561 27.434 15.024 28.452 14.665 29.487 15.808 30.159 16.551 30.152 16.703 29.377 18.148L28.549 19.694 29.849 19.954C32.63 20.51 30.559 22.976 26.556 23.871L25.262 24.161 26.772 22.871ZM14.318 17.235C15.124 16.577 15.201 16.361 14.689 16.197 12.097 15.371 12.503 15.121 17.448 14.5 19.084 14.295 18.522 15.305 16.242 16.669 13.619 18.238 12.789 18.482 14.318 17.235ZM14.689 14.295C14.689 14.09 14.922 13.69 15.207 13.405 15.61 13.002 15.567 12.887 15.011 12.887 14.084 12.887 12.1 11.98 12.1 11.557 12.1 11.375 12.925 11.217 13.934 11.205 14.943 11.193 16.331 11.129 17.02 11.064 18.94 10.882 18.795 11.718 16.64 13.266 15.567 14.036 14.689 14.499 14.689 14.295ZM15.937 8.705C17.232 7.594 17.342 7.34 16.893 6.5 16.456 5.684 16.495 5.55 17.167 5.55 18.217 5.55 19.867 6.746 19.867 7.507 19.867 8.362 18.246 9.317 16.199 9.667L14.473 9.961 15.937 8.705Z" fill="#fe8f8f"/>
    <path d="M16.664 45.162C14.382 43.83 14.169 43.065 16.171 43.39 17.932 43.676 18.061 43.436 16.847 42.133 15.818 41.029 15.737 39.213 16.639 37.47 17.319 36.154 18.037 35.852 20.946 35.658 22.613 35.548 22.677 35.486 22.809 33.887 22.937 32.331 22.884 32.249 21.946 32.539 21.396 32.709 20.422 33.114 19.781 33.44 17.789 34.454 15.121 33.92 15.121 32.507 15.121 32.052 15.634 31.873 16.955 31.869 17.963 31.865 19.635 31.568 20.67 31.207 23.803 30.117 25.379 31.347 24.875 34.496 24.726 35.426 24.8 36.254 25.045 36.406 26.358 37.216 23.896 40.89 20.992 42.454 19.151 43.445 18.942 44.182 20.622 43.762 23.542 43.032 24.45 43.025 25.033 43.727 26.069 44.975 24.625 45.851 21.269 46.011 18.854 46.126 18.068 45.981 16.664 45.162ZM20.704 39.695C21.409 38.299 21.864 37.037 21.718 36.89 21.305 36.477 20.018 36.572 18.857 37.101 16.403 38.219 16.584 41.927 19.107 42.198 19.281 42.217 20 41.09 20.704 39.695ZM25.046 29.424C22.569 28.927 21.824 26.619 22.895 22.764 23.219 21.596 23.178 20.847 22.729 19.779L22.129 18.354 20.552 20.73C19.562 22.221 18.844 23.928 18.625 25.315 18.233 27.798 17.557 28.855 16.362 28.855 15.375 28.855 15.297 27.412 16.199 25.833 17.071 24.309 17.004 24.107 15.627 24.107 14.196 24.107 12.896 25.365 11.947 27.667 11.181 29.529 10.374 29.794 10.374 28.186 10.374 26.858 11.275 25.016 13.264 22.283L14.748 20.243 13.177 20.899C11.412 21.637 10.415 21.461 9.285 20.212 8.527 19.376 8.55 19.36 10.513 19.36 11.612 19.36 13.799 18.876 15.372 18.284 16.944 17.692 18.405 17.314 18.618 17.446 19.313 17.876 19.026 18.464 17.814 19.091 17.159 19.43 15.966 20.621 15.163 21.739 13.941 23.441 13.857 23.689 14.649 23.266 15.169 22.987 16.113 22.82 16.746 22.894 17.755 23.012 18.189 22.601 20.248 19.576L22.599 16.124 22.793 11.681C22.956 7.965 22.871 7.11 22.273 6.448 21.681 5.795 21.661 5.618 22.161 5.426 22.493 5.298 23.229 5.431 23.798 5.72 24.7 6.18 24.819 6.52 24.744 8.401L24.658 10.555 26.47 11.182C28.958 12.042 28.896 13.141 26.265 14.829 23.878 16.361 23.353 17.769 24.41 19.813 25.073 21.096 25.073 21.323 24.409 23.063 24.016 24.092 23.756 25.573 23.831 26.355 23.964 27.742 24.02 27.778 26.212 27.905 27.662 27.989 28.935 27.788 29.805 27.337 31.08 26.678 31.138 26.543 30.853 24.856L30.551 23.071 32.155 24.771C33.933 26.657 33.861 27.238 31.69 28.504 30.348 29.286 26.806 29.777 25.046 29.424ZM26.327 12.667C26.335 12.427 25.972 12.001 25.522 11.72 24.822 11.283 24.666 11.347 24.449 12.156 24.309 12.676 24.192 13.452 24.189 13.878 24.183 14.624 24.223 14.624 25.249 13.878 25.834 13.452 26.319 12.907 26.327 12.668ZM26.772 22.86C28.134 21.656 28.208 21.48 27.527 21.069 26.627 20.525 26.586 19.537 27.399 18.067 27.83 17.288 27.867 16.834 27.532 16.43 26.795 15.543 27.756 14.848 28.884 15.452 29.946 16.02 30.053 17.125 29.159 18.307 28.268 19.486 28.331 19.651 29.793 19.943 30.733 20.131 31.088 20.447 31.088 21.1 31.088 21.978 29.228 23.071 26.341 23.89 25.366 24.165 25.407 24.066 26.772 22.86ZM14.365 17.35C15.385 16.185 15.339 16.067 13.718 15.686 12.335 15.36 12.345 15.351 14.473 15.03 15.66 14.85 16.951 14.573 17.343 14.413 18.9 13.778 18.48 15.066 16.748 16.239 13.931 18.147 13.488 18.353 14.365 17.351ZM14.689 14.27C14.689 14.08 14.902 13.71 15.163 13.449 15.508 13.104 15.28 12.896 14.33 12.687 13.61 12.529 12.82 12.156 12.572 11.857 12.222 11.435 12.574 11.304 14.16 11.267 15.282 11.241 16.685 11.157 17.278 11.082 18.903 10.876 18.588 11.794 16.523 13.29 15.514 14.02 14.689 14.462 14.689 14.27ZM16.264 8.505C17.299 7.425 17.394 7.129 16.938 6.399 16.485 5.675 16.52 5.551 17.178 5.551 18.193 5.551 19.868 6.742 19.868 7.464 19.868 8.351 18.722 9.092 16.808 9.442L15.059 9.762 16.264 8.505Z" fill="#fe6f6f"/>
    <path d="M16.876 45.16C14.463 43.868 14.201 43.212 16.192 43.444 17.936 43.648 18.049 43.423 16.847 42.133 15.818 41.029 15.737 39.213 16.639 37.47 17.319 36.154 18.037 35.852 20.946 35.658 22.606 35.548 22.678 35.48 22.806 33.925 22.962 32.051 22.666 31.962 20.299 33.17 18.349 34.165 16.95 34.248 15.876 33.432 14.588 32.455 15.031 31.963 17.386 31.752 18.632 31.642 20.34 31.362 21.181 31.131 24.101 30.331 25.677 32.033 24.675 34.908 24.304 35.973 24.337 36.277 24.845 36.472 25.193 36.605 25.478 37.092 25.478 37.552 25.478 38.637 21.571 42.545 20.122 42.908 19.507 43.063 19.004 43.383 19.004 43.621 19.004 44.031 19.926 43.958 23.129 43.295 24.074 43.099 24.614 43.222 25.034 43.727 26.03 44.928 24.634 45.832 21.491 46.021 19.271 46.154 18.447 46.001 16.876 45.16ZM20.831 39.608C21.48 38.322 22.014 37.124 22.018 36.946 22.03 36.396 19.889 36.589 18.604 37.253 16.651 38.263 16.297 39.956 17.737 41.396 18.957 42.616 19.462 42.323 20.831 39.608ZM25.261 29.394C22.584 29.021 21.766 26.728 22.928 22.85 23.296 21.623 23.265 20.946 22.788 19.779L22.178 18.281 20.526 20.769C19.474 22.354 18.748 24.053 18.527 25.449 18.137 27.922 17.543 28.854 16.362 28.854 15.377 28.854 15.316 27.808 16.202 26.108 17.101 24.385 17.021 24.108 15.627 24.108 14.196 24.108 12.896 25.365 11.947 27.668 11.155 29.591 10.374 29.779 10.374 28.047 10.374 27.289 11.208 25.529 12.523 23.515 13.705 21.705 14.569 20.223 14.443 20.223 14.317 20.223 13.653 20.514 12.966 20.869 11.626 21.562 10.126 21.27 9.184 20.135 8.761 19.625 9.01 19.52 10.713 19.494 11.886 19.476 13.913 18.972 15.501 18.304 17.301 17.545 18.401 17.29 18.678 17.567 19.204 18.093 18.732 18.929 17.91 18.929 17.247 18.929 13.655 23.218 14.017 23.579 14.137 23.699 14.521 23.563 14.868 23.274 15.216 22.986 16.046 22.813 16.713 22.889 17.798 23.014 18.172 22.667 20.273 19.576L22.622 16.124 22.889 11.808C23.131 7.898 23.076 7.402 22.299 6.522L21.443 5.551 22.798 5.551C24.498 5.551 25.214 6.734 24.842 8.934 24.578 10.496 24.607 10.538 26.423 11.167 28.978 12.052 28.991 12.942 26.473 14.655 25.333 15.432 24.256 16.274 24.082 16.527 23.549 17.3 23.715 19.117 24.41 20.108 25.007 20.961 24.986 21.291 24.185 23.668 23.167 26.692 23.455 27.763 25.405 28.191 27.035 28.549 31.353 27.119 31.169 26.282 31.094 25.946 30.923 25.119 30.789 24.444L30.543 23.217 32.158 24.832C33.368 26.042 33.673 26.614 33.372 27.112 32.455 28.627 28.252 29.81 25.262 29.394ZM26.341 12.637C26.341 11.971 24.866 11.053 24.455 11.464 24.305 11.614 24.183 12.388 24.183 13.184 24.183 14.631 24.185 14.632 25.262 13.926 25.855 13.537 26.341 12.957 26.341 12.636ZM26.819 22.858C28.141 21.643 28.209 21.469 27.527 21.062 26.603 20.511 26.573 19.702 27.418 18.069 27.825 17.281 27.905 16.722 27.634 16.554 26.836 16.061 27.196 15.476 28.296 15.476 29.668 15.476 30.08 16.481 29.324 17.986 29.004 18.623 28.671 19.29 28.584 19.468 28.497 19.646 28.792 19.792 29.239 19.792 30.19 19.792 31.088 20.579 31.088 21.412 31.088 21.957 28.785 23.172 26.388 23.894 25.478 24.167 25.528 24.045 26.819 22.858ZM14.365 17.334C15.385 16.19 15.338 16.067 13.718 15.684 12.378 15.365 12.422 15.336 14.689 15.034 15.994 14.861 17.257 14.647 17.494 14.558 17.731 14.47 18.023 14.567 18.141 14.774 18.26 14.981 17.289 15.832 15.984 16.666 14.624 17.534 13.932 17.819 14.365 17.334ZM15.088 13.574C15.499 13.078 15.353 12.912 14.308 12.682 12.005 12.177 11.935 11.386 14.186 11.296 15.293 11.252 16.666 11.156 17.235 11.081 18.909 10.861 18.733 11.803 16.87 13.036 14.95 14.306 14.323 14.496 15.088 13.573ZM16.432 8.338C17.306 7.408 17.382 7.112 16.935 6.396 16.485 5.676 16.521 5.551 17.179 5.551 18.211 5.551 19.868 6.747 19.868 7.493 19.868 8.378 18.131 9.435 16.675 9.435L15.402 9.435 16.432 8.338Z" fill="#fe5050"/>
    <path d="M17.419 45.42C16.665 45.049 15.749 44.413 15.381 44.008 14.763 43.325 14.824 43.284 16.212 43.446 17.962 43.651 18.022 43.483 16.792 41.819 14.78 39.098 17.048 35.551 20.619 35.835 22.371 35.975 22.482 35.912 22.936 34.535 23.666 32.323 22.985 32.005 20.084 33.208 17.867 34.126 17.545 34.161 16.526 33.586 14.751 32.585 14.719 31.718 16.468 31.976 17.27 32.094 18.678 31.926 19.598 31.601 20.518 31.277 21.93 31.012 22.736 31.012 24.639 31.012 25.416 32.436 24.731 34.669 24.371 35.844 24.401 36.266 24.875 36.659 25.207 36.934 25.478 37.35 25.478 37.584 25.478 38.521 22.811 41.29 20.966 42.269 19.887 42.841 19.004 43.456 19.004 43.634 19.004 44.125 20.707 44.023 22.337 43.434 24.846 42.526 26.493 44.274 24.232 45.444 22.57 46.303 19.184 46.291 17.418 45.421ZM20.452 40.398C21.031 39.389 21.643 38.098 21.814 37.53 22.114 36.526 22.069 36.503 20.244 36.747 17.209 37.154 15.894 39.553 17.71 41.369 18.93 42.589 19.263 42.471 20.452 40.399ZM25.478 29.36C22.915 29.12 22.306 28.21 22.679 25.186 23.099 21.79 23.07 19.608 22.594 18.758 22.282 18.201 21.898 18.539 20.595 20.518 19.708 21.864 18.885 23.466 18.768 24.076 18.164 27.2 17.475 28.641 16.523 28.776 15.373 28.94 15.243 27.936 16.199 26.265 17.419 24.13 16.603 23.315 14.341 24.411 13.424 24.855 12.683 25.744 12.034 27.181 11.454 28.464 10.921 29.143 10.682 28.903 10.011 28.233 10.757 26.174 12.734 23.248 13.774 21.708 14.559 20.381 14.478 20.3 14.398 20.22 13.939 20.363 13.46 20.62 12.083 21.357 10.153 21.172 9.292 20.22 8.522 19.369 8.53 19.358 9.804 19.613 10.68 19.788 12.312 19.45 14.832 18.571 16.904 17.848 18.672 17.447 18.809 17.668 19.147 18.214 18.649 18.928 17.929 18.928 17.603 18.928 16.603 19.851 15.708 20.978 13.008 24.378 13.036 24.315 14.612 23.5 15.4 23.092 16.49 22.817 17.034 22.889 17.844 22.995 18.453 22.389 20.386 19.549L22.749 16.079 23.008 11.498C23.256 7.125 23.224 6.886 22.323 6.256L21.378 5.596 22.534 5.573C24.366 5.538 25.133 6.621 24.808 8.787L24.531 10.63 26.407 11.255C29.061 12.139 29.002 12.975 26.152 14.868 24.088 16.238 23.752 16.651 23.752 17.815 23.752 18.559 24.034 19.572 24.38 20.065 24.939 20.863 24.906 21.276 24.086 23.799 23.031 27.043 23.291 27.785 25.637 28.225 27.102 28.5 31.345 27.155 31.251 26.447 31.222 26.228 31.065 25.467 30.901 24.755L30.605 23.46 32.195 25.032C33.073 25.9 33.652 26.819 33.488 27.085 32.621 28.487 28.538 29.647 25.478 29.36ZM26.219 13.012C26.464 12.374 25.359 11.161 24.532 11.161 24.34 11.161 24.183 11.945 24.183 12.902 24.183 14.526 24.243 14.612 25.07 14.169 25.559 13.907 26.076 13.387 26.22 13.012ZM27.234 22.565C28.196 21.541 28.219 21.421 27.524 21.033 26.594 20.513 26.574 19.702 27.447 18.013 27.973 16.996 28.008 16.573 27.61 16.093 27.188 15.585 27.3 15.476 28.243 15.476 29.745 15.476 30.114 16.542 29.168 18.144 28.754 18.846 28.482 19.464 28.564 19.519 28.647 19.573 29.248 19.846 29.901 20.127 31.611 20.861 31.37 21.864 29.254 22.824 26.646 24.008 25.961 23.92 27.234 22.565ZM14.581 17.185C15.396 16.299 15.249 16.041 13.757 15.743 11.888 15.369 12.251 15.211 15.767 14.868 18.363 14.614 18.697 14.658 18.141 15.174 17.213 16.036 13.935 17.888 14.581 17.185ZM15.226 13.671C15.435 13.123 15.199 12.878 14.263 12.672 13.581 12.522 12.824 12.162 12.583 11.87 12.245 11.463 12.492 11.38 13.641 11.514 14.465 11.61 15.729 11.445 16.449 11.147 17.503 10.71 17.859 10.712 18.273 11.153 18.673 11.578 18.665 11.746 18.233 11.903 17.928 12.015 17.063 12.622 16.313 13.252 15.372 14.042 15.034 14.172 15.226 13.672ZM16.4 8.399C17.303 7.415 17.384 7.113 16.935 6.396 16.337 5.436 16.752 5.33 18.313 6.041 20.547 7.059 19.854 8.857 17.061 9.29L15.336 9.557 16.4 8.399Z" fill="#fe2f2f"/>
    <path d="M17.439 45.289C14.998 44.179 14.689 43.527 16.605 43.527 18.395 43.527 18.495 43.304 17.177 42.237 15.714 41.052 15.897 38.102 17.52 36.707 18.52 35.846 19.06 35.702 20.623 35.877 22.328 36.07 22.556 35.987 22.918 35.034 23.929 32.374 22.882 31.758 19.8 33.201 17.832 34.123 17.54 34.157 16.522 33.584 15.908 33.237 15.316 32.684 15.208 32.356 15.052 31.888 15.344 31.821 16.553 32.048 17.561 32.237 18.646 32.108 19.682 31.675 20.554 31.31 21.928 31.012 22.736 31.012 24.548 31.012 25.29 32.435 24.662 34.708 24.36 35.802 24.411 36.274 24.87 36.655 25.204 36.933 25.478 37.338 25.478 37.557 25.478 38.292 21.573 42.137 20.283 42.671 19.58 42.961 19.004 43.371 19.004 43.579 19.004 44.12 20.925 44.048 22.221 43.458 23.046 43.081 23.589 43.079 24.399 43.448 25.879 44.123 25.751 44.751 23.981 45.491 21.958 46.336 19.585 46.263 17.439 45.288ZM20.829 39.853C22.372 37.03 22.339 36.623 20.573 36.623 17.599 36.623 15.81 39.508 17.575 41.459 18.665 42.664 19.523 42.241 20.828 39.853ZM23.319 28.423C22.363 27.466 22.229 25.95 22.902 23.673 23.363 22.11 23.057 18.066 22.477 18.066 22.086 18.066 19.419 22.082 18.668 23.804 18.378 24.468 18.141 25.5 18.141 26.098 18.141 27.655 17.384 28.854 16.4 28.854 15.37 28.854 15.35 28.512 16.258 26.246 17.204 23.88 16.61 23.217 14.462 24.241 13.359 24.767 12.699 25.514 12.1 26.913 11.281 28.823 10.374 29.493 10.374 28.19 10.374 27.243 11.991 24.175 13.504 22.253 14.886 20.498 14.868 19.866 13.46 20.62 12.166 21.313 10.593 21.187 9.502 20.303L8.535 19.52 10.009 19.693C10.863 19.793 12.565 19.466 14.057 18.915 17.208 17.753 19.004 17.402 19.004 17.947 19.004 18.174 18.531 18.574 17.953 18.837 16.883 19.325 13.206 23.631 13.558 23.983 13.664 24.089 14.252 23.848 14.864 23.447 15.551 22.997 16.378 22.818 17.023 22.98 17.929 23.207 18.254 22.94 19.457 20.978 20.221 19.732 21.278 18.197 21.806 17.566 22.61 16.606 22.816 15.666 23.077 11.76 23.345 7.77 23.291 7.029 22.707 6.602 21.793 5.933 21.847 5.551 22.857 5.551 24.38 5.551 25.112 6.756 24.811 8.764L24.538 10.584 26.54 11.347C27.64 11.767 28.47 12.335 28.382 12.607 28.294 12.88 27.217 13.858 25.987 14.782 24.007 16.268 23.753 16.639 23.765 18.018 23.773 18.875 24.045 19.928 24.371 20.357 24.879 21.027 24.846 21.47 24.141 23.475 23.094 26.455 23.109 26.932 24.279 27.751 25.558 28.647 27.453 28.584 29.679 27.574 31.386 26.799 31.489 26.654 31.237 25.395L30.967 24.046 32.373 25.33C33.222 26.105 33.653 26.82 33.459 27.132 32.212 29.15 24.969 30.072 23.319 28.422ZM25.887 11.919C24.466 10.769 24.183 10.979 24.183 13.184L24.183 15.206 25.503 13.942 26.823 12.677 25.887 11.919ZM27.415 22.639L28.705 21.607 27.681 20.778C26.667 19.958 26.664 19.934 27.412 18.358 28.021 17.076 28.064 16.64 27.633 16.121 27.181 15.577 27.277 15.476 28.243 15.476 29.747 15.476 30.113 16.543 29.163 18.153 28.366 19.501 28.577 20.037 30.003 20.294 31.711 20.602 31.215 21.788 28.978 22.751 26.206 23.943 25.819 23.916 27.415 22.639ZM14.812 16.884C15.563 16.044 15.547 16.014 14.165 15.688 12.86 15.381 12.969 15.326 15.533 15 17.065 14.806 18.385 14.713 18.467 14.795 18.549 14.877 17.587 15.575 16.329 16.345 14.795 17.285 14.296 17.462 14.812 16.884ZM15.692 13.441C15.837 13.207 15.136 12.756 14.135 12.44L12.315 11.864 14.473 11.561C15.66 11.395 16.898 11.188 17.224 11.101 18.394 10.793 18.13 11.871 16.792 12.859 16.042 13.414 15.547 13.675 15.692 13.441ZM16.695 8.331C17.755 7.271 17.768 7.194 17.04 6.389 16.077 5.325 17.037 5.214 18.477 6.223 20.357 7.54 19.137 9.435 16.407 9.435 15.682 9.435 15.715 9.311 16.695 8.331Z" fill="#fe0303"/>
</g>
</g>
</svg>
`;