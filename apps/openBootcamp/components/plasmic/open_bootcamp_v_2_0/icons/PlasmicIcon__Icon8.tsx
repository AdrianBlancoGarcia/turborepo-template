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
          "M13.308 19.748l-.623 3.635 3.266-1.716 3.265 1.716-.624-3.635 2.643-2.576-3.651-.53-1.633-3.309-1.634 3.308-3.65.531 2.641 2.576z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M25.333 5.333h-2.666V2.667H20v2.666h-8V2.667H9.333v2.666H6.667A2.67 2.67 0 004 8v18.667a2.67 2.67 0 002.667 2.666h18.666A2.67 2.67 0 0028 26.667V8a2.67 2.67 0 00-2.667-2.667zm.003 21.334H6.666v-16h18.667l.003 16z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon8Icon;
/* prettier-ignore-end */
