// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon11Icon(props: Icon11IconProps) {
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
          "M16.36 6.665c.012.145.012.29.012.435 0 4.438-3.378 9.551-9.55 9.551a9.485 9.485 0 01-5.155-1.507c.27.03.53.041.81.041 1.57 0 3.014-.53 4.168-1.434a3.364 3.364 0 01-3.14-2.327c.208.03.417.051.635.051.3 0 .603-.041.884-.114a3.356 3.356 0 01-2.692-3.294v-.042c.448.25.967.405 1.517.426a3.352 3.352 0 01-1.497-2.795c0-.623.166-1.195.457-1.693a9.547 9.547 0 006.922 3.512 3.815 3.815 0 01-.083-.769 3.355 3.355 0 013.356-3.356c.967 0 1.84.405 2.453 1.06a6.631 6.631 0 002.13-.811 3.35 3.35 0 01-1.476 1.85 6.727 6.727 0 001.932-.52 7.203 7.203 0 01-1.682 1.736z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon11Icon;
/* prettier-ignore-end */
