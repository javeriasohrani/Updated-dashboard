import * as React from "react";

function SvgMessages(props) {
  return (
    <svg
      width={27}
      height={26}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.38 21.284L.646 25.789V1.976A1.287 1.287 0 011.933.69h23.169a1.287 1.287 0 011.287 1.287v18.02a1.288 1.288 0 01-1.287 1.288H6.38zm-.89-2.575h18.324V3.264H3.22v17.228l2.27-1.783zM8.367 9.7h10.298v2.575H8.368V9.699z"
        fill="#000"
        fillOpacity={0.35}
      />
    </svg>
  );
}

export default SvgMessages;
