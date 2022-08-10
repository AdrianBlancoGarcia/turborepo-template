// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
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
          "M20.96 7.608c.026-.203.04-.406.04-.608 0-2.776-2.5-5.003-5.274-4.626A4.661 4.661 0 0011.666 0a4.66 4.66 0 00-4.058 2.374C4.828 1.997 2.333 4.224 2.333 7c0 .202.014.405.041.608A4.664 4.664 0 000 11.667c0 1.709.936 3.249 2.374 4.059-.027.202-.04.405-.04.607 0 2.776 2.494 4.997 5.274 4.626a4.661 4.661 0 004.059 2.374 4.66 4.66 0 004.059-2.374C18.5 21.33 21 19.11 21 16.333c0-.201-.014-.404-.04-.607a4.664 4.664 0 002.373-4.06 4.662 4.662 0 00-2.374-4.058zm-10.513 9.21L6.17 12.487l1.662-1.638 2.633 2.667 5.048-5.01 1.643 1.657-6.708 6.657z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
