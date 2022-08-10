import * as React from 'react';
import { PlasmicRoadmapGrid, DefaultRoadmapGridProps } from './plasmic/open_bootcamp_v_2_0/PlasmicRoadmapGrid';
import { HTMLElementRefOf } from '@plasmicapp/react-web';

export interface RoadmapGridProps extends DefaultRoadmapGridProps {
  id?: string;
}

function RoadmapGrid_({ id, ...props }: RoadmapGridProps, ref: HTMLElementRefOf<'div'>) {
  return <PlasmicRoadmapGrid root={{ ref }} {...props} id={id} />;
}

const RoadmapGrid = React.forwardRef(RoadmapGrid_);
export default RoadmapGrid;
