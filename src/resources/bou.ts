import { svg } from "lit/static-html.js";

export const bou = svg`
<svg xmlns="http://www.w3.org/2000/svg" width="52.157" height="60" viewBox="0 0 52.157 60">
<!--
Created by Hari Seldon and modified by orangain, licensed under Creative Commons Attribution-Share Alike 3.0 Unported.
See: https://creativecommons.org/licenses/by-sa/3.0/deed.en

Original file is available at: https://commons.wikimedia.org/wiki/File:Shogi_gyokusho(svg).svg
-->
<filter id="drop-shadow">
    <feGaussianBlur in="SourceAlpha" result="blur" stdDeviation="2" />
    <feOffset result="offsetBlur" dx="2" dy="2" />
    <feBlend in="SourceGraphic" in2="offsetBlur" mode="normal" />
</filter>
<g filter="url(#drop-shadow)" transform="translate(5 5)">
    <path d="M20.915 1.05c-4.319 1 -8.69 2.088 -12.838 3.608 -1.492 6.331 -2.103 12.88 -3.191 19.305 -1.285 8.332 -2.439 16.689 -3.86 24.997 4.847 0.346 10 0.05 14.963 0.148l24.971 0c-0.585 -5.657 -1.718 -11.523 -2.502 -17.26 -1.462 -8.96 -2.486 -18.012 -4.288 -26.903 -0.885 -1.093 -2.799 -0.957 -4.037 -1.564 -3.053 -0.81 -6.099 -1.875 -9.218 -2.332z" fill="#FEEC99"/>
    <path d="M29.645 44.757C28.985 43.931 27.583 42.855 26.529 42.367L24.611 41.481 27.624 41.359 30.636 41.237 30.636 39.645C30.636 38.769 30.528 37.511 30.396 36.85 30.171 35.726 30.042 35.656 28.422 35.777 27.469 35.849 26.278 35.994 25.775 36.099L24.861 36.291 25.895 37.325C26.752 38.182 26.851 38.505 26.472 39.212 25.889 40.302 24.417 40.858 22.115 40.858 19.671 40.858 19.429 40.23 21.595 39.508 23.4 38.907 23.871 38.208 23.187 37.144 22.873 36.654 22.449 36.629 20.825 37 18.452 37.543 17.102 37.134 16.435 35.67 15.811 34.301 16.195 33.978 17.703 34.603 18.951 35.12 20.769 35.025 26.793 34.128 29.548 33.718 30.331 33.336 29.487 32.814 29.312 32.706 28.183 32.874 26.977 33.186 25.772 33.499 24.56 33.686 24.283 33.601 24.006 33.516 23.228 33.325 22.555 33.176 20.956 32.822 21.719 32.32 24.819 31.684 27.451 31.144 30.221 29.735 30.221 28.937 30.221 28.154 29.741 28.249 27.313 29.507 25.664 30.363 24.998 30.522 24.47 30.185 23.927 29.839 23.488 30 22.41 30.942 21.296 31.915 20.888 32.058 20.228 31.705 18.926 31.008 19.269 30.035 21.598 27.816 23.522 25.984 23.675 25.72 22.896 25.588 22.41 25.505 21.583 24.98 21.058 24.421L20.103 23.404 22.357 23.394C23.704 23.389 25.347 23.052 26.44 22.556 28.466 21.636 29.576 21.784 30.26 23.061 30.912 24.281 30.297 24.685 27.39 24.948 24.977 25.168 24.879 25.221 24.91 26.308 24.927 26.93 24.81 27.654 24.648 27.915 24.218 28.611 25.748 28.511 26.713 27.781 28.4 26.505 32.714 27.386 32.714 29.006 32.714 29.318 32.23 30.149 31.638 30.852 30.786 31.865 30.702 32.131 31.236 32.131 31.606 32.131 32.025 32.431 32.166 32.799 32.375 33.344 32.805 33.417 34.486 33.194 36.776 32.89 38.116 33.617 38.116 35.161 38.116 35.926 37.924 35.966 35.442 35.711L32.767 35.438 33.157 36.794C33.727 38.781 33.648 45.16 33.047 45.761 32.141 46.667 30.87 46.291 29.645 44.757ZM10.79 43.477C10.045 42.193 9.53 41.047 9.645 40.932 9.823 40.755 10.361 40.964 12.418 42.009 12.732 42.169 13.387 35.936 13.088 35.637 12.979 35.529 12.162 35.771 11.271 36.175 9.828 36.83 9.645 37.08 9.604 38.453 9.548 40.341 8.462 42.104 7.355 42.104 6.288 42.104 6.288 40.817 7.354 38.468 8.124 36.772 8.125 36.702 7.395 36.702 6.515 36.702 5.931 36.074 5.498 34.667 5.222 33.769 5.288 33.699 6.175 33.957 8.669 34.679 9.873 34.687 11.692 33.993 13.05 33.474 13.598 33.033 13.598 32.46 13.598 31.678 13.567 31.68 12.503 32.516 11.117 33.606 9.269 33.619 8.196 32.546 6.928 31.278 7.151 30.806 8.866 31.128L10.366 31.409 10.074 29.589C9.914 28.587 9.519 27.559 9.197 27.306 8.336 26.627 8.48 26.313 9.65 26.313 10.222 26.313 11.063 26.687 11.52 27.144 11.978 27.601 12.352 28.443 12.352 29.014 12.352 30.145 12.387 30.173 13.357 29.801 14.297 29.44 14.196 27.224 13.2 26.379 12.753 26 12.26 25.155 12.105 24.501 11.828 23.335 11.849 23.319 13.23 23.611 16.213 24.243 17.174 26.433 16.061 30.056 15.816 30.854 15.461 34.219 15.272 37.533 15.083 40.847 14.692 44.073 14.405 44.702 13.545 46.574 12.351 46.17 10.79 43.478ZM12.929 20.503C11.723 20.016 10.154 17.955 10.628 17.482 10.854 17.255 11.649 17.282 12.614 17.55 13.498 17.796 15.297 17.998 16.611 18L19.001 18.002 19.001 16.112 19.001 14.224 17.651 14.464C16.697 14.634 15.902 14.458 14.949 13.866 12.929 12.612 13.273 12.184 16.299 12.184L19.001 12.184 19.001 10.704C19.001 9.79 18.836 9.327 18.57 9.492 17.736 10.007 14.884 9.2 13.837 8.153 12.671 6.987 12.781 6.122 14.012 6.78 15.212 7.423 21.085 7.274 23.564 6.538 25.98 5.82 27.728 6.184 27.728 7.405 27.728 8.185 26.488 8.727 23.958 9.056 22.128 9.294 22.065 9.349 22.239 10.541 22.456 12.019 22.899 12.369 23.867 11.827 24.638 11.396 26.897 12.278 26.897 13.011 26.897 13.573 25.296 14.349 24.787 14.034 24.55 13.888 23.92 13.877 23.387 14.011 22.642 14.198 22.377 14.605 22.241 15.763L22.065 17.273 25.555 16.989C29.393 16.678 31.052 17.237 31.052 18.843 31.052 19.628 30.77 19.663 24.922 19.617 20.214 19.58 18.372 19.724 16.975 20.24 14.964 20.981 14.23 21.03 12.929 20.503ZM29.853 14.83C29.37 14.491 28.974 14.009 28.974 13.758 28.974 13.507 28.492 12.668 27.902 11.895L26.829 10.489 28.006 10.77C29.631 11.16 30.278 11.53 31.376 12.704 32.9 14.334 31.646 16.085 29.853 14.83Z" fill="#d0d0d0"/>
    <path d="M29.697 44.619C28.952 43.566 28.003 42.822 26.995 42.5 24.31 41.642 24.505 41.273 27.645 41.273L30.636 41.273 30.631 39.299C30.621 35.758 30.414 35.451 28.202 35.704 27.142 35.825 25.806 36.022 25.234 36.141L24.195 36.358 25.338 36.958C27.052 37.86 26.906 39.476 25.04 40.255 23.437 40.925 21.172 41.035 20.304 40.486 19.898 40.229 20.251 39.956 21.551 39.523 23.173 38.982 23.369 38.778 23.406 37.582 23.436 36.58 23.297 36.302 22.85 36.475 21.64 36.939 19.011 37.21 18.053 36.97 17.127 36.737 15.809 34.768 16.271 34.307 16.386 34.191 17.046 34.331 17.737 34.617 19.641 35.406 30.017 34.198 29.679 33.227 29.588 32.967 29.065 32.805 28.517 32.867L25.353 33.229C22.901 33.511 21.27 33.148 22.325 32.556 22.668 32.364 24.141 31.898 25.599 31.52 28.552 30.755 30.221 29.833 30.221 28.966 30.221 28.179 29.648 28.242 27.674 29.249 26.748 29.721 25.458 30.052 24.807 29.984 24.018 29.901 23.282 30.18 22.6 30.822 21.447 31.904 19.708 31.906 19.503 30.825 19.429 30.438 20.329 29.186 21.576 27.939 23.478 26.039 23.666 25.713 22.949 25.566 22.024 25.376 20.663 24.299 20.663 23.756 20.663 23.562 21.594 23.404 22.733 23.404 23.871 23.404 25.553 23.104 26.473 22.736 28.339 21.989 29.993 22.21 30.396 23.262 30.796 24.304 30.233 24.619 27.446 24.91L24.913 25.175 24.685 26.879C24.559 27.816 24.52 28.646 24.597 28.724 24.675 28.801 25.497 28.477 26.424 28.004 28.262 27.067 30.234 26.9 31.494 27.574 32.542 28.134 32.55 30.112 31.509 31.054 30.736 31.754 30.738 31.787 31.613 32.684 32.411 33.5 32.719 33.558 34.489 33.224 36.155 32.908 36.603 32.967 37.294 33.594 37.746 34.003 38.117 34.704 38.117 35.153 38.117 35.907 37.919 35.947 35.453 35.683L32.789 35.397 33.157 36.985C33.665 39.171 33.638 44.479 33.115 45.456 32.41 46.775 30.972 46.423 29.697 44.62ZM11.167 43.739C9.299 40.733 9.406 40.183 11.56 41.717L12.767 42.577 12.789 41.613C12.8 41.083 12.95 39.388 13.122 37.845 13.293 36.302 13.33 35.048 13.204 35.058 13.078 35.068 12.227 35.49 11.313 35.993 9.856 36.797 9.638 37.11 9.551 38.533 9.438 40.385 8.475 42.104 7.55 42.104 6.492 42.104 6.395 40.926 7.277 38.802L8.12 36.773 7.16 36.533C6.572 36.384 6.027 35.791 5.75 34.995 5.32 33.762 5.343 33.713 6.227 33.997 8.367 34.683 9.985 34.689 11.75 34.014 13.042 33.521 13.598 33.071 13.598 32.518 13.598 31.748 13.564 31.748 12.248 32.551 10.478 33.631 9.374 33.593 8.268 32.416 7.051 31.119 7.113 30.989 8.923 31.044 10.415 31.09 10.476 31.039 10.353 29.845 10.281 29.159 9.855 28.085 9.405 27.455L8.587 26.313 9.638 26.313C10.983 26.313 12.352 27.676 12.352 29.014 12.352 29.776 12.573 30.053 13.182 30.053 13.875 30.053 14.014 29.776 14.014 28.391 14.014 27.476 13.817 26.728 13.577 26.728 13.126 26.728 11.754 23.863 12.059 23.558 12.535 23.082 15.506 24.562 16.059 25.551 16.615 26.543 16.603 27.043 15.939 30.33 15.532 32.349 15.062 36.368 14.896 39.262 14.485 46.41 13.536 47.549 11.167 43.739ZM12.482 20.1C11.754 19.656 10.937 18.88 10.667 18.376 10.185 17.474 10.211 17.463 12.199 17.728 15.213 18.13 15.325 18.138 17.235 18.067L19.001 18.002 19.001 16.102C19.001 14.386 18.91 14.209 18.066 14.278 16.278 14.423 15.716 14.256 14.556 13.236L13.391 12.21 16.196 12.197 19.001 12.184 19.001 10.786C19.001 9.428 18.953 9.388 17.306 9.388 15.468 9.388 13.488 8.23 13.25 7.014 13.132 6.414 13.246 6.37 13.95 6.747 15.161 7.395 21.358 7.292 23.69 6.585 25.654 5.989 27.728 6.265 27.728 7.122 27.728 7.93 26.117 8.859 24.716 8.859 22.394 8.859 22.058 9.117 22.249 10.751 22.413 12.159 22.462 12.196 23.843 11.937 24.895 11.739 25.478 11.86 26.073 12.397 27.145 13.368 26.76 13.845 24.898 13.852 22.921 13.86 22.516 14.163 22.181 15.882L21.906 17.294 25.272 17.034C29.043 16.744 31.052 17.369 31.052 18.834 31.052 19.604 30.742 19.64 24.715 19.579 19.592 19.527 18.069 19.648 16.768 20.212 14.712 21.105 14.103 21.089 12.482 20.1ZM28.989 13.459C28.53 12.559 27.965 11.707 27.733 11.564 26.643 10.89 27.485 10.583 28.855 11.155 30.939 12.025 31.883 12.95 31.883 14.118 31.883 14.878 31.657 15.093 30.853 15.093 30.072 15.093 29.62 14.697 28.989 13.459Z" fill="#b0b0b0"/>
    <path d="M29.927 44.758C29.289 43.932 27.831 42.821 26.689 42.288L24.611 41.321 27.624 41.297 30.636 41.273 30.636 39.022C30.636 35.528 30.551 35.436 27.583 35.73 25.127 35.973 22.879 36.66 24.443 36.69 25.281 36.705 26.481 38.008 26.481 38.902 26.481 39.276 26.114 39.778 25.666 40.017 24.389 40.701 21.262 41.002 20.406 40.523 19.741 40.15 19.911 40.019 21.602 39.593 23.462 39.124 23.572 39.019 23.572 37.702 23.572 36.345 23.535 36.315 22.222 36.602 19.336 37.232 17.701 36.982 16.792 35.774 16.324 35.149 16.022 34.555 16.123 34.454 16.224 34.354 17.096 34.481 18.06 34.739 19.436 35.106 20.851 35.064 24.625 34.546 27.271 34.182 29.554 33.767 29.697 33.624 29.84 33.481 29.751 33.156 29.497 32.904 29.161 32.567 28.677 32.569 27.697 32.91 26.112 33.463 23.185 33.514 22.379 33.004 21.759 32.611 23.304 31.987 26.12 31.491 28.039 31.154 30.22 29.839 30.22 29.021 30.22 28.176 29.679 28.226 27.652 29.261 26.588 29.803 25.467 30.059 24.669 29.942 23.685 29.798 23.214 29.98 22.62 30.735 21.836 31.732 20.093 32.058 19.622 31.295 19.155 30.54 19.834 29.327 21.281 28.336 22.062 27.801 22.866 26.994 23.067 26.543 23.367 25.873 23.204 25.607 22.177 25.083 20.104 24.027 20.305 23.403 22.719 23.403 23.889 23.403 25.517 23.123 26.337 22.781 28.282 21.968 29.113 21.994 29.927 22.894 30.94 24.013 30.261 24.558 27.459 24.874L24.915 25.163 24.685 26.873C24.56 27.813 24.52 28.646 24.597 28.723 24.675 28.801 25.497 28.477 26.424 28.004 28.278 27.058 29.61 26.932 31.233 27.549 32.547 28.049 32.7 29.976 31.511 31.052 30.741 31.749 30.745 31.786 31.698 32.739 32.568 33.609 32.859 33.672 34.408 33.324 36.44 32.868 38.117 33.662 38.117 35.082 38.117 35.889 37.961 35.92 35.35 35.641 32.747 35.362 32.602 35.391 32.9 36.127 33.453 37.492 33.654 43.908 33.181 45.117 32.559 46.709 31.33 46.573 29.927 44.758ZM11.167 43.738C9.485 41.033 9.517 40.574 11.313 41.634 12.633 42.412 12.768 42.426 12.781 41.779 12.788 41.386 12.963 39.759 13.168 38.163 13.374 36.566 13.484 35.203 13.413 35.131 13.341 35.06 12.441 35.411 11.411 35.911 9.671 36.756 9.537 36.937 9.516 38.458 9.491 40.282 8.509 42.104 7.55 42.104 6.5 42.104 6.425 41.017 7.332 38.965 7.807 37.891 8.196 36.962 8.196 36.902 8.196 36.842 7.731 36.675 7.163 36.532 6.52 36.372 6.031 35.878 5.867 35.222 5.534 33.896 5.819 33.604 6.887 34.175 8.877 35.24 13.304 34.133 13.741 32.461 13.855 32.025 13.823 31.73 13.67 31.806 13.516 31.882 12.694 32.299 11.843 32.733 10.123 33.609 8.612 33.268 7.843 31.833 7.48 31.153 7.601 31.093 9.045 31.23L10.651 31.383 10.407 29.783C10.273 28.903 9.782 27.763 9.315 27.248L8.467 26.313 9.506 26.313C10.762 26.313 12.352 27.894 12.352 29.145 12.352 29.758 12.606 30.053 13.137 30.053 14.386 30.053 14.533 27.386 13.347 26.272 12.843 25.798 12.337 25.052 12.222 24.615 11.902 23.389 14.195 23.547 15.487 24.839 16.681 26.033 16.75 27.127 15.852 30.592 15.492 31.983 15.062 35.684 14.9 38.816 14.502 46.43 13.589 47.635 11.167 43.739ZM12.482 20.1C11.754 19.656 10.952 18.909 10.702 18.44 10.288 17.668 10.362 17.586 11.479 17.586 12.158 17.586 13.184 17.766 13.76 17.984 14.336 18.204 15.751 18.271 16.904 18.134L19.001 17.886 19.001 16.074 19.001 14.261 17.361 14.261C16.179 14.261 15.398 13.963 14.557 13.191L13.391 12.121 14.992 12.341C15.873 12.462 17.136 12.453 17.797 12.321 18.84 12.112 19.001 11.891 19.001 10.677 19.001 9.295 18.974 9.275 17.154 9.275 15.8 9.275 14.996 9.007 14.141 8.271 12.678 7.011 13.01 6.645 15.171 7.131 16.709 7.476 18.554 7.364 25.276 6.514 26.789 6.322 27.24 6.409 27.44 6.931 27.81 7.896 26.178 8.859 24.172 8.859 23.232 8.859 22.376 8.947 22.269 9.054 22.161 9.162 22.151 9.914 22.246 10.727 22.414 12.162 22.459 12.197 23.843 11.937 24.895 11.739 25.478 11.86 26.073 12.397 27.193 13.412 26.744 13.846 24.573 13.846 22.661 13.846 22.615 13.889 22.128 16.091L21.862 17.297 25.218 17.039C27.338 16.875 28.945 16.949 29.582 17.239 30.631 17.717 31.212 18.653 30.838 19.259 30.718 19.452 27.866 19.589 24.499 19.564 19.689 19.528 17.988 19.667 16.559 20.214 14.275 21.089 14.095 21.084 12.482 20.1ZM29.156 13.768C28.772 13.011 28.172 12.064 27.821 11.664 27.24 11.001 27.257 10.937 28.017 10.937 29.445 10.937 31.675 12.721 31.675 13.862 31.675 15.536 30.021 15.474 29.155 13.768Z" fill="#909090"/>
    <path d="M29.859 44.665C29.145 43.764 27.813 42.727 26.898 42.361 25.983 41.995 25.234 41.583 25.234 41.446 25.234 41.309 26.403 41.261 27.831 41.339L30.429 41.481 30.552 38.671C30.644 36.571 30.529 35.803 30.099 35.638 29.782 35.517 27.576 35.729 25.197 36.11 22.817 36.49 20.255 36.895 19.502 37.008 17.997 37.233 16.749 36.425 16.372 34.98 16.197 34.314 16.295 34.208 16.849 34.46 18.223 35.085 21.768 35.09 25.589 34.472 27.728 34.127 29.555 33.766 29.651 33.67 29.747 33.575 29.717 33.215 29.585 32.87 29.377 32.33 29.135 32.32 27.809 32.793 26.027 33.429 23.212 33.531 22.358 32.991 21.924 32.716 22.256 32.489 23.604 32.138L26.896 31.282C28.72 30.809 30.221 29.774 30.221 28.99 30.221 28.146 29.269 28.245 27.535 29.268 26.565 29.84 25.602 30.079 24.764 29.956 23.806 29.816 23.232 30.016 22.506 30.741 21.363 31.884 20.033 32.009 19.65 31.009 19.457 30.506 19.982 29.724 21.475 28.292 22.628 27.187 23.568 26.149 23.563 25.986 23.558 25.823 22.96 25.409 22.233 25.066 20.04 24.03 20.344 23.495 23.238 23.302 24.678 23.206 26.47 22.867 27.218 22.547 28.791 21.877 30.013 22.362 30.013 23.657 30.013 24.304 29.556 24.507 27.416 24.812 25.046 25.15 24.819 25.27 24.819 26.19 24.819 26.745 24.625 27.56 24.389 28.002 23.808 29.087 24.733 29.076 26.788 27.975 30.64 25.911 34.132 28.394 31.199 31.112 30.393 31.859 30.276 32.131 30.76 32.131 31.123 32.131 31.692 32.519 32.025 32.993 32.564 33.763 32.8 33.808 34.23 33.411 35.11 33.167 35.971 32.965 36.143 32.964 36.7 32.96 38.117 34.607 38.117 35.259 38.117 35.793 37.678 35.849 35.347 35.61 32.734 35.342 32.594 35.371 32.89 36.118 33.419 37.45 33.66 43.056 33.255 44.598 32.701 46.705 31.494 46.73 29.859 44.665ZM11.151 43.713C10.422 42.541 9.933 41.476 10.063 41.346 10.193 41.216 10.833 41.425 11.487 41.81L12.674 42.512 12.907 40.75C13.035 39.78 13.259 38.018 13.404 36.832L13.669 34.677 11.559 35.793C9.701 36.777 9.449 37.067 9.446 38.233 9.439 40.889 7.977 42.883 6.858 41.763 6.456 41.361 6.837 39.936 8.127 37.016 8.203 36.843 7.998 36.702 7.672 36.702 6.895 36.702 5.702 35.368 5.702 34.498 5.702 33.935 5.892 33.886 6.769 34.218 9.811 35.376 14.014 33.911 14.014 31.694 14.014 31.491 13.334 31.787 12.501 32.351 10.742 33.545 9.976 33.621 8.704 32.731 7.384 31.806 7.562 31.3 9.209 31.3 10.624 31.3 10.635 31.286 10.401 29.741 10.271 28.884 9.782 27.762 9.315 27.248L8.467 26.313 9.389 26.313C10.619 26.313 12.352 28.101 12.352 29.372 12.352 30.904 13.851 30.348 14.182 28.693 14.386 27.673 14.224 27.183 13.395 26.318 11.435 24.272 12.323 23.138 14.86 24.45 16.494 25.296 16.742 26.62 15.89 29.96 15.498 31.497 15.047 35.279 14.887 38.364 14.478 46.261 13.556 47.582 11.151 43.714ZM20.477 40.478C20.347 40.268 21.038 39.828 22.011 39.498 23.556 38.976 23.765 38.761 23.661 37.801 23.568 36.959 23.724 36.701 24.323 36.701 25.43 36.701 26.61 38.133 26.303 39.102 25.905 40.354 21.102 41.488 20.477 40.478ZM12.975 20.267C10.286 18.889 9.96 17.342 12.455 17.803 14.005 18.089 19.04 18.155 19.217 17.891 19.253 17.838 19.2 16.999 19.098 16.028 18.916 14.288 18.888 14.261 17.318 14.261 16.195 14.261 15.377 13.95 14.557 13.21L13.391 12.159 15.323 12.419C18.178 12.806 19.001 12.421 19.001 10.701 19.001 9.291 18.981 9.275 17.154 9.275 15.8 9.275 14.996 9.007 14.141 8.271 12.669 7.004 12.945 6.723 15.169 7.223 16.788 7.586 18.458 7.467 25.257 6.503 26.268 6.36 26.897 6.49 27.251 6.916 28.048 7.876 26.326 8.859 23.847 8.859 21.94 8.859 21.828 8.918 22.063 9.794 22.201 10.308 22.316 11.077 22.32 11.503 22.324 12.164 22.54 12.236 23.811 11.997 25.361 11.707 26.481 12.233 26.481 13.251 26.481 13.611 25.805 13.844 24.521 13.927 22.626 14.049 22.548 14.107 22.188 15.635 21.984 16.505 21.902 17.301 22.006 17.405 22.111 17.51 23.658 17.392 25.444 17.144 28.416 16.731 28.784 16.76 29.768 17.496 30.36 17.937 30.844 18.559 30.844 18.878 30.844 19.346 29.62 19.46 24.403 19.476 19.249 19.491 17.653 19.636 16.417 20.203 14.541 21.063 14.528 21.063 12.975 20.267ZM29.315 13.978C29.04 13.334 28.445 12.386 27.991 11.872 27.169 10.939 27.169 10.937 28.009 10.937 29.444 10.937 31.675 12.717 31.675 13.862 31.675 15.431 29.969 15.515 29.315 13.978Z" fill="#6f6f6f"/>
    <path d="M29.821 44.618C29.106 43.714 27.875 42.742 27.085 42.456 24.965 41.69 25.341 41.23 27.845 41.524 30.649 41.854 30.99 41.447 30.67 38.156L30.429 35.663 28.143 35.748C26.886 35.794 24.128 36.151 22.014 36.54 18.384 37.209 18.127 37.208 17.381 36.532 16.946 36.139 16.491 35.44 16.371 34.98 16.198 34.317 16.297 34.207 16.849 34.45 18.254 35.071 20.965 35.135 24.856 34.64 29.284 34.075 29.951 33.824 29.579 32.855 29.351 32.261 29.147 32.253 27.642 32.785 25.834 33.422 23.849 33.509 22.566 33.006 21.938 32.76 22.203 32.582 23.813 32.17 27.283 31.28 29.257 30.473 30.019 29.631 30.706 28.871 30.707 28.807 30.037 28.55 29.63 28.394 28.522 28.677 27.459 29.208 26.313 29.78 25.169 30.058 24.489 29.928 23.681 29.774 23.138 29.985 22.459 30.716 21.396 31.864 20.039 32.024 19.664 31.045 19.489 30.589 20.072 29.73 21.489 28.357 22.635 27.247 23.572 26.191 23.572 26.012 23.572 25.832 23.011 25.436 22.325 25.132 20.53 24.338 20.778 23.952 23.288 23.639 24.504 23.487 26.021 23.092 26.66 22.76 28.144 21.99 29.154 21.995 29.801 22.775 30.732 23.897 29.981 24.523 27.347 24.821 24.902 25.098 24.819 25.147 24.819 26.309 24.819 26.969 24.632 27.626 24.403 27.767 23.768 28.159 23.908 28.807 24.627 28.807 24.979 28.807 26.035 28.414 26.974 27.935 30.679 26.045 33.984 28.53 31.199 31.112 30.393 31.859 30.276 32.131 30.76 32.131 31.123 32.131 31.705 32.536 32.052 33.032 32.634 33.862 32.814 33.895 34.347 33.435 36.107 32.908 37.432 33.322 37.902 34.549 38.298 35.58 37.726 35.794 35.193 35.565L32.686 35.337 33.012 37.162C33.537 40.103 33.397 44.814 32.762 45.58 31.896 46.623 31.239 46.408 29.822 44.618ZM11.84 44.702C11.525 44.073 10.928 43.044 10.515 42.416 9.665 41.125 10.17 40.913 11.703 41.918 12.671 42.552 12.691 42.537 12.923 40.983 13.053 40.114 13.277 38.346 13.421 37.053L13.684 34.704 11.564 35.719C9.608 36.655 9.443 36.849 9.443 38.193 9.443 39.963 8.406 42.104 7.549 42.104 6.517 42.104 6.452 41.116 7.349 39.026 8.353 36.683 8.35 36.702 7.637 36.702 6.904 36.702 5.703 35.357 5.703 34.536 5.703 33.961 5.89 33.955 7.416 34.48 8.773 34.948 9.442 34.972 10.636 34.593 12.882 33.883 14.014 33.044 14.014 32.093 14.014 31.248 14.008 31.247 12.871 32.048 11.059 33.324 9.938 33.525 8.799 32.779 7.378 31.848 7.529 31.299 9.209 31.299 10.625 31.299 10.635 31.286 10.399 29.741 10.269 28.884 9.906 27.888 9.594 27.527 8.855 26.672 8.877 26.313 9.669 26.313 10.674 26.313 12.352 28.242 12.352 29.398 12.352 30.218 12.508 30.385 13.079 30.174 14.734 29.564 14.859 27.982 13.391 26.237 11.639 24.155 12.221 23.21 14.59 24.289 16.349 25.091 16.72 26.713 15.883 29.949 15.483 31.492 15.033 35.279 14.88 38.364 14.605 43.934 14.122 45.844 12.99 45.844 12.673 45.844 12.155 45.33 11.84 44.702ZM20.724 40.509C20.314 40.235 20.654 39.975 21.971 39.556 23.581 39.043 23.767 38.855 23.661 37.841 23.568 36.961 23.718 36.701 24.323 36.701 25.165 36.701 26.481 37.92 26.481 38.699 26.481 39.918 21.961 41.339 20.724 40.509ZM12.968 20.273C11.668 19.631 10.446 18.107 10.882 17.671 11.019 17.533 11.973 17.646 13.002 17.921 15.436 18.572 19.562 18.151 19.23 17.284 19.104 16.956 19 16.141 19 15.474 19 14.339 18.896 14.261 17.362 14.261 16.23 14.261 15.363 13.952 14.562 13.262L13.4 12.263 16.2 12.488 19 12.713 19 11.047 19 9.38 16.845 9.173C15.268 9.022 14.485 8.713 13.926 8.023 13.506 7.503 13.219 7.022 13.29 6.951 13.36 6.881 14.21 7.025 15.179 7.271 16.475 7.6 17.843 7.582 20.359 7.204 25.589 6.418 27.059 6.439 27.229 7.3 27.406 8.195 25.837 8.86 23.545 8.86 21.793 8.86 21.771 8.893 22.177 10.925 22.422 12.146 22.552 12.242 23.666 12.019 25.071 11.739 26.481 12.349 26.481 13.237 26.481 13.68 25.979 13.846 24.635 13.846 22.548 13.846 22.513 13.877 22.098 16.091L21.795 17.706 24.449 17.363C28.328 16.862 29.361 16.957 30.306 17.902 31.872 19.468 30.987 19.727 25.093 19.429 20.177 19.181 19.363 19.242 17.04 20.032 14.003 21.064 14.51 21.034 12.968 20.272ZM29.605 14.283C29.455 13.812 28.835 12.835 28.227 12.113L27.122 10.799 28.335 11.104C30.284 11.593 31.947 12.979 31.802 13.994 31.628 15.22 29.971 15.437 29.605 14.284Z" fill="#4f4f4f"/>
    <path d="M29.821 44.555C29.067 43.617 27.867 42.596 27.154 42.285 25.861 41.723 25.863 41.721 28.203 41.705 30.989 41.685 31.145 41.454 30.772 37.885L30.507 35.354 27.767 35.617C26.26 35.763 23.583 36.185 21.82 36.557 18.843 37.183 18.538 37.182 17.56 36.542 15.628 35.275 16.207 34.696 19.168 34.933 20.632 35.051 23.39 34.926 25.298 34.656 30.095 33.976 30.296 33.902 29.745 33.019 29.325 32.348 29.117 32.339 26.945 32.905 24.854 33.45 21.835 33.314 22.446 32.702 22.567 32.582 24.024 32.133 25.684 31.706 28.923 30.873 31.224 29.228 30.36 28.364 30.032 28.036 29.299 28.218 27.714 29.021 26.297 29.739 25.139 30.055 24.436 29.914 23.64 29.754 23.086 29.971 22.36 30.724 21.246 31.882 20.123 31.883 19.9 30.725 19.804 30.223 20.421 29.338 21.662 28.199 22.712 27.234 23.571 26.275 23.569 26.067 23.568 25.859 22.96 25.327 22.219 24.885L20.871 24.081 23.106 23.781C24.336 23.616 26.082 23.148 26.986 22.74 28.821 21.913 30.013 22.274 30.013 23.657 30.013 24.229 29.673 24.473 28.766 24.552 25.426 24.846 24.916 25.056 24.716 26.219 24.608 26.842 24.37 27.706 24.186 28.14 23.899 28.817 23.994 28.896 24.854 28.693 25.406 28.563 26.704 28.132 27.739 27.733 29.401 27.093 29.762 27.078 30.85 27.599 32.5 28.389 32.62 29.465 31.22 30.925 30.585 31.588 30.28 32.131 30.543 32.131 30.805 32.131 31.403 32.543 31.873 33.046 32.653 33.883 32.876 33.921 34.486 33.484 36.12 33.042 36.32 33.08 37.27 34.018 38.661 35.39 38.018 35.824 35.1 35.483L32.707 35.203 33.022 37.303C33.469 40.279 33.287 44.946 32.697 45.658 31.903 46.614 31.287 46.378 29.821 44.555ZM11.84 44.702C11.525 44.073 10.928 43.044 10.515 42.416 9.67 41.132 10.037 40.946 11.455 41.939 11.978 42.305 12.498 42.512 12.612 42.399 12.868 42.142 13.579 37.319 13.59 35.759L13.598 34.61 11.521 35.663C9.742 36.564 9.443 36.891 9.443 37.929 9.443 40.429 8.126 42.493 7.083 41.627 6.675 41.289 6.738 40.744 7.381 39.054 8.354 36.494 8.336 36.702 7.582 36.702 6.941 36.702 5.436 34.752 5.798 34.39 5.913 34.276 6.826 34.4 7.828 34.668 9.447 35.1 9.895 35.049 11.832 34.215 13.562 33.47 14.014 33.077 14.014 32.317L14.014 31.358 12.156 32.396C10.497 33.324 10.179 33.376 9.174 32.886 7.435 32.039 7.456 31.3 9.219 31.3L10.727 31.3 10.447 29.741C10.294 28.884 9.882 27.854 9.531 27.453 8.699 26.501 9.059 26.187 10.399 26.697 11.661 27.177 12.511 28.569 12.22 29.68 11.98 30.596 11.97 30.593 13.364 30.063 14.768 29.529 14.78 27.888 13.391 26.237 11.633 24.149 12.221 23.21 14.606 24.297 16.188 25.017 16.626 26.884 15.856 29.637 15.505 30.894 15.074 34.635 14.898 37.949 14.582 43.909 14.114 45.844 12.991 45.844 12.673 45.844 12.155 45.33 11.84 44.702ZM20.875 40.551C20.233 40.389 20.466 40.186 21.914 39.643 23.554 39.029 23.765 38.809 23.66 37.823 23.568 36.96 23.72 36.702 24.323 36.702 25.165 36.702 26.481 37.92 26.481 38.699 26.481 39.829 22.816 41.039 20.875 40.551ZM13.361 20.296C11.957 19.698 10.424 18.129 10.838 17.715 10.993 17.56 12.024 17.665 13.128 17.947 14.31 18.25 15.978 18.35 17.182 18.191L19.228 17.919 19.218 16.092C19.208 14.282 19.194 14.264 17.754 14.262 16.562 14.259 13.598 12.985 13.598 12.475 13.598 12.4 14.734 12.421 16.123 12.521 17.511 12.621 18.823 12.528 19.037 12.314 19.251 12.099 19.307 11.328 19.162 10.599 18.926 9.419 18.742 9.275 17.474 9.275 15.794 9.275 13.807 8.339 13.436 7.374 13.233 6.844 13.338 6.757 13.906 6.994 15.374 7.604 18.491 7.691 21.309 7.2 26.894 6.226 26.869 6.227 27.155 6.972 27.568 8.048 26.795 8.494 24.093 8.739L21.609 8.964 22.027 10.609C22.423 12.171 22.51 12.242 23.755 12.008 25.209 11.735 26.799 12.58 26.312 13.368 26.149 13.631 25.217 13.846 24.241 13.846 22.477 13.846 22.462 13.858 22.037 15.716L21.609 17.586 23.11 17.568C23.936 17.558 25.408 17.396 26.382 17.208 28.374 16.822 30.844 17.722 30.844 18.833 30.844 19.363 29.981 19.436 25.026 19.32 20.076 19.204 18.863 19.305 16.893 20 14.926 20.692 14.395 20.737 13.361 20.296ZM28.984 13.173C28.272 12.117 27.776 11.166 27.882 11.059 27.989 10.953 28.752 11.187 29.578 11.579 31.198 12.348 32.084 13.555 31.72 14.502 31.3 15.596 30.288 15.104 28.984 13.172Z" fill="#2f2f2f"/>
    <path d="M29.926 44.542C29.06 43.597 27.79 42.576 27.104 42.272 25.882 41.732 25.903 41.721 28.222 41.705 29.523 41.696 30.712 41.487 30.865 41.24 31.017 40.994 31.013 39.591 30.856 38.123L30.57 35.455 28.837 35.47C27.301 35.483 23.376 36.097 19.563 36.921 18.543 37.142 18.064 37.012 17.382 36.33 16.218 35.166 16.247 34.48 17.442 34.885 19.042 35.426 29.569 34.512 30.012 33.793 30.112 33.632 29.967 33.196 29.688 32.824 29.223 32.203 29.002 32.202 26.951 32.809 25.351 33.282 24.351 33.361 23.418 33.087 22.163 32.718 22.22 32.679 25.069 31.972 28.363 31.155 30.636 29.959 30.636 29.045 30.636 27.957 29.93 27.964 27.5 29.077 25.603 29.945 24.951 30.076 24.36 29.707 23.746 29.323 23.393 29.464 22.345 30.513 21.646 31.211 20.842 31.706 20.557 31.611 19.398 31.225 19.857 29.974 21.88 28.004 24.217 25.727 24.47 25.066 23 25.066 22.456 25.066 21.8 24.812 21.543 24.501 21.16 24.041 21.487 23.894 23.315 23.705 24.548 23.578 26.165 23.159 26.907 22.775 27.959 22.231 28.476 22.175 29.24 22.523 31.255 23.442 30.235 24.625 27.382 24.68 25.275 24.72 24.618 25.102 24.57 26.313 24.548 26.884 24.388 27.679 24.214 28.079 23.964 28.657 24.1 28.804 24.878 28.793 25.417 28.786 26.221 28.505 26.664 28.17 27.108 27.834 28.333 27.56 29.386 27.56 32.411 27.56 33.148 28.913 31.221 30.925 30.16 32.032 30.157 32.055 31.013 32.326 31.492 32.478 31.883 32.878 31.883 33.214 31.883 33.699 32.409 33.801 34.418 33.706 36.7 33.597 37.02 33.686 37.628 34.585L38.304 35.584 35.468 35.356 32.633 35.129 32.913 36.991C33.349 39.902 33.21 45.039 32.678 45.681 31.958 46.547 31.646 46.418 29.926 44.542ZM11.412 43.71C10.62 42.484 10.034 41.409 10.11 41.32 10.186 41.233 10.741 41.484 11.344 41.879 11.947 42.274 12.591 42.439 12.774 42.247 12.958 42.054 13.24 40.262 13.402 38.265L13.696 34.633 11.579 35.563C9.621 36.424 9.461 36.603 9.446 37.949 9.426 39.756 8.613 41.429 7.666 41.612 6.766 41.785 6.716 40.277 7.573 38.78 8.389 37.352 8.339 36.803 7.364 36.494 6.548 36.234 5.457 34.732 5.821 34.367 5.923 34.265 6.826 34.396 7.828 34.657 9.398 35.067 9.939 35.018 11.728 34.307 13.435 33.628 13.831 33.277 13.943 32.337L14.08 31.191 12.647 32.077C10.951 33.125 9.338 33.214 8.433 32.309 7.516 31.391 7.6 31.282 9.131 31.402L10.481 31.507 10.34 29.637C10.262 28.609 10.005 27.534 9.77 27.247 9.452 26.863 9.556 26.728 10.172 26.728 11.295 26.728 12.075 27.76 12.075 29.244 12.075 30.565 12.097 30.581 13.495 30.207 14.863 29.84 14.801 27.376 13.391 26.069 11.935 24.72 11.991 23.639 13.494 24.015 15.659 24.555 16.202 25.431 15.951 27.975 15.827 29.232 15.536 31.102 15.304 32.131 15.071 33.159 14.869 35.684 14.854 37.741 14.822 41.945 14.368 44.421 13.464 45.326 12.924 45.865 12.679 45.672 11.412 43.71ZM21.494 39.879C23.714 39.153 24.084 38.804 23.805 37.696 23.497 36.467 24.315 36.368 25.673 37.468 27.538 38.978 25.649 40.48 21.986 40.398L20.04 40.355 21.494 39.879ZM11.854 19.229C11.158 18.534 10.699 17.853 10.834 17.718 10.97 17.582 11.921 17.707 12.948 17.994 14.128 18.324 15.661 18.411 17.116 18.229L19.416 17.942 19.416 16.102C19.416 14.224 19.284 14.098 17.472 14.242 16.974 14.281 15.945 13.974 15.186 13.56L13.806 12.807 16.601 12.684 19.397 12.562 19.319 10.814 19.242 9.067 17.258 9.064C15.638 9.062 15.062 8.847 14.124 7.899L12.975 6.737 14.145 7.175C15.865 7.819 19.94 7.708 23.163 6.93 26.127 6.215 27.312 6.341 27.312 7.372 27.312 8.063 24.942 8.853 22.858 8.857 21.98 8.858 21.575 9.037 21.68 9.379 21.768 9.664 21.959 10.435 22.103 11.092 22.341 12.169 22.498 12.264 23.707 12.068 25.156 11.833 26.751 12.658 26.29 13.403 26.14 13.646 25.206 13.846 24.216 13.846 22.595 13.846 22.388 13.96 22.143 14.989 21.993 15.617 21.765 16.483 21.637 16.912 21.417 17.65 21.614 17.676 25.361 17.395 29.091 17.115 29.37 17.151 30.234 18.015 31.628 19.408 30.744 19.627 24.784 19.362 20.524 19.172 19.09 19.259 17.404 19.811 14.382 20.799 13.311 20.687 11.854 19.23ZM29.675 14.158C29.365 13.643 28.795 12.708 28.409 12.08 27.612 10.78 27.733 10.703 29.308 11.518 30.897 12.34 32.027 13.704 31.738 14.454 31.381 15.386 30.326 15.234 29.675 14.158Z" fill="#020202"/>
</g>
</svg>
`;
