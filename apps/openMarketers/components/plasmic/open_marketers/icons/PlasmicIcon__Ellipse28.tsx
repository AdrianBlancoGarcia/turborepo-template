// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse28IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse28Icon(props: Ellipse28IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 238 238"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"119"} cy={"119"} r={"119"} fill={"#FEF2F7"}></circle>
    </svg>
  );
}

export default Ellipse28Icon;
/* prettier-ignore-end */
