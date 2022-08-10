// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DiscordIconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DiscordIconIcon(props: DiscordIconIconProps) {
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
          "M11.192 12.8c-.633 0-1.13.553-1.13 1.23 0 .674.51 1.23 1.13 1.23.631 0 1.13-.556 1.13-1.23.012-.678-.499-1.23-1.13-1.23zm4.046 0c-.633 0-1.13.553-1.13 1.23 0 .674.51 1.23 1.13 1.23.631 0 1.13-.556 1.13-1.23-.002-.678-.499-1.23-1.13-1.23z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M20.624 3.5H5.772A2.277 2.277 0 003.5 5.783v14.985a2.277 2.277 0 002.271 2.283H18.34l-.59-2.052 1.42 1.32 1.341 1.24 2.385 2.108V5.783A2.277 2.277 0 0020.624 3.5zm-4.279 14.475s-.399-.476-.73-.9c1.451-.41 2.005-1.318 2.005-1.318a6.423 6.423 0 01-1.275.656 7.443 7.443 0 01-1.606.476 7.792 7.792 0 01-2.872-.012 9.27 9.27 0 01-1.628-.478c-.255-.1-.534-.22-.809-.375-.034-.024-.066-.034-.099-.056a.137.137 0 01-.045-.035c-.2-.11-.31-.187-.31-.187s.531.887 1.94 1.308c-.333.42-.744.92-.744.92-2.449-.077-3.379-1.684-3.379-1.684 0-3.569 1.596-6.46 1.596-6.46 1.597-1.199 3.114-1.165 3.114-1.165l.111.133C9.62 9.375 8.7 10.25 8.7 10.25s.245-.133.654-.32c1.186-.52 2.127-.665 2.515-.7.067-.01.123-.021.19-.021a9.05 9.05 0 015.574 1.042s-.876-.831-2.76-1.408l.155-.177s1.519-.034 3.114 1.164c0 0 1.596 2.893 1.596 6.461 0 0-.942 1.606-3.392 1.684z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DiscordIconIcon;
/* prettier-ignore-end */
