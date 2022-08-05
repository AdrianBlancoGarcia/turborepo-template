import * as React from 'react';
import Link from 'next/link';

import { HTMLElementRefOf } from '@plasmicapp/react-web';

import { PlasmicOfferCard, DefaultOfferCardProps } from './plasmic/job_run/PlasmicOfferCard';

export interface OfferCardProps extends DefaultOfferCardProps {
  href?: string;
  target?: string;
  onClick?: (e?: any) => void | any;
}

function OfferCard_({ onClick, href, target, ...props }: OfferCardProps, ref: HTMLElementRefOf<'div'>) {
  return href ? (
    <Link href={href} prefetch={false}>
      <a target={target}>
        <PlasmicOfferCard root={{ ref }} onClick={onClick} {...props} />
      </a>
    </Link>
  ) : (
    <PlasmicOfferCard root={{ ref }} onClick={onClick} {...props} />
  );
}

const OfferCard = React.forwardRef(OfferCard_);
export default OfferCard;
