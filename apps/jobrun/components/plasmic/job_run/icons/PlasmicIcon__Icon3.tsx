// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon3Icon(props: Icon3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1038 1131"}
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
          "M969.207 344.823c97.553 197.595 89.713 427.256-13.065 575.452-101.903 148.195-297 214.065-486.001 210.595-189-4.33-371.033-78-438.098-206.261-67.935-128.264-20.032-310.259 70.549-503.521C194.044 226.959 328.173 22.431 498.012 1.631 666.98-18.302 871.658 147.228 969.207 344.823z"
        }
        fill={"currentColor"}
        fillOpacity={".26"}
      ></path>
    </svg>
  );
}

export default Icon3Icon;
/* prettier-ignore-end */
