// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fxuAGcsah199rVCjPzGTfY
// Component: hxbR3KsEHZ
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

import projectcss from "./plasmic_open_marketers.module.css"; // plasmic-import: fxuAGcsah199rVCjPzGTfY/projectcss
import sty from "./PlasmicBreadcrumbItem.module.css"; // plasmic-import: hxbR3KsEHZ/css

import Vector14Icon from "./icons/PlasmicIcon__Vector14"; // plasmic-import: YikXogKYiT/icon

export type PlasmicBreadcrumbItem__VariantMembers = {
  parent: "parent";
  child: "child";
  childLast: "childLast";
};

export type PlasmicBreadcrumbItem__VariantsArgs = {
  parent?: SingleBooleanChoiceArg<"parent">;
  child?: SingleBooleanChoiceArg<"child">;
  childLast?: SingleBooleanChoiceArg<"childLast">;
};

type VariantPropType = keyof PlasmicBreadcrumbItem__VariantsArgs;
export const PlasmicBreadcrumbItem__VariantProps = new Array<VariantPropType>(
  "parent",
  "child",
  "childLast"
);

export type PlasmicBreadcrumbItem__ArgsType = {
  breadcrumbParent?: React.ReactNode;
  breadcrumbChild?: React.ReactNode;
  breadcrumbChildLast?: React.ReactNode;
};

type ArgPropType = keyof PlasmicBreadcrumbItem__ArgsType;
export const PlasmicBreadcrumbItem__ArgProps = new Array<ArgPropType>(
  "breadcrumbParent",
  "breadcrumbChild",
  "breadcrumbChildLast"
);

export type PlasmicBreadcrumbItem__OverridesType = {
  root?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultBreadcrumbItemProps {
  breadcrumbParent?: React.ReactNode;
  breadcrumbChild?: React.ReactNode;
  breadcrumbChildLast?: React.ReactNode;
  parent?: SingleBooleanChoiceArg<"parent">;
  child?: SingleBooleanChoiceArg<"child">;
  childLast?: SingleBooleanChoiceArg<"childLast">;
  className?: string;
}

function PlasmicBreadcrumbItem__RenderFunc(props: {
  variants: PlasmicBreadcrumbItem__VariantsArgs;
  args: PlasmicBreadcrumbItem__ArgsType;
  overrides: PlasmicBreadcrumbItem__OverridesType;

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
      {(
        hasVariant(variants, "childLast", "childLast")
          ? true
          : hasVariant(variants, "child", "child")
          ? true
          : true
      ) ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__gJ5A, {
            [sty.freeBoxchildLast__gJ5AjOhXw]: hasVariant(
              variants,
              "childLast",
              "childLast"
            ),
            [sty.freeBoxchild__gJ5Aoy3OM]: hasVariant(
              variants,
              "child",
              "child"
            ),
            [sty.freeBoxparent__gJ5AijrI7]: hasVariant(
              variants,
              "parent",
              "parent"
            )
          })}
        >
          <p.PlasmicLink
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            className={classNames(projectcss.all, projectcss.a, sty.link, {
              [sty.linkchildLast]: hasVariant(
                variants,
                "childLast",
                "childLast"
              ),
              [sty.linkchild]: hasVariant(variants, "child", "child"),
              [sty.linkparent]: hasVariant(variants, "parent", "parent")
            })}
            component={Link}
            href={"" as const}
            platform={"nextjs"}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Parent",
              value: args.breadcrumbParent,
              className: classNames(sty.slotTargetBreadcrumbParent, {
                [sty.slotTargetBreadcrumbParentchildLast]: hasVariant(
                  variants,
                  "childLast",
                  "childLast"
                ),
                [sty.slotTargetBreadcrumbParentchild]: hasVariant(
                  variants,
                  "child",
                  "child"
                ),
                [sty.slotTargetBreadcrumbParentparent]: hasVariant(
                  variants,
                  "parent",
                  "parent"
                )
              })
            })}
          </p.PlasmicLink>

          <Vector14Icon
            className={classNames(projectcss.all, sty.svg__pTpt, {
              [sty.svgchildLast__pTpTjOhXw]: hasVariant(
                variants,
                "childLast",
                "childLast"
              ),
              [sty.svgparent__pTpTijrI7]: hasVariant(
                variants,
                "parent",
                "parent"
              )
            })}
            role={"img"}
          />
        </p.Stack>
      ) : null}
      {(
        hasVariant(variants, "childLast", "childLast")
          ? true
          : hasVariant(variants, "child", "child")
          ? true
          : true
      ) ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__y5Or, {
            [sty.freeBoxchildLast__y5OrjOhXw]: hasVariant(
              variants,
              "childLast",
              "childLast"
            ),
            [sty.freeBoxchild__y5Oroy3OM]: hasVariant(
              variants,
              "child",
              "child"
            )
          })}
        >
          {(hasVariant(variants, "childLast", "childLast") ? true : false) ? (
            <Vector14Icon
              className={classNames(projectcss.all, sty.svg___7S1F7, {
                [sty.svgchildLast___7S1F7JOhXw]: hasVariant(
                  variants,
                  "childLast",
                  "childLast"
                )
              })}
              role={"img"}
            />
          ) : null}
          {(hasVariant(variants, "childLast", "childLast") ? false : true)
            ? p.renderPlasmicSlot({
                defaultContents: "Child",
                value: args.breadcrumbChild,
                className: classNames(sty.slotTargetBreadcrumbChild, {
                  [sty.slotTargetBreadcrumbChildchildLast]: hasVariant(
                    variants,
                    "childLast",
                    "childLast"
                  ),
                  [sty.slotTargetBreadcrumbChildchild]: hasVariant(
                    variants,
                    "child",
                    "child"
                  )
                })
              })
            : null}
          {(hasVariant(variants, "child", "child") ? false : true)
            ? p.renderPlasmicSlot({
                defaultContents: "Child",
                value: args.breadcrumbChildLast,
                className: classNames(sty.slotTargetBreadcrumbChildLast, {
                  [sty.slotTargetBreadcrumbChildLastchildLast]: hasVariant(
                    variants,
                    "childLast",
                    "childLast"
                  ),
                  [sty.slotTargetBreadcrumbChildLastchild]: hasVariant(
                    variants,
                    "child",
                    "child"
                  )
                })
              })
            : null}
        </p.Stack>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "link"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBreadcrumbItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBreadcrumbItem__VariantsArgs;
    args?: PlasmicBreadcrumbItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBreadcrumbItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBreadcrumbItem__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicBreadcrumbItem__ArgProps,
          internalVariantPropNames: PlasmicBreadcrumbItem__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicBreadcrumbItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBreadcrumbItem";
  } else {
    func.displayName = `PlasmicBreadcrumbItem.${nodeName}`;
  }
  return func;
}

export const PlasmicBreadcrumbItem = Object.assign(
  // Top-level PlasmicBreadcrumbItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicBreadcrumbItem
    internalVariantProps: PlasmicBreadcrumbItem__VariantProps,
    internalArgProps: PlasmicBreadcrumbItem__ArgProps
  }
);

export default PlasmicBreadcrumbItem;
/* prettier-ignore-end */