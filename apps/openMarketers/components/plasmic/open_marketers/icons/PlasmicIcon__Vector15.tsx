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
      viewBox={"0 0 12 12"}
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
        d={"M11.667 5h-5V0H5v5H0v1.667h5v5h1.667v-5h5V5z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector15Icon;
/* prettier-ignore-end */
