// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qJhJbLN2Wy56BDK1v9VeHg
// Component: PZVpznDmWug
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

import { useScreenVariants as useScreenVariantsgfTNvlXeClRRx } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: GfTNvlXE_ClRRx/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_open_bootcamp_v_2_0.module.css"; // plasmic-import: qJhJbLN2Wy56BDK1v9VeHg/projectcss
import sty from "./PlasmicTestimonialsTexts.module.css"; // plasmic-import: PZVpznDmWug/css

import Icon31Icon from "./icons/PlasmicIcon__Icon31"; // plasmic-import: caReQe-4-A/icon
import Icon32Icon from "./icons/PlasmicIcon__Icon32"; // plasmic-import: HjlRLQHU2P/icon

export type PlasmicTestimonialsTexts__VariantMembers = {
  user: "anaFernandez" | "ignacioDeBats" | "mariaBeatrizVivanco";
};

export type PlasmicTestimonialsTexts__VariantsArgs = {
  user?: SingleChoiceArg<
    "anaFernandez" | "ignacioDeBats" | "mariaBeatrizVivanco"
  >;
};

type VariantPropType = keyof PlasmicTestimonialsTexts__VariantsArgs;
export const PlasmicTestimonialsTexts__VariantProps =
  new Array<VariantPropType>("user");

export type PlasmicTestimonialsTexts__ArgsType = {};
type ArgPropType = keyof PlasmicTestimonialsTexts__ArgsType;
export const PlasmicTestimonialsTexts__ArgProps = new Array<ArgPropType>();

export type PlasmicTestimonialsTexts__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultTestimonialsTextsProps {
  user?: SingleChoiceArg<
    "anaFernandez" | "ignacioDeBats" | "mariaBeatrizVivanco"
  >;
  className?: string;
}

