// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FacebooksvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FacebooksvgIcon(props: FacebooksvgIconProps) {
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
          "M11.164 17.498v-6.83h2.304l.343-2.675h-2.647V6.29c0-.772.215-1.3 1.322-1.3h1.404V2.606a18.615 18.615 0 00-2.056-.106c-2.037 0-3.435 1.243-3.435 3.526v1.962h-2.29v2.675h2.295v6.835h2.76z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FacebooksvgIcon;
/* prettier-ignore-end */
