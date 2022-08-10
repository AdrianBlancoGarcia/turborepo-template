import * as React from 'react';

import { useRouter } from 'next/router';

import Button from './Button';
import { HTMLElementRefOf } from '@plasmicapp/react-web';
import { PlasmicFooter, DefaultFooterProps } from './plasmic/open_bootcamp_v_2_0/PlasmicFooter';

export interface FooterProps extends DefaultFooterProps {}

function Footer_(props: FooterProps, ref: HTMLElementRefOf<'div'>) {
  const router = useRouter();

  return (
    <PlasmicFooter
      root={{ ref }}
      {...props}
      linksExplora={
        <Button size="linkOnly" onClick={() => window.location.assign(process.env.NEXT_PUBLIC_CAMPUS_URL + '/login')}>
          Acceso al campus
        </Button>
      }
      linksPoliticas={
        <>
          <Button size="linkOnly" onClick={() => router.push('/politica-cookies')}>
            Política de cookies
          </Button>

          <Button size="linkOnly" onClick={() => router.push('/politica-privacidad')}>
            Política de privacidad
          </Button>

          <Button size="linkOnly" onClick={() => router.push('/terminos-condiciones')}>
            Términos y condiciones
          </Button>
        </>
      }
    />
  );
}

const Footer = React.forwardRef(Footer_);
export default Footer;
