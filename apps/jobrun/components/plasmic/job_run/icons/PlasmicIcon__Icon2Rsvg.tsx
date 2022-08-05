// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon2RsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon2RsvgIcon(props: Icon2RsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 21"}
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
          "M2.689 11.137l12.153-.212-4.333 4.487 1.198 1.158 6.31-6.534-6.534-6.31-1.157 1.2 4.487 4.333L2.66 9.47l.029 1.666z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon2RsvgIcon;
/* prettier-ignore-end */
