import { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const DrawerNavbar = dynamic(() => import('../../components/custom/Drawer/DrawerNavbar'));
const DrawerFiltros = dynamic(() => import('../../components/custom/Drawer/DrawerFiltros'));
import Button from '../../components/Button';
import OfferGrid from '../../components/OfferGrid';
import EmptyState from '../../components/EmptyState';
import OfferCategory from '../../components/OfferCategory';
import OfertaCard from '../../components/custom/OfertaCard';
import CategoryCard from '../../components/custom/CategoryCard';
import HeaderOfertas from '../../components/custom/HeaderOfertas/HeaderOfertas';

import { IOferta, ICategoria, ITecnologia, EXPERIENCIAENUM } from '../../shared/models';
import { getTecnologias, getCategorias, getOfertas } from '../../shared/middlewares';
import { getParamsOfertas, getQueryOfertas, useMediaQuery } from '../../shared/utils';

import NavbarDetalle from '../../components/custom/NavbarDetalle';
import { PlasmicOfertas } from '../../components/plasmic/job_run/PlasmicOfertas';

import FilterIconIconProps from '../../components/plasmic/job_run/icons/PlasmicIcon__FilterIcon';
import Banner from '../../components/Banner';

import FooterCustom from '../../components/custom/FooterCustom';

type OfertasProps = {
  filtros: any;
  queryUrl: string;
  ofertas: IOferta[];
  categorias: ICategoria[];
  tecnologias: ITecnologia[];
};

export async function getStaticPaths() {
  const categorias = await getCategorias();
  const tecnologias = await getTecnologias();

  const paths: { params: { params: any } }[] = [{ params: { params: [] } }, { params: { params: ['remoto'] } }];

  // Añadimos filtros de Categorías
  (categorias?.data || [])?.forEach((categoria) => {
    paths.push({ params: { params: [categoria.slug] } });
  });

  // // Añadimos filtros de Tecnologías
  (tecnologias?.data || [])?.forEach((tecnologia) => {
    paths.push({ params: { params: [tecnologia.slug] } });
  });

  // Añadimos filtros de Experiencia
  Object.values(EXPERIENCIAENUM)?.forEach((value) => {
    paths.push({ params: { params: [value] } });
  });

  return {
    paths,
    fallback: 'blocking',
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const categorias = await getCategorias();
  const tecnologias = await getTecnologias();

  const paramsLocal: any = params?.params;

  const { filtros } = getParamsOfertas({ params: paramsLocal, categorias: categorias?.data, tecnologias: tecnologias?.data });
  const { query, queryUrl } = getQueryOfertas(filtros);

  const ofertas = await getOfertas({ query: query });

  return {
    props: {
      filtros: filtros || null,
      queryUrl: queryUrl || null,
      ofertas: ofertas?.data || null,
      categorias: categorias?.data || null,
      tecnologias: tecnologias?.data || null,
    },
    revalidate: 60,
  };
};

function OfertasPage({ ofertas, tecnologias, categorias, filtros, queryUrl: queryUrlServer }: OfertasProps) {
  const router = useRouter();

  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDrawerFilter, setOpenDrawerFilter] = useState(false);
  const isDrawer = useMediaQuery('(max-width: 1200px)');

  const updateFiltros = (newFiltros: any) => {
    if (newFiltros) {
      const { queryUrl } = getQueryOfertas(newFiltros);

      if (queryUrl !== queryUrlServer) router.push(`/ofertas${queryUrl}`);
    }
  };

  const treatQueryURL = (qUrl: string): string => (qUrl.endsWith('/') ? qUrl.slice(0, qUrl.length - 1) : qUrl);

  const getMetaTitle = () => {
    const hayEspecialidad = !!filtros['puesto'],
      hayExperiencia = !!filtros['experiencia'],
      hayTecnologia = !!filtros['tecnologia'],
      hayRemoto = filtros['remote'] === true;

    if (hayEspecialidad) return `Ofertas de Trabajo de ${filtros['puestoLabel']} Developer.`;
    else if (hayTecnologia) return `Encuentra Trabajo como Programador ${filtros['tecnologiaLabel']}`;
    else if (hayExperiencia) return `Encuentra Trabajo como Programador ${filtros['experienciaLabel']}`;
    else return `Ofertas de Trabajo de Developer.`;
  };

  const getMetaDescription = () => {
    const hayEspecialidad = !!filtros['puesto'],
      hayExperiencia = !!filtros['experiencia'],
      hayTecnologia = !!filtros['tecnologia'],
      hayRemoto = filtros['remote'] === true;

    if (hayEspecialidad)
      return `Encuentra Trabajo como Programador ${filtros['puestoLabel']}. Elige la Oferta que mejor se adapte a ti.`;
    else if (hayTecnologia)
      return `¿Buscas Empleo como Desarrollador ${filtros['tecnologiaLabel']}? Descubre aquí todas las Ofertas de Trabajo como Programador.`;
    else if (hayExperiencia)
      return `¿Buscas Empleo como Desarrollador ${filtros['experienciaLabel']}? Descubre aquí todas las Ofertas de Trabajo como Programador.`;
    else return `¿Buscas Empleo como Desarrollador? Descubre aquí todas las Ofertas de Trabajo como Programador.`;
  };

  const getMetaH1 = () => {
    const hayEspecialidad = !!filtros['puesto'],
      hayExperiencia = !!filtros['experiencia'],
      hayTecnologia = !!filtros['tecnologia'],
      hayRemoto = filtros['remote'] === true;

    if (hayEspecialidad) return `Encuentra Trabajo como Desarrollador ${filtros['puestoLabel']}`;
    else if (hayTecnologia) return `Programador en ${filtros['tecnologiaLabel']}. Echa un vistazo a estas ofertas de empleo:`;
    else if (hayExperiencia)
      return `Trabajos como Programador ${filtros['experienciaLabel']}. Echa un vistazo a estas ofertas de empleo:`;
    else return 'Echa un vistazo a estas ofertas de empleo:';
  };

  return (
    <>
      <NextSeo
        title={getMetaTitle()}
        description={getMetaDescription()}
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}` + '/ofertas' + treatQueryURL(queryUrlServer || '')}
        openGraph={{
          type: 'website',
          description: getMetaDescription(),
          title: getMetaTitle(),
          url: `${process.env.NEXT_PUBLIC_BASE_URL}` + '/ofertas' + treatQueryURL(queryUrlServer || ''),
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@JobRun_Dev',
        }}
      />

      <PlasmicOfertas
        headeroffers={
          <HeaderOfertas
            filtros={filtros}
            setFiltros={updateFiltros}
            categorias={categorias}
            tecnologias={tecnologias}
            setOpenDrawer={setOpenDrawer}
          />
        }
        heading={getMetaH1()}
        navbar={<NavbarDetalle setOpenDrawer={setOpenDrawer} />}
        offerContainer={
          ofertas?.length === 0 ? (
            <EmptyState
              title="¡Ups!"
              message="Estamos actualizando nuestras ofertas, mientras tanto puedes ver nuestras ofertas en remoto."
              ctaRemoto={
                <Button
                  color="black"
                  size="medium"
                  label="Ver ofertas en remoto"
                  onClick={() => router.push('/ofertas/remoto')}
                />
              }
            />
          ) : (
            <OfferGrid
              offerContent={ofertas?.map((oferta, i) => (
                <OfertaCard key={i} oferta={oferta} />
              ))}
            />
          )
        }
        filterButton={
          isDrawer && (
            <Button
              data-cy="filter_button"
              label="Filtrar por"
              showStartIcon="showStartIcon"
              icon={<FilterIconIconProps width="16px" height="16px" />}
              onClick={() => setOpenDrawerFilter(true)}
            />
          )
        }
        activeOffers={
          filtros?.puesto
            ? ofertas?.length === 0
              ? ''
              : ofertas?.length === 1
              ? `1 oferta de ${filtros?.puestoLabel}`
              : `${ofertas?.length} ofertas de ${filtros?.puestoLabel}`
            : ofertas?.length === 0
            ? ''
            : ofertas?.length === 1
            ? '1 oferta activa'
            : `${ofertas?.length} ofertas activas`
        }
        offerCategory={
          <div style={{ width: '100%', height: '100%' }}>
            <OfferCategory
              items={categorias?.map((categoria, i) => (
                <CategoryCard key={i} categoria={categoria} href={`/ofertas/${categoria?.slug}`} />
              ))}
            />
          </div>
        }
        banner={
          <Banner
            ctaRecomendacion={
              <Button
                color="white"
                size="medium"
                label="Ver ofertas que recomendar"
                href={process.env.NEXT_PUBLIC_TYPEFORM_RECOMENDADOS}
              />
            }
          />
        }
        footer={<FooterCustom />}
      />

      <DrawerNavbar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />

      <DrawerFiltros
        filtros={filtros}
        setFiltros={updateFiltros}
        categorias={categorias}
        tecnologias={tecnologias}
        openDrawerFilter={openDrawerFilter}
        numOfertasFiltradas={ofertas?.length}
        setOpenDrawerFilter={setOpenDrawerFilter}
      />
    </>
  );
}

export default OfertasPage;
