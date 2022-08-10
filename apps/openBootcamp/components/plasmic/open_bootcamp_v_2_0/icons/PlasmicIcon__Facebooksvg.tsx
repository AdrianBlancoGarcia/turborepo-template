// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FacebooksvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FacebooksvgIcon(props: FacebooksvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 16"}
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
          "M9.532 13.998V8.534h1.843l.274-2.14H9.532V5.033c0-.617.172-1.04 1.058-1.04h1.122V2.085A14.89 14.89 0 0010.068 2c-1.63 0-2.748.995-2.748 2.82v1.57H5.488v2.14h1.836v5.468h2.208z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FacebooksvgIcon;
/* prettier-ignore-end */
