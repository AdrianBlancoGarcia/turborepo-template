import * as React from 'react';
import { GetStaticProps } from 'next';

import dynamic from 'next/dynamic';
const Link = dynamic(() => import('next/link'));
const Image = dynamic(() => import('next/image'));
import { BreadcrumbJsonLd, NextSeo } from 'next-seo';


import Button from '../components/Button';
import Navbar from '../components/Navbar';
import Faq from '../components/FaqContainer';
import { ICurso, IFaq } from '../shared/models';
import CursosGrid from '../components/CursosGrid';
import Breadcrumb from '../components/Breadcrumb';
import ProfileImage from '../components/ProfileImage';
import BreadcrumbItem from '../components/BreadcrumbItem';
import { getCursos, getFaqs } from '../shared/middlewares';
import CourseLandingFaq from '../components/CourseLandingFaq';
import TestimonialsTexts from '../components/TestimonialsTexts';
const Drawer = dynamic(() => import('../components/Drawer'));
const StickyBanner = dynamic(() => import('../components/StickyBanner'));

import styles from '../styles/Navbar.module.css';
import drawerStyles from '../styles/Drawer.module.css';
import animationStyles from '../styles/animationTestimonial.module.css';

import { PlasmicLandingCursos } from '../components/plasmic/open_marketers/PlasmicLandingCursos';

type LandingCursosProps = {
  faqs: IFaq[];
  cursos: ICurso[];
  testimonials: [{ photo: string; variants: { titulo: string; testimonio: string; nombre: string } }];
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: faqs } = await getFaqs({});
  const { data: cursos } = await getCursos({});

  const testimonials = [
    {
      variants: {
        nombre: 'Martina Sobrino',
        titulo: 'Don Quijote',
        testimonio:
          'EN UN LUGAR DE LA MANCHA, DE CUYO NOMBRE NO QUIERO ACORDARME, NO HA MUCHO TIEMPO QUE VIVÍA UN HIDALGO DE LOS DE LANZA EN ASTILLERO, ADARGA ANTIGUA, ROCÍN FLACO Y GALGO CORREDOR',
      },
      photo: 'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800',
    },
    {
      variants: {
        nombre: 'Enzo Pedrosa',
        titulo: 'El murciélago',
        testimonio:
          'EL VELOZ MURCIÉLAGO HINDÚ COMÍA FELIZ CARDILLO Y KIWI. LA CIGÜEÑA TOCABA EL SAXOFÓN DETRÁS DEL PALENQUE DE PAJA',
      },
      photo:
        'https://us.123rf.com/450wm/objowl/objowl1209/objowl120900004/15031310-star-flower-imagen-abstracta-digital-con-un-dise%C3%B1o-estrella-flor-psicod%C3%A9lica-en-verde-azul-rosa-y-am.jpg',
    },
    {
      variants: {
        nombre: 'Angelica Calleja',
        titulo: 'Texto de prueba',
        testimonio: 'ESTO ES UN TEXTO DE PRUEBA. EN ÉL SE PUEDE APRECIAR SI ESTÁN TODAS LAS VOCALES Y QUÉ ASPECTO TIENEN.',
      },
      photo:
        'https://us.123rf.com/450wm/objowl/objowl1210/objowl121000002/15607246-le-big-bang-num%C3%A9rique-image-abstraite-avec-une-conception-psych%C3%A9d%C3%A9lique-exploser-en-bleu-rose-jaune-.jpg',
    },
  ];

  return {
    props: { faqs, cursos, testimonials },
    revalidate: 60,
  };
};

function LandingCursos({ faqs, cursos, testimonials }: LandingCursosProps) {
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);
  const [registerHref, setRegisterHref] = React.useState<string>(`${process.env.NEXT_PUBLIC_CAMPUS_URL}/register`);
  const [testInterval, setTestInterval] = React.useState<NodeJS.Timer>();
  const [testimonialIndex, setTestimonialIndex] = React.useState(0);
  const [mount, setMount] = React.useState<'mount' | 'unmount'>('mount');

  React.useEffect(() => {
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
    <div style={{ position: 'relative' }}>
      <NextSeo
        title={`${process.env.NEXT_PUBLIC_BASE_NAME}`}
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/cursos`}
        openGraph={{
          type: 'website',
          url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
          title: `${process.env.NEXT_PUBLIC_BASE_NAME}`,
        }}
      />

      <PlasmicLandingCursos
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
        testimonialsText={
          <div
            className={mount === 'mount' ? animationStyles.divTestimonialTextMount : animationStyles.divTestimonialTextUnmount}
          >
            <TestimonialsTexts
              titulo={`${testimonials[testimonialIndex].variants.titulo}`}
              testimonio={`${testimonials[testimonialIndex].variants.testimonio}`}
              nombre={`${testimonials[testimonialIndex].variants.nombre}`}
            />
          </div>
        }
        testimonialUsers={
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            {testimonials?.map((testimonial, index) => (
              <div key={`testimonial_image_${index}`} onClick={() => onAvatarClick(index)}>
                <ProfileImage
                  active={testimonialIndex == index}
                  userImage={
                    <Image
                      priority={false}
                      loading="lazy"
                      layout="fill"
                      alt={testimonial.variants.nombre}
                      src={testimonial.photo}
                    />
                  }
                />
              </div>
            ))}
          </div>
        }
        rightArrow={<Button previousNextPage="nextPage" onClick={() => onArrowClick('right')} />}
        leftArrow={<Button previousNextPage="previousPage" onClick={() => onArrowClick('left')} />}
        faq={
          <CourseLandingFaq
            title="¿Tienes dudas con OpenMarketers?"
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
        courseList={<CursosGrid cursos={cursos} />}
        breadCrumb={
          <Breadcrumb
            breadcrumbItems={
              <>
                <BreadcrumbItem breadcrumbParent={<Link href="/">OpenMarketers</Link>} />
                <BreadcrumbItem breadcrumbChild="Cursos" child="child" />
              </>
            }
          />
        }
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

      <BreadcrumbJsonLd
        itemListElements={[
          { position: 1, name: 'OpenMarketers', item: process.env.NEXT_PUBLIC_BASE_URL },
          { position: 2, name: 'Cursos', item: `${process.env.NEXT_PUBLIC_BASE_URL}/cursos` },
        ]}
      />
    </div>
  );
}

export default LandingCursos;
