import { useState, useEffect } from 'react';

import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next/types';
const Link = dynamic(() => import('next/link'));
const Image = dynamic(() => import('next/image'));

import Navbar from '../components/Navbar';
import { checkIfIsAdwords } from '../shared/utils';
const OBLink = dynamic(() => import('../components/LinkOb'));
const Button = dynamic(() => import('../components/Button'));
const Drawer = dynamic(() => import('../components/Drawer'));
const RoadmapGridOp = dynamic(() => import('../components/RoadmapGridOp'));
const RoadmapTabsOp = dynamic(() => import('../components/RoadmapTabsOp'));
const TestimonialItem = dynamic(() => import('../components/TestimonialItem'));

import testimonialPhotos from '../public/testimonialPhotos.json';

import { PlasmicHomepage } from '../components/plasmic/open_bootcamp_v_2_0/PlasmicHomepage';

import styles from '../styles/Drawer.module.css';
import testAbStyles from '../styles/TestAB.module.css';
import Head from 'next/head';
import { StaticImageData } from 'next/image';

type LandingIndexProps = {
  testimonials: [{ variants: 'anaFernandez' | 'ignacioDeBats' | 'mariaBeatrizVivanco'; photo: StaticImageData }];
  linksList_Adwords: [{ title: string; href: string; isLink: boolean }];
  linksList_Organic: [{ title: string; href: string; isLink: boolean }];
};

export const getStaticProps: GetStaticProps = async () => {
  const linksList_Organic = [
    { title: 'Consigue trabajo', href: '/#trabajo', isLink: true },
    { title: 'Opiniones', href: '/#opiniones', isLink: true },
    { title: 'Especializaciones', href: '/#especializaciones', isLink: true },
    { title: '¿Eres una empresa?', href: '/empresas', isLink: true },
  ];

  const linksList_Adwords = [
    { title: 'Consigue trabajo', href: '/#trabajo', isLink: true },
    { title: 'Opiniones', href: '/#opiniones', isLink: true },
    { title: 'Especializaciones', href: '/#especializaciones', isLink: true },
  ];

  return {
    props: { linksList_Adwords, linksList_Organic },
    revalidate: 60,
  };
};

