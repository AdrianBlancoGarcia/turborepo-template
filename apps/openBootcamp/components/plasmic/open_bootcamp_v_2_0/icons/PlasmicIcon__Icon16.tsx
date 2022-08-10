// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon16Icon(props: Icon16IconProps) {
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
          "M13.333 14.666H9.468l.001-.012a6.609 6.609 0 011.003-2.382c.237-.352.512-.684.813-.987a6.744 6.744 0 012.12-1.428c.403-.17.823-.301 1.251-.388.877-.18 1.81-.18 2.69 0a6.637 6.637 0 013.367 1.815L22.601 9.4a9.381 9.381 0 00-2.965-2 9.229 9.229 0 00-1.753-.544 9.438 9.438 0 00-3.759 0 9.253 9.253 0 00-1.755.545 9.388 9.388 0 00-4.107 3.379 9.303 9.303 0 00-1.405 3.34c-.037.18-.057.364-.084.546H2.667L8 20l5.333-5.334zm5.334 2.667h3.865l-.001.01a6.63 6.63 0 01-1.819 3.37 6.73 6.73 0 01-2.117 1.43c-.404.17-.824.3-1.251.387-.876.18-1.81.18-2.69 0a6.6 6.6 0 01-2.382-1.002 6.766 6.766 0 01-.987-.814L9.4 22.6a9.38 9.38 0 002.967 2c.565.24 1.156.422 1.753.544a9.429 9.429 0 003.757 0 9.173 9.173 0 001.756-.546 9.367 9.367 0 004.964-4.964c.238-.56.42-1.15.544-1.754.036-.18.058-.364.084-.547h4.108L24 12l-5.333 5.333z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon16Icon;
/* prettier-ignore-end */
