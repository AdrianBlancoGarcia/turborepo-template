import * as React from 'react';
import { useRouter } from 'next/router';

import Button from './Button';
import { HTMLElementRefOf } from '@plasmicapp/react-web';
import { PlasmicFooterSection, DefaultFooterSectionProps } from './plasmic/open_marketers/PlasmicFooterSection';

export interface FooterSectionProps extends DefaultFooterSectionProps {}

const links: { label: string; href: string }[] = [
  { label: 'Política de cookies', href: '/politica-cookies' },
  { label: 'Política de Privacidad', href: '/politica-privacidad' },
  { label: 'Términos y condiciones', href: '/terminos-condiciones' },
];

function FooterSection_(props: FooterSectionProps, ref: HTMLElementRefOf<'div'>) {
  const router = useRouter();

  return (
    <PlasmicFooterSection
      root={{ ref }}
      {...props}
      footerLinks={links?.map((l, i) => (
        <Button key={`footer-link-${i}`} size="small" color="navLink" onClick={() => router.push(l.href)}>
          {l.label}
        </Button>
      ))}
    />
  );
}

const FooterSection = React.forwardRef(FooterSection_);
export default FooterSection;
