// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector5Icon(props: Vector5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1127 1752"}
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
          "M1052.31 534.022c105.91 306.013 97.4 661.688-14.19 891.198-110.637 229.51-322.462 331.51-527.668 326.14-205.206-6.71-402.846-120.79-475.661-319.43-73.76-198.64-21.75-480.496 76.597-779.798C210.681 351.488 356.311 34.738 540.713 2.526c183.455-30.87 405.683 225.483 511.597 531.496z"
        }
        fill={"currentColor"}
        fillOpacity={".63"}
      ></path>
    </svg>
  );
}

export default Vector5Icon;
/* prettier-ignore-end */
