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
      viewBox={"0 0 20 20"}
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
          "M10.833 5H12.5v9.167h-1.667V5zm3.334-2.5h1.666v11.667h-1.666V2.5zM7.5 7.5h1.667v6.667H7.5V7.5zm-4.167 8.333h13.334V17.5H3.333v-1.667zM4.167 10h1.666v4.167H4.167V10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon4Icon;
/* prettier-ignore-end */
