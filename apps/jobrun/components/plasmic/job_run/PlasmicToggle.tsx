// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: upY9cnzMG3kZgeoF6ecCnw
// Component: jzkOxDkpw3
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
import sty from "./PlasmicToggle.module.css"; // plasmic-import: jzkOxDkpw3/css

export type PlasmicToggle__VariantMembers = {
  isChecked: "isChecked";
};

export type PlasmicToggle__VariantsArgs = {
  isChecked?: SingleBooleanChoiceArg<"isChecked">;
};

type VariantPropType = keyof PlasmicToggle__VariantsArgs;
export const PlasmicToggle__VariantProps = new Array<VariantPropType>(
  "isChecked"
);

export type PlasmicToggle__ArgsType = {
  "data-cy"?: string;
};

type ArgPropType = keyof PlasmicToggle__ArgsType;
export const PlasmicToggle__ArgProps = new Array<ArgPropType>("data-cy");

export type PlasmicToggle__OverridesType = {
  root?: p.Flex<"div">;
  track?: p.Flex<"div">;
  thumb?: p.Flex<"div">;
};

export interface DefaultToggleProps {
  "data-cy"?: string;
  isChecked?: SingleBooleanChoiceArg<"isChecked">;
  className?: string;
}

function PlasmicToggle__RenderFunc(props: {
  variants: PlasmicToggle__VariantsArgs;
  args: PlasmicToggle__ArgsType;
  overrides: PlasmicToggle__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          "data-cy": "filter_remoto" as const
        },
        props.args
      ),
    [props.args]
  );

  const $props = args;

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
        sty.root
      )}
    >
      <div
        data-plasmic-name={"track"}
        data-plasmic-override={overrides.track}
        className={classNames(projectcss.all, sty.track, {
          [sty.trackisChecked]: hasVariant(variants, "isChecked", "isChecked")
        })}
      />

      <div
        data-plasmic-name={"thumb"}
        data-plasmic-override={overrides.thumb}
        className={classNames(projectcss.all, sty.thumb, {
          [sty.thumbisChecked]: hasVariant(variants, "isChecked", "isChecked")
        })}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "track", "thumb"],
  track: ["track"],
  thumb: ["thumb"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  track: "div";
  thumb: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicToggle__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicToggle__VariantsArgs;
    args?: PlasmicToggle__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicToggle__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicToggle__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicToggle__ArgProps,
          internalVariantPropNames: PlasmicToggle__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicToggle__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicToggle";
  } else {
    func.displayName = `PlasmicToggle.${nodeName}`;
  }
  return func;
}

export const PlasmicToggle = Object.assign(
  // Top-level PlasmicToggle renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    track: makeNodeComponent("track"),
    thumb: makeNodeComponent("thumb"),

    // Metadata about props expected for PlasmicToggle
    internalVariantProps: PlasmicToggle__VariantProps,
    internalArgProps: PlasmicToggle__ArgProps
  }
);

export default PlasmicToggle;
/* prettier-ignore-end */
