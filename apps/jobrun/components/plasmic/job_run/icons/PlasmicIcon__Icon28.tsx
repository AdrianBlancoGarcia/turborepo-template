// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon28IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon28Icon(props: Icon28IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 35 35"}
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
          "M17.5 2.917C9.459 2.917 2.917 9.459 2.917 17.5S9.459 32.083 17.5 32.083 32.083 25.541 32.083 17.5 25.541 2.917 17.5 2.917zM5.833 17.5c0-1.311.228-2.57.629-3.746l5.205 5.204v2.917l4.375 4.375v2.816C10.297 28.344 5.833 23.438 5.833 17.5zm20.898 7.107c-.952-.768-2.396-1.274-3.398-1.274v-1.458a2.918 2.918 0 00-2.916-2.917h-5.834v-4.375a2.918 2.918 0 002.917-2.916v-1.459h1.458a2.918 2.918 0 002.917-2.916v-.6c4.27 1.734 7.292 5.923 7.292 10.808a11.59 11.59 0 01-2.436 7.107z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon28Icon;
/* prettier-ignore-end */
