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
          "M10 5c2.947 0 5.697 1.128 7.744 3.174l1.178-1.178c-2.36-2.362-5.53-3.663-8.922-3.663-3.393.001-6.562 1.301-8.923 3.663l1.179 1.178C4.302 6.128 7.052 5 10 5zm4.726 6.922c-2.562-2.561-6.89-2.561-9.452 0l1.178 1.179c1.923-1.923 5.173-1.923 7.095 0l1.179-1.179z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M17.03 9.41C13.22 5.6 6.78 5.6 2.97 9.41l1.178 1.179c3.173-3.173 8.532-3.173 11.704 0l1.179-1.178zM10 16.667a1.667 1.667 0 100-3.334 1.667 1.667 0 000 3.334z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon18Icon;
/* prettier-ignore-end */
