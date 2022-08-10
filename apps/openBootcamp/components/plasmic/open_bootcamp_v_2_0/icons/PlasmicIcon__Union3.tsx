// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Union3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Union3Icon(props: Union3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 85 85"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M84.868 45.853c.146-1.848-1.37-3.353-3.224-3.353s-3.34 1.506-3.514 3.352a35.789 35.789 0 11-12.805-30.916c1.427 1.182 3.543 1.196 4.854-.115 1.31-1.31 1.319-3.447-.091-4.65a42.5 42.5 0 1014.78 35.682zm-31.122 2.195a2.59 2.59 0 01-1.295 2.24v.361l2.6-.006.005 2.599-25.985.056-.006-2.599 2.599-.005-.001-.361a2.592 2.592 0 01-1.304-2.235l-.031-14.292a2.601 2.601 0 012.593-2.604l18.19-.04a2.601 2.601 0 012.604 2.594l.03 14.292zM32.925 33.8l.031 14.292 18.193-.04-.034-14.291-18.19.039z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Union3Icon;
/* prettier-ignore-end */
