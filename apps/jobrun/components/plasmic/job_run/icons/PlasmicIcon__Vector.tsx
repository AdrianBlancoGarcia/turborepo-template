// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
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
          "M15.767.32A12.927 12.927 0 0012.913 0C10.76 0 9.027.594 7.904 1.718c-1.24 1.24-2.19 2.209-2.646 2.676C4.247 4.28 1.861 4.225.244 5.843a.83.83 0 000 1.178l9.428 9.427a.831.831 0 001.178 0c1.628-1.627 1.578-4.011 1.473-5.008l2.653-2.652c2.659-2.66 1.45-7.652 1.397-7.863a.832.832 0 00-.606-.605zm-1.97 7.29l-2.946 2.946a.833.833 0 00-.228.752c.005.021.34 1.869-.446 3.287l-8.08-8.078c1.417-.782 3.285-.42 3.29-.42.276.058.57-.03.77-.236.002-.003 1.171-1.211 2.926-2.966 1.015-1.015 2.643-1.228 3.83-1.228.79 0 1.495.092 1.944.169.203 1.192.52 4.193-1.06 5.774z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M11.44 6.92a1.667 1.667 0 100-3.334 1.667 1.667 0 000 3.334zM2.5 11.667C.833 12.5.833 15.833.833 15.833s2.5 0 4.167-1.666l-2.5-2.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
