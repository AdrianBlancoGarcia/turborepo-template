import * as React from 'react';
import Link from 'next/link';

import { HTMLElementRefOf } from '@plasmicapp/react-web';

import { PlasmicOfferCategory, DefaultOfferCategoryProps } from './plasmic/job_run/PlasmicOfferCategory';

export interface OfferCategoryProps extends DefaultOfferCategoryProps {
  href?: string;
  target?: string;
  onClick?: (e?: any) => void | any;
}

function OfferCategory_({ href, target, onClick, ...props }: OfferCategoryProps, ref: HTMLElementRefOf<'div'>) {
  return href ? (
    <Link href={href} prefetch={false}>
      <a target={target}>
        <PlasmicOfferCategory root={{ ref }} onClick={onClick} {...props} />
      </a>
    </Link>
  ) : (
    <PlasmicOfferCategory root={{ ref }} onClick={onClick} {...props} />
  );
}

const OfferCategory = React.forwardRef(OfferCategory_);
export default OfferCategory;
