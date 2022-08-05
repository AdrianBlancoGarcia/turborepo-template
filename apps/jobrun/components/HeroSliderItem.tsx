import * as React from 'react';
import Link from 'next/link';

import { PlasmicHeroSliderItem, DefaultHeroSliderItemProps } from './plasmic/job_run/PlasmicHeroSliderItem';
import { HTMLElementRefOf } from '@plasmicapp/react-web';

export interface HeroSliderItemProps extends DefaultHeroSliderItemProps {
  href?: string;
  target?: string;
  onClick?: (e?: any) => void | any;
}

function HeroSliderItem_({ href, target, onClick, ...props }: HeroSliderItemProps, ref: HTMLElementRefOf<'div'>) {
  return href ? (
    <Link href={href} prefetch={false}>
      <a target={target}>
        <PlasmicHeroSliderItem root={{ ref }} onClick={onClick} {...props} />
      </a>
    </Link>
  ) : (
    <PlasmicHeroSliderItem root={{ ref }} onClick={onClick} {...props} />
  );
}

const HeroSliderItem = React.forwardRef(HeroSliderItem_);
export default HeroSliderItem;
