import * as React from 'react';
import Link from 'next/link';

import { HTMLElementRefOf } from '@plasmicapp/react-web';
import { PlasmicLinkOm, DefaultLinkOmProps } from './plasmic/open_marketers/PlasmicLinkOm';

export interface LinkOmProps extends DefaultLinkOmProps {
  href?: string;
  onClick?: (e?: any) => any;
}

function LinkOm_({ href, onClick, ...props }: LinkOmProps, ref: HTMLElementRefOf<'a'>) {
  return href ? (
    <Link href={href} passHref>
      <PlasmicLinkOm root={{ ref }} {...props} onClick={onClick} />
    </Link>
  ) : (
    <PlasmicLinkOm root={{ ref }} {...props} onClick={onClick} />
  );
}

const LinkOm = React.forwardRef(LinkOm_);
export default LinkOm;
