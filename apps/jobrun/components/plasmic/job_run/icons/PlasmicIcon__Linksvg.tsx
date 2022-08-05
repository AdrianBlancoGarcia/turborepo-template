// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LinksvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LinksvgIcon(props: LinksvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <mask
        id={"R43fTITOTa"}
        style={{
          maskType: 'alpha"',
        }}
        maskUnits={"userSpaceOnUse"}
        x={"0"}
        y={"0"}
        width={"20"}
        height={"20"}
      >
        <path fill={"#D9D9D9"} d={"M0 0h20v20H0z"}></path>
      </mask>

      <g mask={"url(#R43fTITOTa)"}>
        <path
          d={
            "M9.167 14.167H5.833c-1.152 0-2.135-.407-2.947-1.22-.813-.812-1.22-1.794-1.22-2.947s.407-2.136 1.22-2.948c.812-.813 1.795-1.219 2.947-1.219h3.334V7.5H5.833a2.41 2.41 0 00-1.77.73 2.41 2.41 0 00-.73 1.77c0 .694.243 1.285.73 1.77.486.487 1.076.73 1.77.73h3.334v1.667zm-2.5-3.334V9.167h6.666v1.666H6.667zm4.166 3.334V12.5h3.334c.694 0 1.284-.243 1.77-.73a2.41 2.41 0 00.73-1.77 2.41 2.41 0 00-.73-1.77 2.411 2.411 0 00-1.77-.73h-3.334V5.833h3.334c1.152 0 2.135.406 2.948 1.219.812.812 1.218 1.795 1.218 2.948s-.406 2.135-1.218 2.947c-.813.813-1.795 1.22-2.948 1.22h-3.334z"
          }
          fill={"#000"}
        ></path>
      </g>
    </svg>
  );
}

export default LinksvgIcon;
/* prettier-ignore-end */
