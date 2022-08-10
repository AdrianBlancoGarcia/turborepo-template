// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon18Icon(props: Icon18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
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
          "M17.333 4h5.334v2.667h-5.334V4zM4 10.667h5.333v2.666H4v-2.666zm0 10.666h5.333V24H4v-2.667zM2.667 16h5.32v2.667h-5.32V16zm26.276-7.057l-1.886-1.886-2.276 2.276A9.25 9.25 0 0020 8c-5.145 0-9.333 4.188-9.333 9.333 0 5.146 4.188 9.334 9.333 9.334 5.145 0 9.333-4.188 9.333-9.334a9.29 9.29 0 00-2.473-6.306l2.083-2.084zm-7.61 9.724h-2.666v-6.723h2.666v6.723z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon18Icon;
/* prettier-ignore-end */
