import * as React from "react";

function SvgHelp(props) {
  return (
    <svg
      width={26}
      height={26}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#help_svg__clip0)">
        <path
          d="M13.091 25.99C5.982 25.99.22 20.227.22 13.118S5.982.247 13.09.247c7.11 0 12.872 5.762 12.872 12.871 0 7.11-5.763 12.872-12.872 12.872zm0-2.574a10.297 10.297 0 100-20.595 10.297 10.297 0 000 20.595zm-1.287-6.436h2.575v2.574h-2.575V16.98zm2.575-2.118v.83h-2.575v-1.93a1.287 1.287 0 011.287-1.287 1.93 1.93 0 10-1.893-2.31L8.673 9.66a4.506 4.506 0 115.706 5.202z"
          fill="#000"
          fillOpacity={0.35}
        />
      </g>
      <defs>
        <clipPath id="help_svg__clip0">
          <path
            fill="#fff"
            transform="translate(.22 .247)"
            d="M0 0h25.743v25.743H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgHelp;
