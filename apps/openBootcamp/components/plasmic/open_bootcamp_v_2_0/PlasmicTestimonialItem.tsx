// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qJhJbLN2Wy56BDK1v9VeHg
// Component: ZOePmbDjbr
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
import Button from "../../Button"; // plasmic-import: W52igaDMzA10w6/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_open_bootcamp_v_2_0.module.css"; // plasmic-import: qJhJbLN2Wy56BDK1v9VeHg/projectcss
import sty from "./PlasmicTestimonialItem.module.css"; // plasmic-import: ZOePmbDjbr/css

import Icon9Icon from "./icons/PlasmicIcon__Icon9"; // plasmic-import: vVZm8N2wdn/icon
import Icon21Icon from "./icons/PlasmicIcon__Icon21"; // plasmic-import: MPKmKXARKW/icon

export type PlasmicTestimonialItem__VariantMembers = {
  baseImg: "button" | "noButton";
};

export type PlasmicTestimonialItem__VariantsArgs = {
  baseImg?: SingleChoiceArg<"button" | "noButton">;
};

type VariantPropType = keyof PlasmicTestimonialItem__VariantsArgs;
export const PlasmicTestimonialItem__VariantProps = new Array<VariantPropType>(
  "baseImg"
);

export type PlasmicTestimonialItem__ArgsType = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  videoSlot?: React.ReactNode;
  userImage?: React.ReactNode;
  linkedin?: React.ReactNode;
};

type ArgPropType = keyof PlasmicTestimonialItem__ArgsType;
export const PlasmicTestimonialItem__ArgProps = new Array<ArgPropType>(
  "title",
  "description",
  "videoSlot",
  "userImage",
  "linkedin"
);

export type PlasmicTestimonialItem__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultTestimonialItemProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  videoSlot?: React.ReactNode;
  userImage?: React.ReactNode;
  linkedin?: React.ReactNode;
  baseImg?: SingleChoiceArg<"button" | "noButton">;
  className?: string;
}

function PlasmicTestimonialItem__RenderFunc(props: {
  variants: PlasmicTestimonialItem__VariantsArgs;
  args: PlasmicTestimonialItem__ArgsType;
  overrides: PlasmicTestimonialItem__OverridesType;

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
      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__zp4Hl)}>
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__snBsK)}>
              {p.renderPlasmicSlot({
                defaultContents: (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__joP)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__opAl7)}
                    >
                      <Icon9Icon
                        className={classNames(projectcss.all, sty.svg__tmgRv)}
                        role={"img"}
                      />
                    </p.Stack>
                  </p.Stack>
                ),

                value: args.videoSlot
              })}
            </div>
          ) : null}
        </div>
      ) : null}

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__uFp9A)}
      >
        {true ? (
          <div className={classNames(projectcss.all, sty.freeBox__ew0R5)}>
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__cxY28)}>
                {p.renderPlasmicSlot({
                  defaultContents: (
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__eqOqw)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"auto" as const}
                      loader={"plasmic"}
                      loading={"lazy" as const}
                    />
                  ),

                  value: args.userImage
                })}
              </div>
            ) : null}
          </div>
        ) : null}

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___6YVbV)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__v7Zwz)}>
            {p.renderPlasmicSlot({
              defaultContents: "Nombre",
              value: args.title,
              className: classNames(sty.slotTargetTitle)
            })}
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__ouDk)}>
            {p.renderPlasmicSlot({
              defaultContents: "Descripción",
              value: args.description,
              className: classNames(sty.slotTargetDescription)
            })}
          </div>

          {(hasVariant(variants, "baseImg", "noButton") ? false : true)
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <Button
                    className={classNames("__wab_instance", sty.button___9Gl9N)}
                    socialIcons={"linkedin" as const}
                  />
                ),

                value: args.linkedin
              })
            : null}
        </p.Stack>
      </p.Stack>
    </div>
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
  PlasmicTestimonialItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTestimonialItem__VariantsArgs;
    args?: PlasmicTestimonialItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTestimonialItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTestimonialItem__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicTestimonialItem__ArgProps,
          internalVariantPropNames: PlasmicTestimonialItem__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicTestimonialItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTestimonialItem";
  } else {
    func.displayName = `PlasmicTestimonialItem.${nodeName}`;
  }
  return func;
}

export const PlasmicTestimonialItem = Object.assign(
  // Top-level PlasmicTestimonialItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicTestimonialItem
    internalVariantProps: PlasmicTestimonialItem__VariantProps,
    internalArgProps: PlasmicTestimonialItem__ArgProps
  }
);

export default PlasmicTestimonialItem;
/* prettier-ignore-end */