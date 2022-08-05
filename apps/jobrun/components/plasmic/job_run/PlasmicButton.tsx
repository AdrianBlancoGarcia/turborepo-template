// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: upY9cnzMG3kZgeoF6ecCnw
// Component: BnsO6Lq9gm
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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_job_run.module.css"; // plasmic-import: upY9cnzMG3kZgeoF6ecCnw/projectcss
import sty from "./PlasmicButton.module.css"; // plasmic-import: BnsO6Lq9gm/css

import BxMenusvgIcon from "./icons/PlasmicIcon__BxMenusvg"; // plasmic-import: gaJFJTEHvC/icon
import Icon24Icon from "./icons/PlasmicIcon__Icon24"; // plasmic-import: sDAP-hrz_9/icon
import ClosesvgIcon from "./icons/PlasmicIcon__Closesvg"; // plasmic-import: t_UEU7-A7/icon

export type PlasmicButton__VariantMembers = {
  color:
    | "darkBlue"
    | "purple"
    | "white"
    | "yellow"
    | "black"
    | "navy"
    | "gradientRound"
    | "whiteText"
    | "grey"
    | "whiteTransparent"
    | "gradientRound2"
    | "disabled"
    | "gradientStroke";
  size:
    | "normal"
    | "small"
    | "medium"
    | "large"
    | "strech"
    | "linkOnly"
    | "sticky";
  showStartIcon: "showStartIcon";
  showEndIcon: "showEndIcon";
  menu: "black" | "white";
  dropdown:
    | "downBlack"
    | "upBlack"
    | "closeBlack"
    | "downTransparent"
    | "upTransparent"
    | "closeTransparent";
  type:
    | "normal"
    | "_return"
    | "nextItem"
    | "lastItem"
    | "nextItemDisabled"
    | "lastItemDisabled";
  iconOnly: "black" | "white";
};

export type PlasmicButton__VariantsArgs = {
  color?: MultiChoiceArg<
    | "darkBlue"
    | "purple"
    | "white"
    | "yellow"
    | "black"
    | "navy"
    | "gradientRound"
    | "whiteText"
    | "grey"
    | "whiteTransparent"
    | "gradientRound2"
    | "disabled"
    | "gradientStroke"
  >;
  size?: MultiChoiceArg<
    "normal" | "small" | "medium" | "large" | "strech" | "linkOnly" | "sticky"
  >;
  showStartIcon?: SingleBooleanChoiceArg<"showStartIcon">;
  showEndIcon?: SingleBooleanChoiceArg<"showEndIcon">;
  menu?: SingleChoiceArg<"black" | "white">;
  dropdown?: MultiChoiceArg<
    | "downBlack"
    | "upBlack"
    | "closeBlack"
    | "downTransparent"
    | "upTransparent"
    | "closeTransparent"
  >;
  type?: SingleChoiceArg<
    | "normal"
    | "_return"
    | "nextItem"
    | "lastItem"
    | "nextItemDisabled"
    | "lastItemDisabled"
  >;
  iconOnly?: SingleChoiceArg<"black" | "white">;
};

type VariantPropType = keyof PlasmicButton__VariantsArgs;
export const PlasmicButton__VariantProps = new Array<VariantPropType>(
  "color",
  "size",
  "showStartIcon",
  "showEndIcon",
  "menu",
  "dropdown",
  "type",
  "iconOnly"
);

export type PlasmicButton__ArgsType = {
  label?: React.ReactNode;
  icon?: React.ReactNode;
};

type ArgPropType = keyof PlasmicButton__ArgsType;
export const PlasmicButton__ArgProps = new Array<ArgPropType>("label", "icon");

export type PlasmicButton__OverridesType = {
  root?: p.Flex<"button">;
};

