import * as React from "react";

function SvgMountain(props) {
  return (
    <svg
      width={36}
      height={36}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.915 4.89c-.7 0-.933.467-1.4.934L2.982 27.991c-.234.233-.234.7-.234.933 0 1.167.934 1.633 1.634 1.633h27.066c.934 0 1.634-.466 1.634-1.633 0-.467 0-.467-.234-.933l-13.3-22.167c-.466-.467-.933-.933-1.633-.933zm0 3.5l7.7 12.834h-1.867l-3.5-3.5-2.333 3.5-2.333-3.5-3.5 3.5h-2.1l7.933-12.833z"
        fill="url(#mountain_svg__paint0_linear)"
      />
      <defs>
        <linearGradient
          id="mountain_svg__paint0_linear"
          x1={17.915}
          y1={4.891}
          x2={17.915}
          y2={30.557}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7CB4F9" />
          <stop offset={1} stopColor="#6DA2E4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgMountain;
