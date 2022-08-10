// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qJhJbLN2Wy56BDK1v9VeHg
// Component: 8vgCLJCzW_
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
import sty from "./PlasmicTableRow.module.css"; // plasmic-import: 8vgCLJCzW_/css

export type PlasmicTableRow__VariantMembers = {};

export type PlasmicTableRow__VariantsArgs = {};
type VariantPropType = keyof PlasmicTableRow__VariantsArgs;
export const PlasmicTableRow__VariantProps = new Array<VariantPropType>();

export type PlasmicTableRow__ArgsType = {
  title?: React.ReactNode;
  description?: React.ReactNode;
};

type ArgPropType = keyof PlasmicTableRow__ArgsType;
export const PlasmicTableRow__ArgProps = new Array<ArgPropType>(
  "title",
  "description"
);

export type PlasmicTableRow__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultTableRowProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

function PlasmicTableRow__RenderFunc(props: {
  variants: PlasmicTableRow__VariantsArgs;
  args: PlasmicTableRow__ArgsType;
  overrides: PlasmicTableRow__OverridesType;

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
      <div className={classNames(projectcss.all, sty.freeBox__wMryt)}>
        <div className={classNames(projectcss.all, sty.freeBox__kNJg2)}>
          {p.renderPlasmicSlot({
            defaultContents: "INT",
            value: args.title,
            className: classNames(sty.slotTargetTitle)
          })}
        </div>
      </div>

      <div className={classNames(projectcss.all, sty.freeBox__rFeZ)}>
        <div className={classNames(projectcss.all, sty.freeBox__dZ71L)}>
          {p.renderPlasmicSlot({
            defaultContents:
              "Define un dato o variable como de tipo entero, generalmente números negativos o positivos.",
            value: args.description,
            className: classNames(sty.slotTargetDescription)
          })}
        </div>
      </div>
    </div>
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
  PlasmicTableRow__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTableRow__VariantsArgs;
    args?: PlasmicTableRow__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTableRow__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTableRow__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicTableRow__ArgProps,
          internalVariantPropNames: PlasmicTableRow__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicTableRow__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTableRow";
  } else {
    func.displayName = `PlasmicTableRow.${nodeName}`;
  }
  return func;
}

export const PlasmicTableRow = Object.assign(
  // Top-level PlasmicTableRow renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicTableRow
    internalVariantProps: PlasmicTableRow__VariantProps,
    internalArgProps: PlasmicTableRow__ArgProps
  }
);

export default PlasmicTableRow;
/* prettier-ignore-end */
