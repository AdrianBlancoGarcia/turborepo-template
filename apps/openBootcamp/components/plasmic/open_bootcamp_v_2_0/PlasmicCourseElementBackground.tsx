// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qJhJbLN2Wy56BDK1v9VeHg
// Component: muQUW1EbtN
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_open_bootcamp_v_2_0.module.css"; // plasmic-import: qJhJbLN2Wy56BDK1v9VeHg/projectcss
import sty from "./PlasmicCourseElementBackground.module.css"; // plasmic-import: muQUW1EbtN/css

export type PlasmicCourseElementBackground__VariantMembers = {
  background: "background1" | "background2" | "background3" | "background4";
};

export type PlasmicCourseElementBackground__VariantsArgs = {
  background?: MultiChoiceArg<
    "background1" | "background2" | "background3" | "background4"
  >;
};

type VariantPropType = keyof PlasmicCourseElementBackground__VariantsArgs;
export const PlasmicCourseElementBackground__VariantProps =
  new Array<VariantPropType>("background");

export type PlasmicCourseElementBackground__ArgsType = {
  courseImg?: React.ReactNode;
};

type ArgPropType = keyof PlasmicCourseElementBackground__ArgsType;
export const PlasmicCourseElementBackground__ArgProps = new Array<ArgPropType>(
  "courseImg"
);

export type PlasmicCourseElementBackground__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultCourseElementBackgroundProps {
  courseImg?: React.ReactNode;
  background?: MultiChoiceArg<
    "background1" | "background2" | "background3" | "background4"
  >;
  className?: string;
}

function PlasmicCourseElementBackground__RenderFunc(props: {
  variants: PlasmicCourseElementBackground__VariantsArgs;
  args: PlasmicCourseElementBackground__ArgsType;
  overrides: PlasmicCourseElementBackground__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootbackground_background1]: hasVariant(
            variants,
            "background",
            "background1"
          ),
          [sty.rootbackground_background2]: hasVariant(
            variants,
            "background",
            "background2"
          ),
          [sty.rootbackground_background3]: hasVariant(
            variants,
            "background",
            "background3"
          ),
          [sty.rootbackground_background4]: hasVariant(
            variants,
            "background",
            "background4"
          )
        }
      )}
      loading={"lazy" as const}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__thoza)}
              displayHeight={"100px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"100px" as const}
              loader={"plasmic"}
              loading={"lazy" as const}
            />
          ),

          value: args.courseImg
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCourseElementBackground__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCourseElementBackground__VariantsArgs;
    args?: PlasmicCourseElementBackground__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCourseElementBackground__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCourseElementBackground__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCourseElementBackground__ArgProps,
      internalVariantPropNames: PlasmicCourseElementBackground__VariantProps
    });

    return PlasmicCourseElementBackground__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCourseElementBackground";
  } else {
    func.displayName = `PlasmicCourseElementBackground.${nodeName}`;
  }
  return func;
}

export const PlasmicCourseElementBackground = Object.assign(
  // Top-level PlasmicCourseElementBackground renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicCourseElementBackground
    internalVariantProps: PlasmicCourseElementBackground__VariantProps,
    internalArgProps: PlasmicCourseElementBackground__ArgProps
  }
);

export default PlasmicCourseElementBackground;
/* prettier-ignore-end */
