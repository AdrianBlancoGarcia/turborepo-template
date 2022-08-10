// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon19Icon(props: Icon19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
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
          "M5.333 9.333H20V12H5.333V9.333zm0 5.334H20v2.666H5.333v-2.666zm0 5.333h9.334v2.667H5.333V20zm20.399-3.61l-5.733 5.72-1.723-1.72-1.885 1.886 3.608 3.605 7.616-7.604-1.883-1.888z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon19Icon;
/* prettier-ignore-end */
