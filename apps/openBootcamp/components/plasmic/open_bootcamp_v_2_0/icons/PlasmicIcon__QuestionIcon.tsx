// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type QuestionIconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function QuestionIconIcon(props: QuestionIconIconProps) {
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
          "M14 2.333C7.567 2.333 2.334 7.567 2.334 14S7.567 25.667 14 25.667c6.433 0 11.667-5.234 11.667-11.667S20.433 2.333 14 2.333zM15.167 21h-2.333v-2.333h2.333V21zm1.138-5.7c-.228.185-.449.361-.624.536-.476.475-.513.907-.514.926v.155h-2.333v-.195c0-.138.033-1.373 1.197-2.537.227-.227.51-.458.806-.698.856-.694 1.418-1.2 1.418-1.899a2.257 2.257 0 00-4.511.002H9.41C9.41 9.06 11.47 7 14 7s4.589 2.06 4.589 4.59c0 1.863-1.376 2.975-2.285 3.71z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default QuestionIconIcon;
/* prettier-ignore-end */
