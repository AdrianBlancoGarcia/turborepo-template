// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowDownIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowDownIcon(props: ArrowDownIconProps) {
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
          "M28.513 16.263L21 23.775l-7.513-7.512-2.474 2.474L21 28.724l9.987-9.987-2.474-2.474z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowDownIcon;
/* prettier-ignore-end */
