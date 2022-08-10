// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group4Icon(props: Group4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 24"}
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
          "M16.432 12.547a1.264 1.264 0 100 1.787 1.271 1.271 0 000-1.787zm-2.494 3.489a1.263 1.263 0 101.264 1.263 1.278 1.278 0 00-1.264-1.263zM4.956 9.58A1.263 1.263 0 106.22 8.317 1.28 1.28 0 004.956 9.58zm8.984 1.264a1.263 1.263 0 10-1.262-1.264 1.279 1.279 0 001.263 1.264zm-7.718 5.192a1.263 1.263 0 000 2.527 1.263 1.263 0 100-2.527zm3.856 1.603a1.23 1.23 0 00-1.157.78 1.188 1.188 0 000 .956c.064.152.153.293.264.415a1.258 1.258 0 10.893-2.151z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M20.16 13.44a10.03 10.03 0 00-2.39-6.502l.71-.71.246.246a.84.84 0 001.188-1.188l-1.68-1.68a.84.84 0 00-1.188 1.188l.246.246-.71.71a10.026 10.026 0 00-5.66-2.347V1.68H12.6a.84.84 0 100-1.68H7.56a.84.84 0 100 1.68h1.683L9.24 4.195V12.6H.84a.84.84 0 00-.84.84 10.08 10.08 0 1020.16 0zm-10.08 8.4a8.412 8.412 0 01-8.357-7.56h8.357a.84.84 0 00.84-.84V5.082a8.401 8.401 0 01-.84 16.758z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group4Icon;
/* prettier-ignore-end */
