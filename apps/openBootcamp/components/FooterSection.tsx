import * as React from 'react';
import { PlasmicFooterSection, DefaultFooterSectionProps } from './plasmic/open_bootcamp_v_2_0/PlasmicFooterSection';
import { HTMLElementRefOf } from '@plasmicapp/react-web';

export interface FooterSectionProps extends DefaultFooterSectionProps {}

function FooterSection_(props: FooterSectionProps, ref: HTMLElementRefOf<'div'>) {
  return <PlasmicFooterSection root={{ ref }} {...props} />;
}

const FooterSection = React.forwardRef(FooterSection_);
export default FooterSection;
