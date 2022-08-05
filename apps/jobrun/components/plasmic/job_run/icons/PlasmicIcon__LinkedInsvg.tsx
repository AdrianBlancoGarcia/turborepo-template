// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LinkedInsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LinkedInsvgIcon(props: LinkedInsvgIconProps) {
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
          "M4.152 5.997a1.823 1.823 0 100-3.647 1.823 1.823 0 000 3.647zm3.545 1.382v10.116h3.141v-5.003c0-1.32.248-2.598 1.885-2.598 1.614 0 1.634 1.51 1.634 2.682v4.92H17.5v-5.548c0-2.725-.587-4.82-3.772-4.82-1.529 0-2.554.84-2.973 1.634h-.043V7.38H7.697zm-5.118 0h3.146v10.116H2.579V7.379z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LinkedInsvgIcon;
/* prettier-ignore-end */
