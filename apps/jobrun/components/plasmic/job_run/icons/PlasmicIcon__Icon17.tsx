// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon17Icon(props: Icon17IconProps) {
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
          "M5.5 15c.91 0 1.733-.358 2.357-.93l6.26 3.577A3.483 3.483 0 0014 18.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5c-.91 0-1.733.358-2.357.93l-6.26-3.577c.063-.247.103-.502.108-.768l6.151-3.515c.625.572 1.448.93 2.358.93C19.43 9 21 7.43 21 5.5S19.43 2 17.5 2 14 3.57 14 5.5c0 .296.048.578.117.853L8.433 9.602A3.496 3.496 0 005.5 8C3.57 8 2 9.57 2 11.5S3.57 15 5.5 15zm12 2c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5zm0-13c.827 0 1.5.673 1.5 1.5S18.327 7 17.5 7 16 6.327 16 5.5 16.673 4 17.5 4zm-12 6c.827 0 1.5.673 1.5 1.5S6.327 13 5.5 13 4 12.327 4 11.5 4.673 10 5.5 10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon17Icon;
/* prettier-ignore-end */
