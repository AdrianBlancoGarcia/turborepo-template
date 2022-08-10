// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MenusvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MenusvgIcon(props: MenusvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 42 42"}
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
        d={"M7 10.5h28V14H7v-3.5zm0 8.75h28v3.5H7v-3.5zM7 28h28v3.5H7V28z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MenusvgIcon;
/* prettier-ignore-end */
