// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type JrExperienciaIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function JrExperienciaIcon(props: JrExperienciaIconProps) {
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
          "M35.985 5.844a1.754 1.754 0 00-1.73-.138l-29.75 14a1.75 1.75 0 00.045 3.187L14 27.028v11.764l10.213-7.295 8.337 3.648a1.75 1.75 0 001.61-.108c.487-.297.8-.811.838-1.38l1.75-26.25a1.758 1.758 0 00-.763-1.563zM31.67 30.94l-9.22-4.035L28 16.04l-13.386 7.44-5.13-2.245L33.058 10.14l-1.388 20.8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default JrExperienciaIcon;
/* prettier-ignore-end */
