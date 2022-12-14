// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group3Icon(props: Group3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 22"}
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
          "M6.443 0H1.871A1.862 1.862 0 000 1.87v17.944c0 1.04.831 1.87 1.87 1.87h4.573c1.04 0 1.87-.83 1.87-1.87V1.871A1.86 1.86 0 006.444 0zm0 20.472H1.871a.658.658 0 01-.659-.658V1.87c0-.346.278-.658.659-.658h4.572c.347 0 .658.277.658.658v1.213h-1.42a.62.62 0 00-.624.623.62.62 0 00.624.624h1.42v1.628h-2.39a.62.62 0 00-.623.623.62.62 0 00.623.624h2.39v1.628h-1.42a.62.62 0 00-.624.624.62.62 0 00.624.623h1.42v1.628h-2.39a.621.621 0 00-.623.624.62.62 0 00.623.623h2.39v1.628h-1.42a.62.62 0 00-.624.624.62.62 0 00.624.623h1.42v1.629h-2.39a.621.621 0 00-.623.623.62.62 0 00.623.624h2.39v1.212c0 .242-.311.554-.658.554zM16.385.139C15.623.104 14.826.104 14.03.104c-.728 0-1.282.589-1.317 1.455 0 .416 0 .831-.034 1.212v.451h-.035.45l4.088.034h.416V1.628c.069-.866-.45-1.49-1.213-1.49zm-3.602 3.949l-.035 1.039v2.356c0 2.91-.035 5.82-.035 8.729 0 .242.035.45.104.658.347 1.04.693 2.113 1.04 3.152l.242.762c.07.174.139.347.242.485.312.416.832.555 1.248.278a.68.68 0 00.311-.312 3.28 3.28 0 00.208-.485l.242-.728c.312-.866.59-1.697.901-2.563l.035-.104c.138-.381.277-.831.277-1.351v-4.642l.035-6.686v-.103l.034-.45-4.85-.035zm3.775 13.06l-.034.103a33.699 33.699 0 01-.624 1.767h-1.593c-.277-.797-.52-1.559-.797-2.356-.035-.069-.035-.138-.035-.207.243.069.52.069.866-.104.174.104.416.173.728.173.242 0 .485-.07.762-.208.208.139.554.242.935.173-.069.208-.138.416-.208.658z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group3Icon;
/* prettier-ignore-end */
