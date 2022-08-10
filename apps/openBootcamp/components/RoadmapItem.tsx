import * as React from 'react';
import { PlasmicRoadmapItem, DefaultRoadmapItemProps } from './plasmic/open_bootcamp_v_2_0/PlasmicRoadmapItem';
import { HTMLElementRefOf } from '@plasmicapp/react-web';

export interface RoadmapItemProps extends DefaultRoadmapItemProps {}

function RoadmapItem_(props: RoadmapItemProps, ref: HTMLElementRefOf<'div'>) {
  return <PlasmicRoadmapItem root={{ ref }} {...props} />;
}

const RoadmapItem = React.forwardRef(RoadmapItem_);
export default RoadmapItem;
