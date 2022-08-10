import * as React from 'react';

import { useRouter } from 'next/router';
import { GetStaticProps } from 'next/types';
import { BreadcrumbJsonLd, NextSeo } from 'next-seo';

const Drawer = dynamic(() => import('../components/Drawer'));
import Navbar from '../components/Navbar';
import Button from '../components/Button';

import { PlasmicPoliticaCookies } from '../components/plasmic/open_bootcamp_v_2_0/PlasmicPoliticaCookies';

import styles from '../styles/Drawer.module.css';
import dynamic from 'next/dynamic';

type LandingPoliticaCookiesProps = {};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60,
  };
};

function PoliticaCookies({}: LandingPoliticaCookiesProps) {
  const router = useRouter();

  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);
  const [registerHref, setRegisterHref] = React.useState<string>(`${process.env.NEXT_PUBLIC_CAMPUS_URL}/register`);

  React.useEffect(() => {
    let newHref = process.env.NEXT_PUBLIC_CAMPUS_URL + '/register?';

    if (router.query?.grupo) newHref += `&grupo=${router.query?.grupo}`;
    if (router.query?.campanya) newHref += `&campanya=${router.query?.campanya}`;
    if (router.query?.palabraClave) newHref += `&palabraClave=${router.query?.palabraClave}`;

    if (router?.query?.utm_term) newHref += `&utm_term=${router?.query?.utm_term}`;
    if (router?.query?.utm_source) newHref += `&utm_source=${router?.query?.utm_source}`;
    if (router?.query?.utm_medium) newHref += `&utm_medium=${router?.query?.utm_medium}`;
    if (router?.query?.utm_content) newHref += `&utm_content=${router?.query?.utm_content}`;
    if (router?.query?.utm_campaign) newHref += `&utm_campaign=${router?.query?.utm_campaign}`;

    setRegisterHref(newHref);
  }, [router.query]);

  return (
    <>
      <NextSeo
        title={`${process.env.NEXT_PUBLIC_BASE_NAME} | Fórmate gratis como desarrollador fullstack`}
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/politica-cookies`}
        description="Fórmate como desarrollador FullStack de forma gratuita."
        openGraph={{
          type: 'website',
          description: `Fórmate como desarrollador FullStack de forma gratuita.`,
          title: `${process.env.NEXT_PUBLIC_BASE_NAME} | Fórmate gratis como desarrollador fullstack`,
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/politica-cookies`,
        }}
      />

      <div style={{ position: 'relative' }}>
        <PlasmicPoliticaCookies
          navbar={<Navbar className={styles.navbar_container} openDrawer={() => setOpenDrawer(!openDrawer)} />}
        />

        <Drawer
          className={
            styles.drawer_container + ' ' + (openDrawer ? styles.drawer_container__show : styles.drawer_container__hidden)
          }
          links={[]}
          drawerButton={<Button drawer="close" onClick={() => setOpenDrawer(false)} />}
          buttons={
            <Button
              data-cy="cta_drawer"
              size="small"
              color="gradient"
              href={registerHref}
              className={'cta_estudiantes ' + styles.w100}
            >
              Empieza ya
            </Button>
          }
        />
      </div>

      <BreadcrumbJsonLd
        itemListElements={[
          { position: 1, name: 'OpenBootcamp', item: process.env.NEXT_PUBLIC_BASE_URL },
          { position: 2, name: 'Política de cookies', item: `${process.env.NEXT_PUBLIC_BASE_URL}/politica-cookies` },
        ]}
      />
    </>
  );
}

export default PoliticaCookies;
