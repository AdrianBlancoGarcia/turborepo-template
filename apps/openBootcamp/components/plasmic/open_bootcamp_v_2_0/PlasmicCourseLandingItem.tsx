// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qJhJbLN2Wy56BDK1v9VeHg
// Component: iOaw7i5C2By
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

import { useScreenVariants as useScreenVariantsgfTNvlXeClRRx } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: GfTNvlXE_ClRRx/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_open_bootcamp_v_2_0.module.css"; // plasmic-import: qJhJbLN2Wy56BDK1v9VeHg/projectcss
import sty from "./PlasmicCourseLandingItem.module.css"; // plasmic-import: iOaw7i5C2By/css

export type PlasmicCourseLandingItem__VariantMembers = {};

export type PlasmicCourseLandingItem__VariantsArgs = {};
type VariantPropType = keyof PlasmicCourseLandingItem__VariantsArgs;
export const PlasmicCourseLandingItem__VariantProps =
  new Array<VariantPropType>();

export type PlasmicCourseLandingItem__ArgsType = {
  courseImg?: React.ReactNode;
  courseTitle?: React.ReactNode;
};

type ArgPropType = keyof PlasmicCourseLandingItem__ArgsType;
export const PlasmicCourseLandingItem__ArgProps = new Array<ArgPropType>(
  "courseImg",
  "courseTitle"
);

export type PlasmicCourseLandingItem__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultCourseLandingItemProps {
  courseImg?: React.ReactNode;
  courseTitle?: React.ReactNode;
  className?: string;
}

function PlasmicCourseLandingItem__RenderFunc(props: {
  variants: PlasmicCourseLandingItem__VariantsArgs;
  args: PlasmicCourseLandingItem__ArgsType;
  overrides: PlasmicCourseLandingItem__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsgfTNvlXeClRRx()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {true ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__eP2O)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__fnovV)}>
            {p.renderPlasmicSlot({
              defaultContents: (
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__t4UJo)}
                  displayHeight={"60px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"none" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"60px" as const}
                  loader={"plasmic"}
                  loading={"lazy" as const}
                />
              ),

              value: args.courseImg
            })}
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__go1N)}>
            {p.renderPlasmicSlot({
              defaultContents: "T??tuloCurso",
              value: args.courseTitle,
              className: classNames(sty.slotTargetCourseTitle)
            })}
          </div>
        </p.Stack>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCourseLandingItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCourseLandingItem__VariantsArgs;
    args?: PlasmicCourseLandingItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCourseLandingItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCourseLandingItem__ArgsType, ReservedPropsType> &
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
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicCourseLandingItem__ArgProps,
          internalVariantPropNames: PlasmicCourseLandingItem__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicCourseLandingItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCourseLandingItem";
  } else {
    func.displayName = `PlasmicCourseLandingItem.${nodeName}`;
  }
  return func;
}

export const PlasmicCourseLandingItem = Object.assign(
  // Top-level PlasmicCourseLandingItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicCourseLandingItem
    internalVariantProps: PlasmicCourseLandingItem__VariantProps,
    internalArgProps: PlasmicCourseLandingItem__ArgProps
  }
);

export default PlasmicCourseLandingItem;
/* prettier-ignore-end */
