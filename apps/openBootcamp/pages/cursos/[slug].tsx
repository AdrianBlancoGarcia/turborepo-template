import { useState, useEffect } from 'react';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { BreadcrumbJsonLd, CourseJsonLd, NextSeo } from 'next-seo';
import { GetStaticPaths, GetStaticProps } from 'next/types';
const Link = dynamic(() => import('next/link'));
const Image = dynamic(() => import('next/image'));

import testimonialPhotos from '../../public/testimonialPhotos.json';

import Drawer from '../../components/Drawer';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import { ICurso, IFaq } from '../../shared/models';
import Breadcrumb from '../../components/Breadcrumb';
import { checkIfIsAdwords } from '../../shared/utils';
import BreadcrumbItem from '../../components/BreadcrumbItem';
import CourseListSection from '../../components/CourseListSection';
import AcordeonLecciones from '../../components/AcordeonLecciones';
import { getCurso, getCursos, getFaqs } from '../../shared/middlewares';

const Faq = dynamic(() => import('../../components/Faq'));
const Accordion = dynamic(() => import('../../components/Accordion'));
const CursosGrid = dynamic(() => import('../../components/CursosGrid'));
const ProfileImage = dynamic(() => import('../../components/ProfileImage'));
const AccordionSection = dynamic(() => import('../../components/AccordionSection'));
const CourseLandingFaq = dynamic(() => import('../../components/CourseLandingFaq'));
const TestimonialsTexts = dynamic(() => import('../../components/TestimonialsTexts'));

import { PlasmicLandingCurso } from '../../components/plasmic/open_bootcamp_v_2_0/PlasmicLandingCurso';

import styles from '../../styles/Drawer.module.css';
import skeleton from '../../styles/skeletonCurso.module.css';
import style from '../../styles/animationTestimonial.module.css';
import gradientStyle from '../../styles/wordGradient.module.css';
import Head from 'next/head';
import { StaticImageData } from 'next/image';

