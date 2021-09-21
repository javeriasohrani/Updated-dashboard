import * as React from "react";

function SvgBrush(props) {
  return (
    <svg
      width={36}
      height={36}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M29.122 23.108l-4.92-4.928v-3.653a.842.842 0 00-.244-.6L15.521 5.49a.843.843 0 00-1.199 0L6.73 13.084a.843.843 0 000 1.198l8.437 8.438a.843.843 0 00.6.244h3.661l4.92 4.928a3.377 3.377 0 004.775-4.776v-.008zM9.859 12.34l1.932 1.941 1.198-1.198-1.94-1.932L12.39 9.81l3.62 3.628 1.198-1.198-3.628-3.62 1.342-1.341 5.56 5.56-6.404 6.404-5.56-5.56 1.341-1.342zm18.065 14.344a1.688 1.688 0 01-2.38 0l-5.172-5.164a1.518 1.518 0 00-.599-.244h-3.662l-.844-.844 6.405-6.404.843.844v3.662a.844.844 0 00.245.59l5.164 5.18a1.688 1.688 0 010 2.38z"
        fill="url(#brush_svg__paint0_linear)"
      />
      <path
        d="M27.924 26.685a1.688 1.688 0 01-2.38 0l-5.172-5.164a1.518 1.518 0 00-.599-.244h-3.662l-.844-.844 6.405-6.404.843.844v3.662a.844.844 0 00.245.59l5.164 5.18a1.688 1.688 0 010 2.38z"
        fill="url(#brush_svg__paint1_linear)"
      />
      <defs>
        <linearGradient
          id="brush_svg__paint0_linear"
          x1={18.295}
          y1={5.241}
          x2={18.295}
          y2={28.881}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA764" />
          <stop offset={1} stopColor="#F17F29" />
        </linearGradient>
        <linearGradient
          id="brush_svg__paint1_linear"
          x1={18.295}
          y1={5.241}
          x2={18.295}
          y2={28.881}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA764" />
          <stop offset={1} stopColor="#F17F29" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgBrush;
