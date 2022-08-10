// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon35IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon35Icon(props: Icon35IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M33.333 5H6.667a3.337 3.337 0 00-3.334 3.333v23.334A3.337 3.337 0 006.667 35h26.666a3.337 3.337 0 003.334-3.333V8.333A3.337 3.337 0 0033.333 5zM6.667 31.667v-20h26.666l.004 20H6.667z"
        }
        fill={"#68E1FD"}
      ></path>

      <path
        d={
          "M15.488 15.488L9.31 21.667l6.178 6.178 2.357-2.357-3.822-3.821 3.822-3.822-2.357-2.357zm9.024 0l-2.357 2.357 3.822 3.822-3.822 3.821 2.357 2.357 6.178-6.178-6.178-6.179z"
        }
        fill={"#68E1FD"}
      ></path>
    </svg>
  );
}

export default Icon35Icon;
/* prettier-ignore-end */
