// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qJhJbLN2Wy56BDK1v9VeHg
// Component: 6fZtrnBBAHf
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
import CourseLandingItem from "../../CourseLandingItem"; // plasmic-import: iOaw7i5C2By/component

import { useScreenVariants as useScreenVariantsgfTNvlXeClRRx } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: GfTNvlXE_ClRRx/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_open_bootcamp_v_2_0.module.css"; // plasmic-import: qJhJbLN2Wy56BDK1v9VeHg/projectcss
import sty from "./PlasmicCourseListSection.module.css"; // plasmic-import: 6fZtrnBBAHf/css

export type PlasmicCourseListSection__VariantMembers = {};

export type PlasmicCourseListSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicCourseListSection__VariantsArgs;
export const PlasmicCourseListSection__VariantProps =
  new Array<VariantPropType>();

export type PlasmicCourseListSection__ArgsType = {
  courseList?: React.ReactNode;
};

type ArgPropType = keyof PlasmicCourseListSection__ArgsType;
export const PlasmicCourseListSection__ArgProps = new Array<ArgPropType>(
  "courseList"
);

export type PlasmicCourseListSection__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultCourseListSectionProps {
  courseList?: React.ReactNode;
  className?: string;
}

function PlasmicCourseListSection__RenderFunc(props: {
  variants: PlasmicCourseListSection__VariantsArgs;
  args: PlasmicCourseListSection__ArgsType;
  overrides: PlasmicCourseListSection__OverridesType;

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
        sty.root
      )}
      id={
        hasVariant(globalVariants, "screen", "mobileOnly")
          ? ("caracteristicas" as const)
          : hasVariant(globalVariants, "screen", "laptop")
          ? ("caracteristicas" as const)
          : hasVariant(globalVariants, "screen", "laptopL")
          ? ("caracteristicas" as const)
          : ("caracteristicas" as const)
      }
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__uwwFb)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__wDfTa)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___5St
            )}
          >
            {hasVariant(globalVariants, "screen", "mobileOnly")
              ? "Descubre todos nuestros cursos"
              : hasVariant(globalVariants, "screen", "laptop")
              ? "Descubre todos nuestros cursos"
              : hasVariant(globalVariants, "screen", "laptopL")
              ? "Descubre todos nuestros cursos"
              : "Descubre todos nuestros cursos"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__uQ4Kh
            )}
          >
            {hasVariant(globalVariants, "screen", "mobileOnly")
              ? "OpenBootcamp cuenta con una amplia oferta formativa que te permitirá formarte en las últimas tecnologías que el mercado laboral demanda."
              : hasVariant(globalVariants, "screen", "laptop")
              ? "OpenBootcamp cuenta con una amplia oferta formativa que te permitirá formarte en las últimas tecnologías que el mercado laboral demanda."
              : hasVariant(globalVariants, "screen", "laptopL")
              ? "OpenBootcamp cuenta con una amplia oferta formativa que te permitirá formarte en las últimas tecnologías que el mercado laboral demanda."
              : "OpenBootcamp cuenta con una amplia oferta formativa que te permitirá formarte en las últimas tecnologías que el mercado laboral demanda."}
          </div>
        </p.Stack>

        <div className={classNames(projectcss.all, sty.freeBox__eGzpV)}>
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <CourseLandingItem
                  className={classNames(
                    "__wab_instance",
                    sty.courseLandingItem__nrLnt
                  )}
                  courseImg={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__dmGbu)}
                      displayHeight={"60px" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"none" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"60px" as const}
                      loader={"plasmic"}
                      loading={"lazy" as const}
                      src={{
                        src: "https://img.plasmic.app/img-optimizer/v1/img/5d7f22ab1e6be7dd663e6edae8d70075.png",
                        fullWidth: 60,
                        fullHeight: 60
                      }}
                    />
                  }
                  courseTitle={"Java Script"}
                />

                <CourseLandingItem
                  className={classNames(
                    "__wab_instance",
                    sty.courseLandingItem__zxj3I
                  )}
                  courseImg={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__f7Vz4)}
                      displayHeight={"60px" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"none" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"60px" as const}
                      loader={"plasmic"}
                      loading={"lazy" as const}
                      src={{
                        src: "https://img.plasmic.app/img-optimizer/v1/img/6d3b599e67ad9c11f429a750c6682a9c.png",
                        fullWidth: 60,
                        fullHeight: 60
                      }}
                    />
                  }
                  courseTitle={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__awVj
                      )}
                    >
                      {"Introducción a la programación"}
                    </div>
                  }
                />

                <CourseLandingItem
                  className={classNames(
                    "__wab_instance",
                    sty.courseLandingItem__gYfIt
                  )}
                  courseImg={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img___0SXl)}
                      displayHeight={"60px" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"none" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"60px" as const}
                      loader={"plasmic"}
                      loading={"lazy" as const}
                      src={{
                        src: "https://img.plasmic.app/img-optimizer/v1/img/86adce8a4da5af9dc5c370f9f4e29ffc.png",
                        fullWidth: 60,
                        fullHeight: 60
                      }}
                    />
                  }
                  courseTitle={"ReactJS"}
                />

                <CourseLandingItem
                  className={classNames(
                    "__wab_instance",
                    sty.courseLandingItem__fFBdm
                  )}
                  courseImg={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img___4DivW)}
                      displayHeight={"60px" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"none" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"60px" as const}
                      loader={"plasmic"}
                      loading={"lazy" as const}
                      src={{
                        src: "https://img.plasmic.app/img-optimizer/v1/img/b5a4efb4575d17e55e133fd522e522ad.png",
                        fullWidth: 60,
                        fullHeight: 60
                      }}
                    />
                  }
                  courseTitle={"Angular"}
                />

                <CourseLandingItem
                  className={classNames(
                    "__wab_instance",
                    sty.courseLandingItem__rs3V9
                  )}
                  courseImg={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img___2O4Ao)}
                      displayHeight={"60px" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"none" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"60px" as const}
                      loader={"plasmic"}
                      loading={"lazy" as const}
                      src={{
                        src: "https://img.plasmic.app/img-optimizer/v1/img/5bdd4a38664225329c199ab3f5a48a07.png",
                        fullWidth: 60,
                        fullHeight: 60
                      }}
                    />
                  }
                  courseTitle={"HTML & CSS"}
                />

                <CourseLandingItem
                  className={classNames(
                    "__wab_instance",
                    sty.courseLandingItem__wnJrT
                  )}
                  courseImg={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__po20V)}
                      displayHeight={"60px" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"none" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"60px" as const}
                      loader={"plasmic"}
                      loading={"lazy" as const}
                      src={{
                        src: "https://img.plasmic.app/img-optimizer/v1/img/f361240d02f2b7e798a6343bd5d5a525.png",
                        fullWidth: 60,
                        fullHeight: 60
                      }}
                    />
                  }
                  courseTitle={"Java básico"}
                />

                <CourseLandingItem
                  className={classNames(
                    "__wab_instance",
                    sty.courseLandingItem__vdz37
                  )}
                  courseImg={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__vsu7N)}
                      displayHeight={"60px" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"none" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"60px" as const}
                      loader={"plasmic"}
                      loading={"lazy" as const}
                      src={{
                        src: "https://img.plasmic.app/img-optimizer/v1/img/b5a4efb4575d17e55e133fd522e522ad.png",
                        fullWidth: 60,
                        fullHeight: 60
                      }}
                    />
                  }
                  courseTitle={"Angular"}
                />

                <CourseLandingItem
                  className={classNames(
                    "__wab_instance",
                    sty.courseLandingItem__aiDch
                  )}
                  courseImg={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__fVdNu)}
                      displayHeight={"60px" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"none" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"60px" as const}
                      loader={"plasmic"}
                      loading={"lazy" as const}
                      src={{
                        src: "https://img.plasmic.app/img-optimizer/v1/img/d5afd7bbe9f8c188587d3b51bd67801f.png",
                        fullWidth: 60,
                        fullHeight: 60
                      }}
                    />
                  }
                  courseTitle={"Hibernate"}
                />

                <CourseLandingItem
                  className={classNames(
                    "__wab_instance",
                    sty.courseLandingItem__okSb6
                  )}
                  courseImg={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__wf8Bk)}
                      displayHeight={"60px" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"none" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"60px" as const}
                      loader={"plasmic"}
                      loading={"lazy" as const}
                      src={{
                        src: "https://img.plasmic.app/img-optimizer/v1/img/86adce8a4da5af9dc5c370f9f4e29ffc.png",
                        fullWidth: 60,
                        fullHeight: 60
                      }}
                    />
                  }
                  courseTitle={"React avanzado"}
                />

                <CourseLandingItem
                  className={classNames(
                    "__wab_instance",
                    sty.courseLandingItem__uFnhR
                  )}
                  courseImg={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__vcdWf)}
                      displayHeight={"60px" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"none" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"60px" as const}
                      loader={"plasmic"}
                      loading={"lazy" as const}
                      src={{
                        src: "https://img.plasmic.app/img-optimizer/v1/img/5d7f22ab1e6be7dd663e6edae8d70075.png",
                        fullWidth: 60,
                        fullHeight: 60
                      }}
                    />
                  }
                  courseTitle={"Java Script"}
                />

                <CourseLandingItem
                  className={classNames(
                    "__wab_instance",
                    sty.courseLandingItem__mAxMi
                  )}
                  courseImg={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__jB8Aq)}
                      displayHeight={"60px" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"none" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"60px" as const}
                      loader={"plasmic"}
                      loading={"lazy" as const}
                      src={{
                        src: "https://img.plasmic.app/img-optimizer/v1/img/6d3b599e67ad9c11f429a750c6682a9c.png",
                        fullWidth: 60,
                        fullHeight: 60
                      }}
                    />
                  }
                  courseTitle={"Spring"}
                />

                <CourseLandingItem
                  className={classNames(
                    "__wab_instance",
                    sty.courseLandingItem__bRWvn
                  )}
                  courseImg={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__pa8U1)}
                      displayHeight={"60px" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"none" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"60px" as const}
                      loader={"plasmic"}
                      loading={"lazy" as const}
                      src={{
                        src: "https://img.plasmic.app/img-optimizer/v1/img/5bdd4a38664225329c199ab3f5a48a07.png",
                        fullWidth: 60,
                        fullHeight: 60
                      }}
                    />
                  }
                  courseTitle={"HTML & CSS"}
                />
              </React.Fragment>
            ),
            value: args.courseList
          })}
        </div>
      </p.Stack>
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
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCourseListSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCourseListSection__VariantsArgs;
    args?: PlasmicCourseListSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCourseListSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCourseListSection__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicCourseListSection__ArgProps,
          internalVariantPropNames: PlasmicCourseListSection__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicCourseListSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCourseListSection";
  } else {
    func.displayName = `PlasmicCourseListSection.${nodeName}`;
  }
  return func;
}

export const PlasmicCourseListSection = Object.assign(
  // Top-level PlasmicCourseListSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicCourseListSection
    internalVariantProps: PlasmicCourseListSection__VariantProps,
    internalArgProps: PlasmicCourseListSection__ArgProps
  }
);

export default PlasmicCourseListSection;
/* prettier-ignore-end */