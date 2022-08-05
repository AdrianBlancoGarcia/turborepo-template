// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconIcon(props: IconIconProps) {
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
          "M17.433 1.987a12.925 12.925 0 00-2.853-.32c-2.154 0-3.886.594-5.01 1.717a297.39 297.39 0 00-2.645 2.677c-1.012-.114-3.397-.17-5.014 1.448a.83.83 0 000 1.178l9.427 9.428a.831.831 0 001.179 0c1.628-1.627 1.578-4.012 1.472-5.008l2.653-2.653c2.66-2.659 1.45-7.652 1.398-7.862a.833.833 0 00-.607-.605zm-1.969 7.29l-2.947 2.946a.832.832 0 00-.227.752c.004.02.34 1.868-.447 3.287L3.764 8.183c1.417-.781 3.284-.42 3.29-.42.275.059.57-.03.77-.236.002-.002 1.171-1.21 2.926-2.965 1.015-1.015 2.643-1.229 3.83-1.229.79 0 1.494.093 1.943.17.204 1.192.521 4.193-1.059 5.774z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M13.107 8.586a1.667 1.667 0 100-3.333 1.667 1.667 0 000 3.333zm-8.94 4.747C2.5 14.167 2.5 17.5 2.5 17.5s2.5 0 4.167-1.667l-2.5-2.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */
