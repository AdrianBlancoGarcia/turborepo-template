// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector16Icon(props: Vector16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1206 700"}
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
          "M1034.37 46.854c-52.069 42.584-80.908 95.489-108.241 147.4-27.334 51.911-54.852 104.982-105.001 148.603-50.128 43.62-127.94 76.919-209.94 73.244C450.572 408.888 345.2 290.2 195.166 258.752c-48.292-10.128-104.774-8.829-145.041 11.689-56.337 28.698-62.918 87.034-31.067 129.369 31.85 42.336 92.809 71.283 154.984 93.929 47.756 17.396 97.657 32.138 149.023 44.049 64.733 14.991 134.892 26.68 183.39 59.081 61.474 41.079 48.87 73.231 15.121 103.131H1206V0h-94.34c-28.94 13.03-55.16 28.753-77.29 46.854z"
        }
        fill={"currentColor"}
        fillOpacity={".08"}
      ></path>
    </svg>
  );
}

export default Vector16Icon;
/* prettier-ignore-end */
