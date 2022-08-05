// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type JrBackendIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function JrBackendIcon(props: JrBackendIconProps) {
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
          "M35 29.75v-17.5c0-3.794-6.41-7-14-7s-14 3.206-14 7v17.5c0 3.794 6.41 7 14 7s14-3.206 14-7zm-14-21c6.46 0 10.38 2.637 10.5 3.49-.12.873-4.04 3.51-10.5 3.51s-10.38-2.637-10.5-3.49c.12-.873 4.04-3.51 10.5-3.51zm-10.5 8.062c2.588 1.482 6.365 2.438 10.5 2.438s7.912-.956 10.5-2.438v4.177c-.12.874-4.04 3.511-10.5 3.511S10.62 21.863 10.5 21v-4.188zm0 12.938v-4.188C13.088 27.044 16.865 28 21 28s7.912-.956 10.5-2.438v4.177c-.12.874-4.04 3.511-10.5 3.511s-10.38-2.637-10.5-3.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default JrBackendIcon;
/* prettier-ignore-end */
