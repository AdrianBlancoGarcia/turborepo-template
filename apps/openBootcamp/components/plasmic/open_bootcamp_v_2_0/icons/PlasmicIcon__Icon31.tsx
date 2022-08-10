// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon31IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon31Icon(props: Icon31IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 76 51"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M75.302 34.195c0 9.252-7.48 16.733-16.733 16.733-9.252 0-16.534-7.48-16.534-16.733C42.035 15.89 56.995.928 75.302.928c0 0-10.827 4.134-16.535 16.732 9.054 0 16.535 7.48 16.535 16.535zm-41.535 0c0 9.252-7.48 16.733-16.534 16.733C8.177 50.928.5 43.448.5 34.195.5 15.89 15.46.928 33.767.928c0 0-10.827 4.134-16.534 16.732 9.054 0 16.534 7.48 16.534 16.535z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon31Icon;
/* prettier-ignore-end */
