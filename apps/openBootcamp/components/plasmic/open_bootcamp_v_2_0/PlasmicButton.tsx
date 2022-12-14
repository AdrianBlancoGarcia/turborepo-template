// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qJhJbLN2Wy56BDK1v9VeHg
// Component: W52igaDMzA10w6
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import * as pp from "@plasmicapp/react-web";
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

import projectcss from "./plasmic_open_bootcamp_v_2_0.module.css"; // plasmic-import: qJhJbLN2Wy56BDK1v9VeHg/projectcss
import sty from "./PlasmicButton.module.css"; // plasmic-import: W52igaDMzA10w6/css

import Icon21Icon from "./icons/PlasmicIcon__Icon21"; // plasmic-import: MPKmKXARKW/icon
import MenusvgIcon from "./icons/PlasmicIcon__Menusvg"; // plasmic-import: qL7HsO8nsJ/icon
import Arrow1SvgIcon from "./icons/PlasmicIcon__Arrow1Svg"; // plasmic-import: poRnOxEjOg/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: F6z3Cm69cJ/icon

export type PlasmicButton__VariantMembers = {
  showStartIcon: "showStartIcon";
  showEndIcon: "showEndIcon";
  color:
    | "gradient"
    | "indigo"
    | "blue"
    | "accentBlue"
    | "white"
    | "darkGray"
    | "link"
    | "navLink";
  iconOnly: "iconOnly";
  outline: "outline";
  bgDifference: "bgDifference";
  round: "round";
  large: "large";
  flat: "flat";
  extraSmallShadow: "extraSmallShadow";
  isDisabled: "isDisabled";
  size: "normal" | "small" | "large" | "linkOnly";
  drawer: "open" | "close";
  previousNextPage:
    | "previousPage"
    | "nextPage"
    | "previousPageLastChild"
    | "nextPageLastChild";
  socialIcons: "linkedin";
};

export type PlasmicButton__VariantsArgs = {
  showStartIcon?: SingleBooleanChoiceArg<"showStartIcon">;
  showEndIcon?: SingleBooleanChoiceArg<"showEndIcon">;
  color?: SingleChoiceArg<
    | "gradient"
    | "indigo"
    | "blue"
    | "accentBlue"
    | "white"
    | "darkGray"
    | "link"
    | "navLink"
  >;
  iconOnly?: SingleBooleanChoiceArg<"iconOnly">;
  outline?: SingleBooleanChoiceArg<"outline">;
  bgDifference?: SingleBooleanChoiceArg<"bgDifference">;
  round?: SingleBooleanChoiceArg<"round">;
  large?: SingleBooleanChoiceArg<"large">;
  flat?: SingleBooleanChoiceArg<"flat">;
  extraSmallShadow?: SingleBooleanChoiceArg<"extraSmallShadow">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  size?: SingleChoiceArg<"normal" | "small" | "large" | "linkOnly">;
  drawer?: SingleChoiceArg<"open" | "close">;
  previousNextPage?: SingleChoiceArg<
    "previousPage" | "nextPage" | "previousPageLastChild" | "nextPageLastChild"
  >;
  socialIcons?: SingleChoiceArg<"linkedin">;
};

type VariantPropType = keyof PlasmicButton__VariantsArgs;
export const PlasmicButton__VariantProps = new Array<VariantPropType>(
  "showStartIcon",
  "showEndIcon",
  "color",
  "iconOnly",
  "outline",
  "bgDifference",
  "round",
  "large",
  "flat",
  "extraSmallShadow",
  "isDisabled",
  "size",
  "drawer",
  "previousNextPage",
  "socialIcons"
);

export type PlasmicButton__ArgsType = {
  startIcon?: React.ReactNode;
  children?: React.ReactNode;
  endIcon?: React.ReactNode;
  link?: string;
};

type ArgPropType = keyof PlasmicButton__ArgsType;
export const PlasmicButton__ArgProps = new Array<ArgPropType>(
  "startIcon",
  "children",
  "endIcon",
  "link"
);

export type PlasmicButton__OverridesType = {
  root?: p.Flex<"button">;
};

