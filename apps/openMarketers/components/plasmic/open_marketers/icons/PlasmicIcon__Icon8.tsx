// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon8Icon(props: Icon8IconProps) {
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
          "M18.018 13.493L25.587 21l-7.57 7.508 2.465 2.485L30.557 21l-10.075-9.992-2.464 2.485z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M11.732 11.008l-2.464 2.485L16.837 21l-7.57 7.508 2.465 2.485L21.807 21l-10.075-9.992z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon8Icon;
/* prettier-ignore-end */
