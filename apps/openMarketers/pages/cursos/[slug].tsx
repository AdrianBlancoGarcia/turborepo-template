import * as React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { BreadcrumbJsonLd, CourseJsonLd, NextSeo } from 'next-seo';
const Link = dynamic(() => import('next/link'));
const Image = dynamic(() => import('next/image'));


import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import { ICurso, IFaq } from '../../shared/models';
import Breadcrumb from '../../components/Breadcrumb';
import CursosGrid from '../../components/CursosGrid';
import ProfileImage from '../../components/ProfileImage';
import BreadcrumbItem from '../../components/BreadcrumbItem';
import TestimonialsTexts from '../../components/TestimonialsTexts';
const Drawer = dynamic(() => import('../../components/Drawer'));
const StickyBanner = dynamic(() => import('../../components/StickyBanner'));

import { getCurso, getCursos, getFaqs } from '../../shared/middlewares';

import PlasmicLandingCurso from '../../components/plasmic/open_marketers/PlasmicLandingCurso';

import styles from '../../styles/Navbar.module.css';
import breadcrumbStyle from '../../styles/breadcrumb.module.css';

import drawerStyles from '../../styles/Drawer.module.css';
import animationStyles from '../../styles/animationTestimonial.module.css';
import gradientStyle from '../../styles/wordGradient.module.css';
import AccordionSection from '../../components/AccordionSection';
import Accordion from '../../components/Accordion';
import AcordeonLecciones from '../../components/AcordeonLecciones';
import CourseLandingFaq from '../../components/CourseLandingFaq';
import Faq from '../../components/FaqContainer';

