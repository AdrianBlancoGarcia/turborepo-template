// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector17Icon(props: Vector17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 27 19"}
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
          "M10.667 8H6.8c0-.004 0-.008.002-.012a6.607 6.607 0 011.002-2.383 6.738 6.738 0 012.933-2.415 6.53 6.53 0 011.251-.388c.878-.18 1.81-.18 2.691 0a6.638 6.638 0 013.367 1.815l1.888-1.883A9.378 9.378 0 0016.97.733a9.227 9.227 0 00-1.754-.544 9.438 9.438 0 00-3.759 0 9.253 9.253 0 00-1.754.545 9.386 9.386 0 00-4.107 3.379 9.304 9.304 0 00-1.405 3.34c-.038.18-.058.364-.084.547H0l5.333 5.333L10.667 8zM16 10.666h3.865l-.001.011a6.636 6.636 0 01-1.819 3.37 6.725 6.725 0 01-2.117 1.429 6.672 6.672 0 01-3.94.388 6.615 6.615 0 01-2.383-1.003 6.763 6.763 0 01-.986-.813l-1.886 1.885a9.374 9.374 0 002.967 2c.565.24 1.156.423 1.753.544a9.429 9.429 0 003.758 0 9.17 9.17 0 001.756-.545 9.381 9.381 0 002.964-1.999 9.36 9.36 0 002-2.965 9.3 9.3 0 00.544-1.755c.036-.18.057-.364.084-.547h4.108l-5.334-5.333L16 10.666z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector17Icon;
/* prettier-ignore-end */
