// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qJhJbLN2Wy56BDK1v9VeHg
// Component: On39uzxhyDJ
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
import Navbar from "../../Navbar"; // plasmic-import: -CnkElqEbFOKi/component
import Button from "../../Button"; // plasmic-import: W52igaDMzA10w6/component
import LinkOb from "../../LinkOb"; // plasmic-import: MCZw6vVbPKy/component
import HeroLeccion from "../../HeroLeccion"; // plasmic-import: BC1CTkZPHTn/component
import LessonInfoContainer from "../../LessonInfoContainer"; // plasmic-import: Tp8pI-iqIC/component
import LessonInfoChip from "../../LessonInfoChip"; // plasmic-import: l1jB988kix/component
import Breadcrumb from "../../Breadcrumb"; // plasmic-import: ekDTLgGFZZ/component
import BreadcrumbItem from "../../BreadcrumbItem"; // plasmic-import: nl-iwxSy9T/component
import YouTube from "@plasmicpkgs/react-youtube"; // plasmic-import: CHO21V9uYw/codeComponent
import Footer from "../../Footer"; // plasmic-import: b5lOT72QRjzHLq/component

import { useScreenVariants as useScreenVariantsgfTNvlXeClRRx } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: GfTNvlXE_ClRRx/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_open_bootcamp_v_2_0.module.css"; // plasmic-import: qJhJbLN2Wy56BDK1v9VeHg/projectcss
import sty from "./PlasmicLandingLeccion.module.css"; // plasmic-import: On39uzxhyDJ/css

import Icon21Icon from "./icons/PlasmicIcon__Icon21"; // plasmic-import: MPKmKXARKW/icon

export type PlasmicLandingLeccion__VariantMembers = {};

export type PlasmicLandingLeccion__VariantsArgs = {};
type VariantPropType = keyof PlasmicLandingLeccion__VariantsArgs;
export const PlasmicLandingLeccion__VariantProps = new Array<VariantPropType>();

export type PlasmicLandingLeccion__ArgsType = {
  navbar?: React.ReactNode;
  html?: React.ReactNode;
  video?: React.ReactNode;
  ctaCierre?: React.ReactNode;
  heroLeccion?: React.ReactNode;
};

type ArgPropType = keyof PlasmicLandingLeccion__ArgsType;
export const PlasmicLandingLeccion__ArgProps = new Array<ArgPropType>(
  "navbar",
  "html",
  "video",
  "ctaCierre",
  "heroLeccion"
);

export type PlasmicLandingLeccion__OverridesType = {
  root?: p.Flex<"div">;
  hero?: p.Flex<"div">;
  content?: p.Flex<"div">;
  video?: p.Flex<"div">;
  html?: p.Flex<"div">;
  cta?: p.Flex<"div">;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultLandingLeccionProps {}

function PlasmicLandingLeccion__RenderFunc(props: {
  variants: PlasmicLandingLeccion__VariantsArgs;
  args: PlasmicLandingLeccion__ArgsType;
  overrides: PlasmicLandingLeccion__OverridesType;

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
          <div className={classNames(projectcss.all, sty.freeBox__d5Bi)}>
            {p.renderPlasmicSlot({
              defaultContents: (
                <Navbar
                  className={classNames("__wab_instance", sty.navbar__b6Fvh)}
                />
              ),

              value: args.navbar
            })}
          </div>

          <div
            data-plasmic-name={"hero"}
            data-plasmic-override={overrides.hero}
            className={classNames(projectcss.all, sty.hero)}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <HeroLeccion
                  className={classNames(
                    "__wab_instance",
                    sty.heroLeccion__aVbc
                  )}
                />
              ),

              value: args.heroLeccion
            })}
          </div>

          <p.Stack
            as={"div"}
            data-plasmic-name={"content"}
            data-plasmic-override={overrides.content}
            hasGap={true}
            className={classNames(projectcss.all, sty.content)}
          >
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__jM4Nd)}
              >
                <div
                  data-plasmic-name={"video"}
                  data-plasmic-override={overrides.video}
                  className={classNames(projectcss.all, sty.video)}
                >
                  {p.renderPlasmicSlot({
                    defaultContents: (
                      <YouTube
                        cc_load_policy={false}
                        className={classNames(
                          "__wab_instance",
                          sty.youTube__pMpc2
                        )}
                        videoId={"kQYudTGkmBw" as const}
                      />
                    ),

                    value: args.video
                  })}
                </div>

                {(
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? true
                    : true
                ) ? (
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"html"}
                    data-plasmic-override={overrides.html}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.html)}
                  >
                    {p.renderPlasmicSlot({
                      defaultContents: null,
                      value: args.html
                    })}
                  </p.Stack>
                ) : null}
              </p.Stack>
            ) : null}

            <div
              data-plasmic-name={"cta"}
              data-plasmic-override={overrides.cta}
              className={classNames(projectcss.all, sty.cta)}
            >
              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___6JrZz)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__waLav
                    )}
                  >
                    {"¿Todavía no te has apuntado a nuestro Bootcamp?"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vwEph
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly") ? (
                      <React.Fragment>
                        <React.Fragment>
                          {"Tenemos muchos cursos para ofrecerte y "}
                        </React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ fontWeight: 700 }}
                        >
                          {"¡TOTALMENTE GRATIS! "}
                        </span>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <React.Fragment>
                          {"Tenemos muchos cursos para ofrecerte y "}
                        </React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ fontWeight: 700 }}
                        >
                          {"¡TOTALMENTE GRATIS! "}
                        </span>
                        <React.Fragment>{"\nEn "}</React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ fontWeight: 700 }}
                        >
                          {"OpenBootcamp"}
                        </span>
                        <React.Fragment>
                          {
                            " puedes elegir entre distintas rutas de aprendizaje, a tu ritmo, certificar tus conocimientos con nosotros y aplicar a las ofertas laborales que tenemos para ti, todo sin costo alguno, las empresas pagan por tu aprendizaje."
                          }
                        </React.Fragment>
                      </React.Fragment>
                    )}
                  </div>

                  {p.renderPlasmicSlot({
                    defaultContents: (
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__q2NKw
                        )}
                        color={"darkGray" as const}
                      >
                        {"Apúntate ya"}
                      </Button>
                    ),

                    value: args.ctaCierre
                  })}
                </p.Stack>
              ) : null}
            </div>
          </p.Stack>

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "hero", "content", "video", "html", "cta", "footer"],
  hero: ["hero"],
  content: ["content", "video", "html", "cta"],
  video: ["video"],
  html: ["html"],
  cta: ["cta"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  hero: "div";
  content: "div";
  video: "div";
  html: "div";
  cta: "div";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLandingLeccion__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLandingLeccion__VariantsArgs;
    args?: PlasmicLandingLeccion__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLandingLeccion__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLandingLeccion__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicLandingLeccion__ArgProps,
          internalVariantPropNames: PlasmicLandingLeccion__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicLandingLeccion__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLandingLeccion";
  } else {
    func.displayName = `PlasmicLandingLeccion.${nodeName}`;
  }
  return func;
}

export const PlasmicLandingLeccion = Object.assign(
  // Top-level PlasmicLandingLeccion renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    hero: makeNodeComponent("hero"),
    content: makeNodeComponent("content"),
    video: makeNodeComponent("video"),
    html: makeNodeComponent("html"),
    cta: makeNodeComponent("cta"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicLandingLeccion
    internalVariantProps: PlasmicLandingLeccion__VariantProps,
    internalArgProps: PlasmicLandingLeccion__ArgProps
  }
);

export default PlasmicLandingLeccion;
/* prettier-ignore-end */