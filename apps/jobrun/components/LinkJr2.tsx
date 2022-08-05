import * as React from 'react';
import Link from 'next/link';

import { PlasmicLinkJr2, DefaultLinkJr2Props } from './plasmic/job_run/PlasmicLinkJr2';
import { ButtonRef, HtmlAnchorOnlyProps, HtmlButtonOnlyProps } from '@plasmicapp/react-web';

interface LinkJr2Props extends DefaultLinkJr2Props {
  href?: string;
  target?: string;
  isButton?: boolean;
  onClick?: (e?: any) => void;
}

function LinkJr2_({ isButton, href, target, onClick, ...props }: LinkJr2Props, ref: ButtonRef) {
  const { plasmicProps } = PlasmicLinkJr2.useBehavior<LinkJr2Props>(props, ref);

  return !isButton && href ? (
    <Link href={href} prefetch={false}>
      <a target={target}>
        <PlasmicLinkJr2 {...plasmicProps} />
      </a>
    </Link>
  ) : (
    <PlasmicLinkJr2 onClick={onClick} {...plasmicProps} />
  );
}

type ButtonComponentType = {
  (props: Omit<LinkJr2Props, HtmlAnchorOnlyProps> & { ref?: React.Ref<HTMLButtonElement> }): React.ReactElement;
  (props: Omit<LinkJr2Props, HtmlButtonOnlyProps> & { ref?: React.Ref<HTMLAnchorElement> }): React.ReactElement;
};

const LinkJr2 = React.forwardRef(LinkJr2_) as any as ButtonComponentType;

export default Object.assign(LinkJr2, {
  __plumeType: 'button',
});