type LandingCursoProps = {
  curso: ICurso;
  cursos: ICurso[];
  testimonials: [{ photo: string; variants: { titulo: string; testimonio: string; nombre: string } }];
  faqs: IFaq[];
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: cursos } = await getCursos({});

  const paths = cursos?.map((curso) => ({ params: { slug: curso?.slug } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let slug: string = params?.slug + '';
  const { data: cursos } = await getCursos({});
  const { data: curso } = await getCurso({ slug });
  const { data: faqs } = await getFaqs({});

  const testimonials = [
    {
      variants: {
        titulo: 'Don Quijote',
        testimonio:
          'EN UN LUGAR DE LA MANCHA, DE CUYO NOMBRE NO QUIERO ACORDARME, NO HA MUCHO TIEMPO QUE VIVÍA UN HIDALGO DE LOS DE LANZA EN ASTILLERO, ADARGA ANTIGUA, ROCÍN FLACO Y GALGO CORREDOR',
        nombre: 'Martina Sobrino',
      },
      photo: 'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800',
    },
    {
      variants: {
        titulo: 'El murciélago',
        testimonio:
          'EL VELOZ MURCIÉLAGO HINDÚ COMÍA FELIZ CARDILLO Y KIWI. LA CIGÜEÑA TOCABA EL SAXOFÓN DETRÁS DEL PALENQUE DE PAJA',
        nombre: 'Enzo Pedrosa',
      },
      photo:
        'https://us.123rf.com/450wm/objowl/objowl1209/objowl120900004/15031310-star-flower-imagen-abstracta-digital-con-un-dise%C3%B1o-estrella-flor-psicod%C3%A9lica-en-verde-azul-rosa-y-am.jpg',
    },
    {
      variants: {
        titulo: 'Texto de prueba',
        testimonio: 'ESTO ES UN TEXTO DE PRUEBA. EN ÉL SE PUEDE APRECIAR SI ESTÁN TODAS LAS VOCALES Y QUÉ ASPECTO TIENEN.',
        nombre: 'Angelica Calleja',
      },
      photo:
        'https://us.123rf.com/450wm/objowl/objowl1210/objowl121000002/15607246-le-big-bang-num%C3%A9rique-image-abstraite-avec-une-conception-psych%C3%A9d%C3%A9lique-exploser-en-bleu-rose-jaune-.jpg',
    },
  ];

  return {
    props: { curso, cursos, testimonials, faqs },
    revalidate: 60,
  };
};

function LandingCurso({ curso, cursos, testimonials, faqs }: LandingCursoProps) {
  const router = useRouter();

  const [testimonialIndex, setTestimonialIndex] = React.useState(0);
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);
  const [testInterval, setTestInterval] = React.useState<NodeJS.Timer>();
  const [mount, setMount] = React.useState<'mount' | 'unmount'>('mount');
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

  /**
   * Método para convertir el tiempo en un string X h X min
   * @param horas
   * @returns String hora
   */
  const convertirTiempoTotal = (horas: number) => {
    let minutos = (horas - Math.trunc(horas)) * 60;
    if (horas === 1) return `${Math.trunc(horas)} h`;
    else if (horas < 1) return `${Math.trunc(minutos)} min`;
    else return `${Math.trunc(horas)} h ${Math.trunc(minutos)} min`;
  };

  const minToH = (m: any) => {
    if (m === null) return '-';
    const h = Math.floor(m) + 'h';

    return h;
  };

  return (
    <div style={{ position: 'relative' }}>
      <NextSeo
        title={curso?.metaTitulo?.replace('%keyword%', curso?.keyword || '')?.replace('%titulo%', curso?.titulo || '')}
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/cursos/${curso?.slug}`}
        description={curso?.metaDescripcion
          ?.replace('%keyword%', curso?.keyword || '')
          ?.replace('%titulo%', curso?.titulo || '')
          ?.replace('%especialidad%', curso?.especialidades?.length === 1 ? curso?.especialidades[0]?.nombre || '' : '')}
        openGraph={{
          type: 'website',
          description: `${curso?.metaDescripcion
            ?.replace('%keyword%', curso?.keyword || '')
            ?.replace('%titulo%', curso?.titulo || '')
            ?.replace('%especialidad%', curso?.especialidades?.length === 1 ? curso?.especialidades[0]?.nombre || '' : '')}`,
          title: `${curso?.metaTitulo?.replace('%keyword%', curso?.keyword || '')?.replace('%titulo%', curso?.titulo || '')}`,
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/cursos/${curso?.slug}`,
        }}
      />

      <PlasmicLandingCurso
        accordionContainer={
          !(curso?.modulos?.length === 0) ? (
            <AccordionSection
              courseText={
                <div className={gradientStyle.leccionContainer}>
                  <span style={{ color: 'black' }}>
                    Descubre el mundo de <span className={gradientStyle.span}>{curso?.titulo}</span>
                  </span>
                </div>
              }
              accordion={
                <Accordion
                  accordionContent={<AcordeonLecciones curso={curso} />}
                  numeroHoras={convertirTiempoTotal(curso?.meta?.duracion || 0)}
                  numeroLecciones={(curso?.modulos?.length || 0) === 1 ? '1 Modulo' : `${curso?.modulos?.length || 0} Modulos`}
                />
              }
              ctaAcordeon={
                <Button color="rose" size="normal" onClick={() => router.push(registerHref)}>
                  Acceder al contenido completo
                </Button>
              }
            />
          ) : null
        }
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
        moduleIcon={
          <Image
            loading="lazy"
            layout="fill"
            alt={curso?.keyword || `Curso de ${curso?.titulo}`}
            src={`data:image/svg+xml;utf8,${curso?.icono}`}
          />
        }
        heroCourseTitle={
          <div className={gradientStyle.cursoGratisDe}>
            <span className={gradientStyle.tituloCurso}>{curso?.h1 || ''}</span>
          </div>
        }
        courseDuration={minToH(curso?.meta?.duracion)}
        testimonialsText={
          <div
            className={mount === 'mount' ? animationStyles.divTestimonialTextMount : animationStyles.divTestimonialTextUnmount}
          >
            <TestimonialsTexts
              nombre={`${testimonials[testimonialIndex].variants.nombre}`}
              titulo={`${testimonials[testimonialIndex].variants.titulo}`}
              testimonio={`${testimonials[testimonialIndex].variants.testimonio}`}
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
                      layout="fill"
                      loading="lazy"
                      priority={false}
                      src={testimonial.photo}
                      alt={testimonial.variants.nombre}
                    />
                  }
                />
              </div>
            ))}
          </div>
        }
        rightArrow={<Button previousNextPage="nextPage" onClick={() => onArrowClick('right')} />}
        leftArrow={<Button previousNextPage="previousPage" onClick={() => onArrowClick('left')} />}
        courseList={<CursosGrid cursos={cursos} />}
        breadCrumb={
          <Breadcrumb
            breadcrumbItems={
              <>
                <BreadcrumbItem
                  className={breadcrumbStyle.breadcrumbHome}
                  parent
                  breadcrumbParent={<Link href="/">OpenMarketers</Link>}
                />
                <BreadcrumbItem
                  className={breadcrumbStyle.breadcrumbCursos}
                  parent
                  breadcrumbParent={<Link href="/cursos">Cursos</Link>}
                />
                <BreadcrumbItem className={breadcrumbStyle.breadcrumbCurso} breadcrumbChild={curso?.keyword} child />
                <BreadcrumbItem
                  className={breadcrumbStyle.breadcrumbCursosMobile}
                  breadcrumbChildLast={<Link href="/cursos">Cursos</Link>}
                  childLast
                />
              </>
            }
          />
        }
        faq={
          <CourseLandingFaq
            title="¿Tienes dudas con OpenMarketers?"
            subtitle="Resolvamos tus dudas"
            content={
              <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '40px' }}>
                {faqs?.map((faq: IFaq, index: number) => (
                  <Faq
                    key={`faq-item-${index}`}
                    question={(faq.pregunta || '').replace('%keyword%', curso?.keyword || '')}
                    answer={(faq.respuesta || '').replace('%keyword%', curso?.keyword || '')}
                  />
                ))}
              </div>
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

      <CourseJsonLd
        courseName={curso?.titulo || ''}
        description={curso?.descripcion || ''}
        provider={{
          name: 'OpenMarketers',
          url: `https://open-marketers.com/cursos/${curso?.slug}`,
        }}
      />

      <BreadcrumbJsonLd
        itemListElements={[
          { position: 1, name: 'OpenMarketers', item: process.env.NEXT_PUBLIC_BASE_URL },
          { position: 2, name: 'Cursos', item: `${process.env.NEXT_PUBLIC_BASE_URL}/cursos` },
          { position: 3, name: curso?.h1, item: `${process.env.NEXT_PUBLIC_BASE_URL}/cursos/${curso?.slug}` },
        ]}
      />
    </div>
  );
}

export default LandingCurso;