export interface DefaultButtonProps extends pp.BaseButtonProps {
  color?: SingleChoiceArg<
    | "gradient"
    | "indigo"
    | "blue"
    | "accentBlue"
    | "white"
    | "darkGray"
    | "link"
    | "navLink"
  >;
  iconOnly?: SingleBooleanChoiceArg<"iconOnly">;
  outline?: SingleBooleanChoiceArg<"outline">;
  bgDifference?: SingleBooleanChoiceArg<"bgDifference">;
  round?: SingleBooleanChoiceArg<"round">;
  large?: SingleBooleanChoiceArg<"large">;
  flat?: SingleBooleanChoiceArg<"flat">;
  extraSmallShadow?: SingleBooleanChoiceArg<"extraSmallShadow">;
  size?: SingleChoiceArg<"normal" | "small" | "large" | "linkOnly">;
  drawer?: SingleChoiceArg<"open" | "close">;
  previousNextPage?: SingleChoiceArg<
    "previousPage" | "nextPage" | "previousPageLastChild" | "nextPageLastChild"
  >;
  socialIcons?: SingleChoiceArg<"linkedin">;
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
        hasVariant(variants, "color", "navLink") ? ("" as const) : undefined,
        {
          [sty.rootbgDifference]: hasVariant(
            variants,
            "bgDifference",
            "bgDifference"
          ),
          [sty.rootcolor_accentBlue]: hasVariant(
            variants,
            "color",
            "accentBlue"
          ),
          [sty.rootcolor_blue]: hasVariant(variants, "color", "blue"),
          [sty.rootcolor_darkGray]: hasVariant(variants, "color", "darkGray"),
          [sty.rootcolor_gradient]: hasVariant(variants, "color", "gradient"),
          [sty.rootcolor_indigo]: hasVariant(variants, "color", "indigo"),
          [sty.rootcolor_link]: hasVariant(variants, "color", "link"),
          [sty.rootcolor_navLink]: hasVariant(variants, "color", "navLink"),
          [sty.rootcolor_white]: hasVariant(variants, "color", "white"),
          [sty.rootdrawer_close]: hasVariant(variants, "drawer", "close"),
          [sty.rootdrawer_open]: hasVariant(variants, "drawer", "open"),
          [sty.rootextraSmallShadow]: hasVariant(
            variants,
            "extraSmallShadow",
            "extraSmallShadow"
          ),
          [sty.rootflat]: hasVariant(variants, "flat", "flat"),
          [sty.rooticonOnly]: hasVariant(variants, "iconOnly", "iconOnly"),
          [sty.rootisDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),
          [sty.rootlarge]: hasVariant(variants, "large", "large"),
          [sty.rootoutline]: hasVariant(variants, "outline", "outline"),
          [sty.rootpreviousNextPage_nextPageLastChild]: hasVariant(
            variants,
            "previousNextPage",
            "nextPageLastChild"
          ),
          [sty.rootpreviousNextPage_nextPage]: hasVariant(
            variants,
            "previousNextPage",
            "nextPage"
          ),
          [sty.rootpreviousNextPage_previousPageLastChild]: hasVariant(
            variants,
            "previousNextPage",
            "previousPageLastChild"
          ),
          [sty.rootpreviousNextPage_previousPage]: hasVariant(
            variants,
            "previousNextPage",
            "previousPage"
          ),
          [sty.rootround]: hasVariant(variants, "round", "round"),
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
          [sty.rootsize_small]: hasVariant(variants, "size", "small"),
          [sty.rootsize_small_color_gradient]:
            hasVariant(variants, "color", "gradient") &&
            hasVariant(variants, "size", "small"),
          [sty.rootsocialIcons_linkedin]: hasVariant(
            variants,
            "socialIcons",
            "linkedin"
          )
        }
      )}
    >
      {(
        hasVariant(variants, "previousNextPage", "nextPageLastChild")
          ? false
          : hasVariant(variants, "previousNextPage", "previousPageLastChild")
          ? false
          : hasVariant(variants, "previousNextPage", "nextPage")
          ? false
          : hasVariant(variants, "previousNextPage", "previousPage")
          ? false
          : hasVariant(variants, "drawer", "close")
          ? false
          : hasVariant(variants, "drawer", "open")
          ? false
          : hasVariant(variants, "iconOnly", "iconOnly")
          ? true
          : hasVariant(variants, "showStartIcon", "showStartIcon")
          ? true
          : false
      )
        ? p.renderPlasmicSlot({
            defaultContents: true ? (
              <Icon21Icon
                className={classNames(projectcss.all, sty.svg__s1C3T)}
                role={"img"}
              />
            ) : null,
            value: args.startIcon,
            className: classNames(sty.slotTargetStartIcon, {
              [sty.slotTargetStartIconcolor_accentBlue]: hasVariant(
                variants,
                "color",
                "accentBlue"
              ),
              [sty.slotTargetStartIconcolor_blue]: hasVariant(
                variants,
                "color",
                "blue"
              ),
              [sty.slotTargetStartIconcolor_darkGray]: hasVariant(
                variants,
                "color",
                "darkGray"
              ),
              [sty.slotTargetStartIconcolor_gradient]: hasVariant(
                variants,
                "color",
                "gradient"
              ),
              [sty.slotTargetStartIconcolor_gradient_showEndIcon]:
                hasVariant(variants, "showEndIcon", "showEndIcon") &&
                hasVariant(variants, "color", "gradient"),
              [sty.slotTargetStartIconcolor_gradient_showStartIcon_showEndIcon]:
                hasVariant(variants, "showStartIcon", "showStartIcon") &&
                hasVariant(variants, "showEndIcon", "showEndIcon") &&
                hasVariant(variants, "color", "gradient"),
              [sty.slotTargetStartIconcolor_indigo]: hasVariant(
                variants,
                "color",
                "indigo"
              ),
              [sty.slotTargetStartIconcolor_link]: hasVariant(
                variants,
                "color",
                "link"
              ),
              [sty.slotTargetStartIconcolor_navLink]: hasVariant(
                variants,
                "color",
                "navLink"
              ),
              [sty.slotTargetStartIconcolor_white]: hasVariant(
                variants,
                "color",
                "white"
              ),
              [sty.slotTargetStartIcondrawer_close]: hasVariant(
                variants,
                "drawer",
                "close"
              ),
              [sty.slotTargetStartIcondrawer_open]: hasVariant(
                variants,
                "drawer",
                "open"
              ),
              [sty.slotTargetStartIconiconOnly]: hasVariant(
                variants,
                "iconOnly",
                "iconOnly"
              ),
              [sty.slotTargetStartIconisDisabled]: hasVariant(
                variants,
                "isDisabled",
                "isDisabled"
              ),
              [sty.slotTargetStartIconpreviousNextPage_nextPageLastChild]:
                hasVariant(variants, "previousNextPage", "nextPageLastChild"),
              [sty.slotTargetStartIconpreviousNextPage_nextPage]: hasVariant(
                variants,
                "previousNextPage",
                "nextPage"
              ),
              [sty.slotTargetStartIconpreviousNextPage_previousPageLastChild]:
                hasVariant(
                  variants,
                  "previousNextPage",
                  "previousPageLastChild"
                ),
              [sty.slotTargetStartIconpreviousNextPage_previousPage]:
                hasVariant(variants, "previousNextPage", "previousPage"),
              [sty.slotTargetStartIconshowStartIcon]: hasVariant(
                variants,
                "showStartIcon",
                "showStartIcon"
              )
            })
          })
        : null}
      {(
        hasVariant(variants, "socialIcons", "linkedin")
          ? false
          : hasVariant(variants, "previousNextPage", "nextPageLastChild")
          ? false
          : hasVariant(variants, "previousNextPage", "previousPageLastChild")
          ? false
          : hasVariant(variants, "previousNextPage", "nextPage")
          ? false
          : hasVariant(variants, "previousNextPage", "previousPage")
          ? false
          : hasVariant(variants, "drawer", "close")
          ? false
          : hasVariant(variants, "drawer", "open")
          ? false
          : hasVariant(variants, "iconOnly", "iconOnly")
          ? false
          : true
      )
        ? p.renderPlasmicSlot({
            defaultContents: "Label",
            value: args.children,
            className: classNames(sty.slotTargetChildren, {
              [sty.slotTargetChildrenbgDifference]: hasVariant(
                variants,
                "bgDifference",
                "bgDifference"
              ),
              [sty.slotTargetChildrencolor_accentBlue]: hasVariant(
                variants,
                "color",
                "accentBlue"
              ),
              [sty.slotTargetChildrencolor_blue]: hasVariant(
                variants,
                "color",
                "blue"
              ),
              [sty.slotTargetChildrencolor_darkGray]: hasVariant(
                variants,
                "color",
                "darkGray"
              ),
              [sty.slotTargetChildrencolor_gradient]: hasVariant(
                variants,
                "color",
                "gradient"
              ),
              [sty.slotTargetChildrencolor_indigo]: hasVariant(
                variants,
                "color",
                "indigo"
              ),
              [sty.slotTargetChildrencolor_link]: hasVariant(
                variants,
                "color",
                "link"
              ),
              [sty.slotTargetChildrencolor_navLink]: hasVariant(
                variants,
                "color",
                "navLink"
              ),
              [sty.slotTargetChildrencolor_white]: hasVariant(
                variants,
                "color",
                "white"
              ),
              [sty.slotTargetChildrendrawer_close]: hasVariant(
                variants,
                "drawer",
                "close"
              ),
              [sty.slotTargetChildrendrawer_open]: hasVariant(
                variants,
                "drawer",
                "open"
              ),
              [sty.slotTargetChildreniconOnly]: hasVariant(
                variants,
                "iconOnly",
                "iconOnly"
              ),
              [sty.slotTargetChildrenisDisabled]: hasVariant(
                variants,
                "isDisabled",
                "isDisabled"
              ),
              [sty.slotTargetChildrenlarge]: hasVariant(
                variants,
                "large",
                "large"
              ),
              [sty.slotTargetChildrenpreviousNextPage_nextPageLastChild]:
                hasVariant(variants, "previousNextPage", "nextPageLastChild"),
              [sty.slotTargetChildrenpreviousNextPage_nextPage]: hasVariant(
                variants,
                "previousNextPage",
                "nextPage"
              ),
              [sty.slotTargetChildrenpreviousNextPage_previousPageLastChild]:
                hasVariant(
                  variants,
                  "previousNextPage",
                  "previousPageLastChild"
                ),
              [sty.slotTargetChildrenpreviousNextPage_previousPage]: hasVariant(
                variants,
                "previousNextPage",
                "previousPage"
              ),
              [sty.slotTargetChildrenshowEndIcon]: hasVariant(
                variants,
                "showEndIcon",
                "showEndIcon"
              ),
              [sty.slotTargetChildrenshowStartIcon]: hasVariant(
                variants,
                "showStartIcon",
                "showStartIcon"
              ),
              [sty.slotTargetChildrensize_large]: hasVariant(
                variants,
                "size",
                "large"
              ),
              [sty.slotTargetChildrensize_linkOnly]: hasVariant(
                variants,
                "size",
                "linkOnly"
              ),
              [sty.slotTargetChildrensocialIcons_linkedin]: hasVariant(
                variants,
                "socialIcons",
                "linkedin"
              )
            })
          })
        : null}
      {(
        hasVariant(variants, "showEndIcon", "showEndIcon")
          ? true
          : hasVariant(variants, "iconOnly", "iconOnly")
          ? false
          : hasVariant(variants, "showStartIcon", "showStartIcon")
          ? false
          : false
      )
        ? p.renderPlasmicSlot({
            defaultContents: (
              <svg
                className={classNames(projectcss.all, sty.svg__sxEvb)}
                role={"img"}
              />
            ),

            value: args.endIcon,
            className: classNames(sty.slotTargetEndIcon, {
              [sty.slotTargetEndIconcolor_accentBlue]: hasVariant(
                variants,
                "color",
                "accentBlue"
              ),
              [sty.slotTargetEndIconcolor_blue]: hasVariant(
                variants,
                "color",
                "blue"
              ),
              [sty.slotTargetEndIconcolor_darkGray]: hasVariant(
                variants,
                "color",
                "darkGray"
              ),
              [sty.slotTargetEndIconcolor_gradient]: hasVariant(
                variants,
                "color",
                "gradient"
              ),
              [sty.slotTargetEndIconcolor_indigo]: hasVariant(
                variants,
                "color",
                "indigo"
              ),
              [sty.slotTargetEndIconcolor_link]: hasVariant(
                variants,
                "color",
                "link"
              ),
              [sty.slotTargetEndIconcolor_navLink]: hasVariant(
                variants,
                "color",
                "navLink"
              ),
              [sty.slotTargetEndIconcolor_white]: hasVariant(
                variants,
                "color",
                "white"
              ),
              [sty.slotTargetEndIconiconOnly]: hasVariant(
                variants,
                "iconOnly",
                "iconOnly"
              ),
              [sty.slotTargetEndIconisDisabled]: hasVariant(
                variants,
                "isDisabled",
                "isDisabled"
              ),
              [sty.slotTargetEndIconshowEndIcon]: hasVariant(
                variants,
                "showEndIcon",
                "showEndIcon"
              ),
              [sty.slotTargetEndIconshowStartIcon]: hasVariant(
                variants,
                "showStartIcon",
                "showStartIcon"
              )
            })
          })
        : null}
      {(
        hasVariant(variants, "previousNextPage", "nextPageLastChild")
          ? true
          : hasVariant(variants, "previousNextPage", "previousPageLastChild")
          ? true
          : hasVariant(variants, "previousNextPage", "nextPage")
          ? true
          : hasVariant(variants, "previousNextPage", "previousPage")
          ? true
          : hasVariant(variants, "drawer", "close")
          ? true
          : hasVariant(variants, "drawer", "open")
          ? true
          : true
      ) ? (
        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant(variants, "previousNextPage", "nextPageLastChild")
              ? Arrow1SvgIcon
              : hasVariant(
                  variants,
                  "previousNextPage",
                  "previousPageLastChild"
                )
              ? Arrow1SvgIcon
              : hasVariant(variants, "previousNextPage", "nextPage")
              ? Arrow1SvgIcon
              : hasVariant(variants, "previousNextPage", "previousPage")
              ? Arrow1SvgIcon
              : hasVariant(variants, "drawer", "close")
              ? Icon21Icon
              : MenusvgIcon
          }
          className={classNames(projectcss.all, sty.svg__nTvX0, {
            [sty.svgdrawer_close__nTvX0YarGw]: hasVariant(
              variants,
              "drawer",
              "close"
            ),
            [sty.svgdrawer_open__nTvX0AhVH]: hasVariant(
              variants,
              "drawer",
              "open"
            ),
            [sty.svgpreviousNextPage_nextPageLastChild__nTvX0AKs0Q]: hasVariant(
              variants,
              "previousNextPage",
              "nextPageLastChild"
            ),
            [sty.svgpreviousNextPage_nextPage__nTvX0ERog6]: hasVariant(
              variants,
              "previousNextPage",
              "nextPage"
            ),
            [sty.svgpreviousNextPage_previousPageLastChild__nTvX05Ie7Z]:
              hasVariant(variants, "previousNextPage", "previousPageLastChild"),
            [sty.svgpreviousNextPage_previousPage__nTvX0KKbFz]: hasVariant(
              variants,
              "previousNextPage",
              "previousPage"
            )
          })}
          role={"img"}
        />
      ) : null}
      {(hasVariant(variants, "socialIcons", "linkedin") ? true : false) ? (
        <IconIcon
          className={classNames(projectcss.all, sty.svg__ccPgk, {
            [sty.svgsocialIcons_linkedin__ccPgk5Yesw]: hasVariant(
              variants,
              "socialIcons",
              "linkedin"
            )
          })}
          role={"img"}
        />
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.BaseButtonProps>(
  props: P,
  ref: pp.ButtonRef
) {
  const b = pp.useButton<P, typeof PlasmicButton>(
    PlasmicButton,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },
      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      contentSlot: "children",
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root"
    },

    ref
  );

  if (b.plasmicProps.overrides.root.as === "a") {
    b.plasmicProps.overrides.root.as = p.PlasmicLink;
    b.plasmicProps.overrides.root.props.component = Link;
    b.plasmicProps.overrides.root.props.platform = "nextjs";
  }
  return b;
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
    internalArgProps: PlasmicButton__ArgProps,

    useBehavior
  }
);

export default PlasmicButton;
/* prettier-ignore-end */
