import * as React from 'react';
import { PlasmicFooter, DefaultFooterProps } from './plasmic/job_run/PlasmicFooter';
import { HTMLElementRefOf } from '@plasmicapp/react-web';

export interface FooterProps extends DefaultFooterProps {}

function Footer_(props: FooterProps, ref: HTMLElementRefOf<'div'>) {
  return <PlasmicFooter root={{ ref }} {...props} />;
}

const Footer = React.forwardRef(Footer_);
export default Footer;
