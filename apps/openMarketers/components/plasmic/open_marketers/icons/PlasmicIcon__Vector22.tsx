// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector22Icon(props: Vector22IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 27 18"}
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
          "M13.333 0C6.707 0 0 2.061 0 6v5.333c0 3.939 6.707 6 13.333 6 6.627 0 13.334-2.061 13.334-6V6c0-3.939-6.707-6-13.334-6zM2.667 11.333V9.737c.768.447 1.668.831 2.666 1.147v2.508c-1.749-.685-2.666-1.501-2.666-2.059zm16 .198v2.628a25.06 25.06 0 01-4 .477v-2.667a29.008 29.008 0 004-.438zM12 14.637a25.047 25.047 0 01-4-.477v-2.628a29.41 29.41 0 004 .44v2.665zm9.333-1.245v-2.508c.999-.316 1.899-.699 2.667-1.147v1.596c0 .558-.916 1.374-2.667 2.059zm-8-4.059C6.431 9.333 2.667 7.132 2.667 6c0-1.132 3.764-3.333 10.666-3.333C20.236 2.667 24 4.868 24 6c0 1.132-3.764 3.333-10.667 3.333z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector22Icon;
/* prettier-ignore-end */
