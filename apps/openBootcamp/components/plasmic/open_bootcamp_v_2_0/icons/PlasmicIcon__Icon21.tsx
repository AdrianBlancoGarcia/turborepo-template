// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon21Icon(props: Icon21IconProps) {
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
          "M28.336 11.102l-7.425 7.423-7.424-7.423-2.474 2.474L18.436 21l-7.423 7.423 2.474 2.475 7.424-7.424 7.425 7.424 2.474-2.475L23.387 21l7.423-7.424-2.474-2.474z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon21Icon;
/* prettier-ignore-end */
