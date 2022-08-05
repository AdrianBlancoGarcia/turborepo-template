// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector10Icon(props: Vector10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
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
          "M6.667 0A6.674 6.674 0 000 6.667a6.674 6.674 0 006.667 6.666 6.674 6.674 0 006.666-6.666A6.674 6.674 0 006.667 0zm0 12a5.34 5.34 0 01-5.334-5.333 5.34 5.34 0 015.334-5.334A5.34 5.34 0 0112 6.667 5.34 5.34 0 016.667 12z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M7.333 3.333H6v3.61l2.195 2.195.943-.943-1.805-1.804V3.333z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector10Icon;
/* prettier-ignore-end */
