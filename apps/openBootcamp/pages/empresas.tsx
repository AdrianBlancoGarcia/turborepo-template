import * as React from 'react';

import Link from 'next/link';
import { GetStaticProps } from 'next/types';
import { BreadcrumbJsonLd, NextSeo } from 'next-seo';

import Navbar from '../components/Navbar';
import Button from '../components/Button';
const Drawer = dynamic(() => import('../components/Drawer'));
import Breadcrumb from '../components/Breadcrumb';
import BreadcrumbItem from '../components/BreadcrumbItem';

import { PlasmicEmpresas } from '../components/plasmic/open_bootcamp_v_2_0/PlasmicEmpresas';

import styles from '../styles/Drawer.module.css';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

type LandingEmpresasProps = {
  linksList: [{ title: string; href: string; isLink: boolean }];
};

export const getStaticProps: GetStaticProps = async () => {
  const linksList = [
    { title: '¿Qué nos hace diferentes?', href: '/empresas#caracteristicas', isLink: true },
    { title: 'Validamos conocimientos', href: '/empresas#certificado', isLink: true },
    { title: 'Software propio de formación', href: '/empresas#plataforma', isLink: true },
  ];

  return {
    props: { linksList },
    revalidate: 60,
  };
};

function Empresas({ linksList }: LandingEmpresasProps) {
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
        title={`${process.env.NEXT_PUBLIC_BASE_NAME} | Empresas`}
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/empresas`}
        description="Encuentra tu próxima plantilla de desarrolladores ahora."
        openGraph={{
          type: 'website',
          description: `Encuentra tu próxima plantilla de desarrolladores ahora.`,
          title: `${process.env.NEXT_PUBLIC_BASE_NAME} | Empresas`,
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/empresas`,
        }}
      />

      <div style={{ position: 'relative' }}>
        <PlasmicEmpresas
          breadcrumb={
            <Breadcrumb
              breadcrumbItems={
                <>
                  <BreadcrumbItem breadcrumbParent={<Link href="/">OpenBootcamp</Link>} />
                  <BreadcrumbItem breadcrumbChild={<div>Empresas</div>} child="child" />
                </>
              }
            />
          }
          navbar={
            <Navbar
              cta={{
                title: 'Contrata talento',
                className: 'cta_empresas',
                href: process.env.NEXT_PUBLIC_TYPEFORM_EMPRESAS || '',
              }}
              linksList={linksList}
              className={styles.navbar_container}
              openDrawer={() => setOpenDrawer(!openDrawer)}
            />
          }
          heroButton={
            <Button
              data-cy="cta_hero"
              color="darkGray"
              className="cta_empresas"
              href={process.env.NEXT_PUBLIC_TYPEFORM_EMPRESAS}
            >
              Contrata talento
            </Button>
          }
          clientsButton={
            <Button
              data-cy="cta_clients"
              color="blue"
              className="cta_empresas"
              href={process.env.NEXT_PUBLIC_TYPEFORM_EMPRESAS}
            >
              Contrata desarrolladores
            </Button>
          }
          featuresButton={
            <Button
              data-cy="cta_features"
              color="blue"
              className="cta_empresas"
              href={process.env.NEXT_PUBLIC_TYPEFORM_EMPRESAS}
            >
              Contrata desarrolladores
            </Button>
          }
          platformButton={
            <Button
              data-cy="cta_platform"
              color="white"
              className="cta_empresas"
              href={process.env.NEXT_PUBLIC_TYPEFORM_EMPRESAS}
            >
              Contrata desarrolladores
            </Button>
          }
          softwareButton={
            <Button
              data-cy="cta_software"
              color="darkGray"
              className="cta_empresas"
              href={process.env.NEXT_PUBLIC_TYPEFORM_EMPRESAS}
            >
              Contrata desarrolladores
            </Button>
          }
          contactButton={
            <Button
              data-cy="cta_nosotros"
              color="blue"
              className="cta_empresas"
              href={process.env.NEXT_PUBLIC_TYPEFORM_EMPRESAS}
            >
              Contacta con nosotros
            </Button>
          }
        />

        <Drawer
          className={
            styles.drawer_container + ' ' + (openDrawer ? styles.drawer_container__show : styles.drawer_container__hidden)
          }
          links={[]}
          drawerButton={<Button drawer="close" data-cy="close_drawer" onClick={() => setOpenDrawer(false)} />}
          buttons={
            <div style={{ width: '100%', display: 'flex', columnGap: '20px' }}>
              <Button
                data-cy="cta_drawer"
                size="small"
                color="gradient"
                className={'cta_empresas ' + styles.w100}
                href={process.env.NEXT_PUBLIC_TYPEFORM_EMPRESAS}
              >
                Contrata talento
              </Button>
            </div>
          }
        />
      </div>

      <BreadcrumbJsonLd
        itemListElements={[
          { position: 1, name: 'OpenBootcamp', item: process.env.NEXT_PUBLIC_BASE_URL },
          { position: 2, name: 'Empresas', item: `${process.env.NEXT_PUBLIC_BASE_URL}/empresas` },
        ]}
      />
    </>
  );
}

export default Empresas;
