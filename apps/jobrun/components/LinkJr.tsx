import * as React from 'react';
import Link from 'next/link';

import { HTMLElementRefOf } from '@plasmicapp/react-web';
import { PlasmicLinkJr, DefaultLinkJrProps } from './plasmic/job_run/PlasmicLinkJr';

export interface LinkJrProps extends DefaultLinkJrProps {
  href?: string;
  target?: string;
}

function LinkJr_({ href, target, ...props }: LinkJrProps, ref: HTMLElementRefOf<'a'>) {
  return href ? (
    <Link href={href} prefetch={false}>
      <a target={target}>
        <PlasmicLinkJr root2={{ ref }} {...props} />{' '}
      </a>
    </Link>
  ) : (
    <PlasmicLinkJr root2={{ ref }} {...props} />
  );
}

const LinkJr = React.forwardRef(LinkJr_);
export default LinkJr;
