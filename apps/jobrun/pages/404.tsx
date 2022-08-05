import { useState, useEffect } from 'react';

import Footer from '../components/Footer';
import NavbarHome from '../components/custom/NavbarHome';
import DrawerNavbar from '../components/custom/Drawer/DrawerNavbar';

import Vector6Icon from '../components/plasmic/job_run/icons/PlasmicIcon__Vector6';
import Vector7Icon from '../components/plasmic/job_run/icons/PlasmicIcon__Vector7';
import Vector8Icon from '../components/plasmic/job_run/icons/PlasmicIcon__Vector8';

import { getFooterLinks } from '../shared/utils';

import { Plasmic_404 } from '../components/plasmic/job_run/Plasmic_404';

import Button from '../components/Button';

function _404() {
  const [isMobile, setIsMobile] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    const detectResizing = () => {
      if (window.innerWidth <= 768) setIsMobile(true);
      else setIsMobile(false);
    };

    window.addEventListener('resize', detectResizing);

    detectResizing();

    return () => {
      window.removeEventListener('resize', detectResizing);
    };
  }, []);

  return (
    <>
        <Plasmic_404
          navbar={<NavbarHome page="detail" setOpenDrawer={setOpenDrawer} />}
          ctaOfertas={
            <Button
              color="gradientRound2"
              size={isMobile ? 'strech' : 'medium'}
              label="Ver todas las ofertas"
              href="/ofertas"
            />
          }
          ctaConoceMas={
            <Button color="gradientStroke" size={isMobile ? 'strech' : 'medium'} label="Conoce más sobre JobRun" href="/" />
          }
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

export default _404;
