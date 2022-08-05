// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector6Icon(props: Vector6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 13"}
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
          "M1.459 2.917a1.459 1.459 0 100-2.917 1.459 1.459 0 000 2.917zm2.836 1.106v8.093h2.512V8.114c0-1.056.199-2.08 1.508-2.08 1.292 0 1.308 1.208 1.308 2.146v3.936h2.514V7.678c0-2.18-.47-3.855-3.018-3.855-1.223 0-2.043.671-2.378 1.307h-.034V4.023H4.295zm-4.095 0h2.517v8.093H.2V4.023z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector6Icon;
/* prettier-ignore-end */
