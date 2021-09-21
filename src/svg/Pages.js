import * as React from "react";

function SvgPages(props) {
  return (
    <svg
      width={33}
      height={26}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.358 21.143h10.278v2.937H.358v-2.937zm0-10.277h13.214v2.936H.358v-2.936zm0-10.278h29.365v2.936H.358V.588zM24.585 25.426a7.953 7.953 0 110-15.906 7.953 7.953 0 010 15.906zm-.796-5.567v1.59h1.591v-1.59h-1.59zm1.591-1.309a2.786 2.786 0 00-.795-5.452 2.784 2.784 0 00-2.73 2.238l1.56.312a1.193 1.193 0 111.17 1.427.796.796 0 00-.796.795v1.193h1.591v-.513z"
        fill="#000"
        fillOpacity={0.35}
      />
    </svg>
  );
}

export default SvgPages;
