import * as React from 'react';
import {
  PlasmicTestimonialsTexts,
  DefaultTestimonialsTextsProps,
} from './plasmic/open_bootcamp_v_2_0/PlasmicTestimonialsTexts';
import { HTMLElementRefOf } from '@plasmicapp/react-web';

export interface TestimonialsTextsProps extends DefaultTestimonialsTextsProps {}

function TestimonialsTexts_(props: TestimonialsTextsProps, ref: HTMLElementRefOf<'div'>) {
  return <PlasmicTestimonialsTexts root={{ ref }} {...props} />;
}

const TestimonialsTexts = React.forwardRef(TestimonialsTexts_);
export default TestimonialsTexts;
