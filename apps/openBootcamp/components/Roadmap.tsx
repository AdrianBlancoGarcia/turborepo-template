import * as React from 'react';
import { HTMLElementRefOf } from '@plasmicapp/react-web';
import { PlasmicRoadmap, DefaultRoadmapProps } from './plasmic/open_bootcamp_v_2_0/PlasmicRoadmap';

export interface RoadmapProps extends DefaultRoadmapProps {}

function Roadmap_({ ...props }: RoadmapProps, ref: HTMLElementRefOf<'div'>) {
  return <PlasmicRoadmap root={{ ref }} {...props} />;
}

const Roadmap = React.forwardRef(Roadmap_);
export default Roadmap;
