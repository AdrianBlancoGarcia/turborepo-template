// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: upY9cnzMG3kZgeoF6ecCnw
// Component: 1_Xh0oNpuTO
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
import TermsContent from "../../TermsContent"; // plasmic-import: 3rBZAlPpd0_/component
import Footer from "../../Footer"; // plasmic-import: JpAsUvUFqp/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_job_run.module.css"; // plasmic-import: upY9cnzMG3kZgeoF6ecCnw/projectcss
import sty from "./PlasmicTerminosYCondiciones.module.css"; // plasmic-import: 1_Xh0oNpuTO/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: -Kyqm1yXpr_/icon
import Icon23Icon from "./icons/PlasmicIcon__Icon23"; // plasmic-import: -bUtD9hB_g5/icon
import Vector6Icon from "./icons/PlasmicIcon__Vector6"; // plasmic-import: Gbkvuahq9N/icon
import Vector7Icon from "./icons/PlasmicIcon__Vector7"; // plasmic-import: 1KVijtEtSK/icon
import Vector8Icon from "./icons/PlasmicIcon__Vector8"; // plasmic-import: e2hxgpzMOc/icon

export type PlasmicTerminosYCondiciones__VariantMembers = {};

export type PlasmicTerminosYCondiciones__VariantsArgs = {};
type VariantPropType = keyof PlasmicTerminosYCondiciones__VariantsArgs;
export const PlasmicTerminosYCondiciones__VariantProps =
  new Array<VariantPropType>();

export type PlasmicTerminosYCondiciones__ArgsType = {
  navbar?: React.ReactNode;
  footer?: React.ReactNode;
};

type ArgPropType = keyof PlasmicTerminosYCondiciones__ArgsType;
export const PlasmicTerminosYCondiciones__ArgProps = new Array<ArgPropType>(
  "navbar",
  "footer"
);

export type PlasmicTerminosYCondiciones__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  termsContent?: p.Flex<typeof TermsContent>;
};

export interface DefaultTerminosYCondicionesProps {}

function PlasmicTerminosYCondiciones__RenderFunc(props: {
  variants: PlasmicTerminosYCondiciones__VariantsArgs;
  args: PlasmicTerminosYCondiciones__ArgsType;
  overrides: PlasmicTerminosYCondiciones__OverridesType;

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
                  className={classNames("__wab_instance", sty.navBar___5QpTi)}
                  links={
                    <React.Fragment>
                      <LinkJr2
                        className={classNames(
                          "__wab_instance",
                          sty.linkJr2__ngbJd
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
                          sty.button__rFtv
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
                      className={classNames("__wab_instance", sty.logo__k8VFc)}
                      logo={"complexBlack" as const}
                    />
                  }
                />
              ),

              value: args.navbar
            })}
          </div>

          <TermsContent
            data-plasmic-name={"termsContent"}
            data-plasmic-override={overrides.termsContent}
            className={classNames("__wab_instance", sty.termsContent)}
          />

          {p.renderPlasmicSlot({
            defaultContents: (
              <Footer
                className={classNames("__wab_instance", sty.footer__fTTh)}
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
  root: ["root", "freeBox", "termsContent"],
  freeBox: ["freeBox"],
  termsContent: ["termsContent"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  termsContent: typeof TermsContent;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTerminosYCondiciones__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTerminosYCondiciones__VariantsArgs;
    args?: PlasmicTerminosYCondiciones__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTerminosYCondiciones__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTerminosYCondiciones__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicTerminosYCondiciones__ArgProps,
          internalVariantPropNames: PlasmicTerminosYCondiciones__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicTerminosYCondiciones__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTerminosYCondiciones";
  } else {
    func.displayName = `PlasmicTerminosYCondiciones.${nodeName}`;
  }
  return func;
}

export const PlasmicTerminosYCondiciones = Object.assign(
  // Top-level PlasmicTerminosYCondiciones renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    termsContent: makeNodeComponent("termsContent"),

    // Metadata about props expected for PlasmicTerminosYCondiciones
    internalVariantProps: PlasmicTerminosYCondiciones__VariantProps,
    internalArgProps: PlasmicTerminosYCondiciones__ArgProps
  }
);

export default PlasmicTerminosYCondiciones;
/* prettier-ignore-end */