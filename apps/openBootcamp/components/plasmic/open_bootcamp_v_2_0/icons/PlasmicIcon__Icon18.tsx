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
      viewBox={"0 0 71 71"}
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
          "M24.343 18.473L7.591 35.224l16.752 16.752 4.151-4.15-12.602-12.602 12.602-12.602-4.15-4.15zm21.763 33.504L62.86 35.225 46.106 18.472l-4.15 4.151 12.602 12.602-12.602 12.602 4.15 4.15z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon18Icon;
/* prettier-ignore-end */
