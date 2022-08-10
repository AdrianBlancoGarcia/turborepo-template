// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector16Icon(props: Vector16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 27 25"}
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
          "M24.238 2.339C22.72.83 20.73 0 18.625 0a7.874 7.874 0 00-5.328 2.077A7.872 7.872 0 007.97 0C5.865 0 3.873.83 2.353 2.344c-3.137 3.15-3.136 8.079.003 11.216l10.942 10.943L24.24 13.56c3.139-3.137 3.14-8.065-.002-11.221z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector16Icon;
/* prettier-ignore-end */
