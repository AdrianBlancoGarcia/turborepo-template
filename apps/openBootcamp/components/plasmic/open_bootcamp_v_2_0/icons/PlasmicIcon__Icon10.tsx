// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon10Icon(props: Icon10IconProps) {
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
          "M11.057 8.39L3.447 16l7.61 7.61 1.886-1.886L7.219 16l5.724-5.724-1.886-1.885zm9.886 15.22L28.552 16l-7.61-7.61-1.885 1.886L24.781 16l-5.724 5.724 1.886 1.885z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon10Icon;
/* prettier-ignore-end */
