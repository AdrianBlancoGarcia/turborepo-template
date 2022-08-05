import * as React from 'react';
import Link from 'next/link';

import { HTMLElementRefOf } from '@plasmicapp/react-web';

import { PlasmicCompanyCard, DefaultCompanyCardProps } from './plasmic/job_run/PlasmicCompanyCard';

export interface CompanyCardProps extends DefaultCompanyCardProps {
  href?: string;
  target?: string;
  onClick?: (e?: any) => void | any;
}

function CompanyCard_({ href, target, onClick, ...props }: CompanyCardProps, ref: HTMLElementRefOf<'div'>) {
  return href ? (
    <Link href={href} prefetch={false}>
      <a target={target}>
        <PlasmicCompanyCard root={{ ref }} onClick={onClick} {...props} />
      </a>
    </Link>
  ) : (
    <PlasmicCompanyCard root={{ ref }} onClick={onClick} {...props} />
  );
}

const CompanyCard = React.forwardRef(CompanyCard_);
export default CompanyCard;
