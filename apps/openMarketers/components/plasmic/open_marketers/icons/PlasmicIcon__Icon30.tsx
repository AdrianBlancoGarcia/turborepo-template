// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon30IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon30Icon(props: Icon30IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      width={"1em"}
      height={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <line
        stroke={"currentColor"}
        strokeWidth={"3"}
        x1={"50%"}
        y1={"0"}
        x2={"50%"}
        y2={"100%"}
      ></line>
    </svg>
  );
}

export default Icon30Icon;
/* prettier-ignore-end */