type LandingCursoProps = {
  faqs: IFaq[];
  curso: ICurso;
  cursos: ICurso[];
  descripcion: string;
  testimonials: [{ variants: 'anaFernandez' | 'ignacioDeBats' | 'mariaBeatrizVivanco'; photo: StaticImageData }];
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: cursos } = await getCursos({});

  console.log('🚀 Preparando cursos');

  const paths = cursos?.map((curso) => ({ params: { slug: curso.slug } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let slug: string = params?.slug + '';

  const { data: faqs } = await getFaqs({});
  const { data: curso } = await getCurso({ slug });
  const { data: cursos } = await getCursos({
    query: [
      { limit: 8 },
      (curso?.especialidades?.length || 0) > 0
        ? { especialidades: '[' + curso?.especialidades?.map((m) => m.id) + ']' }
        : undefined,
    ],
  });

  const testimonials = [
    { variants: testimonialPhotos.anaFernandez.variants, photo: testimonialPhotos.anaFernandez.photo },
    { variants: testimonialPhotos.ignacioDeBats.variants, photo: testimonialPhotos.ignacioDeBats.photo },
    { variants: testimonialPhotos.mariaBeatrizVivanco.variants, photo: testimonialPhotos.mariaBeatrizVivanco.photo },
  ];

  const especialidadesLength = curso?.especialidades?.length || 0;

  const descripcion =
    especialidadesLength === 1 && curso?.especialidades
      ? `¿Quieres convertirte en desarrollador ${curso?.especialidades[0].nombre}? ¡Con OB puedes hacerlo! Empieza nuestro curso gratuito de ${curso?.titulo} y conviértete en un gran developer.`
      : `¿Quieres convertirte en desarrollador? ¡Con OB puedes hacerlo! Empieza nuestro curso gratuito de ${curso?.titulo} y conviértete en un gran developer.`;

  return {
    props: { faqs, testimonials, descripcion, cursos, curso },
    revalidate: 60,
  };
};

function LandingCurso({ faqs = [], testimonials, descripcion, cursos = [], curso }: LandingCursoProps) {
  const router = useRouter();

  const [testInterval, setTestInterval] = useState<NodeJS.Timer>();
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [mount, setMount] = useState<'mount' | 'unmount'>('mount');
  const [isAdwords, setIsAdwords] = useState(checkIfIsAdwords(router.query));

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

    newHref += `&curso_id=${curso?.id}&ruta_id=${curso?.rutaId}`;

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
        if (testimonialIndex === 0) setTestimonialIndex(testimonials?.length - 1);
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
        if (index === testimonials?.length - 1) setTestimonialIndex(0);
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

  // TODO Cambiar el canonical
  return (
    <>
      <CourseJsonLd
        courseName={curso?.titulo || ''}
        description={curso?.descripcion || ''}
        provider={{
          name: 'OpenBootcamp',
          url: `https://open-bootcamp.com/cursos/${curso?.slug}`,
        }}
      />

      <NextSeo
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/cursos/${curso?.slug}`}
        title={curso?.metaTitulo?.replace('%keyword%', curso?.keyword || '')?.replace('%titulo%', curso?.titulo || '')}
        description={curso?.metaDescripcion
          ?.replace('%keyword%', curso?.keyword || '')
          ?.replace('%titulo%', curso?.titulo || '')
          ?.replace('%especialidad%', curso?.especialidades?.length === 1 ? curso?.especialidades[0]?.nombre || '' : '')}
        openGraph={{
          type: 'website',
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/cursos/${curso?.slug}`,
          title: `${curso?.metaTitulo?.replace('%keyword%', curso?.keyword || '')?.replace('%titulo%', curso?.titulo || '')}`,
          description: curso?.metaDescripcion
            ?.replace('%keyword%', curso?.keyword || '')
            ?.replace('%titulo%', curso?.titulo || '')
            ?.replace('%especialidad%', curso?.especialidades?.length === 1 ? curso?.especialidades[0]?.nombre || '' : ''),
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@Open_Bootcamp'
        }}
      />

      <div style={{ position: 'relative' }}>
        <PlasmicLandingCurso
          heroCourseTitle={
            <div>
              {`Curso de ${curso?.titulo} `}
              <span className={gradientStyle.span}>Gratis</span>
            </div>
          }
          heroCourseDescription={descripcion}
          courseImg={
            <Image
              loading="lazy"
              src={`data:image/svg+xml;utf8,${curso?.icono}`}
              alt={curso?.keyword}
              width="100px"
              height="100px"
            />
          }
          courseList={<CourseListSection courseList={isAdwords ? <></> : <CursosGrid cursos={cursos} />} />}
          h2={curso?.h2?.replace('%titulo%', curso?.titulo || '')?.replace('%keyword%', curso?.keyword || '')}
          accordionContainer={
            !(curso?.modulos?.length === 0) ? (
              <AccordionSection
                courseText={
                  !curso?.titulo ? (
                    <div className={skeleton.skeletonTitleLecciones} />
                  ) : (
                    <div className={gradientStyle.leccionContainer}>
                      <span style={{ color: 'black' }}>Desata el potencial de </span>
                      <span className={gradientStyle.span}>{curso?.titulo}</span>
                    </div>
                  )
                }
                accordion={
                  <Accordion
                    accordionContent={<AcordeonLecciones curso={curso} />}
                    numeroHoras={convertirTiempoTotal(curso?.meta?.duracion || 0)}
                    numeroLecciones={
                      (curso?.modulos?.length || 0) === 1 ? '1 Lección' : `${curso?.modulos?.length || 0} Lecciones`
                    }
                  />
                }
                ctaAcordeon={
                  <Button color="blue" size="normal" onClick={() => router.push(registerHref)}>
                    Acceder al contenido completo
                  </Button>
                }
              />
            ) : null
          }
          heroButton={
            <Button data-cy="cta_hero" color="darkGray" className="cta_estudiantes" href={registerHref}>
              Empieza ya
            </Button>
          }
          testimonialsText={
            <div className={mount === 'mount' ? style.divTestimonialTextMount : style.divTestimonialTextUnmount}>
              <TestimonialsTexts user={testimonials[testimonialIndex].variants} />
            </div>
          }
          testimonialsUsers={
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              {testimonials?.map((testimonial, index) => (
                <div key={`testimonial_image_${index}`} onClick={() => onAvatarClick(index)}>
                  <ProfileImage
                    active={testimonialIndex == index}
                    userImage={
                      <Image priority={false} loading="lazy" layout="fill" alt={testimonial.variants} src={testimonial.photo} />
                    }
                  />
                </div>
              ))}
            </div>
          }
          faq={
            <CourseLandingFaq
              title="¿Tienes dudas con OpenBootcamp?"
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
          rightArrow={<Button previousNextPage="nextPage" onClick={() => onArrowClick('right')} />}
          leftArrow={<Button previousNextPage="previousPage" onClick={() => onArrowClick('left')} />}
          navbar={
            <Navbar
              cta={{ href: registerHref }}
              className={styles.navbar_container}
              openDrawer={() => setOpenDrawer(!openDrawer)}
            />
          }
          breadcrumb={
            <Breadcrumb
              breadcrumbItems={
                <>
                  <BreadcrumbItem breadcrumbParent={<Link href="/">OpenBootcamp</Link>} />
                  <BreadcrumbItem breadcrumbParent={<Link href="/cursos">Cursos</Link>} />
                  <BreadcrumbItem breadcrumbChild={curso?.keyword} child="child" />
                </>
              }
            />
          }
        />

        <Drawer
          className={
            styles.drawer_container + ' ' + (openDrawer ? styles.drawer_container__show : styles.drawer_container__hidden)
          }
          links={[]}
          drawerButton={<Button drawer="close" data-cy="close_drawer" onClick={() => setOpenDrawer(false)} />}
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
          { position: 2, name: 'Cursos', item: `${process.env.NEXT_PUBLIC_BASE_URL}/cursos` },
          { position: 3, name: curso?.h1, item: `${process.env.NEXT_PUBLIC_BASE_URL}/cursos/${curso?.slug}` },
        ]}
      />
    </>
  );
}

export default LandingCurso;
