// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon3Icon(props: Icon3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
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
          "M10 1.667c-3.676 0-6.667 2.99-6.667 6.662C3.31 13.7 9.747 18.153 10 18.333c0 0 6.69-4.633 6.667-10A6.674 6.674 0 0010 1.667zm0 10A3.332 3.332 0 1110 5a3.332 3.332 0 110 6.667z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon3Icon;
/* prettier-ignore-end */
