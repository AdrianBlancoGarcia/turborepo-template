import * as React from 'react';
import { PlasmicCourseLandingFaq, DefaultCourseLandingFaqProps } from './plasmic/open_bootcamp_v_2_0/PlasmicCourseLandingFaq';
import { HTMLElementRefOf } from '@plasmicapp/react-web';

export interface CourseLandingFaqProps extends DefaultCourseLandingFaqProps {}

function CourseLandingFaq_(props: CourseLandingFaqProps, ref: HTMLElementRefOf<'div'>) {
  return <PlasmicCourseLandingFaq root={{ ref }} {...props} />;
}

const CourseLandingFaq = React.forwardRef(CourseLandingFaq_);
export default CourseLandingFaq;
