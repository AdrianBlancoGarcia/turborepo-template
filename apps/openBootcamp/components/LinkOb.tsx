import * as React from 'react';
import Link from 'next/link';

import { PlasmicLinkOb, DefaultLinkObProps } from './plasmic/open_bootcamp_v_2_0/PlasmicLinkOb';
import { ButtonRef, HtmlAnchorOnlyProps, HtmlButtonOnlyProps } from '@plasmicapp/react-web';

interface LinkObProps extends DefaultLinkObProps {
  href?: string;
}

function LinkOb_({ href, ...props }: LinkObProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicLinkOb.useBehavior<LinkObProps>(props, ref);

  return href ? (
    <Link href={href} passHref>
      <PlasmicLinkOb {...plasmicProps} />
    </Link>
  ) : (
    <PlasmicLinkOb {...plasmicProps} />
  );
}

type ButtonComponentType = {
  (props: Omit<LinkObProps, HtmlAnchorOnlyProps> & { ref?: React.Ref<HTMLButtonElement> }): React.ReactElement;
  (props: Omit<LinkObProps, HtmlButtonOnlyProps> & { ref?: React.Ref<HTMLAnchorElement> }): React.ReactElement;
};

const LinkOb = React.forwardRef(LinkOb_) as any as ButtonComponentType;

export default Object.assign(LinkOb, {
  __plumeType: 'a',
});
