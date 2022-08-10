import * as React from 'react';
import { PlasmicRoadmapSection, DefaultRoadmapSectionProps } from './plasmic/open_bootcamp_v_2_0/PlasmicRoadmapSection';
import { HTMLElementRefOf } from '@plasmicapp/react-web';
const Roadmap = dynamic(() => import('./Roadmap'));
import graded from '../public/gradedRoadmap.png';

import styles from '../styles/RoadmapTabs.module.css';
import animationStyle from './RoadmapSection.module.css';
import Button from './Button';
import dynamic from 'next/dynamic';
import VueAccordionIcon from './plasmic/open_bootcamp_v_2_0/icons/PlasmicIcon__VueAccordion';
import AngularAccordeonsvgIcon from './plasmic/open_bootcamp_v_2_0/icons/PlasmicIcon__AngularAccordeonsvg';
import ReactAccordionIcon from './plasmic/open_bootcamp_v_2_0/icons/PlasmicIcon__ReactAccordion';
import JavaAccordionIcon from './plasmic/open_bootcamp_v_2_0/icons/PlasmicIcon__JavaAccordion';
import CsharpAccordionIcon from './plasmic/open_bootcamp_v_2_0/icons/PlasmicIcon__CsharpAccordion';
import NodeAccordionIcon from './plasmic/open_bootcamp_v_2_0/icons/PlasmicIcon__NodeAccordion';
import PythonAccordionIcon from './plasmic/open_bootcamp_v_2_0/icons/PlasmicIcon__PythonAccordion';
import PhpAccordionIcon from './plasmic/open_bootcamp_v_2_0/icons/PlasmicIcon__PhpAccordion';

export enum RoadmapTabsEnum {
  Principiante = 'principiante',
  Frontend = 'frontend',
  Backend = 'backend',
  FullStack = 'fullstack',
}

enum RoadmapTabsEnum_Frontend {
  REACT = 'react',
  ANGULAR = 'angular',
  VUEJS = 'vueJs',
}

enum RoadmapTabsEnum_Backend {
  JAVA = 'java',
  PYTHON = 'python',
  PHP = 'php',
  CSHARP = 'cSharp',
  NODE = 'node',
}

export interface RoadmapSectionProps extends DefaultRoadmapSectionProps {
  id?: string;
  origen?: RoadmapTabsEnum;
}

function RoadmapSection_(
  { id, origen = RoadmapTabsEnum.Principiante, ...props }: RoadmapSectionProps,
  ref: HTMLElementRefOf<'div'>
) {
  const [tab, setTab] = React.useState<RoadmapTabsEnum | RoadmapTabsEnum_Frontend>();
  const [unmount, setUnmount] = React.useState<boolean>();

  /**
   * Método que actualiza la tab seleccionada
   * @param tab 
   */
  const setterTab = (tab: RoadmapTabsEnum | RoadmapTabsEnum_Frontend) => {
    setUnmount(true);

    setTimeout(() => {
      setTab(tab);
      setUnmount(false);
    }, 390);
  };

  return (
    <PlasmicRoadmapSection
      root={{ ref }}
      {...props}
      id={id}
      roadmap={
        <div className={(unmount ? animationStyle.RoadMapUnmount : animationStyle.RoadMapMount) + ' ' + animationStyle.w100}>
          <Roadmap
            roadmap={tab}
            buttonRoadmap={
              <Button data-cy="cta_desarrollador" color="blue" href={process.env.NEXT_PUBLIC_CAMPUS_URL + '/register'}>
                Quiero ser Desarrollador
              </Button>
            }
          />
        </div>
      }
      roadmapTabs={
        <RoadmapTabs
          tabSelected={tab}
          onSelect={setterTab}
          tabs={
            origen === 'frontend'
              ? Object.values(RoadmapTabsEnum_Frontend)
              : origen === 'backend'
              ? Object.values(RoadmapTabsEnum_Backend)
              : Object.values(RoadmapTabsEnum)
          }
        />
      }
    />
  );
}

