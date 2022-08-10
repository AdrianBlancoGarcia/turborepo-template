import * as React from 'react';
import { PlasmicAccordion, DefaultAccordionProps } from './plasmic/open_bootcamp_v_2_0/PlasmicAccordion';
import { HTMLElementRefOf } from '@plasmicapp/react-web';

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface AccordionProps extends Omit<DefaultAccordionProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultAccordionProps altogether and have
// total control over the props for your component.
export interface AccordionProps extends DefaultAccordionProps {}

function Accordion_(props: AccordionProps, ref: HTMLElementRefOf<'div'>) {
  return <PlasmicAccordion root={{ ref }} {...props} />;
}

const Accordion = React.forwardRef(Accordion_);
export default Accordion;
