// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon24Icon(props: Icon24IconProps) {
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
        strokeWidth={"2"}
        x1={"0"}
        y1={"50%"}
        x2={"100%"}
        y2={"50%"}
      ></line>
    </svg>
  );
}

export default Icon24Icon;
/* prettier-ignore-end */
