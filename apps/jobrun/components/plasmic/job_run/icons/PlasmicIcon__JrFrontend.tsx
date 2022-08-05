// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type JrFrontendIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function JrFrontendIcon(props: JrFrontendIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 42 42"}
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
          "M35 31.014A3.489 3.489 0 0036.75 28V8.75c0-1.93-1.57-3.5-3.5-3.5H8.75c-1.93 0-3.5 1.57-3.5 3.5V28A3.49 3.49 0 007 31.014v.486H3.5V35h35v-3.5H35v-.486zM8.75 28V8.75h24.5L33.254 28H8.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default JrFrontendIcon;
/* prettier-ignore-end */
