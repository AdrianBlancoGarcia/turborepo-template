// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TwittersvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TwittersvgIcon(props: TwittersvgIconProps) {
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
          "M13.689 5.332c.009.116.009.232.009.348 0 3.55-2.702 7.641-7.64 7.641a7.587 7.587 0 01-4.124-1.206c.216.025.424.033.648.033a5.38 5.38 0 003.334-1.147 2.69 2.69 0 01-2.511-1.862c.166.025.333.041.507.041.24 0 .483-.033.708-.091a2.685 2.685 0 01-2.154-2.635V6.42c.358.2.774.324 1.214.341a2.681 2.681 0 01-1.198-2.236c0-.499.133-.956.366-1.355a7.638 7.638 0 005.537 2.81 3.05 3.05 0 01-.067-.615 2.684 2.684 0 012.686-2.685c.773 0 1.47.324 1.962.848a5.305 5.305 0 001.704-.649 2.68 2.68 0 01-1.181 1.48 5.382 5.382 0 001.546-.416 5.763 5.763 0 01-1.346 1.389z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TwittersvgIcon;
/* prettier-ignore-end */
