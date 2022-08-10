// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector21Icon(props: Vector21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 27 27"}
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
          "M13.333 0C5.981 0 0 5.981 0 13.333s5.981 13.334 13.333 13.334 13.334-5.982 13.334-13.334C26.667 5.981 20.685 0 13.333 0zm0 24C7.452 24 2.667 19.215 2.667 13.333c0-5.881 4.785-10.666 10.666-10.666C19.215 2.667 24 7.452 24 13.333 24 19.215 19.215 24 13.333 24z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M14.667 6.667H12v8h8V12h-5.333V6.667z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector21Icon;
/* prettier-ignore-end */
