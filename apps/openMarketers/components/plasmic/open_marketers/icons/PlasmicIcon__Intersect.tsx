// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IntersectIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IntersectIcon(props: IntersectIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 137 134"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M137 1.352V114c0 11.046-8.954 20-20 20H.936A120.159 120.159 0 010 119C0 53.278 53.278 0 119 0c6.119 0 12.13.462 18 1.352z"
        }
        fill={"#FBD0E6"}
        fillOpacity={".7"}
      ></path>
    </svg>
  );
}

export default IntersectIcon;
/* prettier-ignore-end */
