// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector19Icon(props: Vector19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 16"}
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
          "M7.61 0L0 7.61l7.61 7.609 1.885-1.886L3.77 7.61l5.724-5.724L7.609 0zm9.885 15.219l7.609-7.61L17.494 0 15.61 1.885l5.724 5.724-5.724 5.724 1.886 1.886z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector19Icon;
/* prettier-ignore-end */
