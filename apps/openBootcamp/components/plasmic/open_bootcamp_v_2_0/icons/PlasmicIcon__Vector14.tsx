// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector14Icon(props: Vector14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 15"}
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
          "M7.5 2.5h1.667v9.167H7.5V2.5zM10.833 0H12.5v11.667h-1.667V0zM4.167 5h1.666v6.667H4.167V5zM0 13.333h13.333V15H0v-1.667zM.833 7.5H2.5v4.167H.833V7.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector14Icon;
/* prettier-ignore-end */
