// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse66IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse66Icon(props: Ellipse66IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 26"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"13"}
        cy={"13"}
        r={"11"}
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"4"}
      ></circle>
    </svg>
  );
}

export default Ellipse66Icon;
/* prettier-ignore-end */
