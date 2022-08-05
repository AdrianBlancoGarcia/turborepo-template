import React from 'react';
import { getFooterLinks } from '../../shared/utils';
import Footer from '../Footer';
import Vector6Icon from '../plasmic/job_run/icons/PlasmicIcon__Vector6';
import Vector7Icon from '../plasmic/job_run/icons/PlasmicIcon__Vector7';
import Vector8Icon from '../plasmic/job_run/icons/PlasmicIcon__Vector8';

function FooterCustom() {
  return (
    <Footer
      linksRrss={getFooterLinks([
        {
          dataCy: 'cta_linkedin',
          isButton: true,
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/company/jobrundev',
          startIcon: <Vector6Icon width="16px" height="16px" color="black" />,
        },
        {
          dataCy: 'cta_twitter',
          isButton: true,
          label: 'Twitter',
          href: 'https://twitter.com/JobRun_Dev',
          startIcon: <Vector7Icon width="16px" height="16px" color="black" />,
        },
        {
          dataCy: 'cta_instagram',
          isButton: true,
          label: 'Instagram',
          href: 'https://www.instagram.com/jobrundev/',
          startIcon: <Vector8Icon width="16px" height="16px" color="black" />,
        },
      ])}
      linksPoliticas={getFooterLinks([
        { label: 'Política de cookies', href: '/politica-de-cookies', dataCy: 'cta_cookies' },
        { label: 'Política de privacidad', href: '/politica-de-privacidad', dataCy: 'cta_privacidad' },
        { label: 'Términos y condiciones', href: '/terminos-y-condiciones', dataCy: 'cta_terminos' },
      ])}
      linksInteres={getFooterLinks([
        { label: 'Empresas', href: '/empresas', dataCy: 'cta_empresas_footer' },
        { isButton: true, label: 'Campus virtual', href: 'https://campus.open-bootcamp.com', dataCy: 'cta_campus_footer' },
      ])}
    />
  );
}

export default FooterCustom;
