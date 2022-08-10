// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector18Icon(props: Vector18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 27 27"}
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
          "M9.352 26.667h1.333V24H9.367c-.411-.008-4.015-.23-4.015-5.333 0-2.658-.887-4.328-2.003-5.334C4.465 12.328 5.352 10.657 5.352 8c0-5.103 3.604-5.325 4-5.333h1.333V0H9.35C7.044.005 2.685 1.685 2.685 8c0 3.733-2.237 3.987-2.685 4l.019 2.667c.109 0 2.666.045 2.666 4 0 6.314 4.359 7.994 6.667 8zM26.685 12c-.109 0-2.666-.045-2.666-4 0-6.315-4.359-7.995-6.667-8h-1.333v2.667h1.318c.411.008 4.015.23 4.015 5.333 0 2.657.887 4.328 2.003 5.333-1.116 1.006-2.003 2.676-2.003 5.334 0 5.102-3.604 5.325-4 5.333h-1.333v2.667h1.336c2.305-.006 6.664-1.686 6.664-8 0-3.734 2.237-3.987 2.685-4L26.685 12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector18Icon;
/* prettier-ignore-end */
