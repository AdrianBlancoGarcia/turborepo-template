// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconsvgIcon(props: IconsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 50 50"}
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
          "M33.943 19.36l-8.944 8.944-8.944-8.944-2.946 2.946L25 34.196l11.89-11.89-2.946-2.946z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsvgIcon;
/* prettier-ignore-end */
