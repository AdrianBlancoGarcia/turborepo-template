// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Euro3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Euro3Icon(props: Euro3IconProps) {
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
        d={
          "M15.79 23.684c-2.588 0-4.89-.734-6.908-2.204-2.018-1.469-3.443-3.366-4.277-5.69H0v-2.632h4.013a9.844 9.844 0 01-.081-1.465c.01-.449.037-.838.081-1.167H0V7.895h4.605C5.44 5.57 6.864 3.673 8.882 2.204 10.899.734 13.202 0 15.79 0a11.5 11.5 0 014.293.805 12.025 12.025 0 013.601 2.221L21.81 4.868a9.294 9.294 0 00-2.746-1.644 8.993 8.993 0 00-3.273-.592c-1.865 0-3.531.487-5 1.463-1.47.976-2.577 2.243-3.323 3.8h8.323v2.631H6.678a8.116 8.116 0 00-.1 1.563c.023.45.056.806.1 1.069h9.111v2.632H7.468c.746 1.556 1.853 2.823 3.323 3.798 1.469.976 3.135 1.465 5 1.465a8.991 8.991 0 003.273-.593 9.294 9.294 0 002.746-1.644l1.875 1.842a12.003 12.003 0 01-3.601 2.22c-1.35.537-2.78.806-4.293.806z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Euro3Icon;
/* prettier-ignore-end */
