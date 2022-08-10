import * as React from 'react';
import Link from 'next/link';

import { PlasmicButton, DefaultButtonProps } from './plasmic/open_bootcamp_v_2_0/PlasmicButton';
import { ButtonRef, HtmlAnchorOnlyProps, HtmlButtonOnlyProps } from '@plasmicapp/react-web';

interface ButtonProps extends DefaultButtonProps {
  href?: string;
}

function Button_({ href, ...props }: ButtonProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButton.useBehavior<ButtonProps>(props, ref);

  return href ? (
    <Link href={href} passHref>
      <PlasmicButton {...plasmicProps} />
    </Link>
  ) : (
    <PlasmicButton {...plasmicProps} />
  );
}

type ButtonComponentType = {
  (props: Omit<ButtonProps, HtmlAnchorOnlyProps> & { ref?: React.Ref<HTMLButtonElement> }): React.ReactElement;
  (props: Omit<ButtonProps, HtmlButtonOnlyProps> & { ref?: React.Ref<HTMLAnchorElement> }): React.ReactElement;
};

const Button = React.forwardRef(Button_) as any as ButtonComponentType;

export default Object.assign(Button, {
  __plumeType: 'button',
});
