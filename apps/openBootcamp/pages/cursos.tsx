import { useEffect, useState } from 'react';

const Link = dynamic(() => import('next/link'));
import dynamic from 'next/dynamic';
import { GetStaticProps } from 'next/types';
import { BreadcrumbJsonLd, NextSeo } from 'next-seo';

const Image = dynamic(() => import('next/image'));
const Faq = dynamic(() => import('../components/Faq'));
const ProfileImage = dynamic(() => import('../components/ProfileImage'));
const CourseLandingFaq = dynamic(() => import('../components/CourseLandingFaq'));
const TestimonialsTexts = dynamic(() => import('../components/TestimonialsTexts'));

const Drawer = dynamic(() => import('../components/Drawer'));
import Navbar from '../components/Navbar';
import Button from '../components/Button';
const CursosGrid = dynamic(() => import('../components/CursosGrid'));
import { ICurso, IFaq } from '../shared/models';
import Breadcrumb from '../components/Breadcrumb';
import BreadcrumbItem from '../components/BreadcrumbItem';
import { getCursos, getFaqs } from '../shared/middlewares';
import testimonialPhotos from '../public/testimonialPhotos.json';

import { PlasmicLandingCursos } from '../components/plasmic/open_bootcamp_v_2_0/PlasmicLandingCursos';

import drawerStyles from '../styles/Drawer.module.css';
import animationStyles from '../styles/animationTestimonial.module.css';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { StaticImageData } from 'next/image';

type LandingCursosProps = {
  faqs: IFaq[];
  cursos: ICurso[];
  testimonials: [{ variants: 'anaFernandez' | 'ignacioDeBats' | 'mariaBeatrizVivanco'; photo: StaticImageData }];
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: faqs } = await getFaqs({});
  const { data: cursos } = await getCursos({});

  const testimonials = [
    { variants: testimonialPhotos.anaFernandez.variants, photo: testimonialPhotos.anaFernandez.photo },
    { variants: testimonialPhotos.ignacioDeBats.variants, photo: testimonialPhotos.ignacioDeBats.photo },
    { variants: testimonialPhotos.mariaBeatrizVivanco.variants, photo: testimonialPhotos.mariaBeatrizVivanco.photo },
  ];

  return {
    props: { faqs, cursos, testimonials },
    revalidate: 60,
  };
};

