// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fxuAGcsah199rVCjPzGTfY
// Component: LdKrHm0kiU
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
import Navbar from "../../Navbar"; // plasmic-import: uEAoMM34trbb9e/component
import Button from "../../Button"; // plasmic-import: xxIo1oxPKF17E6/component
import LinkOm from "../../LinkOm"; // plasmic-import: 1gULMJc0uv/component
import PoliticadePrivacidad from "../../PoliticadePrivacidad"; // plasmic-import: vWa7iGL3PEH/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_open_marketers.module.css"; // plasmic-import: fxuAGcsah199rVCjPzGTfY/projectcss
import sty from "./PlasmicPoliticaPrivacidad.module.css"; // plasmic-import: LdKrHm0kiU/css

import AppleIcon from "./icons/PlasmicIcon__Apple"; // plasmic-import: bSsTEcq38cO9yG/icon
import Icon15Icon from "./icons/PlasmicIcon__Icon15"; // plasmic-import: 1LQtfIq6-_/icon

export type PlasmicPoliticaPrivacidad__VariantMembers = {};

export type PlasmicPoliticaPrivacidad__VariantsArgs = {};
type VariantPropType = keyof PlasmicPoliticaPrivacidad__VariantsArgs;
export const PlasmicPoliticaPrivacidad__VariantProps =
  new Array<VariantPropType>();

export type PlasmicPoliticaPrivacidad__ArgsType = {};
type ArgPropType = keyof PlasmicPoliticaPrivacidad__ArgsType;
export const PlasmicPoliticaPrivacidad__ArgProps = new Array<ArgPropType>();

export type PlasmicPoliticaPrivacidad__OverridesType = {
  root?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  politicadePrivacidad?: p.Flex<typeof PoliticadePrivacidad>;
};

export interface DefaultPoliticaPrivacidadProps {}

function PlasmicPoliticaPrivacidad__RenderFunc(props: {
  variants: PlasmicPoliticaPrivacidad__VariantsArgs;
  args: PlasmicPoliticaPrivacidad__ArgsType;
  overrides: PlasmicPoliticaPrivacidad__OverridesType;

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
    <React.Fragment>
      {}

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <PoliticadePrivacidad
            data-plasmic-name={"politicadePrivacidad"}
            data-plasmic-override={overrides.politicadePrivacidad}
            className={classNames("__wab_instance", sty.politicadePrivacidad)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navbar", "politicadePrivacidad"],
  navbar: ["navbar"],
  politicadePrivacidad: ["politicadePrivacidad"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  politicadePrivacidad: typeof PoliticadePrivacidad;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPoliticaPrivacidad__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPoliticaPrivacidad__VariantsArgs;
    args?: PlasmicPoliticaPrivacidad__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPoliticaPrivacidad__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPoliticaPrivacidad__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicPoliticaPrivacidad__ArgProps,
          internalVariantPropNames: PlasmicPoliticaPrivacidad__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicPoliticaPrivacidad__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPoliticaPrivacidad";
  } else {
    func.displayName = `PlasmicPoliticaPrivacidad.${nodeName}`;
  }
  return func;
}

export const PlasmicPoliticaPrivacidad = Object.assign(
  // Top-level PlasmicPoliticaPrivacidad renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    politicadePrivacidad: makeNodeComponent("politicadePrivacidad"),

    // Metadata about props expected for PlasmicPoliticaPrivacidad
    internalVariantProps: PlasmicPoliticaPrivacidad__VariantProps,
    internalArgProps: PlasmicPoliticaPrivacidad__ArgProps
  }
);

export default PlasmicPoliticaPrivacidad;
/* prettier-ignore-end */
