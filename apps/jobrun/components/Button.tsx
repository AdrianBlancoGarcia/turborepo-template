import * as React from 'react';
import Link from 'next/link';

import { PlasmicButton, DefaultButtonProps } from './plasmic/job_run/PlasmicButton';
import { HTMLElementRefOf } from '@plasmicapp/react-web';

export interface ButtonProps extends DefaultButtonProps {
  href?: string;
  target?: string;
  onClick?: (e?: any) => void | any;
}

function Button_({ href, target, onClick, ...props }: ButtonProps, ref: HTMLElementRefOf<'button'>) {
  return href ? (
    <Link href={href} prefetch={false}>
      <a target={target} style={{ width: props.size === 'strech' ? '100%' : 'unset' }}>
        <PlasmicButton root={{ ref }} onClick={onClick} {...props} />
      </a>
    </Link>
  ) : (
    <PlasmicButton root={{ ref }} onClick={onClick} {...props} />
  );
}

const Button = React.forwardRef(Button_);
export default Button;
