// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NodeAccordionIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NodeAccordionIcon(props: NodeAccordionIconProps) {
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
          "M11.888 22a1.54 1.54 0 01-.77-.206l-2.45-1.448c-.366-.204-.188-.277-.067-.318.488-.17.587-.21 1.108-.505.055-.03.126-.02.182.013l1.883 1.115a.249.249 0 00.227 0l7.34-4.23a.23.23 0 00.112-.198V7.766a.235.235 0 00-.113-.202l-7.337-4.226a.226.226 0 00-.226 0L4.44 7.564a.233.233 0 00-.116.2v8.457c0 .081.044.158.114.197l2.01 1.159c1.091.545 1.758-.097 1.758-.743V8.487a.21.21 0 01.213-.21h.93a.21.21 0 01.211.21v8.35c0 1.454-.794 2.288-2.174 2.288-.424 0-.758 0-1.692-.458L3.77 17.559A1.55 1.55 0 013 16.22V7.764c0-.55.294-1.064.77-1.335l7.347-4.232a1.612 1.612 0 011.544 0l7.338 4.234c.474.273.77.785.77 1.335v8.457a1.55 1.55 0 01-.77 1.336L12.66 21.79a1.545 1.545 0 01-.774.205"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M14.16 16.195c-3.218 0-3.893-1.476-3.893-2.714a.21.21 0 01.213-.211h.95c.105 0 .193.076.21.18.143.967.57 1.454 2.517 1.454 1.55 0 2.21-.35 2.21-1.17 0-.473-.189-.825-2.597-1.06-2.014-.199-3.259-.642-3.259-2.252 0-1.482 1.252-2.365 3.35-2.365 2.354 0 3.522.817 3.669 2.571a.214.214 0 01-.214.232h-.955c-.1 0-.186-.07-.207-.165-.23-1.018-.786-1.343-2.297-1.343-1.692 0-1.89.588-1.89 1.03 0 .535.233.691 2.516.993 2.26.3 3.334.723 3.334 2.31 0 1.6-1.337 2.519-3.668 2.519l.011-.01z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NodeAccordionIcon;
/* prettier-ignore-end */
