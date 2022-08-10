// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon7Icon(props: Icon7IconProps) {
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
          "M27.059 11.056l-5.734 5.723-1.722-1.723-1.886 1.885 3.608 3.606 7.616-7.603-1.882-1.888zm-21.726-.39c0 3.04 2.294 5.334 5.334 5.334C13.707 16 16 13.707 16 10.667s-2.293-5.334-5.333-5.334-5.334 2.294-5.334 5.334zm8 0c0 1.571-1.096 2.667-2.666 2.667C9.096 13.333 8 12.237 8 10.667 8 9.096 9.096 8 10.667 8c1.57 0 2.666 1.096 2.666 2.667zM5.333 24c0-2.205 1.795-4 4-4H12c2.205 0 4 1.795 4 4v1.333h2.667V24A6.674 6.674 0 0012 17.333H9.333A6.674 6.674 0 002.667 24v1.333h2.666V24z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon7Icon;
/* prettier-ignore-end */
