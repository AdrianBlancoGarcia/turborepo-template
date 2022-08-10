import * as React from 'react';
import { PlasmicLogo, DefaultLogoProps } from './plasmic/open_marketers/PlasmicLogo';
import { HTMLElementRefOf } from '@plasmicapp/react-web';

export interface LogoProps extends DefaultLogoProps {}

function Logo_(props: LogoProps, ref: HTMLElementRefOf<'a'>) {
  return <PlasmicLogo root={{ ref }} {...props} />;
}

const Logo = React.forwardRef(Logo_);
export default Logo;
