// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qJhJbLN2Wy56BDK1v9VeHg
// Component: yiML9DV_aW
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
import RoadmapGrid from "../../RoadmapGrid"; // plasmic-import: XjZkPKXlmtd/component
import Button from "../../Button"; // plasmic-import: W52igaDMzA10w6/component

import { useScreenVariants as useScreenVariantsgfTNvlXeClRRx } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: GfTNvlXE_ClRRx/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_open_bootcamp_v_2_0.module.css"; // plasmic-import: qJhJbLN2Wy56BDK1v9VeHg/projectcss
import sty from "./PlasmicRoadmapGridOp.module.css"; // plasmic-import: yiML9DV_aW/css

export type PlasmicRoadmapGridOp__VariantMembers = {};

export type PlasmicRoadmapGridOp__VariantsArgs = {};
type VariantPropType = keyof PlasmicRoadmapGridOp__VariantsArgs;
export const PlasmicRoadmapGridOp__VariantProps = new Array<VariantPropType>();

export type PlasmicRoadmapGridOp__ArgsType = {};
type ArgPropType = keyof PlasmicRoadmapGridOp__ArgsType;
export const PlasmicRoadmapGridOp__ArgProps = new Array<ArgPropType>();

export type PlasmicRoadmapGridOp__OverridesType = {
  root?: p.Flex<"div">;
  sectionHeading9?: p.Flex<"div">;
  sectionTitle9?: p.Flex<"div">;
  description19?: p.Flex<"p">;
  roadmapGrid?: p.Flex<typeof RoadmapGrid>;
  roadmapGridButtonContainer?: p.Flex<"div">;
  button?: p.Flex<typeof Button>;
};

export interface DefaultRoadmapGridOpProps {
  className?: string;
}

function PlasmicRoadmapGridOp__RenderFunc(props: {
  variants: PlasmicRoadmapGridOp__VariantsArgs;
  args: PlasmicRoadmapGridOp__ArgsType;
  overrides: PlasmicRoadmapGridOp__OverridesType;

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
        id={"especializaciones" as const}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__c6PxX)}
        >
          {true ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__e1L94)}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"sectionHeading9"}
                data-plasmic-override={overrides.sectionHeading9}
                hasGap={true}
                className={classNames(projectcss.all, sty.sectionHeading9)}
              >
                <div
                  data-plasmic-name={"sectionTitle9"}
                  data-plasmic-override={overrides.sectionTitle9}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.sectionTitle9
                  )}
                >
                  {"Encuentra el nivel que se adapte a ti"}
                </div>

                <p
                  data-plasmic-name={"description19"}
                  data-plasmic-override={overrides.description19}
                  className={classNames(
                    projectcss.all,
                    projectcss.p,
                    projectcss.__wab_text,
                    sty.description19
                  )}
                >
                  {
                    "Tenemos hojas de ruta confeccionadas para cada tipo de alumno, tanto los que empiezan en el mundo del desarrollo como los que ya tienen conocimientos avanzados y solo necesitan un último empujón que les lance al entorno laboral."
                  }
                </p>
              </p.Stack>

              <RoadmapGrid
                data-plasmic-name={"roadmapGrid"}
                data-plasmic-override={overrides.roadmapGrid}
                className={classNames("__wab_instance", sty.roadmapGrid)}
              />
            </p.Stack>
          ) : null}

          <div
            data-plasmic-name={"roadmapGridButtonContainer"}
            data-plasmic-override={overrides.roadmapGridButtonContainer}
            className={classNames(
              projectcss.all,
              sty.roadmapGridButtonContainer
            )}
            id={"home_roadmap_grid__button" as const}
          >
            <Button
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              className={classNames("__wab_instance", sty.button)}
              color={"blue" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__av3Ok)}
                  role={"img"}
                />
              }
              link={"/cursos" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg___57Wce)}
                  role={"img"}
                />
              }
            >
              {"Ver todos los cursos"}
            </Button>
          </div>
        </p.Stack>
      </p.Stack>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "sectionHeading9",
    "sectionTitle9",
    "description19",
    "roadmapGrid",
    "roadmapGridButtonContainer",
    "button"
  ],
  sectionHeading9: ["sectionHeading9", "sectionTitle9", "description19"],
  sectionTitle9: ["sectionTitle9"],
  description19: ["description19"],
  roadmapGrid: ["roadmapGrid"],
  roadmapGridButtonContainer: ["roadmapGridButtonContainer", "button"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  sectionHeading9: "div";
  sectionTitle9: "div";
  description19: "p";
  roadmapGrid: typeof RoadmapGrid;
  roadmapGridButtonContainer: "div";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRoadmapGridOp__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRoadmapGridOp__VariantsArgs;
    args?: PlasmicRoadmapGridOp__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRoadmapGridOp__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicRoadmapGridOp__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicRoadmapGridOp__ArgProps,
          internalVariantPropNames: PlasmicRoadmapGridOp__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicRoadmapGridOp__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRoadmapGridOp";
  } else {
    func.displayName = `PlasmicRoadmapGridOp.${nodeName}`;
  }
  return func;
}

export const PlasmicRoadmapGridOp = Object.assign(
  // Top-level PlasmicRoadmapGridOp renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sectionHeading9: makeNodeComponent("sectionHeading9"),
    sectionTitle9: makeNodeComponent("sectionTitle9"),
    description19: makeNodeComponent("description19"),
    roadmapGrid: makeNodeComponent("roadmapGrid"),
    roadmapGridButtonContainer: makeNodeComponent("roadmapGridButtonContainer"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicRoadmapGridOp
    internalVariantProps: PlasmicRoadmapGridOp__VariantProps,
    internalArgProps: PlasmicRoadmapGridOp__ArgProps
  }
);

export default PlasmicRoadmapGridOp;
/* prettier-ignore-end */
