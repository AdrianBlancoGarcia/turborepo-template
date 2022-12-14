// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: upY9cnzMG3kZgeoF6ecCnw
// Component: Ru-AfF8KEe4
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
import ValueItem from "../../ValueItem"; // plasmic-import: sij89BGYq6/component
import CompanyLink2 from "../../CompanyLink2"; // plasmic-import: DqqFqbcMQFE/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_job_run.module.css"; // plasmic-import: upY9cnzMG3kZgeoF6ecCnw/projectcss
import sty from "./PlasmicCompanyDetails.module.css"; // plasmic-import: Ru-AfF8KEe4/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: -Kyqm1yXpr_/icon
import Icon23Icon from "./icons/PlasmicIcon__Icon23"; // plasmic-import: -bUtD9hB_g5/icon

export type PlasmicCompanyDetails__VariantMembers = {
  type: "valores" | "enlaces";
};

export type PlasmicCompanyDetails__VariantsArgs = {
  type?: SingleChoiceArg<"valores" | "enlaces">;
};

type VariantPropType = keyof PlasmicCompanyDetails__VariantsArgs;
export const PlasmicCompanyDetails__VariantProps = new Array<VariantPropType>(
  "type"
);

export type PlasmicCompanyDetails__ArgsType = {
  companyValues?: React.ReactNode;
  companyLinks?: React.ReactNode;
};

type ArgPropType = keyof PlasmicCompanyDetails__ArgsType;
export const PlasmicCompanyDetails__ArgProps = new Array<ArgPropType>(
  "companyValues",
  "companyLinks"
);

