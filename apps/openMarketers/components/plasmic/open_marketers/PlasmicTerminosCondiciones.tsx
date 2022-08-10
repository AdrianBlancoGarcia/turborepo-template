// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fxuAGcsah199rVCjPzGTfY
// Component: Rs2u_HMLJ3
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
import TerminosyCondiciones from "../../TerminosyCondiciones"; // plasmic-import: 4AdkGHizRucc/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_open_marketers.module.css"; // plasmic-import: fxuAGcsah199rVCjPzGTfY/projectcss
import sty from "./PlasmicTerminosCondiciones.module.css"; // plasmic-import: Rs2u_HMLJ3/css

import AppleIcon from "./icons/PlasmicIcon__Apple"; // plasmic-import: bSsTEcq38cO9yG/icon
import Icon15Icon from "./icons/PlasmicIcon__Icon15"; // plasmic-import: 1LQtfIq6-_/icon

export type PlasmicTerminosCondiciones__VariantMembers = {};

export type PlasmicTerminosCondiciones__VariantsArgs = {};
type VariantPropType = keyof PlasmicTerminosCondiciones__VariantsArgs;
export const PlasmicTerminosCondiciones__VariantProps =
  new Array<VariantPropType>();

export type PlasmicTerminosCondiciones__ArgsType = {};
type ArgPropType = keyof PlasmicTerminosCondiciones__ArgsType;
export const PlasmicTerminosCondiciones__ArgProps = new Array<ArgPropType>();

export type PlasmicTerminosCondiciones__OverridesType = {
  root?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  terminosyCondiciones?: p.Flex<typeof TerminosyCondiciones>;
};

export interface DefaultTerminosCondicionesProps {}

function PlasmicTerminosCondiciones__RenderFunc(props: {
  variants: PlasmicTerminosCondiciones__VariantsArgs;
  args: PlasmicTerminosCondiciones__ArgsType;
  overrides: PlasmicTerminosCondiciones__OverridesType;

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

          <TerminosyCondiciones
            data-plasmic-name={"terminosyCondiciones"}
            data-plasmic-override={overrides.terminosyCondiciones}
            className={classNames("__wab_instance", sty.terminosyCondiciones)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navbar", "terminosyCondiciones"],
  navbar: ["navbar"],
  terminosyCondiciones: ["terminosyCondiciones"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  terminosyCondiciones: typeof TerminosyCondiciones;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTerminosCondiciones__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTerminosCondiciones__VariantsArgs;
    args?: PlasmicTerminosCondiciones__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTerminosCondiciones__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTerminosCondiciones__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicTerminosCondiciones__ArgProps,
          internalVariantPropNames: PlasmicTerminosCondiciones__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicTerminosCondiciones__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTerminosCondiciones";
  } else {
    func.displayName = `PlasmicTerminosCondiciones.${nodeName}`;
  }
  return func;
}

export const PlasmicTerminosCondiciones = Object.assign(
  // Top-level PlasmicTerminosCondiciones renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    terminosyCondiciones: makeNodeComponent("terminosyCondiciones"),

    // Metadata about props expected for PlasmicTerminosCondiciones
    internalVariantProps: PlasmicTerminosCondiciones__VariantProps,
    internalArgProps: PlasmicTerminosCondiciones__ArgProps
  }
);

export default PlasmicTerminosCondiciones;
/* prettier-ignore-end */