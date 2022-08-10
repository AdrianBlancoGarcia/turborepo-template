// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon32IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon32Icon(props: Icon32IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 75 51"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M.098 17.233C.098 7.98 7.58.5 16.831.5s16.535 7.48 16.535 16.733C33.366 35.539 18.406 50.5.098 50.5c0 0 10.827-4.135 16.535-16.733-9.054 0-16.535-7.48-16.535-16.534zm41.535 0C41.633 7.98 49.113.5 58.168.5S74.9 7.98 74.9 17.233C74.9 35.539 59.94 50.5 41.633 50.5c0 0 10.827-4.135 16.535-16.733-9.054 0-16.535-7.48-16.535-16.534z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon32Icon;
/* prettier-ignore-end */
