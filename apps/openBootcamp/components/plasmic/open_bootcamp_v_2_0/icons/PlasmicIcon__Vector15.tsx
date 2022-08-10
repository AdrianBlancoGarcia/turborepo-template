// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector15Icon(props: Vector15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 16"}
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

      <path
        d={
          "M15.833 0H10c-.643 0-1.223.25-1.667.65A2.484 2.484 0 006.667 0H.833A.833.833 0 000 .833v12.5c0 .461.372.834.833.834h4.799c.438 0 .868.178 1.178.488l.934.934c.008.008.018.01.025.018a.852.852 0 00.245.163h.002a.83.83 0 00.635 0h.002a.853.853 0 00.245-.163c.007-.008.017-.01.024-.018l.935-.934c.31-.31.74-.488 1.178-.488h4.798a.833.833 0 00.834-.834V.833A.833.833 0 0015.833 0zM5.632 12.5H1.667V1.667h5c.46 0 .833.374.833.833v10.574a3.36 3.36 0 00-1.868-.574zm9.368 0h-3.965a3.36 3.36 0 00-1.868.574V2.5c0-.46.373-.833.833-.833h5V12.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector15Icon;
/* prettier-ignore-end */
