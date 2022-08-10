// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Union2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Union2Icon(props: Union2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 85 85"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M84.868 45.853c.146-1.848-1.37-3.353-3.224-3.353s-3.34 1.506-3.514 3.352a35.789 35.789 0 11-12.805-30.916c1.427 1.182 3.543 1.196 4.854-.115 1.31-1.31 1.319-3.447-.091-4.65a42.5 42.5 0 1014.78 35.682zM39.47 55.873l-1.299.004c-2.249 0-6.5-1.629-6.513-7.782-.008-3.853-2.5-3.892-2.607-3.892l-.024-2.598c.437-.014 2.616-.266 2.608-3.904-.013-6.153 4.23-7.8 6.477-7.81l1.302-.002.006 2.598-1.3.003c-.385.009-3.897.233-3.886 5.206.006 2.589-.855 4.219-1.94 5.2 1.09.978 1.957 2.604 1.963 5.194.01 4.972 3.523 5.181 3.923 5.188l1.285-.003.005 2.599zm12.954-18.217c.008 3.854 2.5 3.893 2.607 3.892l.023 2.599c-.436.014-2.616.265-2.608 3.903.013 6.154-4.23 7.8-6.477 7.81l-1.302.003-.005-2.599 1.299-.003c.386-.008 3.897-.233 3.886-5.205-.005-2.59.855-4.22 1.94-5.201-1.089-.978-1.956-2.604-1.962-5.193-.01-4.972-3.523-5.182-3.923-5.189l-1.285.003-.006-2.598 1.3-.003c2.248 0 6.5 1.628 6.513 7.781z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Union2Icon;
/* prettier-ignore-end */
