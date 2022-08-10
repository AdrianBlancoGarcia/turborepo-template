// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon11Icon(props: Icon11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
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
          "M10 11.667a3.337 3.337 0 003.333-3.334A3.337 3.337 0 0010 5a3.337 3.337 0 00-3.333 3.333A3.337 3.337 0 0010 11.667zm0-5A1.668 1.668 0 0110 10c-.92 0-1.667-.748-1.667-1.667S9.081 6.667 10 6.667z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M9.517 18.178a.831.831 0 00.966 0c.254-.179 6.208-4.478 6.184-9.845A6.674 6.674 0 0010 1.667c-3.676 0-6.667 2.99-6.667 6.662C3.31 13.7 9.263 18 9.517 18.18zM10 3.333c2.758 0 5 2.243 5 5.005.018 3.698-3.657 7.019-5 8.108-1.342-1.09-5.017-4.412-5-8.113 0-2.757 2.243-5 5-5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon11Icon;
/* prettier-ignore-end */
