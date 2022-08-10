// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon27IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon27Icon(props: Icon27IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 28"}
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
          "M23.333 7h-3.5V4.667A2.336 2.336 0 0017.5 2.333h-7a2.336 2.336 0 00-2.333 2.334V7h-3.5a2.336 2.336 0 00-2.334 2.333v12.834A2.336 2.336 0 004.667 24.5h18.666a2.336 2.336 0 002.334-2.333V9.333A2.336 2.336 0 0023.333 7zM17.5 4.667V7h-7V4.667h7zm5.833 4.666v3.5H4.667v-3.5h18.666zM4.667 22.167v-7h7V17.5h4.666v-2.333h7l.002 7H4.666z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon27Icon;
/* prettier-ignore-end */
