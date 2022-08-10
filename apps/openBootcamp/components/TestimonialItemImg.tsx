import * as React from 'react';
import {
  PlasmicTestimonialItemImg,
  DefaultTestimonialItemImgProps,
} from './plasmic/open_bootcamp_v_2_0/PlasmicTestimonialItemImg';
import { HTMLElementRefOf } from '@plasmicapp/react-web';

export interface TestimonialItemImgProps extends DefaultTestimonialItemImgProps {}

function TestimonialItemImg_(props: TestimonialItemImgProps, ref: HTMLElementRefOf<'div'>) {
  return <PlasmicTestimonialItemImg root={{ ref }} {...props} />;
}

const TestimonialItemImg = React.forwardRef(TestimonialItemImg_);
export default TestimonialItemImg;
