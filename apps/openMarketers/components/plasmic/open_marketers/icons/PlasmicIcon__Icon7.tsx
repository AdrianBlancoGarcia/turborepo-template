// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon7Icon(props: Icon7IconProps) {
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
          "M12.25 19.25h3.5v3.5h-3.5v-3.5zm0 7h3.5v3.5h-3.5v-3.5zm7-7h3.5v3.5h-3.5v-3.5zm0 7h3.5v3.5h-3.5v-3.5zm7-7h3.5v3.5h-3.5v-3.5zm0 7h3.5v3.5h-3.5v-3.5z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M8.75 38.5h24.5c1.93 0 3.5-1.57 3.5-3.5V10.5c0-1.93-1.57-3.5-3.5-3.5h-3.5V3.5h-3.5V7h-10.5V3.5h-3.5V7h-3.5c-1.93 0-3.5 1.57-3.5 3.5V35c0 1.93 1.57 3.5 3.5 3.5zM33.25 14l.002 21H8.75V14h24.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon7Icon;
/* prettier-ignore-end */
