// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qJhJbLN2Wy56BDK1v9VeHg
// Component: tRL-RTbGUy_
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
import Button from "../../Button"; // plasmic-import: W52igaDMzA10w6/component

import { useScreenVariants as useScreenVariantsgfTNvlXeClRRx } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: GfTNvlXE_ClRRx/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_open_bootcamp_v_2_0.module.css"; // plasmic-import: qJhJbLN2Wy56BDK1v9VeHg/projectcss
import sty from "./PlasmicAccordionSection.module.css"; // plasmic-import: tRL-RTbGUy_/css

export type PlasmicAccordionSection__VariantMembers = {};

export type PlasmicAccordionSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicAccordionSection__VariantsArgs;
export const PlasmicAccordionSection__VariantProps =
  new Array<VariantPropType>();

export type PlasmicAccordionSection__ArgsType = {
  courseText?: React.ReactNode;
  accordion?: React.ReactNode;
  ctaAcordeon?: React.ReactNode;
};

type ArgPropType = keyof PlasmicAccordionSection__ArgsType;
export const PlasmicAccordionSection__ArgProps = new Array<ArgPropType>(
  "courseText",
  "accordion",
  "ctaAcordeon"
);

export type PlasmicAccordionSection__OverridesType = {
  root?: p.Flex<"div">;
  content?: p.Flex<"div">;
  sectionHeading4?: p.Flex<"div">;
  text?: p.Flex<"div">;
  span?: p.Flex<"span">;
};

export interface DefaultAccordionSectionProps {
  courseText?: React.ReactNode;
  accordion?: React.ReactNode;
  ctaAcordeon?: React.ReactNode;
  className?: string;
}

function PlasmicAccordionSection__RenderFunc(props: {
  variants: PlasmicAccordionSection__VariantsArgs;
  args: PlasmicAccordionSection__ArgsType;
  overrides: PlasmicAccordionSection__OverridesType;

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
        <p.Stack
          as={"div"}
          data-plasmic-name={"content"}
          data-plasmic-override={overrides.content}
          hasGap={true}
          className={classNames(projectcss.all, sty.content)}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"sectionHeading4"}
            data-plasmic-override={overrides.sectionHeading4}
            hasGap={true}
            className={classNames(projectcss.all, sty.sectionHeading4)}
          >
            {(hasVariant(globalVariants, "screen", "laptopL") ? true : true) ? (
              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "Desata el potencial de"
                  : hasVariant(globalVariants, "screen", "laptop")
                  ? "Desata el potencial de"
                  : hasVariant(globalVariants, "screen", "laptopL")
                  ? "Desata el potencial"
                  : "Desata el potencial de"}
              </div>
            ) : null}

            <div className={classNames(projectcss.all, sty.freeBox__ggk3U)}>
              <span
                data-plasmic-name={"span"}
                data-plasmic-override={overrides.span}
                className={classNames(
                  projectcss.all,
                  projectcss.span,
                  sty.span
                )}
              >
                {p.renderPlasmicSlot({
                  defaultContents: "Desata el potencial de Python",
                  value: args.courseText,
                  className: classNames(sty.slotTargetCourseText)
                })}
              </span>

              {(
                hasVariant(globalVariants, "screen", "laptopL") ? true : true
              ) ? (
                <div
                  className={classNames(projectcss.all, sty.freeBox__ah6LY)}
                />
              ) : null}
            </div>

            {(hasVariant(globalVariants, "screen", "laptopL") ? true : true) ? (
              <div className={classNames(projectcss.all, sty.freeBox__njup)} />
            ) : null}
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__si7MX)}
          >
            {p.renderPlasmicSlot({
              defaultContents: null,
              value: args.accordion
            })}
          </p.Stack>

          <div className={classNames(projectcss.all, sty.freeBox__tBgTv)}>
            {p.renderPlasmicSlot({
              defaultContents: (
                <Button
                  className={classNames("__wab_instance", sty.button__gz16C)}
                  color={"blue" as const}
                  endIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__qXOpn)}
                      role={"img"}
                    />
                  }
                  link={"https://campus.open-bootcamp.com/register" as const}
                  size={"normal" as const}
                  startIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__zkb2F)}
                      role={"img"}
                    />
                  }
                >
                  {"Acceder al contenido completo"}
                </Button>
              ),

              value: args.ctaAcordeon
            })}
          </div>
        </p.Stack>
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "content", "sectionHeading4", "text", "span"],
  content: ["content", "sectionHeading4", "text", "span"],
  sectionHeading4: ["sectionHeading4", "text", "span"],
  text: ["text"],
  span: ["span"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  content: "div";
  sectionHeading4: "div";
  text: "div";
  span: "span";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAccordionSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAccordionSection__VariantsArgs;
    args?: PlasmicAccordionSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAccordionSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAccordionSection__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicAccordionSection__ArgProps,
          internalVariantPropNames: PlasmicAccordionSection__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicAccordionSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAccordionSection";
  } else {
    func.displayName = `PlasmicAccordionSection.${nodeName}`;
  }
  return func;
}

export const PlasmicAccordionSection = Object.assign(
  // Top-level PlasmicAccordionSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    content: makeNodeComponent("content"),
    sectionHeading4: makeNodeComponent("sectionHeading4"),
    text: makeNodeComponent("text"),
    span: makeNodeComponent("span"),

    // Metadata about props expected for PlasmicAccordionSection
    internalVariantProps: PlasmicAccordionSection__VariantProps,
    internalArgProps: PlasmicAccordionSection__ArgProps
  }
);

export default PlasmicAccordionSection;
/* prettier-ignore-end */
