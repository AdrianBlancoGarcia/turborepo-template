// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Arrow1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Arrow1SvgIcon(props: Arrow1SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 82 24"}
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
          "M.94 13.06a1.5 1.5 0 010-2.12l9.545-9.547a1.5 1.5 0 112.122 2.122L4.12 12l8.486 8.485a1.5 1.5 0 11-2.122 2.122L.94 13.06zM82 13.5H2v-3h80v3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Arrow1SvgIcon;
/* prettier-ignore-end */
