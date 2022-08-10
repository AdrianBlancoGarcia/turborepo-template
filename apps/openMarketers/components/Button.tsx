import * as React from 'react';

import { PlasmicButton, DefaultButtonProps } from './plasmic/open_marketers/PlasmicButton';
import { ButtonRef, HtmlAnchorOnlyProps, HtmlButtonOnlyProps } from '@plasmicapp/react-web';
import { useRouter } from 'next/router';

interface ButtonProps extends DefaultButtonProps {
  href?: string;
}

function Button_({ href, ...props }: ButtonProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButton.useBehavior<ButtonProps>(props, ref);
  const router = useRouter()

  return href ? (
    <div onClick={() => router.push(href)}>
      <PlasmicButton {...plasmicProps} />
    </div>
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