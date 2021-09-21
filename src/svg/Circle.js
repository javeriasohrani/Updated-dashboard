import * as React from "react";

function SvgCircle(props) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.667 8a7.333 7.333 0 1114.666 0A7.333 7.333 0 01.667 8z"
        fill="#08AD36"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.54 5.362c.26.26.26.682 0 .943l-4.138 4.333a.667.667 0 01-.942 0l-2-2a.667.667 0 11.942-.943l1.53 1.529 3.666-3.862c.26-.26.682-.26.942 0z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgCircle;
