// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: upY9cnzMG3kZgeoF6ecCnw
// Component: tbl8jcztgh
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
import ItemBadge from "../../ItemBadge"; // plasmic-import: qxyxLFpvV2/component

import { useScreenVariants as useScreenVariants_2SafZfzx0FlS7 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 2SAFZfzx0FlS7/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_job_run.module.css"; // plasmic-import: upY9cnzMG3kZgeoF6ecCnw/projectcss
import sty from "./PlasmicOfferRequirements.module.css"; // plasmic-import: tbl8jcztgh/css

export type PlasmicOfferRequirements__VariantMembers = {
  type: "skills" | "languages" | "others";
};

export type PlasmicOfferRequirements__VariantsArgs = {
  type?: SingleChoiceArg<"skills" | "languages" | "others">;
};

type VariantPropType = keyof PlasmicOfferRequirements__VariantsArgs;
export const PlasmicOfferRequirements__VariantProps =
  new Array<VariantPropType>("type");

export type PlasmicOfferRequirements__ArgsType = {
  experienceYears?: React.ReactNode;
  skillItems?: React.ReactNode;
  languageItems?: React.ReactNode;
  list?: React.ReactNode;
};

type ArgPropType = keyof PlasmicOfferRequirements__ArgsType;
export const PlasmicOfferRequirements__ArgProps = new Array<ArgPropType>(
  "experienceYears",
  "skillItems",
  "languageItems",
  "list"
);

export type PlasmicOfferRequirements__OverridesType = {
  root?: p.Flex<"div">;
  text?: p.Flex<"div">;
  ul?: p.Flex<"ul">;
};

export interface DefaultOfferRequirementsProps {
  experienceYears?: React.ReactNode;
  skillItems?: React.ReactNode;
  languageItems?: React.ReactNode;
  list?: React.ReactNode;
  type?: SingleChoiceArg<"skills" | "languages" | "others">;
  className?: string;
}

function PlasmicOfferRequirements__RenderFunc(props: {
  variants: PlasmicOfferRequirements__VariantsArgs;
  args: PlasmicOfferRequirements__ArgsType;
  overrides: PlasmicOfferRequirements__OverridesType;

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
        sty.root,
        { [sty.roottype_others]: hasVariant(variants, "type", "others") }
      )}
    >
      {true ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__ujMcD)}
        >
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text,
              {
                [sty.texttype_languages]: hasVariant(
                  variants,
                  "type",
                  "languages"
                ),
                [sty.texttype_others]: hasVariant(variants, "type", "others")
              }
            )}
          >
            {hasVariant(variants, "type", "others")
              ? "Otros Requisitos"
              : hasVariant(variants, "type", "languages")
              ? "Idiomas Requeridos"
              : "Tecnologías requeridas "}
          </div>

          {(
            hasVariant(variants, "type", "others")
              ? false
              : hasVariant(variants, "type", "languages")
              ? false
              : true
          )
            ? p.renderPlasmicSlot({
                defaultContents: "(Mínimo experiencia de 3 años)",
                value: args.experienceYears,
                className: classNames(sty.slotTargetExperienceYears, {
                  [sty.slotTargetExperienceYearstype_languages]: hasVariant(
                    variants,
                    "type",
                    "languages"
                  ),
                  [sty.slotTargetExperienceYearstype_others]: hasVariant(
                    variants,
                    "type",
                    "others"
                  )
                })
              })
            : null}
        </p.Stack>
      ) : null}

      {(hasVariant(variants, "type", "others") ? true : true) ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__yI5LW, {
            [sty.freeBoxtype_languages__yI5LWtKvF]: hasVariant(
              variants,
              "type",
              "languages"
            ),
            [sty.freeBoxtype_others__yI5LWjIod3]: hasVariant(
              variants,
              "type",
              "others"
            ),
            [sty.freeBoxtype_skills__yI5LWEcQan]: hasVariant(
              variants,
              "type",
              "skills"
            )
          })}
        >
          {(
            hasVariant(variants, "type", "languages")
              ? true
              : hasVariant(variants, "type", "skills")
              ? true
              : true
          ) ? (
            <ul
              data-plasmic-name={"ul"}
              data-plasmic-override={overrides.ul}
              className={classNames(projectcss.all, projectcss.ul, sty.ul, {
                [sty.ultype_languages]: hasVariant(
                  variants,
                  "type",
                  "languages"
                ),
                [sty.ultype_skills]: hasVariant(variants, "type", "skills")
              })}
            >
              {p.renderPlasmicSlot({
                defaultContents: (
                  <React.Fragment>
                    <li
                      className={classNames(
                        projectcss.all,
                        projectcss.li,
                        projectcss.__wab_text,
                        sty.li__gRrHm
                      )}
                    >
                      {"Enter some text"}
                    </li>

                    <li
                      className={classNames(
                        projectcss.all,
                        projectcss.li,
                        projectcss.__wab_text,
                        sty.li___6KcdA
                      )}
                    >
                      {"Enter some text"}
                    </li>

                    <li
                      className={classNames(
                        projectcss.all,
                        projectcss.li,
                        projectcss.__wab_text,
                        sty.li__pczIt
                      )}
                    >
                      {"Enter some text"}
                    </li>
                  </React.Fragment>
                ),
                value: args.list
              })}
            </ul>
          ) : null}

          {(
            hasVariant(variants, "type", "others")
              ? false
              : hasVariant(variants, "type", "languages")
              ? false
              : true
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <React.Fragment>
                    <ItemBadge
                      className={classNames(
                        "__wab_instance",
                        sty.itemBadge__ulUaP
                      )}
                      type={"skill" as const}
                    />

                    <ItemBadge
                      className={classNames(
                        "__wab_instance",
                        sty.itemBadge__rbbje
                      )}
                      type={"skill" as const}
                    />

                    <ItemBadge
                      className={classNames(
                        "__wab_instance",
                        sty.itemBadge__sfUyp
                      )}
                      type={"skill" as const}
                    />
                  </React.Fragment>
                ),
                value: args.skillItems
              })
            : null}

          {(
            hasVariant(variants, "type", "others")
              ? false
              : hasVariant(variants, "type", "skills")
              ? false
              : true
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <React.Fragment>
                    <ItemBadge
                      className={classNames(
                        "__wab_instance",
                        sty.itemBadge__mZmWa
                      )}
                      type={"language" as const}
                    />

                    <ItemBadge
                      className={classNames(
                        "__wab_instance",
                        sty.itemBadge__z7Cwy
                      )}
                      type={"language" as const}
                    />

                    <ItemBadge
                      className={classNames(
                        "__wab_instance",
                        sty.itemBadge__os2Yt
                      )}
                      type={"language" as const}
                    />
                  </React.Fragment>
                ),
                value: args.languageItems
              })
            : null}
        </p.Stack>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text", "ul"],
  text: ["text"],
  ul: ["ul"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
  ul: "ul";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicOfferRequirements__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicOfferRequirements__VariantsArgs;
    args?: PlasmicOfferRequirements__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicOfferRequirements__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicOfferRequirements__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicOfferRequirements__ArgProps,
          internalVariantPropNames: PlasmicOfferRequirements__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicOfferRequirements__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicOfferRequirements";
  } else {
    func.displayName = `PlasmicOfferRequirements.${nodeName}`;
  }
  return func;
}

export const PlasmicOfferRequirements = Object.assign(
  // Top-level PlasmicOfferRequirements renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    ul: makeNodeComponent("ul"),

    // Metadata about props expected for PlasmicOfferRequirements
    internalVariantProps: PlasmicOfferRequirements__VariantProps,
    internalArgProps: PlasmicOfferRequirements__ArgProps
  }
);

export default PlasmicOfferRequirements;
/* prettier-ignore-end */
