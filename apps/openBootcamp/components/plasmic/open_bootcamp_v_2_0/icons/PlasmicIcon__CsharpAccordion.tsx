// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CsharpAccordionIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CsharpAccordionIcon(props: CsharpAccordionIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M20.782 7.873c0-.334-.071-.635-.22-.887a1.673 1.673 0 00-.64-.625L12.817 2.27c-.641-.367-1.255-.356-1.89.017-.942.553-5.664 3.259-7.067 4.077-.58.334-.86.849-.86 1.517v8.238c0 .329.071.619.208.87.143.258.362.478.652.647 1.408.817 6.125 3.517 7.066 4.077.636.373 1.255.39 1.89.017 2.367-1.37 4.735-2.734 7.105-4.092.296-.17.51-.384.652-.647.137-.252.208-.543.208-.87l.001-8.247z"
        }
        fill={"#000"}
      ></path>

      <path
        d={
          "M11.91 11.965l-8.715 5.018c.143.257.362.476.652.646 1.407.816 6.124 3.517 7.066 4.076.636.372 1.255.389 1.89.016 2.366-1.37 4.734-2.733 7.105-4.092.296-.17.51-.384.652-.646l-8.65-5.018z"
        }
        fill={"#000"}
      ></path>

      <path
        d={"M9.328 13.45a2.938 2.938 0 005.117-.017l-2.537-1.468-2.58 1.484z"}
        fill={"#000"}
      ></path>

      <path
        d={
          "M20.775 7.872c0-.334-.07-.636-.219-.888l-8.65 4.98 8.661 5.018c.137-.252.208-.543.208-.871V7.87z"
        }
        fill={"#000"}
      ></path>

      <path
        d={
          "M13.033 14.701a2.944 2.944 0 001.41-1.268l2.57 1.485a5.91 5.91 0 01-11.044-2.925c0-3.26 2.64-5.905 5.905-5.905a5.913 5.913 0 015.117 2.953l-2.57 1.477a2.944 2.944 0 10-1.388 4.183z"
        }
        fill={"#fff"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M17.106 10.595h.586v.477h.712v-.477h.586v.477h.477v.586h-.477v.707h.477v.585h-.477v.477h-.586v-.477h-.712v.477h-.586v-.477h-.471v-.585h.47v-.707h-.47v-.586h.47v-.477zm.586 1.063v.707h.712v-.707h-.712z"
        }
        fill={"#fff"}
      ></path>
    </svg>
  );
}

export default CsharpAccordionIcon;
/* prettier-ignore-end */
