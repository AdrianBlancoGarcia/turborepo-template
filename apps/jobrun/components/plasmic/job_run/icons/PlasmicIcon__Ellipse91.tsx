// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse91IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse91Icon(props: Ellipse91IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 336 336"}
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

      <g filter={"url(#bZk3rZvxSNa)"}>
        <circle
          cx={"168"}
          cy={"168"}
          r={"142"}
          fill={"currentColor"}
          fillOpacity={".14"}
        ></circle>
      </g>

      <defs>
        <filter
          id={"bZk3rZvxSNa"}
          x={"0"}
          y={"0"}
          width={"336"}
          height={"336"}
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
            stdDeviation={"13"}
            result={"effect1_foregroundBlur_280_11356"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Ellipse91Icon;
/* prettier-ignore-end */
