// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon4Icon(props: Icon4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
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
          "M16.667 5.833V4.167c0-.92-.748-1.667-1.667-1.667H4.167a2.503 2.503 0 00-2.5 2.5v10c0 1.834 1.495 2.5 2.5 2.5h12.5c.919 0 1.666-.747 1.666-1.667V7.5c0-.92-.747-1.667-1.666-1.667zM15 13.333h-1.667V10H15v3.333zm-10.833-7.5a.834.834 0 010-1.666H15v1.666H4.167z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon4Icon;
/* prettier-ignore-end */
