// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: upY9cnzMG3kZgeoF6ecCnw
// Component: 5TaUa4ZGqx
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
import CookiesContent from "../../CookiesContent"; // plasmic-import: HBOX81-Hta/component
import Footer from "../../Footer"; // plasmic-import: JpAsUvUFqp/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_job_run.module.css"; // plasmic-import: upY9cnzMG3kZgeoF6ecCnw/projectcss
import sty from "./PlasmicPoliticaDeCookies.module.css"; // plasmic-import: 5TaUa4ZGqx/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: -Kyqm1yXpr_/icon
import Icon23Icon from "./icons/PlasmicIcon__Icon23"; // plasmic-import: -bUtD9hB_g5/icon
import Vector6Icon from "./icons/PlasmicIcon__Vector6"; // plasmic-import: Gbkvuahq9N/icon
import Vector7Icon from "./icons/PlasmicIcon__Vector7"; // plasmic-import: 1KVijtEtSK/icon
import Vector8Icon from "./icons/PlasmicIcon__Vector8"; // plasmic-import: e2hxgpzMOc/icon

export type PlasmicPoliticaDeCookies__VariantMembers = {};

export type PlasmicPoliticaDeCookies__VariantsArgs = {};
type VariantPropType = keyof PlasmicPoliticaDeCookies__VariantsArgs;
export const PlasmicPoliticaDeCookies__VariantProps =
  new Array<VariantPropType>();

export type PlasmicPoliticaDeCookies__ArgsType = {
  navbar?: React.ReactNode;
  footer?: React.ReactNode;
};

type ArgPropType = keyof PlasmicPoliticaDeCookies__ArgsType;
export const PlasmicPoliticaDeCookies__ArgProps = new Array<ArgPropType>(
  "navbar",
  "footer"
);

export type PlasmicPoliticaDeCookies__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  cookiesContent?: p.Flex<typeof CookiesContent>;
};

export interface DefaultPoliticaDeCookiesProps {}

function PlasmicPoliticaDeCookies__RenderFunc(props: {
  variants: PlasmicPoliticaDeCookies__VariantsArgs;
  args: PlasmicPoliticaDeCookies__ArgsType;
  overrides: PlasmicPoliticaDeCookies__OverridesType;

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
          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <NavBar
                  className={classNames("__wab_instance", sty.navBar__avCax)}
                  links={
                    <React.Fragment>
                      <LinkJr2
                        className={classNames(
                          "__wab_instance",
                          sty.linkJr2__vfazb
                        )}
                        color={"clear" as const}
                        label={"Ofertas de Empleo"}
                      />

                      {true ? (
                        <LinkJr2
                          className={classNames(
                            "__wab_instance",
                            sty.linkJr2___05LLp
                          )}
                          color={"clear" as const}
                          label={"Empresas"}
                        />
                      ) : null}

                      <LinkJr2
                        className={classNames(
                          "__wab_instance",
                          sty.linkJr2__p9Rki
                        )}
                        color={"clear" as const}
                        label={"Formación gratuita"}
                      />
                    </React.Fragment>
                  }
                  navButtons={
                    <React.Fragment>
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__e8V3B
                        )}
                        color={["grey"]}
                        label={"Soy empresa"}
                        size={[]}
                      />

                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button___2TPwG
                        )}
                        color={["black"]}
                        label={"Únete a JobRun"}
                        size={[]}
                      />
                    </React.Fragment>
                  }
                  navLogo={
                    <Logo
                      className={classNames("__wab_instance", sty.logo__y29Da)}
                      logo={"complexBlack" as const}
                    />
                  }
                />
              ),

              value: args.navbar
            })}
          </div>

          <CookiesContent
            data-plasmic-name={"cookiesContent"}
            data-plasmic-override={overrides.cookiesContent}
            className={classNames("__wab_instance", sty.cookiesContent)}
          />

          {p.renderPlasmicSlot({
            defaultContents: (
              <Footer
                className={classNames("__wab_instance", sty.footer__dkIfG)}
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
  root: ["root", "freeBox", "cookiesContent"],
  freeBox: ["freeBox"],
  cookiesContent: ["cookiesContent"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  cookiesContent: typeof CookiesContent;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPoliticaDeCookies__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPoliticaDeCookies__VariantsArgs;
    args?: PlasmicPoliticaDeCookies__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPoliticaDeCookies__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPoliticaDeCookies__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicPoliticaDeCookies__ArgProps,
          internalVariantPropNames: PlasmicPoliticaDeCookies__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicPoliticaDeCookies__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPoliticaDeCookies";
  } else {
    func.displayName = `PlasmicPoliticaDeCookies.${nodeName}`;
  }
  return func;
}

export const PlasmicPoliticaDeCookies = Object.assign(
  // Top-level PlasmicPoliticaDeCookies renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    cookiesContent: makeNodeComponent("cookiesContent"),

    // Metadata about props expected for PlasmicPoliticaDeCookies
    internalVariantProps: PlasmicPoliticaDeCookies__VariantProps,
    internalArgProps: PlasmicPoliticaDeCookies__ArgProps
  }
);

export default PlasmicPoliticaDeCookies;
/* prettier-ignore-end */