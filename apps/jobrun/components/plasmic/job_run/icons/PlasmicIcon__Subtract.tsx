// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SubtractIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SubtractIcon(props: SubtractIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 895 468"}
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
          "M497.056 25.76C500.039 10.787 513.207 0 528.506 0h122.347c20.22 0 35.393 18.448 31.451 38.24L677.571 62h183.348c21.46 0 37.576 19.561 33.427 40.573l-66.738 338C824.461 456.51 810.458 468 794.181 468H545.37l230.728-230.288H567.635L626.038 26l-288.84 288.288h194.064L499.314 468H104.219c-10.111 0-17.698-9.227-15.724-19.123C89.988 441.391 96.57 436 104.219 436h115.043l8.688-44H116.244c-10.112 0-17.699-9.227-15.725-19.123 1.493-7.486 8.077-12.877 15.725-12.877h118.024l8.49-43h-114.49c-10.111 0-17.698-9.227-15.724-19.123 1.493-7.486 8.076-12.877 15.724-12.877h120.809l38.615-195.573C290.839 73.49 304.843 62 321.12 62h168.717l7.219-36.24zM16.038 436C8.39 436 1.807 441.391.314 448.877-1.66 458.773 5.927 468 16.038 468h33.07c7.649 0 14.232-5.391 15.725-12.877C66.807 445.227 59.22 436 49.11 436H16.04zm37.076-76c-7.648 0-14.231 5.391-15.724 12.877C35.416 382.773 43.003 392 53.114 392h12.028c7.648 0 14.231-5.391 15.724-12.877C82.84 369.227 75.253 360 65.142 360H53.114z"
        }
        fill={"currentColor"}
        fillOpacity={".04"}
      ></path>
    </svg>
  );
}

export default SubtractIcon;
/* prettier-ignore-end */
