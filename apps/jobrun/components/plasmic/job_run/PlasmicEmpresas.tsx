// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: upY9cnzMG3kZgeoF6ecCnw
// Component: qeFx_PTBQl
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
import NavBar from "../../NavBar"; // plasmic-import: GfUnvF4AzI/component
import LinkJr2 from "../../LinkJr2"; // plasmic-import: tsRi3ugy1sA/component
import Button from "../../Button"; // plasmic-import: BnsO6Lq9gm/component
import Logo from "../../Logo"; // plasmic-import: EamO-yxXIE/component
import CompanyCard from "../../CompanyCard"; // plasmic-import: LdyX8IaXajR/component
import Banner from "../../Banner"; // plasmic-import: CVyrqsg7IH/component
import Footer from "../../Footer"; // plasmic-import: JpAsUvUFqp/component

import { useScreenVariants as useScreenVariants_2SafZfzx0FlS7 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 2SAFZfzx0FlS7/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_job_run.module.css"; // plasmic-import: upY9cnzMG3kZgeoF6ecCnw/projectcss
import sty from "./PlasmicEmpresas.module.css"; // plasmic-import: qeFx_PTBQl/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: -Kyqm1yXpr_/icon
import Icon23Icon from "./icons/PlasmicIcon__Icon23"; // plasmic-import: -bUtD9hB_g5/icon
import Vector6Icon from "./icons/PlasmicIcon__Vector6"; // plasmic-import: Gbkvuahq9N/icon
import Vector7Icon from "./icons/PlasmicIcon__Vector7"; // plasmic-import: 1KVijtEtSK/icon
import Vector8Icon from "./icons/PlasmicIcon__Vector8"; // plasmic-import: e2hxgpzMOc/icon

export type PlasmicEmpresas__VariantMembers = {};

export type PlasmicEmpresas__VariantsArgs = {};
type VariantPropType = keyof PlasmicEmpresas__VariantsArgs;
export const PlasmicEmpresas__VariantProps = new Array<VariantPropType>();

export type PlasmicEmpresas__ArgsType = {
  totalCompanies?: React.ReactNode;
  companiesContent?: React.ReactNode;
  navbar?: React.ReactNode;
  banner?: React.ReactNode;
  footer?: React.ReactNode;
  heading?: React.ReactNode;
};

type ArgPropType = keyof PlasmicEmpresas__ArgsType;
export const PlasmicEmpresas__ArgProps = new Array<ArgPropType>(
  "totalCompanies",
  "companiesContent",
  "navbar",
  "banner",
  "footer",
  "heading"
);

export type PlasmicEmpresas__OverridesType = {
  root?: p.Flex<"div">;
  companies?: p.Flex<"div">;
};

export interface DefaultEmpresasProps {}

function PlasmicEmpresas__RenderFunc(props: {
  variants: PlasmicEmpresas__VariantsArgs;
  args: PlasmicEmpresas__ArgsType;
  overrides: PlasmicEmpresas__OverridesType;

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
          <div className={classNames(projectcss.all, sty.freeBox__oULpU)}>
            {p.renderPlasmicSlot({
              defaultContents: (
                <NavBar
                  className={classNames("__wab_instance", sty.navBar__guqk)}
                  links={
                    <React.Fragment>
                      <LinkJr2
                        className={classNames(
                          "__wab_instance",
                          sty.linkJr2__bl9Ja
                        )}
                        color={"white" as const}
                      />

                      <LinkJr2
                        className={classNames(
                          "__wab_instance",
                          sty.linkJr2__cmrP5
                        )}
                        color={"white" as const}
                        label={"Ofertas"}
                      />

                      <LinkJr2
                        className={classNames(
                          "__wab_instance",
                          sty.linkJr2___3EUMr
                        )}
                        color={"white" as const}
                        label={"Empresas"}
                      />

                      <LinkJr2
                        className={classNames(
                          "__wab_instance",
                          sty.linkJr2__hzgqn
                        )}
                        color={"white" as const}
                        label={"Formaci??n gratuita"}
                      />
                    </React.Fragment>
                  }
                  menuButton={
                    <Button
                      className={classNames("__wab_instance", sty.button__lwWy)}
                      color={[]}
                      label={"??nete a JobRun"}
                      menu={"white" as const}
                    />
                  }
                  navLogo={
                    <Logo
                      className={classNames("__wab_instance", sty.logo__gnv3E)}
                      logo={"complexWhite" as const}
                    />
                  }
                  page={"detail" as const}
                />
              ),

              value: args.navbar
            })}
          </div>

          {true ? (
            <p.Stack
              as={"div"}
              data-plasmic-name={"companies"}
              data-plasmic-override={overrides.companies}
              hasGap={true}
              className={classNames(projectcss.all, sty.companies)}
            >
              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__xX9Z1)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__nMYgc)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__byhZe)}
                    >
                      {p.renderPlasmicSlot({
                        defaultContents:
                          "Echa un vistazo a estas ofertas de empleo:",
                        value: args.heading,
                        className: classNames(sty.slotTargetHeading)
                      })}
                    </div>

                    {true ? (
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox___0UAk
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__oP6V4
                          )}
                        >
                          {p.renderPlasmicSlot({
                            defaultContents: "24 Empresas ofertando",
                            value: args.totalCompanies,
                            className: classNames(sty.slotTargetTotalCompanies)
                          })}
                        </div>

                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__tmZra
                          )}
                        >
                          {p.renderPlasmicSlot({
                            defaultContents: (
                              <React.Fragment>
                                <CompanyCard
                                  className={classNames(
                                    "__wab_instance",
                                    sty.companyCard__zuxO
                                  )}
                                />

                                <CompanyCard
                                  className={classNames(
                                    "__wab_instance",
                                    sty.companyCard__miSQ
                                  )}
                                  location={
                                    <div
                                      className={classNames(
                                        projectcss.all,
                                        projectcss.__wab_text,
                                        sty.text__iBlYj
                                      )}
                                    >
                                      {"Location"}
                                    </div>
                                  }
                                />

                                <CompanyCard
                                  className={classNames(
                                    "__wab_instance",
                                    sty.companyCard___5DRAs
                                  )}
                                  location={
                                    <div
                                      className={classNames(
                                        projectcss.all,
                                        projectcss.__wab_text,
                                        sty.text__oZiVl
                                      )}
                                    >
                                      {"Location"}
                                    </div>
                                  }
                                />

                                <CompanyCard
                                  className={classNames(
                                    "__wab_instance",
                                    sty.companyCard__yzaoC
                                  )}
                                  location={
                                    <div
                                      className={classNames(
                                        projectcss.all,
                                        projectcss.__wab_text,
                                        sty.text__gFxwu
                                      )}
                                    >
                                      {"Location"}
                                    </div>
                                  }
                                />

                                <CompanyCard
                                  className={classNames(
                                    "__wab_instance",
                                    sty.companyCard___5D63D
                                  )}
                                  location={
                                    <div
                                      className={classNames(
                                        projectcss.all,
                                        projectcss.__wab_text,
                                        sty.text___89UsC
                                      )}
                                    >
                                      {"Location"}
                                    </div>
                                  }
                                />

                                <CompanyCard
                                  className={classNames(
                                    "__wab_instance",
                                    sty.companyCard__c7U1
                                  )}
                                  location={
                                    <div
                                      className={classNames(
                                        projectcss.all,
                                        projectcss.__wab_text,
                                        sty.text___2Xlf
                                      )}
                                    >
                                      {"Location"}
                                    </div>
                                  }
                                />
                              </React.Fragment>
                            ),
                            value: args.companiesContent
                          })}
                        </div>
                      </p.Stack>
                    ) : null}
                  </p.Stack>
                </p.Stack>
              ) : null}
            </p.Stack>
          ) : null}
          {p.renderPlasmicSlot({
            defaultContents: (
              <Banner
                className={classNames("__wab_instance", sty.banner__xgEz2)}
              />
            ),

            value: args.banner
          })}

          {p.renderPlasmicSlot({
            defaultContents: (
              <Footer
                className={classNames("__wab_instance", sty.footer___1Fi1B)}
              />
            ),

            value: args.footer
          })}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "companies"],
  companies: ["companies"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  companies: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicEmpresas__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicEmpresas__VariantsArgs;
    args?: PlasmicEmpresas__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicEmpresas__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicEmpresas__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicEmpresas__ArgProps,
          internalVariantPropNames: PlasmicEmpresas__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicEmpresas__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEmpresas";
  } else {
    func.displayName = `PlasmicEmpresas.${nodeName}`;
  }
  return func;
}

export const PlasmicEmpresas = Object.assign(
  // Top-level PlasmicEmpresas renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    companies: makeNodeComponent("companies"),

    // Metadata about props expected for PlasmicEmpresas
    internalVariantProps: PlasmicEmpresas__VariantProps,
    internalArgProps: PlasmicEmpresas__ArgProps
  }
);

export default PlasmicEmpresas;
/* prettier-ignore-end */
