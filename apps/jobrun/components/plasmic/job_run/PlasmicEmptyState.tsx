// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: upY9cnzMG3kZgeoF6ecCnw
// Component: K1iRWhhAuW
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
import Button from "../../Button"; // plasmic-import: BnsO6Lq9gm/component

import { useScreenVariants as useScreenVariants_2SafZfzx0FlS7 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 2SAFZfzx0FlS7/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_job_run.module.css"; // plasmic-import: upY9cnzMG3kZgeoF6ecCnw/projectcss
import sty from "./PlasmicEmptyState.module.css"; // plasmic-import: K1iRWhhAuW/css

export type PlasmicEmptyState__VariantMembers = {};

export type PlasmicEmptyState__VariantsArgs = {};
type VariantPropType = keyof PlasmicEmptyState__VariantsArgs;
export const PlasmicEmptyState__VariantProps = new Array<VariantPropType>();

export type PlasmicEmptyState__ArgsType = {
  ctaRemoto?: React.ReactNode;
  message?: React.ReactNode;
  title?: React.ReactNode;
};

type ArgPropType = keyof PlasmicEmptyState__ArgsType;
export const PlasmicEmptyState__ArgProps = new Array<ArgPropType>(
  "ctaRemoto",
  "message",
  "title"
);

export type PlasmicEmptyState__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  sectionHeading?: p.Flex<"div">;
};

export interface DefaultEmptyStateProps {
  ctaRemoto?: React.ReactNode;
  message?: React.ReactNode;
  title?: React.ReactNode;
  className?: string;
}

function PlasmicEmptyState__RenderFunc(props: {
  variants: PlasmicEmptyState__VariantsArgs;
  args: PlasmicEmptyState__ArgsType;
  overrides: PlasmicEmptyState__OverridesType;

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
    screen: useScreenVariants_2SafZfzx0FlS7()
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
          className={classNames(projectcss.all, sty.freeBox___5MhE3)}
        >
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"auto" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"100%" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={
              hasVariant(globalVariants, "screen", "mobileOnly")
                ? ("300px" as const)
                : ("320px" as const)
            }
            loader={"plasmic"}
            loading={"lazy" as const}
            src={{
              src: "https://site-assets.plasmic.app/9f0950322c8a29b375a65e0f1cddf116.svg",
              fullWidth: 207,
              fullHeight: 150,
              aspectRatio: 1.37931
            }}
          />

          {true ? (
            <p.Stack
              as={"div"}
              data-plasmic-name={"sectionHeading"}
              data-plasmic-override={overrides.sectionHeading}
              hasGap={true}
              className={classNames(projectcss.all, sty.sectionHeading)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__zqr7U)}>
                {p.renderPlasmicSlot({
                  defaultContents: (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__sq6W9
                      )}
                    >
                      <React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ fontWeight: 700 }}
                        >
                          {"??Ups!"}
                        </span>
                      </React.Fragment>
                    </div>
                  ),

                  value: args.title,
                  className: classNames(sty.slotTargetTitle)
                })}
              </div>

              <div className={classNames(projectcss.all, sty.freeBox__ajWYl)}>
                {p.renderPlasmicSlot({
                  defaultContents:
                    "Estamos actualizando nuestras ofertas, mientras tanto puedes ver nuestras ofertas en remoto.",
                  value: args.message,
                  className: classNames(sty.slotTargetMessage)
                })}
              </div>
            </p.Stack>
          ) : null}
        </p.Stack>
      ) : null}

      {p.renderPlasmicSlot({
        defaultContents: (
          <Button
            className={classNames("__wab_instance", sty.button__ixyVr)}
            color={["black"]}
            label={"Ver ofertas en remoto"}
            size={["medium"]}
          />
        ),

        value: args.ctaRemoto
      })}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "sectionHeading"],
  img: ["img"],
  sectionHeading: ["sectionHeading"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
  sectionHeading: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicEmptyState__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicEmptyState__VariantsArgs;
    args?: PlasmicEmptyState__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicEmptyState__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicEmptyState__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicEmptyState__ArgProps,
          internalVariantPropNames: PlasmicEmptyState__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicEmptyState__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEmptyState";
  } else {
    func.displayName = `PlasmicEmptyState.${nodeName}`;
  }
  return func;
}

export const PlasmicEmptyState = Object.assign(
  // Top-level PlasmicEmptyState renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    sectionHeading: makeNodeComponent("sectionHeading"),

    // Metadata about props expected for PlasmicEmptyState
    internalVariantProps: PlasmicEmptyState__VariantProps,
    internalArgProps: PlasmicEmptyState__ArgProps
  }
);

export default PlasmicEmptyState;
/* prettier-ignore-end */
