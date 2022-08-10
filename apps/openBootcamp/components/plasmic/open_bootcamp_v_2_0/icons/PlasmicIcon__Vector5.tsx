// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector5Icon(props: Vector5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 17"}
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
          "M0 0h14.667v2.667H0V0zm0 5.333h14.667V8H0V5.333zm0 5.334h9.333v2.666H0v-2.666zm20.399-3.611l-5.734 5.721-1.722-1.721-1.886 1.887 3.608 3.605 7.616-7.604L20.4 7.056z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector5Icon;
/* prettier-ignore-end */