export interface DefaultButtonProps {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  color?: MultiChoiceArg<
    | "darkBlue"
    | "purple"
    | "white"
    | "yellow"
    | "black"
    | "navy"
    | "gradientRound"
    | "whiteText"
    | "grey"
    | "whiteTransparent"
    | "gradientRound2"
    | "disabled"
    | "gradientStroke"
  >;
  size?: MultiChoiceArg<
    "normal" | "small" | "medium" | "large" | "strech" | "linkOnly" | "sticky"
  >;
  showStartIcon?: SingleBooleanChoiceArg<"showStartIcon">;
  showEndIcon?: SingleBooleanChoiceArg<"showEndIcon">;
  menu?: SingleChoiceArg<"black" | "white">;
  dropdown?: MultiChoiceArg<
    | "downBlack"
    | "upBlack"
    | "closeBlack"
    | "downTransparent"
    | "upTransparent"
    | "closeTransparent"
  >;
  type?: SingleChoiceArg<
    | "normal"
    | "_return"
    | "nextItem"
    | "lastItem"
    | "nextItemDisabled"
    | "lastItemDisabled"
  >;
  iconOnly?: SingleChoiceArg<"black" | "white">;
  className?: string;
}

function PlasmicButton__RenderFunc(props: {
  variants: PlasmicButton__VariantsArgs;
  args: PlasmicButton__ArgsType;
  overrides: PlasmicButton__OverridesType;

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

  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };

  return (
    <p.Stack
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        hasVariant(variants, "color", "gradientRound") && triggers.hover_root
          ? ("gradientbutton" as const)
          : hasVariant(variants, "color", "gradientRound")
          ? ("gradientButton" as const)
          : undefined,
        {
          [sty.rootcolor_black]: hasVariant(variants, "color", "black"),
          [sty.rootcolor_darkBlue]: hasVariant(variants, "color", "darkBlue"),
          [sty.rootcolor_disabled]: hasVariant(variants, "color", "disabled"),
          [sty.rootcolor_gradientRound2]: hasVariant(
            variants,
            "color",
            "gradientRound2"
          ),
          [sty.rootcolor_gradientRound]: hasVariant(
            variants,
            "color",
            "gradientRound"
          ),
          [sty.rootcolor_gradientStroke]: hasVariant(
            variants,
            "color",
            "gradientStroke"
          ),
          [sty.rootcolor_grey]: hasVariant(variants, "color", "grey"),
          [sty.rootcolor_navy]: hasVariant(variants, "color", "navy"),
          [sty.rootcolor_purple]: hasVariant(variants, "color", "purple"),
          [sty.rootcolor_whiteText]: hasVariant(variants, "color", "whiteText"),
          [sty.rootcolor_whiteTransparent]: hasVariant(
            variants,
            "color",
            "whiteTransparent"
          ),
          [sty.rootcolor_white]: hasVariant(variants, "color", "white"),
          [sty.rootcolor_yellow]: hasVariant(variants, "color", "yellow"),
          [sty.rootdropdown_closeBlack]: hasVariant(
            variants,
            "dropdown",
            "closeBlack"
          ),
          [sty.rootdropdown_closeTransparent]: hasVariant(
            variants,
            "dropdown",
            "closeTransparent"
          ),
          [sty.rootdropdown_downBlack]: hasVariant(
            variants,
            "dropdown",
            "downBlack"
          ),
          [sty.rootdropdown_downTransparent]: hasVariant(
            variants,
            "dropdown",
            "downTransparent"
          ),
          [sty.rootdropdown_upBlack]: hasVariant(
            variants,
            "dropdown",
            "upBlack"
          ),
          [sty.rootdropdown_upTransparent]: hasVariant(
            variants,
            "dropdown",
            "upTransparent"
          ),
          [sty.rooticonOnly_black]: hasVariant(variants, "iconOnly", "black"),
          [sty.rooticonOnly_white]: hasVariant(variants, "iconOnly", "white"),
          [sty.rootmenu_black]: hasVariant(variants, "menu", "black"),
          [sty.rootmenu_white]: hasVariant(variants, "menu", "white"),
          [sty.rootshowEndIcon]: hasVariant(
            variants,
            "showEndIcon",
            "showEndIcon"
          ),
          [sty.rootshowStartIcon]: hasVariant(
            variants,
            "showStartIcon",
            "showStartIcon"
          ),
          [sty.rootsize_large]: hasVariant(variants, "size", "large"),
          [sty.rootsize_linkOnly]: hasVariant(variants, "size", "linkOnly"),
          [sty.rootsize_medium]: hasVariant(variants, "size", "medium"),
          [sty.rootsize_normal]: hasVariant(variants, "size", "normal"),
          [sty.rootsize_small]: hasVariant(variants, "size", "small"),
          [sty.rootsize_sticky]: hasVariant(variants, "size", "sticky"),
          [sty.rootsize_sticky_color_purple]:
            hasVariant(variants, "color", "purple") &&
            hasVariant(variants, "size", "sticky"),
          [sty.rootsize_strech]: hasVariant(variants, "size", "strech"),
          [sty.roottype__return]: hasVariant(variants, "type", "_return"),
          [sty.roottype_lastItemDisabled]: hasVariant(
            variants,
            "type",
            "lastItemDisabled"
          ),
          [sty.roottype_lastItem]: hasVariant(variants, "type", "lastItem"),
          [sty.roottype_nextItemDisabled]: hasVariant(
            variants,
            "type",
            "nextItemDisabled"
          ),
          [sty.roottype_nextItem]: hasVariant(variants, "type", "nextItem"),
          [sty.roottype_normal]: hasVariant(variants, "type", "normal")
        }
      )}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      {(
        hasVariant(variants, "iconOnly", "white")
          ? true
          : hasVariant(variants, "iconOnly", "black")
          ? true
          : hasVariant(variants, "dropdown", "closeBlack")
          ? true
          : true
      ) ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___1GcOx, {
            [sty.freeBoxcolor_black___1GcOXyf4JR]: hasVariant(
              variants,
              "color",
              "black"
            ),
            [sty.freeBoxcolor_darkBlue___1GcOxbhxLn]: hasVariant(
              variants,
              "color",
              "darkBlue"
            ),
            [sty.freeBoxcolor_disabled___1GcOXtEWm]: hasVariant(
              variants,
              "color",
              "disabled"
            ),
            [sty.freeBoxcolor_gradientRound___1GcOXuHAbm]: hasVariant(
              variants,
              "color",
              "gradientRound"
            ),
            [sty.freeBoxcolor_gradientStroke___1GcOXmrPCl]: hasVariant(
              variants,
              "color",
              "gradientStroke"
            ),
            [sty.freeBoxcolor_purple___1GcOXtSrEf]: hasVariant(
              variants,
              "color",
              "purple"
            ),
            [sty.freeBoxcolor_yellow___1GcOx1QBwF]: hasVariant(
              variants,
              "color",
              "yellow"
            ),
            [sty.freeBoxdropdown_closeBlack___1GcOxqse6]: hasVariant(
              variants,
              "dropdown",
              "closeBlack"
            ),
            [sty.freeBoxdropdown_downBlack___1GcOxGcHdg]: hasVariant(
              variants,
              "dropdown",
              "downBlack"
            ),
            [sty.freeBoxdropdown_downTransparent___1GcOxmndp8]: hasVariant(
              variants,
              "dropdown",
              "downTransparent"
            ),
            [sty.freeBoxdropdown_upBlack___1GcOx4742W]: hasVariant(
              variants,
              "dropdown",
              "upBlack"
            ),
            [sty.freeBoxdropdown_upTransparent___1GcOxuRhUa]: hasVariant(
              variants,
              "dropdown",
              "upTransparent"
            ),
            [sty.freeBoxiconOnly_black___1GcOxtxYz]: hasVariant(
              variants,
              "iconOnly",
              "black"
            ),
            [sty.freeBoxiconOnly_white___1GcOXiFVsb]: hasVariant(
              variants,
              "iconOnly",
              "white"
            ),
            [sty.freeBoxmenu_black___1GcOxln2Sn]: hasVariant(
              variants,
              "menu",
              "black"
            ),
            [sty.freeBoxmenu_white___1GcOXyPfhc]: hasVariant(
              variants,
              "menu",
              "white"
            ),
            [sty.freeBoxshowEndIcon___1GcOx6EarK]: hasVariant(
              variants,
              "showEndIcon",
              "showEndIcon"
            ),
            [sty.freeBoxshowStartIcon___1GcOx4Ldm]: hasVariant(
              variants,
              "showStartIcon",
              "showStartIcon"
            ),
            [sty.freeBoxsize_linkOnly___1GcOXi4Vli]: hasVariant(
              variants,
              "size",
              "linkOnly"
            ),
            [sty.freeBoxsize_normal___1GcOxieJk3]: hasVariant(
              variants,
              "size",
              "normal"
            ),
            [sty.freeBoxsize_strech___1GcOxc64HS]: hasVariant(
              variants,
              "size",
              "strech"
            ),
            [sty.freeBoxtype__return___1GcOXogobZ]: hasVariant(
              variants,
              "type",
              "_return"
            ),
            [sty.freeBoxtype_lastItemDisabled___1GcOxCxVtY]: hasVariant(
              variants,
              "type",
              "lastItemDisabled"
            ),
            [sty.freeBoxtype_lastItem___1GcOxUn9Gv]: hasVariant(
              variants,
              "type",
              "lastItem"
            ),
            [sty.freeBoxtype_nextItemDisabled___1GcOxsKUa]: hasVariant(
              variants,
              "type",
              "nextItemDisabled"
            ),
            [sty.freeBoxtype_nextItem___1GcOXoIrHa]: hasVariant(
              variants,
              "type",
              "nextItem"
            )
          })}
        >
          {(
            hasVariant(variants, "type", "lastItemDisabled")
              ? true
              : hasVariant(variants, "type", "nextItemDisabled")
              ? true
              : hasVariant(variants, "type", "lastItem")
              ? true
              : hasVariant(variants, "type", "nextItem")
              ? true
              : hasVariant(variants, "type", "_return")
              ? true
              : hasVariant(variants, "menu", "black")
              ? false
              : hasVariant(variants, "showEndIcon", "showEndIcon")
              ? true
              : hasVariant(variants, "showStartIcon", "showStartIcon")
              ? true
              : false
          )
            ? p.renderPlasmicSlot({
                defaultContents: true ? (
                  <svg
                    className={classNames(projectcss.all, sty.svg__tXjl)}
                    role={"img"}
                  />
                ) : null,
                value: args.icon,
                className: classNames(sty.slotTargetIcon, {
                  [sty.slotTargetIconcolor_whiteText]: hasVariant(
                    variants,
                    "color",
                    "whiteText"
                  ),
                  [sty.slotTargetIconmenu_black]: hasVariant(
                    variants,
                    "menu",
                    "black"
                  ),
                  [sty.slotTargetIconshowEndIcon]: hasVariant(
                    variants,
                    "showEndIcon",
                    "showEndIcon"
                  ),
                  [sty.slotTargetIconshowStartIcon]: hasVariant(
                    variants,
                    "showStartIcon",
                    "showStartIcon"
                  ),
                  [sty.slotTargetIcontype__return]: hasVariant(
                    variants,
                    "type",
                    "_return"
                  ),
                  [sty.slotTargetIcontype_lastItemDisabled]: hasVariant(
                    variants,
                    "type",
                    "lastItemDisabled"
                  ),
                  [sty.slotTargetIcontype_lastItem]: hasVariant(
                    variants,
                    "type",
                    "lastItem"
                  ),
                  [sty.slotTargetIcontype_nextItemDisabled]: hasVariant(
                    variants,
                    "type",
                    "nextItemDisabled"
                  ),
                  [sty.slotTargetIcontype_nextItem]: hasVariant(
                    variants,
                    "type",
                    "nextItem"
                  )
                })
              })
            : null}

          {(
            hasVariant(variants, "dropdown", "closeTransparent")
              ? false
              : hasVariant(variants, "dropdown", "upTransparent")
              ? false
              : hasVariant(variants, "dropdown", "downTransparent")
              ? false
              : hasVariant(variants, "dropdown", "closeBlack")
              ? false
              : hasVariant(variants, "dropdown", "upBlack")
              ? false
              : hasVariant(variants, "dropdown", "downBlack")
              ? false
              : hasVariant(variants, "menu", "white")
              ? false
              : hasVariant(variants, "menu", "black")
              ? false
              : true
          )
            ? p.renderPlasmicSlot({
                defaultContents: "Label",
                value: args.label,
                className: classNames(sty.slotTargetLabel, {
                  [sty.slotTargetLabelcolor_black]: hasVariant(
                    variants,
                    "color",
                    "black"
                  ),
                  [sty.slotTargetLabelcolor_darkBlue]: hasVariant(
                    variants,
                    "color",
                    "darkBlue"
                  ),
                  [sty.slotTargetLabelcolor_disabled]: hasVariant(
                    variants,
                    "color",
                    "disabled"
                  ),
                  [sty.slotTargetLabelcolor_gradientRound2]: hasVariant(
                    variants,
                    "color",
                    "gradientRound2"
                  ),
                  [sty.slotTargetLabelcolor_gradientRound]: hasVariant(
                    variants,
                    "color",
                    "gradientRound"
                  ),
                  [sty.slotTargetLabelcolor_gradientStroke]: hasVariant(
                    variants,
                    "color",
                    "gradientStroke"
                  ),
                  [sty.slotTargetLabelcolor_grey]: hasVariant(
                    variants,
                    "color",
                    "grey"
                  ),
                  [sty.slotTargetLabelcolor_navy]: hasVariant(
                    variants,
                    "color",
                    "navy"
                  ),
                  [sty.slotTargetLabelcolor_purple]: hasVariant(
                    variants,
                    "color",
                    "purple"
                  ),
                  [sty.slotTargetLabelcolor_whiteText]: hasVariant(
                    variants,
                    "color",
                    "whiteText"
                  ),
                  [sty.slotTargetLabelcolor_whiteTransparent]: hasVariant(
                    variants,
                    "color",
                    "whiteTransparent"
                  ),
                  [sty.slotTargetLabelcolor_white]: hasVariant(
                    variants,
                    "color",
                    "white"
                  ),
                  [sty.slotTargetLabelcolor_yellow]: hasVariant(
                    variants,
                    "color",
                    "yellow"
                  ),
                  [sty.slotTargetLabeldropdown_closeBlack]: hasVariant(
                    variants,
                    "dropdown",
                    "closeBlack"
                  ),
                  [sty.slotTargetLabeldropdown_closeTransparent]: hasVariant(
                    variants,
                    "dropdown",
                    "closeTransparent"
                  ),
                  [sty.slotTargetLabeldropdown_downBlack]: hasVariant(
                    variants,
                    "dropdown",
                    "downBlack"
                  ),
                  [sty.slotTargetLabeldropdown_downTransparent]: hasVariant(
                    variants,
                    "dropdown",
                    "downTransparent"
                  ),
                  [sty.slotTargetLabeldropdown_upBlack]: hasVariant(
                    variants,
                    "dropdown",
                    "upBlack"
                  ),
                  [sty.slotTargetLabeldropdown_upTransparent]: hasVariant(
                    variants,
                    "dropdown",
                    "upTransparent"
                  ),
                  [sty.slotTargetLabeliconOnly_black]: hasVariant(
                    variants,
                    "iconOnly",
                    "black"
                  ),
                  [sty.slotTargetLabelmenu_black]: hasVariant(
                    variants,
                    "menu",
                    "black"
                  ),
                  [sty.slotTargetLabelmenu_white]: hasVariant(
                    variants,
                    "menu",
                    "white"
                  ),
                  [sty.slotTargetLabelshowEndIcon]: hasVariant(
                    variants,
                    "showEndIcon",
                    "showEndIcon"
                  ),
                  [sty.slotTargetLabelshowStartIcon]: hasVariant(
                    variants,
                    "showStartIcon",
                    "showStartIcon"
                  ),
                  [sty.slotTargetLabelsize_large]: hasVariant(
                    variants,
                    "size",
                    "large"
                  ),
                  [sty.slotTargetLabelsize_linkOnly]: hasVariant(
                    variants,
                    "size",
                    "linkOnly"
                  ),
                  [sty.slotTargetLabelsize_medium]: hasVariant(
                    variants,
                    "size",
                    "medium"
                  ),
                  [sty.slotTargetLabelsize_normal]: hasVariant(
                    variants,
                    "size",
                    "normal"
                  ),
                  [sty.slotTargetLabelsize_small]: hasVariant(
                    variants,
                    "size",
                    "small"
                  ),
                  [sty.slotTargetLabelsize_sticky]: hasVariant(
                    variants,
                    "size",
                    "sticky"
                  ),
                  [sty.slotTargetLabelsize_strech]: hasVariant(
                    variants,
                    "size",
                    "strech"
                  ),
                  [sty.slotTargetLabeltype__return]: hasVariant(
                    variants,
                    "type",
                    "_return"
                  ),
                  [sty.slotTargetLabeltype_lastItemDisabled]: hasVariant(
                    variants,
                    "type",
                    "lastItemDisabled"
                  ),
                  [sty.slotTargetLabeltype_lastItem]: hasVariant(
                    variants,
                    "type",
                    "lastItem"
                  ),
                  [sty.slotTargetLabeltype_nextItemDisabled]: hasVariant(
                    variants,
                    "type",
                    "nextItemDisabled"
                  ),
                  [sty.slotTargetLabeltype_nextItem]: hasVariant(
                    variants,
                    "type",
                    "nextItem"
                  )
                })
              })
            : null}

          {(
            hasVariant(variants, "dropdown", "downBlack")
              ? true
              : hasVariant(variants, "menu", "white")
              ? true
              : hasVariant(variants, "menu", "black")
              ? true
              : false
          ) ? (
            <BxMenusvgIcon
              className={classNames(projectcss.all, sty.svg___17Xg0, {
                [sty.svgdropdown_downBlack___17Xg0GcHdg]: hasVariant(
                  variants,
                  "dropdown",
                  "downBlack"
                ),
                [sty.svgmenu_black___17Xg0Ln2Sn]: hasVariant(
                  variants,
                  "menu",
                  "black"
                ),
                [sty.svgmenu_white___17Xg0YPfhc]: hasVariant(
                  variants,
                  "menu",
                  "white"
                )
              })}
              role={"img"}
            />
          ) : null}

          {(
            hasVariant(variants, "dropdown", "closeTransparent")
              ? true
              : hasVariant(variants, "dropdown", "upTransparent")
              ? true
              : hasVariant(variants, "dropdown", "downTransparent")
              ? true
              : hasVariant(variants, "dropdown", "closeBlack")
              ? true
              : hasVariant(variants, "dropdown", "upBlack")
              ? true
              : hasVariant(variants, "dropdown", "downBlack")
              ? true
              : true
          ) ? (
            <div
              className={classNames(projectcss.all, sty.freeBox__nb7Hs, {
                [sty.freeBoxdropdown_closeBlack__nb7HsQse6]: hasVariant(
                  variants,
                  "dropdown",
                  "closeBlack"
                ),
                [sty.freeBoxdropdown_closeTransparent__nb7HsYxYtR]: hasVariant(
                  variants,
                  "dropdown",
                  "closeTransparent"
                ),
                [sty.freeBoxdropdown_downBlack__nb7HsGcHdg]: hasVariant(
                  variants,
                  "dropdown",
                  "downBlack"
                ),
                [sty.freeBoxdropdown_downTransparent__nb7HsMndp8]: hasVariant(
                  variants,
                  "dropdown",
                  "downTransparent"
                ),
                [sty.freeBoxdropdown_upBlack__nb7Hs4742W]: hasVariant(
                  variants,
                  "dropdown",
                  "upBlack"
                ),
                [sty.freeBoxdropdown_upTransparent__nb7HsURhUa]: hasVariant(
                  variants,
                  "dropdown",
                  "upTransparent"
                )
              })}
            >
              {(
                hasVariant(variants, "dropdown", "closeTransparent")
                  ? true
                  : hasVariant(variants, "dropdown", "upTransparent")
                  ? true
                  : hasVariant(variants, "dropdown", "downTransparent")
                  ? true
                  : hasVariant(variants, "dropdown", "closeBlack")
                  ? true
                  : hasVariant(variants, "dropdown", "upBlack")
                  ? true
                  : hasVariant(variants, "dropdown", "downBlack")
                  ? true
                  : false
              ) ? (
                <p.PlasmicIcon
                  PlasmicIconType={
                    hasVariant(variants, "dropdown", "closeTransparent")
                      ? ClosesvgIcon
                      : hasVariant(variants, "dropdown", "closeBlack")
                      ? ClosesvgIcon
                      : Icon24Icon
                  }
                  className={classNames(projectcss.all, sty.svg__mAGx, {
                    [sty.svgdropdown_closeBlack__mAGxQse6]: hasVariant(
                      variants,
                      "dropdown",
                      "closeBlack"
                    ),
                    [sty.svgdropdown_closeTransparent__mAGxYxYtR]: hasVariant(
                      variants,
                      "dropdown",
                      "closeTransparent"
                    ),
                    [sty.svgdropdown_downBlack__mAGxGcHdg]: hasVariant(
                      variants,
                      "dropdown",
                      "downBlack"
                    ),
                    [sty.svgdropdown_downTransparent__mAGxMndp8]: hasVariant(
                      variants,
                      "dropdown",
                      "downTransparent"
                    ),
                    [sty.svgdropdown_upBlack__mAGx4742W]: hasVariant(
                      variants,
                      "dropdown",
                      "upBlack"
                    ),
                    [sty.svgdropdown_upTransparent__mAGxURhUa]: hasVariant(
                      variants,
                      "dropdown",
                      "upTransparent"
                    )
                  })}
                  role={"img"}
                />
              ) : null}
            </div>
          ) : null}
        </p.Stack>
      ) : null}

      {(
        hasVariant(variants, "iconOnly", "white")
          ? true
          : hasVariant(variants, "iconOnly", "black")
          ? true
          : hasVariant(variants, "dropdown", "closeBlack")
          ? true
          : true
      ) ? (
        <ClosesvgIcon
          className={classNames(projectcss.all, sty.svg__lfjjC, {
            [sty.svgdropdown_closeBlack__lfjjCqse6]: hasVariant(
              variants,
              "dropdown",
              "closeBlack"
            ),
            [sty.svgiconOnly_black__lfjjCtxYz]: hasVariant(
              variants,
              "iconOnly",
              "black"
            ),
            [sty.svgiconOnly_white__lfjjCiFVsb]: hasVariant(
              variants,
              "iconOnly",
              "white"
            )
          })}
          role={"img"}
        />
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButton__VariantsArgs;
    args?: PlasmicButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicButton__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicButton__ArgProps,
          internalVariantPropNames: PlasmicButton__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton";
  } else {
    func.displayName = `PlasmicButton.${nodeName}`;
  }
  return func;
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps
  }
);

export default PlasmicButton;
/* prettier-ignore-end */