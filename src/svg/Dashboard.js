import * as React from "react";

function SvgDashboard(props) {
  return (
    <svg
      width={28}
      height={28}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.375 27.517V12.5h12.013v15.017H15.375zM.358 15.504V.487H12.37v15.017H.358zm9.01-3.004V3.49H3.361v9.01h6.007zM.358 27.517v-9.01H12.37v9.01H.358zm3.003-3.003h6.007V21.51H3.361v3.004zm15.017 0h6.007v-9.01h-6.007v9.01zM15.375.487h12.013v9.01H15.375V.487zm3.003 3.003v3.003h6.007V3.49h-6.007z"
        fill="#000"
        fillOpacity={0.35}
      />
    </svg>
  );
}

export default SvgDashboard;
