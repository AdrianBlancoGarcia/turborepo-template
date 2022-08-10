// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon20Icon(props: Icon20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 71 71"}
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
          "M35.225 5.87C19.04 5.87 5.871 19.04 5.871 35.226S19.039 64.58 35.225 64.58 64.58 51.411 64.58 35.225 51.411 5.871 35.225 5.871zm0 52.839c-12.948 0-23.483-10.536-23.483-23.484 0-12.948 10.535-23.483 23.483-23.483s23.483 10.535 23.483 23.483-10.535 23.483-23.483 23.483z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M38.16 20.548h-5.87v17.613h17.612V32.29H38.16V20.548z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon20Icon;
/* prettier-ignore-end */
