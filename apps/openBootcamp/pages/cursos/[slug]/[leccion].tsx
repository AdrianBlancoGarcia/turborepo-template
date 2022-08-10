import * as React from 'react';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BreadcrumbJsonLd, NextSeo } from 'next-seo';
import { GetStaticPaths, GetStaticProps } from 'next/types';
const Image = dynamic(() => import('next/image'));

import Button from '../../../components/Button';
import Drawer from '../../../components/Drawer';
import OBLink from '../../../components/LinkOb';

import { ICurso, ILeccion } from '../../../shared/models';
import { getCurso, getCursos, getLeccion } from '../../../shared/middlewares';

import { PlasmicLandingLeccion } from '../../../components/plasmic/open_bootcamp_v_2_0/PlasmicLandingLeccion';

import styles from '../../../styles/Drawer.module.css';
import YouTube from '@plasmicpkgs/react-youtube';
import BreadcrumbItem from '../../../components/BreadcrumbItem';
import Breadcrumb from '../../../components/Breadcrumb';
import LessonInfoContainer from '../../../components/LessonInfoContainer';
import LessonInfoChip from '../../../components/LessonInfoChip';
import HeroLeccion from '../../../components/HeroLeccion';

type LandingLeccionProps = {
  curso: ICurso;
  cursos: ICurso[];
  leccion: ILeccion;
  linksList: [{ title: string; href: string; isLink: boolean }];
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: cursos } = await getCursos({ query: [{ includeChildren: true }] });

  const paths: any[] = [];

  cursos?.forEach((curso) => {
    curso?.modulos?.forEach((modulo) => {
      modulo?.lecciones?.forEach((leccion) => {
        if (leccion.landing) paths.push({ params: { slug: curso.slug, leccion: leccion.slug } });
      });
    });
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let slug: string = params?.slug + '';
  let leccionSlug: string = params?.leccion + '';

  const { data: curso } = await getCurso({ slug });
  const { data: leccion } = await getLeccion({ slug: leccionSlug });
  const { data: cursos } = await getCursos({
    query: [
      { limit: 8 },
      (curso?.especialidades?.length || 0) > 0
        ? { especialidades: '[' + curso?.especialidades?.map((m) => m.id) + ']' }
        : undefined,
    ],
  });

  const linksList = [
    { title: 'Consigue trabajo', href: '/#trabajo', isLink: true },
    { title: 'Opiniones', href: '/#opiniones', isLink: true },
    { title: 'Especializaciones', href: '/#especializaciones', isLink: true },
    { title: '¿Eres una empresa?', href: '/empresas', isLink: true },
  ];

  return {
    props: { linksList, cursos, curso, leccion },
    revalidate: 30,
  };
};

function LandingLeccion({ linksList, cursos = [], curso, leccion }: LandingLeccionProps) {
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

  console.log(curso?.icono?.replace('fill="none"', 'fill="white"'));

  return (
    <>
      <NextSeo
        title={leccion?.metaTitulo?.replace('%keyword%', leccion?.keyword || '')?.replace('%titulo%', leccion?.titulo || '')}
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/${curso?.slug}/${leccion?.slug}`}
        description={leccion?.metaDescripcion
          ?.replace('%keyword%', leccion?.keyword || '')
          ?.replace('%titulo%', leccion?.titulo || '')}
        openGraph={{
          type: 'website',
          description: `${leccion?.metaDescripcion
            ?.replace('%keyword%', leccion?.keyword || '')
            ?.replace('%titulo%', leccion?.titulo || '')}`,
          title: `${leccion?.metaTitulo
            ?.replace('%keyword%', leccion?.keyword || '')
            ?.replace('%titulo%', leccion?.titulo || '')}`,
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/${curso?.slug}/${leccion?.slug}`,
        }}
      />

      <PlasmicLandingLeccion
        html={
          <div
            dangerouslySetInnerHTML={{
              __html: leccion?.descripcion || '',
            }}
          />
        }
        video={<YouTube videoId="kQYudTGkmBw" />}
        heroLeccion={
          <HeroLeccion
            courseImg={
              <Image loading="lazy" src={`data:image/svg+xml;utf8,${curso?.icono}`} alt={curso?.keyword} layout="fill" />
            }
            info={
              <LessonInfoContainer
                dificultad={
                  <LessonInfoChip
                    tipos="dificultad"
                    dificultad={
                      <span style={{ color: '#725DD3', fontSize: '25px', fontWeight: 'bold', lineHeight: '1.2' }}>Baja</span>
                    }
                  />
                }
                tiempo={
                  <LessonInfoChip
                    tipos="duracion"
                    duracion={
                      <span style={{ color: '#725DD3', fontSize: '25px', fontWeight: 'bold', lineHeight: '1.2' }}>
                        {leccion?.duracion + ' min'}
                      </span>
                    }
                  />
                }
              />
            }
            heading={leccion?.h1}
            breadcrumb={
              <Breadcrumb
                breadcrumbItems={
                  <>
                    <BreadcrumbItem breadcrumbParent={<Link href="/">OpenBootcamp</Link>} />
                    <BreadcrumbItem breadcrumbParent={<Link href="/cursos">Cursos</Link>} />
                    <BreadcrumbItem breadcrumbParent={<Link href={`/cursos/${curso?.slug}`}>{curso?.titulo}</Link>} />
                    <BreadcrumbItem breadcrumbChild={leccion?.titulo} child="child" />
                  </>
                }
              />
            }
          />
        }
      />

      <Drawer
        className={
          styles.drawer_container + ' ' + (openDrawer ? styles.drawer_container__show : styles.drawer_container__hidden)
        }
        links={linksList?.map((link, index) => (
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

      <BreadcrumbJsonLd
        itemListElements={[
          { position: 1, name: 'OpenBootcamp', item: process.env.NEXT_PUBLIC_BASE_URL },
          { position: 2, name: 'Cursos', item: `${process.env.NEXT_PUBLIC_BASE_URL}/cursos` },
          { position: 3, name: curso?.h1, item: `${process.env.NEXT_PUBLIC_BASE_URL}/cursos/${curso?.slug}` },
          {
            position: 4,
            name: leccion?.h1,
            item: `${process.env.NEXT_PUBLIC_BASE_URL}/cursos/${curso?.slug}/${leccion?.slug}`,
          },
        ]}
      />
    </>
  );
}

export default LandingLeccion;
