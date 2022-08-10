// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector13Icon(props: Vector13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M21.6 0h-12a2.402 2.402 0 00-2.4 2.4v4.8H2.4A2.402 2.402 0 000 9.6v12C0 22.924 1.076 24 2.4 24h12c1.324 0 2.4-1.076 2.4-2.4v-4.8h4.8c1.324 0 2.4-1.076 2.4-2.4v-12C24 1.076 22.924 0 21.6 0zM2.4 21.6v-12h12l.002 12H2.4zm19.2-7.2h-4.8V9.6c0-1.324-1.076-2.4-2.4-2.4H9.6V2.4h12v12z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M4.8 12H12v2.4H4.8V12zm0 4.8H12v2.4H4.8v-2.4z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector13Icon;
/* prettier-ignore-end */
