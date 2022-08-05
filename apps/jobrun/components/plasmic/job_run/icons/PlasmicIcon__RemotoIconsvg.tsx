// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RemotoIconsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RemotoIconsvgIcon(props: RemotoIconsvgIconProps) {
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
          "M21 10.5c6.19 0 11.965 2.368 16.263 6.666l2.474-2.475C34.78 9.731 28.124 7 21 7c-7.124.002-13.78 2.732-18.737 7.691l2.474 2.475C9.035 12.868 14.81 10.5 21 10.5zm9.924 14.537c-5.38-5.38-14.469-5.38-19.848 0l2.474 2.475c4.037-4.038 10.862-4.038 14.9 0l2.474-2.475z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M35.765 19.762c-8.001-8.004-21.527-8.004-29.528 0l2.474 2.475c6.663-6.662 17.917-6.662 24.58 0l2.474-2.475zM21 35a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default RemotoIconsvgIcon;
/* prettier-ignore-end */
