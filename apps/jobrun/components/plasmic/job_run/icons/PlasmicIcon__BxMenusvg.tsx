// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BxMenusvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BxMenusvgIcon(props: BxMenusvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
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

      <path d={"M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"}></path>
    </svg>
  );
}

export default BxMenusvgIcon;
/* prettier-ignore-end */
