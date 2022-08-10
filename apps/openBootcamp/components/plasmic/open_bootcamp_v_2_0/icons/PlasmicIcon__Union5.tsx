// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Union5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Union5Icon(props: Union5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 25"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#6mV0QyK73a)"}>
        <path
          fillRule={"evenodd"}
          clipRule={"evenodd"}
          d={
            "M19.685 4h-4.278v12.122H4v4.279h15.685V4zm.005.004h11.409v4.279h-11.41V4.004z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"6mV0QyK73a"}
          x={"0"}
          y={"0"}
          width={"35.099"}
          height={"24.401"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            result={"shape"}
          ></feBlend>

          <feGaussianBlur
            stdDeviation={"2"}
            result={"effect1_foregroundBlur_3133_7336"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Union5Icon;
/* prettier-ignore-end */
