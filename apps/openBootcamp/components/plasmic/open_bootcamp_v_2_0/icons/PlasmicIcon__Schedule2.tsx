// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Schedule2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Schedule2Icon(props: Schedule2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 27 27"}
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
          "M16.969 19.063l2.156-2.094-4.531-4.532v-5.5h-3v6.75l5.375 5.376zm-3.875 7.125c-1.834 0-3.542-.344-5.125-1.032a13.26 13.26 0 01-4.14-2.796 13.266 13.266 0 01-2.798-4.141C.344 16.635 0 14.927 0 13.094c0-1.834.344-3.542 1.031-5.125A13.265 13.265 0 013.83 3.828a13.26 13.26 0 014.14-2.797C9.552.344 11.26 0 13.094 0c1.833 0 3.541.344 5.125 1.031a13.276 13.276 0 014.141 2.796 13.276 13.276 0 012.796 4.142c.688 1.583 1.032 3.291 1.032 5.125 0 1.833-.344 3.541-1.032 5.125a13.276 13.276 0 01-2.796 4.141 13.276 13.276 0 01-4.141 2.796c-1.584.688-3.292 1.032-5.125 1.032zm0-3.313c2.708 0 5.016-.948 6.922-2.844 1.906-1.896 2.859-4.208 2.859-6.937 0-2.73-.953-5.042-2.859-6.938-1.906-1.896-4.214-2.843-6.922-2.843-2.709 0-5.016.947-6.921 2.843-1.907 1.896-2.86 4.209-2.86 6.938s.953 5.041 2.86 6.937c1.905 1.896 4.212 2.844 6.92 2.844z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Schedule2Icon;
/* prettier-ignore-end */
