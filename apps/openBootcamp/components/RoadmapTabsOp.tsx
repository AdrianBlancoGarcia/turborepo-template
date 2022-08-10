import * as React from 'react';
import { PlasmicRoadmapTabsOp, DefaultRoadmapTabsOpProps } from './plasmic/open_bootcamp_v_2_0/PlasmicRoadmapTabsOp';
import { HTMLElementRefOf } from '@plasmicapp/react-web';

export interface RoadmapTabsOpProps extends DefaultRoadmapTabsOpProps {
  id?: string;
}

function RoadmapTabsOp_({ id, ...props }: RoadmapTabsOpProps, ref: HTMLElementRefOf<'div'>) {
  return <PlasmicRoadmapTabsOp root={{ ref }} id={id} {...props} />;
}

const RoadmapTabsOp = React.forwardRef(RoadmapTabsOp_);
export default RoadmapTabsOp;
