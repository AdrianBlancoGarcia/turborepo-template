// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Union4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Union4Icon(props: Union4IconProps) {
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
          "M84.868 45.853c.146-1.848-1.37-3.353-3.224-3.353s-3.34 1.506-3.514 3.352a35.789 35.789 0 11-12.805-30.916c1.427 1.182 3.543 1.196 4.854-.115 1.31-1.31 1.319-3.447-.091-4.65a42.5 42.5 0 1014.78 35.682zM31.622 31.205l20.788-.045a2.601 2.601 0 012.604 2.593l.04 18.19a2.601 2.601 0 01-2.594 2.604l-20.788.045a2.601 2.601 0 01-2.604-2.593l-.04-18.19a2.601 2.601 0 012.594-2.604zm20.806 7.75l-.013-5.196-20.788.044.012 5.198 20.789-.045zM31.644 41.6l.023 10.394 20.79-.045-.023-10.394-20.79.045zm15.577-6.53l-2.598.006.005 2.598 2.599-.005-.006-2.599zm3.898-.008l-2.599.005.006 2.599 2.598-.006-.005-2.598z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Union4Icon;
/* prettier-ignore-end */
