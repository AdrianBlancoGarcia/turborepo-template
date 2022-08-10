import * as React from 'react';
import { PlasmicTestimonialItem, DefaultTestimonialItemProps } from './plasmic/open_bootcamp_v_2_0/PlasmicTestimonialItem';
import { HTMLElementRefOf } from '@plasmicapp/react-web';

export interface TestimonialItemProps extends DefaultTestimonialItemProps {}

function TestimonialItem_(props: TestimonialItemProps, ref: HTMLElementRefOf<'div'>) {
  return <PlasmicTestimonialItem root={{ ref }} {...props} />;
}

const TestimonialItem = React.forwardRef(TestimonialItem_);
export default TestimonialItem;
