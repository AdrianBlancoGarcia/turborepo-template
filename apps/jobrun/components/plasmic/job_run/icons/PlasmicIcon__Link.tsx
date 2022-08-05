// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LinkIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LinkIcon(props: LinkIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 9"}
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
          "M7.5 8.333H4.167c-1.153 0-2.136-.406-2.948-1.219C.406 6.302 0 5.32 0 4.167S.406 2.03 1.22 1.218C2.03.406 3.013 0 4.166 0H7.5v1.667H4.167a2.41 2.41 0 00-1.771.729 2.41 2.41 0 00-.73 1.77c0 .695.244 1.285.73 1.771a2.41 2.41 0 001.77.73H7.5v1.666zM5 5V3.333h6.667V5H5zm4.167 3.333V6.667H12.5a2.41 2.41 0 001.77-.73c.487-.486.73-1.076.73-1.77 0-.695-.243-1.285-.73-1.771a2.41 2.41 0 00-1.77-.73H9.167V0H12.5c1.153 0 2.136.406 2.948 1.218.813.813 1.219 1.796 1.219 2.949 0 1.152-.406 2.135-1.219 2.947-.812.813-1.795 1.22-2.948 1.22H9.167z"
        }
        fill={"currentColor"}
        fillOpacity={".31"}
      ></path>
    </svg>
  );
}

export default LinkIcon;
/* prettier-ignore-end */
