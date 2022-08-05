// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector3Icon(props: Vector3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 62 62"}
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
          "M23.116 61.666c6.176 0 11.985-2.405 16.382-6.805l21.287-21.88a3.085 3.085 0 00-2.21-5.232h-10.18L61.269 4.581a3.083 3.083 0 00-4.19-4.193L35.156 12.567l1.776-8.877A3.08 3.08 0 0031.91.74L6.762 22.19c-9.016 9.016-9.016 23.686 0 32.702a22.978 22.978 0 0016.354 6.774zm-12.173-34.95L29.14 11.204l-2.646 13.228 24.143-13.413-10.175 18.315s0 .003-.004.003l-2.54 4.579h13.354L35.107 50.532a16.846 16.846 0 01-11.991 4.967 16.85 16.85 0 01-11.994-4.967c-6.608-6.61-6.608-17.371-.18-23.816z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M23.116 49.333c5.96 0 10.792-4.832 10.792-10.792 0-4.317-2.553-8.017-6.216-9.74.015.163.049.324.049.49a4.625 4.625 0 11-9.25 0c0-.166.034-.327.05-.49-3.664 1.723-6.217 5.423-6.217 9.74 0 5.96 4.832 10.792 10.792 10.792z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector3Icon;
/* prettier-ignore-end */
