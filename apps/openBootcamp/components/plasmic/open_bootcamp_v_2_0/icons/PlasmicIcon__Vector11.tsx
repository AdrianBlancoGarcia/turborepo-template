// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector11Icon(props: Vector11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 24"}
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
          "M2.333 23.333h16.334A2.336 2.336 0 0021 21V3.5a2.336 2.336 0 00-2.333-2.333h-2.334C16.333.52 15.812 0 15.167 0H5.833c-.645 0-1.166.521-1.166 1.167H2.333A2.336 2.336 0 000 3.5V21a2.336 2.336 0 002.333 2.333zm0-19.833h2.334v2.333h11.666V3.5h2.334V21H2.333V3.5z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M9.333 13.517l-2.092-2.092-1.65 1.65 3.742 3.741 6.075-6.074-1.65-1.65-4.425 4.425z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector11Icon;
/* prettier-ignore-end */
