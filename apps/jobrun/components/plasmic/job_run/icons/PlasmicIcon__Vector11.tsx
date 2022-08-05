// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector11Icon(props: Vector11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 11"}
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
          "M7.138 1.333c2.358 0 4.558.902 6.195 2.54l.943-.943C12.387 1.04 9.852 0 7.138 0 4.424 0 1.888 1.04 0 2.93l.943.943c1.637-1.638 3.837-2.54 6.195-2.54zm3.78 5.538c-2.049-2.049-5.511-2.049-7.56 0l.942.943c1.538-1.538 4.138-1.538 5.676 0l.943-.943z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M12.763 4.862c-3.048-3.05-8.201-3.05-11.249 0l.943.943c2.538-2.538 6.825-2.538 9.363 0l.943-.943zm-5.625 5.805a1.333 1.333 0 100-2.667 1.333 1.333 0 000 2.667z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector11Icon;
/* prettier-ignore-end */
