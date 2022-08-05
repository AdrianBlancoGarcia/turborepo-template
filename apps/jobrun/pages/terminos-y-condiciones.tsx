import * as React from 'react';
import { NextSeo } from 'next-seo';

import Footer from '../components/Footer';
import NavbarHome from '../components/custom/NavbarHome';
import DrawerNavbar from '../components/custom/Drawer/DrawerNavbar';

import { getFooterLinks } from '../shared/utils';

import Vector6Icon from '../components/plasmic/job_run/icons/PlasmicIcon__Vector6';
import Vector7Icon from '../components/plasmic/job_run/icons/PlasmicIcon__Vector7';
import Vector8Icon from '../components/plasmic/job_run/icons/PlasmicIcon__Vector8';


import { PlasmicTerminosYCondiciones } from '../components/plasmic/job_run/PlasmicTerminosYCondiciones';

function TerminosYCondiciones() {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  return (
    <>
      <NextSeo
        noindex
        title="Términos y condiciones | JobRun"
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/terminos-y-condiciones`}
        description=""
        openGraph={{
          type: 'website',
          description: '',
          title: 'Términos y condiciones | JobRun',
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/terminos-y-condiciones`,
        }}
      />
        <PlasmicTerminosYCondiciones
          navbar={<NavbarHome setOpenDrawer={setOpenDrawer} />}
          footer={
            <Footer
              linksRrss={getFooterLinks([
                {
                  isButton: true,
                  label: 'LinkedIn',
                  href: 'https://www.linkedin.com/company/jobrundev',
                  startIcon: <Vector6Icon width="16px" height="16px" color="black" />,
                },
                {
                  isButton: true,
                  label: 'Twitter',
                  href: 'https://twitter.com/JobRun_Dev',
                  startIcon: <Vector7Icon width="16px" height="16px" color="black" />,
                },
                {
                  isButton: true,
                  label: 'Instagram',
                  href: 'https://www.instagram.com/jobrundev/',
                  startIcon: <Vector8Icon width="16px" height="16px" color="black" />,
                },
              ])}
              linksPoliticas={getFooterLinks([
                { isButton: true, label: 'Política de cookies', href: '/politica-de-cookies' },
                { isButton: true, label: 'Política de privacidad', href: '/politica-de-privacidad' },
                { isButton: true, label: 'Términos y condiciones', href: '/terminos-y-condiciones' },
              ])}
              linksInteres={getFooterLinks([
                { label: 'Empresas', href: '/empresas' },
                { isButton: true, label: 'Campus virtual', href: 'https://campus.open-bootcamp.com' },
              ])}
            />
          }
        />

      <DrawerNavbar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </>
  );
}

export default TerminosYCondiciones;
