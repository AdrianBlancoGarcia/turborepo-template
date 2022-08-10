import { useEffect, useState } from 'react';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next/types';
import { BreadcrumbJsonLd, NextSeo } from 'next-seo';

import { IFaq } from '../shared/models';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import { getFaqs } from '../shared/middlewares';
import Breadcrumb from '../components/Breadcrumb';
import BreadcrumbItem from '../components/BreadcrumbItem';
const Drawer = dynamic(() => import('../components/Drawer'));
import RoadmapSection, { RoadmapTabsEnum } from '../components/RoadmapSection';

const Image = dynamic(() => import('next/image'));
const Faq = dynamic(() => import('../components/Faq'));
const ProfileImage = dynamic(() => import('../components/ProfileImage'));
const CourseLandingFaq = dynamic(() => import('../components/CourseLandingFaq'));
const TestimonialsTexts = dynamic(() => import('../components/TestimonialsTexts'));

import { PlasmicLandingFrontend } from '../components/plasmic/open_bootcamp_v_2_0/PlasmicLandingFrontend';

import testimonialPhotos from '../public/testimonialPhotos.json';

import drawerStyles from '../styles/Drawer.module.css';
import animationStyles from '../styles/animationTestimonial.module.css';
import { StaticImageData } from 'next/image';

type LandingFrontendProps = {
  faqs: IFaq[];
  testimonials: [{ variants: 'anaFernandez' | 'ignacioDeBats' | 'mariaBeatrizVivanco'; photo: StaticImageData }];
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: faqs } = await getFaqs({});

  const testimonials = [
    { variants: testimonialPhotos.anaFernandez.variants, photo: testimonialPhotos.anaFernandez.photo },
    { variants: testimonialPhotos.ignacioDeBats.variants, photo: testimonialPhotos.ignacioDeBats.photo },
    { variants: testimonialPhotos.mariaBeatrizVivanco.variants, photo: testimonialPhotos.mariaBeatrizVivanco.photo },
  ];

  return {
    props: { faqs, testimonials },
    revalidate: 60,
  };
};

function LandingFrontend({ faqs, testimonials }: LandingFrontendProps) {
  const router = useRouter();

  const [testInterval, setTestInterval] = useState<NodeJS.Timer>();
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [mount, setMount] = useState<'mount' | 'unmount'>('mount');
  const [registerHref, setRegisterHref] = useState<string>(`${process.env.NEXT_PUBLIC_CAMPUS_URL}/register`);

  const keyword = 'Curso de Front-End';

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
   * Método para cambiar de testimonial cada 9 segundos
   * @param index
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
   * Método para cambiar de testimonial si se hace click en los avatares.
   * @param index
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
        title={'Empieza nuestro Curso de Front-End y encuentra Trabajo ¡GRATIS!'}
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/front-end`}
        description="Empieza ya nuestro Curso de Front-End, convértete en un gran developer ¡y consigue un gran empleo!"
        openGraph={{
          type: 'website',
          description: 'Empieza ya nuestro Curso de Front-End, convértete en un gran developer ¡y consigue un gran empleo!',
          title: `Empieza nuestro Curso de Front-End y encuentra Trabajo ¡GRATIS!`,
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/front-end`,
        }}
      />

      <div style={{ position: 'relative' }}>
        <PlasmicLandingFrontend
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
              <TestimonialsTexts user={testimonials[testimonialIndex].variants} />
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
                      question={(faq.pregunta || '').replace('%keyword%', keyword)}
                      answer={(faq.respuesta || '').replace('%keyword%', keyword)}
                    />
                  ))}
                </div>
              }
            />
          }
          roadmap={<RoadmapSection origen={RoadmapTabsEnum.Frontend} />}
          navbar={<Navbar className={drawerStyles.navbar_container} openDrawer={() => setOpenDrawer(!openDrawer)} />}
          breadcrumb={
            <Breadcrumb
              breadcrumbItems={
                <>
                  <BreadcrumbItem breadcrumbParent={<Link href="/">OpenBootcamp</Link>} />
                  <BreadcrumbItem breadcrumbChild={<div>Curso Frontend gratis</div>} child="child" />
                </>
              }
            />
          }
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
          { position: 2, name: 'Curso Frontend Gratis', item: `${process.env.NEXT_PUBLIC_BASE_URL}/front-end` },
        ]}
      />
    </>
  );
}

export default LandingFrontend;
