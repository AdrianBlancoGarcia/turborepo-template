// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AngularAccordeonsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AngularAccordeonsvgIcon(props: AngularAccordeonsvgIconProps) {
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
        d={"M11.907 8.433l1.971 4.101h-3.706l1.735-4.1v-.001z"}
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M2.492 5.314L11.874 2l9.635 3.255-1.56 12.31L11.874 22l-7.948-4.376-1.434-12.31zm9.4-1.019L6.059 17.21l2.18-.037L9.41 14.26h5.234l1.283 2.95 2.083.037-6.116-12.95z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AngularAccordeonsvgIcon;
/* prettier-ignore-end */
