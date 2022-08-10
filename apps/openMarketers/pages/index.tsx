import * as React from 'react';
import { GetStaticProps } from 'next';

import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
const Link = dynamic(() => import('next/link'));

import Button from '../components/Button';
import Navbar from '../components/Navbar';
import LinkOm from '../components/LinkOm';
import { ICurso } from '../shared/models';
import { getCursos } from '../shared/middlewares';
import CursosGrid from '../components/CursosGrid';
const Drawer = dynamic(() => import('../components/Drawer'));
const StickyBanner = dynamic(() => import('../components/StickyBanner'));

import styles from '../styles/Navbar.module.css';
import drawerStyles from '../styles/Drawer.module.css';

import { PlasmicHomepage } from '../components/plasmic/open_marketers/PlasmicHomepage';

type LandingHomeProps = {
  cursos: ICurso[];
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: cursos } = await getCursos({});

  return {
    props: { cursos },
    revalidate: 60,
  };
};

function Homepage({ cursos }: LandingHomeProps) {
  const router = useRouter();
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);
  const [registerHref, setRegisterHref] = React.useState<string>(`${process.env.NEXT_PUBLIC_CAMPUS_URL}/register`);

  React.useEffect(() => {
    let newHref = process.env.NEXT_PUBLIC_CAMPUS_URL + '/register?';

    if (router.query?.grupo) newHref += `&grupo=${router.query?.grupo}`;
    if (router.query?.campanya) newHref += `&campanya=${router.query?.campanya}`;
    if (router.query?.palabraClave) newHref += `&palabraClave=${router.query?.palabraClave}`;

    if (router?.query?.utm_source) newHref += `&utm_source=${router?.query?.utm_source}`;
    if (router?.query?.utm_medium) newHref += `&utm_medium=${router?.query?.utm_medium}`;
    if (router?.query?.utm_campaign) newHref += `&utm_campaign=${router?.query?.utm_campaign}`;
    if (router?.query?.utm_term) newHref += `&utm_term=${router?.query?.utm_term}`;
    if (router?.query?.utm_content) newHref += `&utm_content=${router?.query?.utm_content}`;

    setRegisterHref(newHref);
  }, [router.query]);

  return (
    <div style={{ position: 'relative' }}>
      <NextSeo
        title={`${process.env.NEXT_PUBLIC_BASE_NAME}`}
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}`}
        openGraph={{
          type: 'website',
          url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
          title: `${process.env.NEXT_PUBLIC_BASE_NAME}`,
        }}
      />

      <PlasmicHomepage
        navbar={
          <Navbar
            showLoginButton
            className={styles.navbar_container}
            openDrawer={() => setOpenDrawer(true)}
            linksList={[
              { href: '/#como-funciona', title: '¿Cómo funciona?', isLink: true },
              { href: '/#modulos', title: 'Nuestros Módulos', isLink: true },
              { href: '/#empleo', title: 'Consigue empleo', isLink: true },
            ]}
          />
        }
        heroButton={
          <Button data-cy="heroButton" className="cta_estudiantes_2" color="gradient" size="large" href={registerHref}>
            Empieza ya
          </Button>
        }
        eventButton={
          <Button data-cy="eventButton" className="cta_estudiantes_3" color="white" size="normal" href={registerHref}>
            Empieza ya
          </Button>
        }
        courseList={<CursosGrid cursos={cursos} />}
      />

      <StickyBanner
        bannerButton={
          <Button data-cy="bannerButton" className="cta_estudiantes_4" color="white" size="large" href={registerHref}>
            Empieza ya
          </Button>
        }
      />

      <Drawer
        className={
          drawerStyles.drawer_container +
          ' ' +
          (openDrawer ? drawerStyles.drawer_container__show : drawerStyles.drawer_container__hidden)
        }
        links={[
          { href: '/#como-funciona', title: '¿Cómo funciona?', isLink: true },
          { href: '/#modulos', title: 'Nuestros Módulos', isLink: true },
          { href: '/#empleo', title: 'Consigue empleo', isLink: true },
        ]?.map((link, index) => (
          <Link key={`navbar-link-${index}`} href={link.href} passHref>
            {link.isLink ? (
              <LinkOm href={link.href} onClick={() => setOpenDrawer(false)}>
                {link.title}
              </LinkOm>
            ) : (
              <Button color="navLink" size="small" onClick={() => setOpenDrawer(false)}>
                {link.title}
              </Button>
            )}
          </Link>
        ))}
        drawerButton={<Button drawer="close" data-cy="close_drawer" onClick={() => setOpenDrawer(false)} />}
        buttons={
          <div style={{ width: '100%', display: 'flex', columnGap: '20px' }}>
            <Button
              data-cy="cta_campus__drawer"
              color="blue"
              size="small"
              className={'cta_login ' + drawerStyles.w100}
              href={`${process.env.NEXT_PUBLIC_CAMPUS_URL}/login`}
            >
              Ir al campus
            </Button>

            <Button
              data-cy="cta_drawer"
              size="small"
              color="gradient"
              className={'cta_estudiantes ' + drawerStyles.w100}
              href={registerHref}
            >
              Empieza ya
            </Button>
          </div>
        }
      />
    </div>
  );
}

export default Homepage;
