// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector8Icon(props: Vector8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M22.073.448A18.096 18.096 0 0018.08 0c-3.016 0-5.44.832-7.013 2.405a430.42 430.42 0 00-3.704 3.747c-1.417-.16-4.757-.237-7.02 2.028a1.162 1.162 0 000 1.65L13.54 23.027a1.164 1.164 0 001.65 0c2.28-2.279 2.21-5.617 2.062-7.012l3.714-3.713C24.69 8.58 22.996 1.59 22.923 1.295a1.166 1.166 0 00-.85-.847zm-2.756 10.206l-4.126 4.124a1.166 1.166 0 00-.318 1.054c.006.029.475 2.615-.626 4.601L2.937 9.123c1.983-1.094 4.597-.588 4.606-.588.385.082.798-.042 1.076-.33.004-.003 1.64-1.695 4.098-4.152 1.42-1.421 3.7-1.72 5.362-1.72 1.104 0 2.091.13 2.72.237.285 1.67.73 5.87-1.482 8.084z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M16.016 9.688a2.333 2.333 0 100-4.667 2.333 2.333 0 000 4.667zM3.5 16.333c-2.333 1.167-2.333 5.834-2.333 5.834s3.5 0 5.833-2.334l-3.5-3.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector8Icon;
/* prettier-ignore-end */
