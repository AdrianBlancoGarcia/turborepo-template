// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NoLockIconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NoLockIconIcon(props: NoLockIconIconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M5.25 12.6c0-.746.604-1.35 1.35-1.35h4.9a.75.75 0 010 1.5H6.75v6.5h10.5v-.75a.75.75 0 011.5 0v.9a1.35 1.35 0 01-1.35 1.35H6.6a1.35 1.35 0 01-1.35-1.35v-6.8zm4.56-8.893c.616-.292 1.344-.457 2.19-.457 1.844 0 3.07.785 3.809 1.812.711.988.941 2.151.941 2.938v4a.75.75 0 01-1.5 0V8c0-.547-.17-1.383-.659-2.062-.46-.64-1.235-1.188-2.591-1.188-.647 0-1.152.125-1.548.313a.75.75 0 11-.642-1.356z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M15.25 12a.75.75 0 01.75-.75h1.4c.746 0 1.35.604 1.35 1.35v.4a.75.75 0 01-1.5 0v-.25H16a.75.75 0 01-.75-.75zM8 7.25a.75.75 0 01.75.75v4a.75.75 0 01-1.5 0V8A.75.75 0 018 7.25z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M2.47 2.47a.75.75 0 011.06 0l18 18a.75.75 0 11-1.06 1.06l-18-18a.75.75 0 010-1.06z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NoLockIconIcon;
/* prettier-ignore-end */
