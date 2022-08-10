// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InstagramsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InstagramsvgIcon(props: InstagramsvgIconProps) {
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
          "M8.6 4.918a3.082 3.082 0 100 6.163 3.082 3.082 0 000-6.163zm0 5.085a2.003 2.003 0 110-4.005 2.003 2.003 0 010 4.005zm3.204-4.48a.719.719 0 100-1.437.719.719 0 000 1.437z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M14.289 4.075a3.07 3.07 0 00-1.755-1.755 4.404 4.404 0 00-1.458-.28c-.642-.028-.845-.036-2.473-.036s-1.837 0-2.473.036a4.37 4.37 0 00-1.456.28 3.066 3.066 0 00-1.756 1.755 4.39 4.39 0 00-.28 1.457c-.028.641-.036.845-.036 2.473s0 1.836.037 2.474c.01.498.104.99.28 1.458a3.071 3.071 0 001.755 1.754c.464.182.957.284 1.457.3.642.028.845.037 2.473.037s1.837 0 2.474-.037a4.41 4.41 0 001.457-.28 3.075 3.075 0 001.755-1.754c.176-.467.27-.96.28-1.458.028-.641.037-.844.037-2.473s0-1.835-.037-2.473a4.387 4.387 0 00-.281-1.478zm-.812 6.354a3.364 3.364 0 01-.207 1.126 1.994 1.994 0 01-1.142 1.14 3.324 3.324 0 01-1.113.208c-.633.029-.812.036-2.436.036-1.625 0-1.791 0-2.437-.036a3.306 3.306 0 01-1.112-.208 1.99 1.99 0 01-1.146-1.14 3.388 3.388 0 01-.208-1.113c-.028-.633-.035-.812-.035-2.436 0-1.625 0-1.79.035-2.437.005-.384.074-.764.208-1.124A1.99 1.99 0 015.03 3.303a3.34 3.34 0 011.112-.207c.634-.029.812-.037 2.437-.037 1.625 0 1.791 0 2.436.037.38.005.757.075 1.113.207.524.202.938.617 1.142 1.142.13.356.2.732.207 1.112.029.634.036.812.036 2.437 0 1.624 0 1.799-.029 2.436h-.007z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default InstagramsvgIcon;
/* prettier-ignore-end */
