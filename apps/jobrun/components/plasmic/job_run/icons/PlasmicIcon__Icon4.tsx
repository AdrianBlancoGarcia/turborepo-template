// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon4Icon(props: Icon4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
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
          "M3.322 4.798a1.459 1.459 0 100-2.918 1.459 1.459 0 000 2.918zm2.836 1.105v8.093h2.513V9.994c0-1.056.198-2.079 1.508-2.079 1.291 0 1.307 1.207 1.307 2.145v3.936H14V9.558c0-2.18-.47-3.855-3.017-3.855-1.224 0-2.044.671-2.379 1.307H8.57V5.903H6.158zm-4.095 0H4.58v8.093H2.063V5.903z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon4Icon;
/* prettier-ignore-end */
