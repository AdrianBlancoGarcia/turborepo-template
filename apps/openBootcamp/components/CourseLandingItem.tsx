import * as React from 'react';
import {
  PlasmicCourseLandingItem,
  DefaultCourseLandingItemProps,
} from './plasmic/open_bootcamp_v_2_0/PlasmicCourseLandingItem';
import { HTMLElementRefOf } from '@plasmicapp/react-web';

export interface CourseLandingItemProps extends DefaultCourseLandingItemProps {}

function CourseLandingItem_(props: CourseLandingItemProps, ref: HTMLElementRefOf<'div'>) {
  return <PlasmicCourseLandingItem root={{ ref }} {...props} />;
}

const CourseLandingItem = React.forwardRef(CourseLandingItem_);
export default CourseLandingItem;
