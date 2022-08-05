// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon8Icon(props: Icon8IconProps) {
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
          "M10 1.667c-4.595 0-8.333 3.738-8.333 8.333 0 4.595 3.738 8.333 8.333 8.333 4.595 0 8.333-3.738 8.333-8.333 0-4.595-3.738-8.333-8.333-8.333zM3.333 10c0-.75.13-1.468.36-2.14l2.974 2.973V12.5l2.5 2.5v1.61c-3.283-.413-5.834-3.217-5.834-6.61zm11.942 4.06c-.544-.438-1.37-.727-1.942-.727V12.5c0-.92-.746-1.667-1.666-1.667H8.333v-2.5c.92 0 1.667-.746 1.667-1.666v-.834h.833c.92 0 1.667-.746 1.667-1.666v-.343c2.44.991 4.167 3.384 4.167 6.176 0 1.53-.523 2.935-1.392 4.06z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon8Icon;
/* prettier-ignore-end */
