// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qJhJbLN2Wy56BDK1v9VeHg
// Component: xSj-Ozd4Dq
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
import Roadmap from "../../Roadmap"; // plasmic-import: SFQJUY_7j6t/component
import Button from "../../Button"; // plasmic-import: W52igaDMzA10w6/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_open_bootcamp_v_2_0.module.css"; // plasmic-import: qJhJbLN2Wy56BDK1v9VeHg/projectcss
import sty from "./PlasmicRoadmapSection.module.css"; // plasmic-import: xSj-Ozd4Dq/css

export type PlasmicRoadmapSection__VariantMembers = {};

export type PlasmicRoadmapSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicRoadmapSection__VariantsArgs;
export const PlasmicRoadmapSection__VariantProps = new Array<VariantPropType>();

export type PlasmicRoadmapSection__ArgsType = {
  roadmapTabs?: React.ReactNode;
  roadmap?: React.ReactNode;
};

type ArgPropType = keyof PlasmicRoadmapSection__ArgsType;
export const PlasmicRoadmapSection__ArgProps = new Array<ArgPropType>(
  "roadmapTabs",
  "roadmap"
);

export type PlasmicRoadmapSection__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultRoadmapSectionProps {
  roadmapTabs?: React.ReactNode;
  roadmap?: React.ReactNode;
  className?: string;
}

function PlasmicRoadmapSection__RenderFunc(props: {
  variants: PlasmicRoadmapSection__VariantsArgs;
  args: PlasmicRoadmapSection__ArgsType;
  overrides: PlasmicRoadmapSection__OverridesType;

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

  return (
    true ? (
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
          sty.root
        )}
      >
        {p.renderPlasmicSlot({
          defaultContents: null,
          value: args.roadmapTabs
        })}

        {p.renderPlasmicSlot({
          defaultContents: (
            <Roadmap
              className={classNames("__wab_instance", sty.roadmap__kty22)}
            />
          ),

          value: args.roadmap
        })}
      </div>
    ) : null
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
  PlasmicRoadmapSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRoadmapSection__VariantsArgs;
    args?: PlasmicRoadmapSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRoadmapSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicRoadmapSection__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicRoadmapSection__ArgProps,
          internalVariantPropNames: PlasmicRoadmapSection__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicRoadmapSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRoadmapSection";
  } else {
    func.displayName = `PlasmicRoadmapSection.${nodeName}`;
  }
  return func;
}

export const PlasmicRoadmapSection = Object.assign(
  // Top-level PlasmicRoadmapSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicRoadmapSection
    internalVariantProps: PlasmicRoadmapSection__VariantProps,
    internalArgProps: PlasmicRoadmapSection__ArgProps
  }
);

export default PlasmicRoadmapSection;
/* prettier-ignore-end */