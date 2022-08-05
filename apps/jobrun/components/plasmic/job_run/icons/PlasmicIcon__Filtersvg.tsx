// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FiltersvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FiltersvgIcon(props: FiltersvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <mask
        id={"k9qR78nGpa"}
        style={{
          maskType: 'alpha"',
        }}
        maskUnits={"userSpaceOnUse"}
        x={"0"}
        y={"0"}
        width={"24"}
        height={"24"}
      >
        <path fill={"#D9D9D9"} d={"M0 0h24v24H0z"}></path>
      </mask>

      <g mask={"url(#k9qR78nGpa)"}>
        <path
          d={"M10 18v-2h4v2h-4zm-4-5v-2h12v2H6zM3 8V6h18v2H3z"}
          fill={"#fff"}
        ></path>
      </g>
    </svg>
  );
}

export default FiltersvgIcon;
/* prettier-ignore-end */
