// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qJhJbLN2Wy56BDK1v9VeHg
// Component: BC1CTkZPHTn
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
import Breadcrumb from "../../Breadcrumb"; // plasmic-import: ekDTLgGFZZ/component
import BreadcrumbItem from "../../BreadcrumbItem"; // plasmic-import: nl-iwxSy9T/component
import LessonInfoContainer from "../../LessonInfoContainer"; // plasmic-import: Tp8pI-iqIC/component
import LessonInfoChip from "../../LessonInfoChip"; // plasmic-import: l1jB988kix/component

import { useScreenVariants as useScreenVariantsgfTNvlXeClRRx } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: GfTNvlXE_ClRRx/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_open_bootcamp_v_2_0.module.css"; // plasmic-import: qJhJbLN2Wy56BDK1v9VeHg/projectcss
import sty from "./PlasmicHeroLeccion.module.css"; // plasmic-import: BC1CTkZPHTn/css

import Vector16Icon from "./icons/PlasmicIcon__Vector16"; // plasmic-import: wVTm15CXg5/icon
import Polygon8Icon from "./icons/PlasmicIcon__Polygon8"; // plasmic-import: ppJGUFvcu/icon
import Union5Icon from "./icons/PlasmicIcon__Union5"; // plasmic-import: hRNsWe6t11/icon

export type PlasmicHeroLeccion__VariantMembers = {
  theme: "light" | "dark";
};

export type PlasmicHeroLeccion__VariantsArgs = {
  theme?: SingleChoiceArg<"light" | "dark">;
};

type VariantPropType = keyof PlasmicHeroLeccion__VariantsArgs;
export const PlasmicHeroLeccion__VariantProps = new Array<VariantPropType>(
  "theme"
);

export type PlasmicHeroLeccion__ArgsType = {
  heading?: React.ReactNode;
  courseImg?: React.ReactNode;
  info?: React.ReactNode;
  breadcrumb?: React.ReactNode;
};

type ArgPropType = keyof PlasmicHeroLeccion__ArgsType;
export const PlasmicHeroLeccion__ArgProps = new Array<ArgPropType>(
  "heading",
  "courseImg",
  "info",
  "breadcrumb"
);

export type PlasmicHeroLeccion__OverridesType = {
  root?: p.Flex<"div">;
  leftSide?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  rightSide?: p.Flex<"div">;
};

export interface DefaultHeroLeccionProps {
  heading?: React.ReactNode;
  courseImg?: React.ReactNode;
  info?: React.ReactNode;
  breadcrumb?: React.ReactNode;
  theme?: SingleChoiceArg<"light" | "dark">;
  className?: string;
}

function PlasmicHeroLeccion__RenderFunc(props: {
  variants: PlasmicHeroLeccion__VariantsArgs;
  args: PlasmicHeroLeccion__ArgsType;
  overrides: PlasmicHeroLeccion__OverridesType;

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
        { [sty.roottheme_dark]: hasVariant(variants, "theme", "dark") }
      )}
    >
      {true ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__tMUgm, {
            [sty.freeBoxtheme_dark__tMUgmvXvBr]: hasVariant(
              variants,
              "theme",
              "dark"
            )
          })}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"leftSide"}
            data-plasmic-override={overrides.leftSide}
            hasGap={true}
            className={classNames(projectcss.all, sty.leftSide, {
              [sty.leftSidetheme_dark]: hasVariant(variants, "theme", "dark")
            })}
          >
            {true ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__a72Yc)}
              >
                <h1
                  data-plasmic-name={"h1"}
                  data-plasmic-override={overrides.h1}
                  className={classNames(projectcss.all, projectcss.h1, sty.h1)}
                >
                  {p.renderPlasmicSlot({
                    defaultContents: "Palabras reservadas en Java ",
                    value: args.heading,
                    className: classNames(sty.slotTargetHeading)
                  })}
                </h1>

                {p.renderPlasmicSlot({
                  defaultContents: (
                    <Breadcrumb
                      bg={"no" as const}
                      className={classNames(
                        "__wab_instance",
                        sty.breadcrumb__guTrj
                      )}
                    />
                  ),

                  value: args.breadcrumb
                })}
              </p.Stack>
            ) : null}
            {p.renderPlasmicSlot({
              defaultContents: (
                <LessonInfoContainer
                  className={classNames(
                    "__wab_instance",
                    sty.lessonInfoContainer__kwpyO
                  )}
                />
              ),

              value: args.info
            })}
          </p.Stack>

          <p.Stack
            as={"div"}
            data-plasmic-name={"rightSide"}
            data-plasmic-override={overrides.rightSide}
            hasGap={true}
            className={classNames(projectcss.all, sty.rightSide)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__iWvQ6)}>
              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox__gznCz)}>
                  {p.renderPlasmicSlot({
                    defaultContents: (
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img___85RXn)}
                        displayHeight={"100%" as const}
                        displayMaxHeight={"none" as const}
                        displayMaxWidth={"100%" as const}
                        displayMinHeight={"0" as const}
                        displayMinWidth={"0" as const}
                        displayWidth={"100%" as const}
                        loader={"plasmic"}
                        loading={"lazy" as const}
                      />
                    ),

                    value: args.courseImg
                  })}
                </div>
              ) : null}
            </div>
          </p.Stack>
        </div>
      ) : null}

      <Vector16Icon
        className={classNames(projectcss.all, sty.svg__qVjqe)}
        role={"img"}
      />

      {(hasVariant(globalVariants, "screen", "laptop") ? true : true) ? (
        <Polygon8Icon
          className={classNames(projectcss.all, sty.svg__eltyl)}
          role={"img"}
        />
      ) : null}
      {(hasVariant(globalVariants, "screen", "laptop") ? true : true) ? (
        <Union5Icon
          className={classNames(projectcss.all, sty.svg__rzevD)}
          role={"img"}
        />
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "leftSide", "h1", "rightSide"],
  leftSide: ["leftSide", "h1"],
  h1: ["h1"],
  rightSide: ["rightSide"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  leftSide: "div";
  h1: "h1";
  rightSide: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeroLeccion__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeroLeccion__VariantsArgs;
    args?: PlasmicHeroLeccion__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeroLeccion__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeroLeccion__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicHeroLeccion__ArgProps,
          internalVariantPropNames: PlasmicHeroLeccion__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHeroLeccion__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeroLeccion";
  } else {
    func.displayName = `PlasmicHeroLeccion.${nodeName}`;
  }
  return func;
}

export const PlasmicHeroLeccion = Object.assign(
  // Top-level PlasmicHeroLeccion renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    leftSide: makeNodeComponent("leftSide"),
    h1: makeNodeComponent("h1"),
    rightSide: makeNodeComponent("rightSide"),

    // Metadata about props expected for PlasmicHeroLeccion
    internalVariantProps: PlasmicHeroLeccion__VariantProps,
    internalArgProps: PlasmicHeroLeccion__ArgProps
  }
);

export default PlasmicHeroLeccion;
/* prettier-ignore-end */