export type PlasmicCompanyDetails__OverridesType = {
  root?: p.Flex<"div">;
  text?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultCompanyDetailsProps {
  companyValues?: React.ReactNode;
  companyLinks?: React.ReactNode;
  type?: SingleChoiceArg<"valores" | "enlaces">;
  className?: string;
}

function PlasmicCompanyDetails__RenderFunc(props: {
  variants: PlasmicCompanyDetails__VariantsArgs;
  args: PlasmicCompanyDetails__ArgsType;
  overrides: PlasmicCompanyDetails__OverridesType;

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
        {
          [sty.roottype_enlaces]: hasVariant(variants, "type", "enlaces"),
          [sty.roottype_valores]: hasVariant(variants, "type", "valores")
        }
      )}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text, {
          [sty.texttype_enlaces]: hasVariant(variants, "type", "enlaces")
        })}
      >
        {hasVariant(variants, "type", "enlaces")
          ? "Enlaces"
          : "Valores de la empresa"}
      </div>

      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxtype_enlaces]: hasVariant(variants, "type", "enlaces"),
          [sty.freeBoxtype_valores]: hasVariant(variants, "type", "valores")
        })}
      >
        {(hasVariant(variants, "type", "enlaces") ? false : true)
          ? p.renderPlasmicSlot({
              defaultContents: (
                <React.Fragment>
                  <ValueItem
                    className={classNames(
                      "__wab_instance",
                      sty.valueItem___2ACff
                    )}
                  />

                  <ValueItem
                    className={classNames(
                      "__wab_instance",
                      sty.valueItem__lpQs0
                    )}
                  />

                  <ValueItem
                    className={classNames(
                      "__wab_instance",
                      sty.valueItem__g8H9H
                    )}
                  />

                  <ValueItem
                    className={classNames(
                      "__wab_instance",
                      sty.valueItem__sFajK
                    )}
                  />

                  <ValueItem
                    className={classNames("__wab_instance", sty.valueItem__pGK)}
                  />

                  <ValueItem
                    className={classNames(
                      "__wab_instance",
                      sty.valueItem__fy37
                    )}
                  />

                  <ValueItem
                    className={classNames(
                      "__wab_instance",
                      sty.valueItem__loQni
                    )}
                  />

                  <ValueItem
                    className={classNames(
                      "__wab_instance",
                      sty.valueItem__wcrmo
                    )}
                  />

                  <ValueItem
                    className={classNames(
                      "__wab_instance",
                      sty.valueItem__hTkDg
                    )}
                  />

                  <ValueItem
                    className={classNames(
                      "__wab_instance",
                      sty.valueItem__uqDfb
                    )}
                  />
                </React.Fragment>
              ),
              value: args.companyValues
            })
          : null}

        {(hasVariant(variants, "type", "valores") ? false : true)
          ? p.renderPlasmicSlot({
              defaultContents: (
                <React.Fragment>
                  <CompanyLink2
                    className={classNames(
                      "__wab_instance",
                      sty.companyLink2__etq5I
                    )}
                    showEndIcon={true}
                    showStartIcon={true}
                  />

                  <CompanyLink2
                    className={classNames(
                      "__wab_instance",
                      sty.companyLink2__tvlSa
                    )}
                    showEndIcon={true}
                    showStartIcon={true}
                  />

                  <CompanyLink2
                    className={classNames(
                      "__wab_instance",
                      sty.companyLink2__lsofE
                    )}
                    showEndIcon={true}
                    showStartIcon={true}
                  />

                  <CompanyLink2
                    className={classNames(
                      "__wab_instance",
                      sty.companyLink2__l13Gz
                    )}
                    showEndIcon={true}
                    showStartIcon={true}
                  />

                  <CompanyLink2
                    className={classNames(
                      "__wab_instance",
                      sty.companyLink2__j9Mtd
                    )}
                    showEndIcon={true}
                    showStartIcon={true}
                  />

                  <CompanyLink2
                    className={classNames(
                      "__wab_instance",
                      sty.companyLink2___5Wj6
                    )}
                    showEndIcon={true}
                    showStartIcon={true}
                  />

                  <CompanyLink2
                    className={classNames(
                      "__wab_instance",
                      sty.companyLink2__sak17
                    )}
                    showEndIcon={true}
                    showStartIcon={true}
                  />

                  <CompanyLink2
                    className={classNames(
                      "__wab_instance",
                      sty.companyLink2__eb0Ab
                    )}
                    showEndIcon={true}
                    showStartIcon={true}
                  />

                  <CompanyLink2
                    className={classNames(
                      "__wab_instance",
                      sty.companyLink2__bj8Dg
                    )}
                    showEndIcon={true}
                    showStartIcon={true}
                  />

                  <CompanyLink2
                    className={classNames(
                      "__wab_instance",
                      sty.companyLink2__kjOsY
                    )}
                    showEndIcon={true}
                    showStartIcon={true}
                  />

                  <CompanyLink2
                    className={classNames(
                      "__wab_instance",
                      sty.companyLink2__pdh77
                    )}
                    showEndIcon={true}
                    showStartIcon={true}
                  />

                  <CompanyLink2
                    className={classNames(
                      "__wab_instance",
                      sty.companyLink2__s0Gxm
                    )}
                    showEndIcon={true}
                    showStartIcon={true}
                  />
                </React.Fragment>
              ),
              value: args.companyLinks
            })
          : null}
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text", "freeBox"],
  text: ["text"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCompanyDetails__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCompanyDetails__VariantsArgs;
    args?: PlasmicCompanyDetails__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCompanyDetails__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCompanyDetails__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicCompanyDetails__ArgProps,
          internalVariantPropNames: PlasmicCompanyDetails__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicCompanyDetails__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCompanyDetails";
  } else {
    func.displayName = `PlasmicCompanyDetails.${nodeName}`;
  }
  return func;
}

export const PlasmicCompanyDetails = Object.assign(
  // Top-level PlasmicCompanyDetails renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicCompanyDetails
    internalVariantProps: PlasmicCompanyDetails__VariantProps,
    internalArgProps: PlasmicCompanyDetails__ArgProps
  }
);

export default PlasmicCompanyDetails;
/* prettier-ignore-end */
