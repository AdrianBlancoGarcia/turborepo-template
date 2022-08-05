// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon12Icon(props: Icon12IconProps) {
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
          "M16.902 8.63H9.963v2.876h3.994c-.372 1.827-1.928 2.877-3.994 2.877a4.391 4.391 0 01-4.399-4.4 4.39 4.39 0 014.4-4.399c1.048 0 1.997.373 2.741.982L14.872 4.4c-1.32-1.15-3.013-1.86-4.909-1.86a7.423 7.423 0 00-7.445 7.444 7.423 7.423 0 007.445 7.445c3.723 0 7.108-2.707 7.108-7.445 0-.44-.068-.914-.169-1.354z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon12Icon;
/* prettier-ignore-end */
