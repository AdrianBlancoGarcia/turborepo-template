// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse30IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse30Icon(props: Ellipse30IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 238 238"}
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

      <circle
        cx={"119"}
        cy={"119"}
        r={"119"}
        fill={"currentColor"}
        fillOpacity={".45"}
      ></circle>
    </svg>
  );
}

export default Ellipse30Icon;
/* prettier-ignore-end */
