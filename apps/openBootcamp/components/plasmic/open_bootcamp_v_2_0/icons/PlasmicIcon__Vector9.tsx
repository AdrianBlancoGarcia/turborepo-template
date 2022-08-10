// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector9Icon(props: Vector9IconProps) {
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
          "M11.667 0C5.234 0 0 5.234 0 11.667s5.234 11.666 11.667 11.666S23.333 18.1 23.333 11.667C23.333 5.234 18.1 0 11.667 0zm0 21c-5.146 0-9.334-4.187-9.334-9.333s4.188-9.334 9.334-9.334S21 6.521 21 11.667 16.813 21 11.667 21z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M12.833 5.833H10.5v7h7V10.5h-4.667V5.833z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector9Icon;
/* prettier-ignore-end */
