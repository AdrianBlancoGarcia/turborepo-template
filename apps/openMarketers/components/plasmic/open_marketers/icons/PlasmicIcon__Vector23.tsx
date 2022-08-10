// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector23IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector23Icon(props: Vector23IconProps) {
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
          "M25.333 2.667h-4V1.333C21.333.596 20.737 0 20 0H6.667c-.738 0-1.334.596-1.334 1.333v1.334h-4C.596 2.667 0 3.263 0 4v4c0 5.747 2.399 9.213 6.425 9.35A8.002 8.002 0 0012 21.212V24H9.333v2.667h8V24h-2.666v-2.787a8.012 8.012 0 005.574-3.864c4.027-.136 6.426-3.602 6.426-9.349V4c0-.737-.596-1.333-1.334-1.333zM2.667 8V5.333h2.666v9.107C2.955 13.437 2.667 9.732 2.667 8zm10.666 10.667A5.339 5.339 0 018 13.333V2.667h10.667v10.666a5.339 5.339 0 01-5.334 5.334zm8-4.227V5.333H24V8c0 1.732-.288 5.437-2.667 6.44z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector23Icon;
/* prettier-ignore-end */
