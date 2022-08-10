// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector20Icon(props: Vector20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 23"}
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
          "M19.472 10.507a7.56 7.56 0 001.001-4.587c-.238-2.379-1.566-4.481-3.737-5.92l-1.473 2.221c1.492.99 2.4 2.399 2.557 3.966a4.924 4.924 0 01-1.43 3.981l-1.589 1.59 2.158.633c5.642 1.653 5.708 7.328 5.708 7.385h2.666c0-2.385-1.274-7.047-5.86-9.27z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M10 11.776a5.339 5.339 0 005.333-5.333A5.339 5.339 0 0010 1.109a5.339 5.339 0 00-5.333 5.334A5.339 5.339 0 0010 11.776zm0-8a2.67 2.67 0 012.667 2.667A2.67 2.67 0 0110 9.109a2.67 2.67 0 01-2.667-2.666A2.67 2.67 0 0110 3.776zm2 9.333H8c-4.412 0-8 3.588-8 8v1.334h2.667v-1.334A5.339 5.339 0 018 15.776h4a5.339 5.339 0 015.333 5.333v1.334H20v-1.334c0-4.412-3.588-8-8-8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector20Icon;
/* prettier-ignore-end */
