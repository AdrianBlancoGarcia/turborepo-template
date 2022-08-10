import * as React from 'react';
import { PlasmicRoadmapGridOp, DefaultRoadmapGridOpProps } from './plasmic/open_bootcamp_v_2_0/PlasmicRoadmapGridOp';
import { HTMLElementRefOf } from '@plasmicapp/react-web';

export interface RoadmapGridOpProps extends DefaultRoadmapGridOpProps {
  id?: string;
}

function RoadmapGridOp_({ id, ...props }: RoadmapGridOpProps, ref: HTMLElementRefOf<'div'>) {
  return <PlasmicRoadmapGridOp root={{ ref }} id={id} {...props} />;
}

const RoadmapGridOp = React.forwardRef(RoadmapGridOp_);
export default RoadmapGridOp;