function LandingCursos({ faqs, cursos, testimonials }: LandingCursosProps) {
  const router = useRouter();

  const [testInterval, setTestInterval] = useState<NodeJS.Timer>();
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [mount, setMount] = useState<'mount' | 'unmount'>('mount');
  const [registerHref, setRegisterHref] = useState<string>(`${process.env.NEXT_PUBLIC_CAMPUS_URL}/register`);

  useEffect(() => {
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

  /**
   * UseEffect que ejecuta timeNext cada vez que el index del testimonial seleccionado cambia.
   */
  useEffect(() => {
    timeNext(testimonialIndex);

    return () => {
      if (testInterval) clearInterval(testInterval);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testimonialIndex]);

  /**
   * Método para cambiar de testimonial con las flechas de dirección.
   */
  const onArrowClick = (direction: 'left' | 'right') => {
    setMount('unmount');

    setTimeout(() => {
      if (direction === 'left') {
        if (testimonialIndex == 0) setTestimonialIndex(testimonials?.length - 1);
        else setTestimonialIndex(testimonialIndex - 1);
      } else {
        if (testimonialIndex === testimonials?.length - 1) setTestimonialIndex(0);
        else setTestimonialIndex(testimonialIndex + 1);
      }

      setMount('mount');
    }, 900);
  };

  /**
   * Método para cambiar de testimonio cada 9 seg
   */
  const timeNext = (index: number) => {
    if (testInterval) clearInterval(testInterval);

    let interval: NodeJS.Timer = setInterval(() => {
      setMount('unmount');

      setTimeout(() => {
        if (index == testimonials?.length - 1) setTestimonialIndex(0);
        else setTestimonialIndex(index + 1);

        setMount('mount');
      }, 900);
    }, 9000);

    setTestInterval(interval);
  };

  /**
   * Método para cambiar de testimonial con los iconos de foto
   */
  const onAvatarClick = (index: number) => {
    setMount('unmount');

    setTimeout(() => {
      setTestimonialIndex(index);

      setMount('mount');
    }, 900);
  };

  return (
    <>
      <NextSeo
        title="Cursos de Programación GRATIS"
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/cursos`}
        description="Accede ya a nuestros Cursos de programación gratuitos, convértete en un gran developer ¡y consigue un gran empleo!"
        openGraph={{
          type: 'website',
          description: `Accede ya a nuestros Cursos de programación gratuitos, convértete en un gran developer ¡y consigue un gran empleo!`,
          title: `${process.env.NEXT_PUBLIC_BASE_NAME} | Iniciación`,
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/cursos`,
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@Open_Bootcamp'
        }}
      />

      <div style={{ position: 'relative' }}>
        <PlasmicLandingCursos
          heroButton={
            <Button data-cy="cta_hero" color="darkGray" className="cta_estudiantes" href={registerHref}>
              Empieza ya
            </Button>
          }
          testimonialsText={
            <div
              className={
                mount === 'mount' ? animationStyles.divTestimonialTextMount : animationStyles.divTestimonialTextUnmount
              }
            >
              <TestimonialsTexts user={`${testimonials[testimonialIndex].variants}`} />
            </div>
          }
          testimonialsUsers={
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              {testimonials?.map((testimonial, index) => (
                <div key={`testimonial_image_${index}`} onClick={() => onAvatarClick(index)}>
                  <ProfileImage
                    userImage={
                      <Image priority={false} loading="lazy" layout="fill" alt={testimonial.variants} src={testimonial.photo} />
                    }
                    active={testimonialIndex == index}
                  />
                </div>
              ))}
            </div>
          }
          rightArrow={<Button previousNextPage="nextPage" onClick={() => onArrowClick('right')} />}
          leftArrow={<Button previousNextPage="previousPage" onClick={() => onArrowClick('left')} />}
          faq={
            <CourseLandingFaq
              title="¿Tienes dudas con OpenBootcamp?"
              subtitle="Resolvamos tus dudas"
              content={
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '40px' }}>
                  {faqs?.map((faq: IFaq, index: number) => (
                    <Faq
                      key={`faq-item-${index}`}
                      question={(faq.pregunta || '').replace('%keyword%', 'bootcamp')}
                      answer={(faq.respuesta || '').replace('%keyword%', 'bootcamp')}
                    />
                  ))}
                </div>
              }
            />
          }
          navbar={<Navbar className={drawerStyles.navbar_container} openDrawer={() => setOpenDrawer(!openDrawer)} />}
          breadcrumb={
            <Breadcrumb
              breadcrumbItems={
                <>
                  <BreadcrumbItem breadcrumbParent={<Link href="/">OpenBootcamp</Link>} />
                  <BreadcrumbItem breadcrumbChild={<div>Cursos</div>} child="child" />
                </>
              }
            />
          }
          courseList={<CursosGrid cursos={cursos} />}
        />

        <Drawer
          className={
            drawerStyles.drawer_container +
            ' ' +
            (openDrawer ? drawerStyles.drawer_container__show : drawerStyles.drawer_container__hidden)
          }
          links={[]}
          drawerButton={<Button drawer="close" data-cy="close_drawer" onClick={() => setOpenDrawer(false)} />}
          buttons={
            <Button
              data-cy="cta_drawer"
              size="small"
              color="gradient"
              href={registerHref}
              className={'cta_estudiantes ' + drawerStyles.w100}
            >
              Empieza ya
            </Button>
          }
        />
      </div>

      <BreadcrumbJsonLd
        itemListElements={[
          { position: 1, name: 'OpenBootcamp', item: process.env.NEXT_PUBLIC_BASE_URL },
          { position: 2, name: 'Cursos', item: `${process.env.NEXT_PUBLIC_BASE_URL}/cursos` },
        ]}
      />
    </>
  );
}

export default LandingCursos;
