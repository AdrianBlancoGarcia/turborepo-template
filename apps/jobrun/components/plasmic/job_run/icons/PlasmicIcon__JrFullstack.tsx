// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type JrFullstackIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function JrFullstackIcon(props: JrFullstackIconProps) {
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
          "M35 5.25H7c-1.93 0-3.5 1.57-3.5 3.5v24.5c0 1.93 1.57 3.5 3.5 3.5h28c1.93 0 3.5-1.57 3.5-3.5V8.75c0-1.93-1.57-3.5-3.5-3.5zm-28 28v-21h28l.004 21H7z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M16.263 16.263L9.775 22.75l6.488 6.487 2.474-2.474-4.013-4.013 4.013-4.013-2.474-2.474zm9.474 0l-2.474 2.474 4.012 4.013-4.012 4.013 2.474 2.474 6.487-6.487-6.487-6.487z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default JrFullstackIcon;
/* prettier-ignore-end */