const RoadmapSection = React.forwardRef(RoadmapSection_);
export default RoadmapSection;

type RoadmapTabsProps = {
  tabSelected?: string;
  tabs: RoadmapTabsEnum[] | RoadmapTabsEnum_Frontend[] | RoadmapTabsEnum_Backend[];
  onSelect: (e?: any) => any;
};

const RoadmapTabs = ({ tabSelected, tabs, onSelect }: RoadmapTabsProps) => {
  return (
    <div className={styles.roadmap_tabs}>
      <div className={styles.roadmap_tabs__content}>
        {tabs?.map((tab, index) => (
          <div
            key={`roadmap_tab-${index}`}
            onClick={() => onSelect(tab)}
            className={styles.roadmap_tab + ' ' + (tabSelected === tab ? styles.roadmap_tab__active : '')}
          >
            {tab === RoadmapTabsEnum.Principiante ? (
              <div style={{ display: 'flex', columnGap: '14px' }} className={styles.tab} data-cy="cta_principiante">
                <i className="bx bx-door-open" />
                <div>Principiante</div>
              </div>
            ) : tab === RoadmapTabsEnum.Frontend ? (
              <div style={{ display: 'flex', columnGap: '14px' }} className={styles.tab} data-cy="cta_frontend">
                <i className="bx bx-code-block" />
                <div>Front-End</div>
              </div>
            ) : tab === RoadmapTabsEnum.Backend ? (
              <div style={{ display: 'flex', columnGap: '14px' }} className={styles.tab} data-cy="cta_backend">
                <i className="bx bx-server" />
                <div>Back-End</div>
              </div>
            ) : tab === RoadmapTabsEnum.FullStack ? (
              <div style={{ display: 'flex', columnGap: '14px' }} className={styles.tab} data-cy="cta_fullStack">
                <i className="bx bx-layer" />
                <div>Full Stack</div>
              </div>
            ) : tab === RoadmapTabsEnum_Frontend.REACT ? (
              <div style={{ display: 'flex', columnGap: '14px' }} className={styles.tab} data-cy="cta_react">
                <ReactAccordionIcon />
                <div>ReactJS</div>
              </div>
            ) : tab === RoadmapTabsEnum_Frontend.ANGULAR ? (
              <div style={{ display: 'flex', columnGap: '14px' }} className={styles.tab} data-cy="cta_angular">
                <AngularAccordeonsvgIcon />
                <div>Angular</div>
              </div>
            ) : tab === RoadmapTabsEnum_Frontend.VUEJS ? (
              <div style={{ display: 'flex', columnGap: '14px' }} className={styles.tab} data-cy="cta_vuejs">
                <VueAccordionIcon />
                <div>Vue JS</div>
              </div>
            ) : tab === RoadmapTabsEnum_Backend.JAVA ? (
              <div style={{ display: 'flex', columnGap: '14px' }} className={styles.tab} data-cy="cta_java">
                <JavaAccordionIcon />
                <div>Java</div>
              </div>
            ) : tab === RoadmapTabsEnum_Backend.PHP ? (
              <div style={{ display: 'flex', columnGap: '14px' }} className={styles.tab} data-cy="cta_php">
                <PhpAccordionIcon />
                <div>PHP</div>
              </div>
            ) : tab === RoadmapTabsEnum_Backend.CSHARP ? (
              <div style={{ display: 'flex', columnGap: '14px' }} className={styles.tab} data-cy="cta_csharp">
                <CsharpAccordionIcon />
                <div>C#</div>
              </div>
            ) : tab === RoadmapTabsEnum_Backend.NODE ? (
              <div style={{ display: 'flex', columnGap: '14px' }} className={styles.tab} data-cy="cta_node">
                <NodeAccordionIcon />
                <div>Node</div>
              </div>
            ) : tab === RoadmapTabsEnum_Backend.PYTHON ? (
              <div style={{ display: 'flex', columnGap: '14px' }} className={styles.tab} data-cy="cta_python">
                <PythonAccordionIcon />
                <div>Python</div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};
