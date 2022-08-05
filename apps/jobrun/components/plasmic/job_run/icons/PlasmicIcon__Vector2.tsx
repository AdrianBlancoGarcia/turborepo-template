// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector2Icon(props: Vector2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 60 60"}
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
          "M54 0H6C2.691 0 0 2.99 0 6.667V20c0 3.677 2.691 6.667 6 6.667h48c3.309 0 6-2.99 6-6.667V6.667C60 2.99 57.309 0 54 0zM6 20V6.667h48L54.006 20H6zm48 13.333H6c-3.309 0-6 2.99-6 6.667v13.333C0 57.01 2.691 60 6 60h48c3.309 0 6-2.99 6-6.667V40c0-3.677-2.691-6.667-6-6.667zm-48 20V40h48l.006 13.333H6z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M45 10h6v6.667h-6V10zm-9 0h6v6.667h-6V10zm9 33.333h6V50h-6v-6.667zm-9 0h6V50h-6v-6.667z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
