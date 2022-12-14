// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: upY9cnzMG3kZgeoF6ecCnw
// Component: uha3gDiVh90
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
import TabBar from "../../TabBar"; // plasmic-import: vDEeMdDYau/component
import TabBarItem from "../../TabBarItem"; // plasmic-import: rfB9MfvQL9/component
import OfferCard from "../../OfferCard"; // plasmic-import: j3ZEEkH_dZ/component
import Tag from "../../Tag"; // plasmic-import: y2UxC8Idw2/component
import OfferCardDetailsItem from "../../OfferCardDetailsItem"; // plasmic-import: E8-Ct61FHc/component

import { useScreenVariants as useScreenVariants_2SafZfzx0FlS7 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 2SAFZfzx0FlS7/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_job_run.module.css"; // plasmic-import: upY9cnzMG3kZgeoF6ecCnw/projectcss
import sty from "./PlasmicOffersSection.module.css"; // plasmic-import: uha3gDiVh90/css

import Vector10Icon from "./icons/PlasmicIcon__Vector10"; // plasmic-import: m0MmFEQ7ZK/icon

export type PlasmicOffersSection__VariantMembers = {};

export type PlasmicOffersSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicOffersSection__VariantsArgs;
export const PlasmicOffersSection__VariantProps = new Array<VariantPropType>();

export type PlasmicOffersSection__ArgsType = {
  offerContent?: React.ReactNode;
  tabBar?: React.ReactNode;
};

type ArgPropType = keyof PlasmicOffersSection__ArgsType;
export const PlasmicOffersSection__ArgProps = new Array<ArgPropType>(
  "offerContent",
  "tabBar"
);

export type PlasmicOffersSection__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultOffersSectionProps {
  offerContent?: React.ReactNode;
  tabBar?: React.ReactNode;
  className?: string;
}

function PlasmicOffersSection__RenderFunc(props: {
  variants: PlasmicOffersSection__VariantsArgs;
  args: PlasmicOffersSection__ArgsType;
  overrides: PlasmicOffersSection__OverridesType;

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
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__o71Qr)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <TabBar
                className={classNames("__wab_instance", sty.tabBar__m3Akb)}
                container={
                  <React.Fragment>
                    <TabBarItem
                      className={classNames(
                        "__wab_instance",
                        sty.tabBarItem__aenOb
                      )}
                      label={"OFERTAS EN REMOTO"}
                    />

                    <TabBarItem
                      className={classNames(
                        "__wab_instance",
                        sty.tabBarItem__ix2Ku
                      )}
                      label={"FULLSTACK"}
                      state={"nonActive" as const}
                    />

                    <TabBarItem
                      className={classNames(
                        "__wab_instance",
                        sty.tabBarItem__t82IB
                      )}
                      label={"FRONTEND"}
                      state={"nonActive" as const}
                    />

                    <TabBarItem
                      className={classNames(
                        "__wab_instance",
                        sty.tabBarItem___6Z2Ag
                      )}
                      label={"JAVASCRIPT"}
                      state={"nonActive" as const}
                    />
                  </React.Fragment>
                }
              />
            ),

            value: args.tabBar
          })}
        </p.Stack>

        <div className={classNames(projectcss.all, sty.freeBox__zgQCf)}>
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <OfferCard
                  className={classNames("__wab_instance", sty.offerCard__pe2K)}
                />

                <OfferCard
                  className={classNames("__wab_instance", sty.offerCard__ojxri)}
                />

                <OfferCard
                  className={classNames("__wab_instance", sty.offerCard__j8Isl)}
                />

                <OfferCard
                  className={classNames("__wab_instance", sty.offerCard__zgwIz)}
                />

                <OfferCard
                  className={classNames("__wab_instance", sty.offerCard__rfA2N)}
                />

                {true ? (
                  <OfferCard
                    className={classNames(
                      "__wab_instance",
                      sty.offerCard__c6EU
                    )}
                  />
                ) : null}
              </React.Fragment>
            ),
            value: args.offerContent
          })}
        </div>
      </p.Stack>
    ) : null
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
  PlasmicOffersSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicOffersSection__VariantsArgs;
    args?: PlasmicOffersSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicOffersSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicOffersSection__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicOffersSection__ArgProps,
          internalVariantPropNames: PlasmicOffersSection__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicOffersSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicOffersSection";
  } else {
    func.displayName = `PlasmicOffersSection.${nodeName}`;
  }
  return func;
}

export const PlasmicOffersSection = Object.assign(
  // Top-level PlasmicOffersSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicOffersSection
    internalVariantProps: PlasmicOffersSection__VariantProps,
    internalArgProps: PlasmicOffersSection__ArgProps
  }
);

export default PlasmicOffersSection;
/* prettier-ignore-end */
