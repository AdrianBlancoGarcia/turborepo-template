// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon34IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon34Icon(props: Icon34IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.125 6.875H4.009l3.308-3.308-.884-.884L1.616 7.5l4.817 4.817.884-.884-3.308-3.308h9.116v-1.25z"
        }
        fill={"#616161"}
      ></path>
    </svg>
  );
}

export default Icon34Icon;
/* prettier-ignore-end */