function Homepage({ linksList_Adwords, linksList_Organic }: LandingIndexProps) {
  const router = useRouter();

  const [isAdwords, setIsAdwords] = useState(checkIfIsAdwords(router.query));
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [registerHref, setRegisterHref] = useState<string>(`${process.env.NEXT_PUBLIC_CAMPUS_URL}/register`);

  useEffect(() => {
    setIsAdwords(checkIfIsAdwords(router.query));

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
        title={`Open Bootcamp | Aprende y Encuentra empleo GRATIS`}
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}`}
        description="Fórmate gratis como Desarrollador FullStack, BackEnd o FrontEnd y encuentra trabajo. Sin compromiso y a tu ritmo."
        openGraph={{
          type: 'website',
          description: `Fórmate gratis como Desarrollador FullStack, BackEnd o FrontEnd y encuentra trabajo. Sin compromiso y a tu ritmo.`,
          title: `Open Bootcamp | Aprende y Encuentra empleo GRATIS`,
          url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@Open_Bootcamp',
        }}
      />

      <div style={{ position: 'relative' }}>
        <PlasmicHomepage
          empresas={isAdwords ? <></> : undefined}
          roadmapTestAb={<RoadmapGridOp id="especializaciones" className={isAdwords ? testAbStyles.display_none : ''} />}
          button5={
            <Button data-cy="cta_button5" color="blue" className="cta_estudiantes" href={registerHref}>
              Empieza ya
            </Button>
          }
          communityButton={
            <Button data-cy="cta_comunity" color="blue" className="cta_estudiantes" href={registerHref}>
              Empieza ya
            </Button>
          }
          platformButton={
            <Button data-cy="cta_platform" color="white" className="cta_estudiantes" href={registerHref}>
              Empieza ya
            </Button>
          }
          trainersButton={
            <Button data-cy="cta_trainers" color="blue" className="cta_estudiantes" href={registerHref}>
              Empieza ya
            </Button>
          }
          offersButton={
            <Button data-cy="cta_offers" color="blue" className="cta_estudiantes" href={registerHref}>
              Empieza ya
            </Button>
          }
          heroButton={
            <Button data-cy="cta_hero" color="darkGray" className="cta_estudiantes" href={registerHref}>
              Empieza ya
            </Button>
          }
          empresasButton={
            <Button data-cy="cta_empresas" color="white" className="cta_empresas" href="/empresas">
              Contrata desarrolladores
            </Button>
          }
          testimonialsBox={
            <>
              <TestimonialItem
                title="María Beatriz Vivanco"
                description={`"Gracias a OpenBootcamp en 4 meses pude actualizarme y conocer nuevas tecnologías con las que conseguí un trabajo como FullStack en el que estoy muy contenta".`}
                userImage={
                  <Image
                    priority={false}
                    loading="lazy"
                    layout="fill"
                    alt="Beatríz"
                    src={testimonialPhotos.mariaBeatrizVivanco.photo}
                  />
                }
                videoSlot={
                  <div style={{ position: 'relative', width: '100%', height: 0, paddingBottom: '52%' }}>
                    <iframe
                      src="https://embed.testimonial.to/v/c91309a7-d866-4649-9f89-0eb087f2641c"
                      width="100%"
                      height="100%"
                      style={{ position: 'absolute', top: 0, left: 0, overflow: 'hidden' }}
                      allowFullScreen
                      frameBorder="0"
                      scrolling="no"
                      title="Video-opinión de la primera edición"
                      loading="lazy"
                    />
                  </div>
                }
              />

              <TestimonialItem
                title="Ana Fernández"
                description={`"Vengo de la rama del diseño gráfico y he estado estudiando en OpenBootcamp 2-3 meses y gracias a esta formación, estoy trabajando de desarrolladora web en una empresa".`}
                userImage={
                  <Image priority={false} loading="lazy" layout="fill" alt="Ana" src={testimonialPhotos.anaFernandez.photo} />
                }
                videoSlot={
                  <div style={{ position: 'relative', width: '100%', height: 0, paddingBottom: '52%' }}>
                    <iframe
                      src="https://embed.testimonial.to/v/040f4ec1-4e2f-4528-92dd-f2950fff7ce4"
                      width="100%"
                      height="100%"
                      style={{ position: 'absolute', top: 0, left: 0, overflow: 'hidden' }}
                      allowFullScreen
                      frameBorder="0"
                      scrolling="no"
                      title="Video-opinión de la primera edición"
                      loading="lazy"
                    />
                  </div>
                }
              />

              <TestimonialItem
                title="Ignacio de Bats"
                description={`"Entré a principios de Octubre cuando empezó OB y el 10 de Enero ya estaba firmando el contrato como programador".`}
                userImage={
                  <Image
                    priority={false}
                    loading="lazy"
                    layout="fill"
                    alt="Ignacio"
                    src={testimonialPhotos.ignacioDeBats.photo}
                  />
                }
                videoSlot={
                  <div style={{ position: 'relative', width: '100%', height: 0, paddingBottom: '52%' }}>
                    <iframe
                      src="https://embed.testimonial.to/v/1765bea0-7d4b-4f3b-9f6e-62cc5329a7fd"
                      width="100%"
                      height="100%"
                      style={{ position: 'absolute', top: 0, left: 0, overflow: 'hidden' }}
                      allowFullScreen
                      frameBorder="0"
                      scrolling="no"
                      title="Video-opinión de la primera edición"
                      loading="lazy"
                    />
                  </div>
                }
              />
            </>
          }
          navbar={
            <Navbar
              showLoginButton
              className={styles.navbar_container}
              openDrawer={() => setOpenDrawer(!openDrawer)}
              linksList={isAdwords ? linksList_Adwords : linksList_Organic}
            />
          }
        />

        <Drawer
          className={
            styles.drawer_container + ' ' + (openDrawer ? styles.drawer_container__show : styles.drawer_container__hidden)
          }
          links={(isAdwords ? linksList_Adwords : linksList_Organic)?.map((link, index) => (
            <Link key={`navbar-link-${index}`} href={link.href} passHref>
              {link.isLink ? (
                <OBLink href={link.href}>{link.title}</OBLink>
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
                className={'cta_login ' + styles.w100}
                href={`${process.env.NEXT_PUBLIC_CAMPUS_URL}/login`}
              >
                Ir al campus
              </Button>

              <Button
                data-cy="cta_drawer"
                size="small"
                color="gradient"
                className={'cta_estudiantes ' + styles.w100}
                href={registerHref}
              >
                Empieza ya
              </Button>
            </div>
          }
        />
      </div>
    </>
  );
}

export default Homepage;
