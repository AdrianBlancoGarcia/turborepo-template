// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fxuAGcsah199rVCjPzGTfY
// Component: fJPSJOFKZX
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

import projectcss from "./plasmic_open_marketers.module.css"; // plasmic-import: fxuAGcsah199rVCjPzGTfY/projectcss
import sty from "./PlasmicImageTextCardItem.module.css"; // plasmic-import: fJPSJOFKZX/css

import Vector14Icon from "./icons/PlasmicIcon__Vector14"; // plasmic-import: YikXogKYiT/icon

export type PlasmicImageTextCardItem__VariantMembers = {};

export type PlasmicImageTextCardItem__VariantsArgs = {};
type VariantPropType = keyof PlasmicImageTextCardItem__VariantsArgs;
export const PlasmicImageTextCardItem__VariantProps =
  new Array<VariantPropType>();

export type PlasmicImageTextCardItem__ArgsType = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  featureImg?: React.ReactNode;
};

type ArgPropType = keyof PlasmicImageTextCardItem__ArgsType;
export const PlasmicImageTextCardItem__ArgProps = new Array<ArgPropType>(
  "title",
  "description",
  "icon",
  "featureImg"
);

export type PlasmicImageTextCardItem__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultImageTextCardItemProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  featureImg?: React.ReactNode;
  className?: string;
}

function PlasmicImageTextCardItem__RenderFunc(props: {
  variants: PlasmicImageTextCardItem__VariantsArgs;
  args: PlasmicImageTextCardItem__ArgsType;
  overrides: PlasmicImageTextCardItem__OverridesType;

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
      <div className={classNames(projectcss.all, sty.freeBox__hkW0T)}>
        <div className={classNames(projectcss.all, sty.freeBox__cb1L)}>
          {p.renderPlasmicSlot({
            defaultContents: (
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__uZslS)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"100%" as const}
                loader={"plasmic"}
                loading={"lazy" as const}
              />
            ),

            value: args.featureImg
          })}
        </div>
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___78SAa)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__iMsA)}>
          {p.renderPlasmicSlot({
            defaultContents: (
              <div className={classNames(projectcss.all, sty.freeBox__g8Sxb)}>
                <Vector14Icon
                  className={classNames(projectcss.all, sty.svg__kkJps)}
                  role={"img"}
                />
              </div>
            ),

            value: args.icon
          })}
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__zZ3N)}
        >
          <div className={classNames(projectcss.all, sty.freeBox___5BAps)}>
            {p.renderPlasmicSlot({
              defaultContents: "Nombre",
              value: args.title,
              className: classNames(sty.slotTargetTitle)
            })}
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__eaKRg)}>
            {p.renderPlasmicSlot({
              defaultContents: "Descripci??n",
              value: args.description,
              className: classNames(sty.slotTargetDescription)
            })}
          </div>
        </p.Stack>
      </p.Stack>
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
  PlasmicImageTextCardItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicImageTextCardItem__VariantsArgs;
    args?: PlasmicImageTextCardItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicImageTextCardItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicImageTextCardItem__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicImageTextCardItem__ArgProps,
          internalVariantPropNames: PlasmicImageTextCardItem__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicImageTextCardItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicImageTextCardItem";
  } else {
    func.displayName = `PlasmicImageTextCardItem.${nodeName}`;
  }
  return func;
}

export const PlasmicImageTextCardItem = Object.assign(
  // Top-level PlasmicImageTextCardItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicImageTextCardItem
    internalVariantProps: PlasmicImageTextCardItem__VariantProps,
    internalArgProps: PlasmicImageTextCardItem__ArgProps
  }
);

export default PlasmicImageTextCardItem;
/* prettier-ignore-end */
