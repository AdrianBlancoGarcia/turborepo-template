// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GmailsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GmailsvgIcon(props: GmailsvgIconProps) {
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
          "M16.903 8.63h-6.94v2.876h3.994c-.372 1.827-1.928 2.877-3.993 2.877a4.391 4.391 0 01-4.4-4.4 4.392 4.392 0 014.4-4.399c1.049 0 1.997.373 2.741.982L14.872 4.4c-1.32-1.15-3.013-1.86-4.908-1.86a7.423 7.423 0 00-7.445 7.444 7.423 7.423 0 007.445 7.445c3.722 0 7.107-2.707 7.107-7.445 0-.44-.067-.914-.168-1.354z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GmailsvgIcon;
/* prettier-ignore-end */
