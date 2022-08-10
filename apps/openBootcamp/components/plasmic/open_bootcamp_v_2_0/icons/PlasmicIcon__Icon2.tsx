// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon2Icon(props: Icon2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
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
          "M16 2.667C8.648 2.667 2.667 8.648 2.667 16S8.648 29.333 16 29.333 29.333 23.352 29.333 16 23.352 2.667 16 2.667zm10.575 12h-3.686A19.56 19.56 0 0020.5 6.343c3.25 1.521 5.61 4.628 6.075 8.324zm-9.868-9.298c1.38 1.819 3.236 5.04 3.502 9.298H12.04c.185-3.462 1.325-6.704 3.268-9.299.23-.013.459-.035.692-.035.239 0 .472.022.707.036zm-5.123.934c-1.312 2.521-2.07 5.38-2.21 8.364h-3.95a10.684 10.684 0 016.159-8.364zm-6.159 11.03h3.966c.181 3.172.886 5.971 2.074 8.307-3.233-1.528-5.577-4.624-6.04-8.307zm9.842 9.298c-1.868-2.264-2.971-5.436-3.212-9.298h8.15c-.277 3.698-1.489 6.928-3.47 9.296-.243.016-.486.038-.735.038-.248 0-.49-.022-.733-.036zm5.348-1.03c1.273-2.392 2.05-5.201 2.254-8.268h3.704c-.457 3.652-2.768 6.73-5.958 8.268z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon2Icon;
/* prettier-ignore-end */
