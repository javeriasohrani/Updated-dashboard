import * as React from "react";

function SvgSettings(props) {
  return (
    <svg
      width={26}
      height={29}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.873.503l12.229 7.08v14.159L12.873 28.82.646 21.741V7.584L12.873.503zm0 2.975L3.22 9.067v11.19l9.653 5.59 9.654-5.59V9.068l-9.654-5.589zm0 16.333a5.149 5.149 0 110-10.297 5.149 5.149 0 010 10.297zm0-2.575a2.574 2.574 0 100-5.148 2.574 2.574 0 000 5.149z"
        fill="#000"
        fillOpacity={0.35}
      />
    </svg>
  );
}

export default SvgSettings;
