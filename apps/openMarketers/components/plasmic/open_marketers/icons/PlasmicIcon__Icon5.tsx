// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon5Icon(props: Icon5IconProps) {
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
        d={"M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M10.833 3.39V1.668H9.167V3.39A6.674 6.674 0 003.39 9.167H1.667v1.666H3.39a6.673 6.673 0 005.776 5.776v1.724h1.666V16.61a6.673 6.673 0 005.776-5.776h1.724V9.167H16.61a6.674 6.674 0 00-5.776-5.776zM10 15c-2.758 0-5-2.242-5-5s2.242-5 5-5 5 2.242 5 5-2.242 5-5 5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
