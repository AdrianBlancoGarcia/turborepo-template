// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: upY9cnzMG3kZgeoF6ecCnw
// Component: qxyxLFpvV2
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

import projectcss from "./plasmic_job_run.module.css"; // plasmic-import: upY9cnzMG3kZgeoF6ecCnw/projectcss
import sty from "./PlasmicItemBadge.module.css"; // plasmic-import: qxyxLFpvV2/css

export type PlasmicItemBadge__VariantMembers = {
  type: "language" | "skill";
};

export type PlasmicItemBadge__VariantsArgs = {
  type?: SingleChoiceArg<"language" | "skill">;
};

type VariantPropType = keyof PlasmicItemBadge__VariantsArgs;
export const PlasmicItemBadge__VariantProps = new Array<VariantPropType>(
  "type"
);

export type PlasmicItemBadge__ArgsType = {
  label?: React.ReactNode;
};

type ArgPropType = keyof PlasmicItemBadge__ArgsType;
export const PlasmicItemBadge__ArgProps = new Array<ArgPropType>("label");

export type PlasmicItemBadge__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultItemBadgeProps {
  label?: React.ReactNode;
  type?: SingleChoiceArg<"language" | "skill">;
  className?: string;
}

function PlasmicItemBadge__RenderFunc(props: {
  variants: PlasmicItemBadge__VariantsArgs;
  args: PlasmicItemBadge__ArgsType;
  overrides: PlasmicItemBadge__OverridesType;

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
        sty.root,
        { [sty.roottype_language]: hasVariant(variants, "type", "language") }
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: "Label",
        value: args.label,
        className: classNames(sty.slotTargetLabel, {
          [sty.slotTargetLabeltype_language]: hasVariant(
            variants,
            "type",
            "language"
          )
        })
      })}
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
  PlasmicItemBadge__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicItemBadge__VariantsArgs;
    args?: PlasmicItemBadge__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicItemBadge__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicItemBadge__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicItemBadge__ArgProps,
          internalVariantPropNames: PlasmicItemBadge__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicItemBadge__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicItemBadge";
  } else {
    func.displayName = `PlasmicItemBadge.${nodeName}`;
  }
  return func;
}

export const PlasmicItemBadge = Object.assign(
  // Top-level PlasmicItemBadge renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicItemBadge
    internalVariantProps: PlasmicItemBadge__VariantProps,
    internalArgProps: PlasmicItemBadge__ArgProps
  }
);

export default PlasmicItemBadge;
/* prettier-ignore-end */