function PlasmicTestimonialsTexts__RenderFunc(props: {
  variants: PlasmicTestimonialsTexts__VariantsArgs;
  args: PlasmicTestimonialsTexts__ArgsType;
  overrides: PlasmicTestimonialsTexts__OverridesType;

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
          sty.root,
          {
            [sty.rootuser_ignacioDeBats]: hasVariant(
              variants,
              "user",
              "ignacioDeBats"
            )
          }
        )}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__djgyc)}
        >
          <div className={classNames(projectcss.all, sty.freeBox___9SlCd)}>
            <Icon31Icon
              className={classNames(projectcss.all, sty.svg__gDdKa)}
              role={"img"}
            />
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__gKtqy)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__oXcdq)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__pzuad,
                  {
                    [sty.textuser_anaFernandez__pzuadsSRgO]: hasVariant(
                      variants,
                      "user",
                      "anaFernandez"
                    ),
                    [sty.textuser_ignacioDeBats__pzuadZmxf]: hasVariant(
                      variants,
                      "user",
                      "ignacioDeBats"
                    ),
                    [sty.textuser_mariaBeatrizVivanco__pzuadMhvuf]: hasVariant(
                      variants,
                      "user",
                      "mariaBeatrizVivanco"
                    )
                  }
                )}
              >
                {hasVariant(variants, "user", "mariaBeatrizVivanco") ? (
                  <React.Fragment>
                    <React.Fragment>
                      {
                        "Ya era desarrolladora, pero OpenBootcamp me ayudó a prepararme para puestos de "
                      }
                    </React.Fragment>
                    {
                      <span
                        className={classNames(
                          projectcss.all,
                          projectcss.span,
                          projectcss.__wab_text,
                          projectcss.plasmic_default__inline,
                          sty.span__pkdOl,
                          {
                            [sty.spanuser_mariaBeatrizVivanco__pkdOlMhvuf]:
                              hasVariant(
                                variants,
                                "user",
                                "mariaBeatrizVivanco"
                              )
                          }
                        )}
                      >
                        {hasVariant(variants, "user", "mariaBeatrizVivanco") ? (
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ color: "transparent" }}
                            >
                              {"trabajo"}
                            </span>
                          </React.Fragment>
                        ) : (
                          "trabajo"
                        )}
                      </span>
                    }
                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                ) : hasVariant(variants, "user", "ignacioDeBats") ? (
                  <React.Fragment>
                    <React.Fragment>
                      {"Conseguí un puesto de programador en "}
                    </React.Fragment>
                    {
                      <span
                        className={classNames(
                          projectcss.all,
                          projectcss.span,
                          projectcss.__wab_text,
                          projectcss.plasmic_default__inline,
                          sty.span__w1NM,
                          {
                            [sty.spanuser_ignacioDeBats__w1NMZmxf]: hasVariant(
                              variants,
                              "user",
                              "ignacioDeBats"
                            )
                          }
                        )}
                      >
                        {hasVariant(variants, "user", "ignacioDeBats") ? (
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ color: "transparent" }}
                            >
                              {"3 meses"}
                            </span>
                          </React.Fragment>
                        ) : (
                          "3 meses"
                        )}
                      </span>
                    }
                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                ) : hasVariant(variants, "user", "anaFernandez") ? (
                  <React.Fragment>
                    <React.Fragment>
                      {"Quería complementar mis conocimientos de "}
                    </React.Fragment>
                    {
                      <span
                        className={classNames(
                          projectcss.all,
                          projectcss.span,
                          projectcss.__wab_text,
                          projectcss.plasmic_default__inline,
                          sty.span__tqgUe,
                          {
                            [sty.spanuser_anaFernandez__tqgUEsSRgO]: hasVariant(
                              variants,
                              "user",
                              "anaFernandez"
                            )
                          }
                        )}
                      >
                        {hasVariant(variants, "user", "anaFernandez") ? (
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ color: "transparent" }}
                            >
                              {"diseño"}
                            </span>
                          </React.Fragment>
                        ) : (
                          "diseño"
                        )}
                      </span>
                    }
                    <React.Fragment>{" y me especialicé en "}</React.Fragment>
                    {
                      <span
                        className={classNames(
                          projectcss.all,
                          projectcss.span,
                          projectcss.__wab_text,
                          projectcss.plasmic_default__inline,
                          sty.span__qvdKp,
                          {
                            [sty.spanuser_anaFernandez__qvdKpsSRgO]: hasVariant(
                              variants,
                              "user",
                              "anaFernandez"
                            )
                          }
                        )}
                      >
                        {hasVariant(variants, "user", "anaFernandez") ? (
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ color: "transparent" }}
                            >
                              {"desarrollo"}
                            </span>
                          </React.Fragment>
                        ) : (
                          "desarrollo"
                        )}
                      </span>
                    }
                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                ) : (
                  "Título"
                )}
              </div>
            </div>

            <div
              className={classNames(projectcss.all, sty.freeBox__bOFvN, {
                [sty.freeBoxuser_mariaBeatrizVivanco__bOFvNMhvuf]: hasVariant(
                  variants,
                  "user",
                  "mariaBeatrizVivanco"
                )
              })}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__eINy,
                  {
                    [sty.textuser_anaFernandez__eINysSRgO]: hasVariant(
                      variants,
                      "user",
                      "anaFernandez"
                    ),
                    [sty.textuser_ignacioDeBats__eINyZmxf]: hasVariant(
                      variants,
                      "user",
                      "ignacioDeBats"
                    ),
                    [sty.textuser_mariaBeatrizVivanco__eINyMhvuf]: hasVariant(
                      variants,
                      "user",
                      "mariaBeatrizVivanco"
                    )
                  }
                )}
              >
                {hasVariant(variants, "user", "mariaBeatrizVivanco")
                  ? "Gracias a OpenBootcamp en 4 meses pude actualizarme y conocer nuevas tecnologías con las que conseguí un trabajo como FullStack en el que estoy muy contenta."
                  : hasVariant(variants, "user", "ignacioDeBats")
                  ? "Entré a principios de Octubre cuando empezó OB y el 10 de Enero ya estaba firmando el contrato como programador."
                  : hasVariant(variants, "user", "anaFernandez")
                  ? "Vengo de la rama del diseño gráfico y he estado estudiando en OpenBootcamp 2-3 meses y gracias a esta formación, estoy trabajando de desarrolladora web en una empresa."
                  : "Tetimonio"}
              </div>
            </div>
          </p.Stack>

          <div className={classNames(projectcss.all, sty.freeBox__wtal8)}>
            <Icon32Icon
              className={classNames(projectcss.all, sty.svg__wtnAw)}
              role={"img"}
            />
          </div>
        </p.Stack>

        <div className={classNames(projectcss.all, sty.freeBox__wbgUg)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__bTWvN,
              {
                [sty.textuser_anaFernandez__bTWvNsSRgO]: hasVariant(
                  variants,
                  "user",
                  "anaFernandez"
                ),
                [sty.textuser_ignacioDeBats__bTWvNZmxf]: hasVariant(
                  variants,
                  "user",
                  "ignacioDeBats"
                ),
                [sty.textuser_mariaBeatrizVivanco__bTWvNMhvuf]: hasVariant(
                  variants,
                  "user",
                  "mariaBeatrizVivanco"
                )
              }
            )}
          >
            {hasVariant(variants, "user", "mariaBeatrizVivanco")
              ? "María Beatriz Vivanco"
              : hasVariant(variants, "user", "ignacioDeBats")
              ? "Ignacio de Bats"
              : hasVariant(variants, "user", "anaFernandez")
              ? "Ana Fernández"
              : "Nombre Usuario"}
          </div>
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
  PlasmicTestimonialsTexts__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTestimonialsTexts__VariantsArgs;
    args?: PlasmicTestimonialsTexts__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTestimonialsTexts__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTestimonialsTexts__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicTestimonialsTexts__ArgProps,
          internalVariantPropNames: PlasmicTestimonialsTexts__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicTestimonialsTexts__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTestimonialsTexts";
  } else {
    func.displayName = `PlasmicTestimonialsTexts.${nodeName}`;
  }
  return func;
}

export const PlasmicTestimonialsTexts = Object.assign(
  // Top-level PlasmicTestimonialsTexts renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicTestimonialsTexts
    internalVariantProps: PlasmicTestimonialsTexts__VariantProps,
    internalArgProps: PlasmicTestimonialsTexts__ArgProps
  }
);

export default PlasmicTestimonialsTexts;
/* prettier-ignore-end */