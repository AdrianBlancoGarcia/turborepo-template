// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PythonAccordionIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PythonAccordionIcon(props: PythonAccordionIconProps) {
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

      <g
        clipPath={"url(#18_2VnfpRa)"}
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        fill={"#000"}
      >
        <path
          d={
            "M11.961 2C6.867 2 7.185 4.209 7.185 4.209l.006 2.288h4.861v.687H5.26S2 6.815 2 11.954c0 5.14 2.845 4.958 2.845 4.958h1.698v-2.385s-.091-2.846 2.8-2.846h4.822s2.708.043 2.708-2.618V4.664S17.285 2 11.961 2zm-2.68 1.539a.874.874 0 01.001 1.748h-.001a.874.874 0 01-.876-.872v-.002a.874.874 0 01.873-.874h.003z"
          }
        ></path>

        <path
          d={
            "M16.91 19.786S17.23 22 12.135 22c-5.323 0-4.912-2.67-4.912-2.67v-4.409c0-2.667 2.709-2.624 2.709-2.624h4.821c2.892 0 2.8-2.85 2.8-2.85v-2.39h1.698s2.845-.184 2.845 4.967-3.26 4.78-3.26 4.78h-6.792v.69h4.862l.006 2.292zm-2.43.606c.106.044.22.066.335.066h.002a.873.873 0 00.873-.877v-.001a.876.876 0 10-1.21.812z"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"18_2VnfpRa"}>
          <path
            fill={"#fff"}
            transform={"translate(2 2)"}
            d={"M0 0h20v20H0z"}
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default PythonAccordionIcon;
/* prettier-ignore-end */
