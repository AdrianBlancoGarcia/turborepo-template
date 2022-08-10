// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Polygon8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Polygon8Icon(props: Polygon8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 38 34"}
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

      <g filter={"url(#KXnaxXFdNa)"}>
        <path
          d={"M18.722 4l14.723 25.5H4L18.722 4z"}
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"KXnaxXFdNa"}
          x={"0"}
          y={"0"}
          width={"37.445"}
          height={"33.5"}
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
            result={"effect1_foregroundBlur_3133_7335"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Polygon8Icon;
/* prettier-ignore-end */
