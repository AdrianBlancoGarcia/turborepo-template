// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ExploreIconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ExploreIconIcon(props: ExploreIconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 28"}
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
          "M22.688 6.236A3.814 3.814 0 0019.005 3.5 3.842 3.842 0 0015.182 7h-2.363a3.847 3.847 0 00-3.83-3.5 3.812 3.812 0 00-3.677 2.736l-2.93 9.762a1.223 1.223 0 00-.049.335V17.5a5.84 5.84 0 005.835 5.833 5.837 5.837 0 005.339-3.5h.987c.903 2.057 2.953 3.5 5.338 3.5a5.84 5.84 0 005.835-5.834v-1.166c0-.114-.018-.226-.05-.334l-2.929-9.763zM8.168 21a3.506 3.506 0 01-3.501-3.5c0-.089.02-.172.026-.259A3.494 3.494 0 018.166 14a3.5 3.5 0 013.5 3.5v.01A3.505 3.505 0 018.168 21zm11.664 0a3.505 3.505 0 01-3.498-3.49v-.01a3.5 3.5 0 017-.001A3.506 3.506 0 0119.832 21z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ExploreIconIcon;
/* prettier-ignore-end */
