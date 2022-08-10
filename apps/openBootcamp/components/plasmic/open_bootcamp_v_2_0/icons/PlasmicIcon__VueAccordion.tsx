// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VueAccordionIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VueAccordionIcon(props: VueAccordionIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
        d={"M5.493 3H1.61L12 21 22.389 3h-3.883L12 14.265 5.493 3z"}
        fill={"currentColor"}
      ></path>

      <path
        d={"M6.05 3L12 13.299 17.948 3h-3.554L12 7.15 9.605 3H6.05z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VueAccordionIcon;
/* prettier-ignore-end */
