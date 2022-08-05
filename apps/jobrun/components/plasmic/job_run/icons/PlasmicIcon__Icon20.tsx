// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon20Icon(props: Icon20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
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
          "M17.5 3.333h-15a.833.833 0 00-.833.834v11.666c0 .461.372.834.833.834h15c.46 0 .833-.373.833-.834V4.167a.833.833 0 00-.833-.834zm-.833 9.167a2.5 2.5 0 00-2.5 2.5H5.833a2.5 2.5 0 00-2.5-2.5v-5a2.5 2.5 0 002.5-2.5h8.334a2.5 2.5 0 002.5 2.5v5z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M10 6.667A3.337 3.337 0 006.667 10 3.337 3.337 0 0010 13.333 3.337 3.337 0 0013.333 10 3.337 3.337 0 0010 6.667zm0 5c-.92 0-1.667-.748-1.667-1.667 0-.92.748-1.667 1.667-1.667.92 0 1.667.748 1.667 1.667 0 .92-.748 1.667-1.667 1.667z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon20Icon;
/* prettier-ignore-end */
