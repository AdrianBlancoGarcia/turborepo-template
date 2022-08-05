// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type JrRemoteIconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function JrRemoteIconIcon(props: JrRemoteIconIconProps) {
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
          "M17.501 2.917C9.46 2.917 2.918 9.459 2.918 17.5S9.46 32.083 17.501 32.083c8.042 0 14.584-6.542 14.584-14.583S25.543 2.917 17.5 2.917zM5.835 17.5c0-1.311.227-2.57.628-3.746l5.205 5.204v2.917l4.375 4.375v2.816C10.299 28.344 5.835 23.438 5.835 17.5zm20.898 7.107c-.953-.768-2.396-1.274-3.398-1.274v-1.458a2.918 2.918 0 00-2.917-2.917h-5.833v-4.375a2.918 2.918 0 002.916-2.916v-1.459h1.459a2.918 2.918 0 002.916-2.916v-.6c4.27 1.734 7.292 5.923 7.292 10.808a11.59 11.59 0 01-2.435 7.107z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default JrRemoteIconIcon;
/* prettier-ignore-end */
