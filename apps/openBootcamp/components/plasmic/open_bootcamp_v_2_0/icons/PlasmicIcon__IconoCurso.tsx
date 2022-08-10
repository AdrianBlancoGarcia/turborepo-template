// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconoCursoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconoCursoIcon(props: IconoCursoIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 85 85"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M84.868 45.853c.146-1.848-1.37-3.353-3.224-3.353s-3.34 1.506-3.514 3.352a35.789 35.789 0 11-12.805-30.916c1.427 1.182 3.543 1.196 4.854-.115 1.31-1.31 1.319-3.447-.091-4.65a42.5 42.5 0 1014.78 35.682zm-55.058-2.95l7.398-7.431 1.842 1.833-5.566 5.59 5.59 5.565-1.834 1.841-7.43-7.398zm24.462-.053l-7.399 7.43-1.841-1.833 5.566-5.59-5.59-5.565 1.833-1.841 7.431 7.399z"
        }
        fill={"#2D71FA"}
      ></path>
    </svg>
  );
}

export default IconoCursoIcon;
/* prettier-ignore-end */
