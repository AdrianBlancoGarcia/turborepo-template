// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon13Icon(props: Icon13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5 5v14a1 1 0 001 1h3v-2H7V6h2V4H6a1 1 0 00-1 1zm14.242-.97l-8-2A1 1 0 0010 3v18a.998.998 0 001.242.97l8-2A1 1 0 0020 19V5a1 1 0 00-.758-.97zM15 12.188a1.001 1.001 0 01-2 0v-.377a1 1 0 112 .001v.376z"
        }
        fill={"#1BD58F"}
      ></path>
    </svg>
  );
}

export default Icon13Icon;
/* prettier-ignore-end */
