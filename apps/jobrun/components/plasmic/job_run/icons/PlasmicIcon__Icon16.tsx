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
      viewBox={"0 0 16 16"}
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
          "M8 4c2.358 0 4.558.902 6.195 2.54l.943-.943c-1.889-1.89-4.424-2.93-7.138-2.93-2.714 0-5.25 1.04-7.138 2.93l.943.942C3.442 4.902 5.642 4 8 4zm3.78 5.538c-2.049-2.05-5.511-2.05-7.56 0l.942.943c1.538-1.538 4.138-1.538 5.676 0l.943-.943z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M13.625 7.529c-3.048-3.05-8.201-3.05-11.249 0l.943.942c2.538-2.538 6.825-2.538 9.363 0l.943-.942zM8 13.333a1.333 1.333 0 100-2.666 1.333 1.333 0 000 2.666z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon16Icon;
/* prettier-ignore-end */
