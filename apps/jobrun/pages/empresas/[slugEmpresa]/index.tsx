import * as React from 'react';

import Link from 'next/link';
import Image from 'next/future/image';
import { BreadcrumbJsonLd, NextSeo } from 'next-seo';
import { GetStaticPaths, GetStaticProps } from 'next';

import Banner from '../../../components/Banner';
import Button from '../../../components/Button';
import ValueItem from '../../../components/ValueItem';
import Breadcrumb from '../../../components/Breadcrumb';
import BreadcrumbItem from '../../../components/BreadcrumbItem';
import CompanyOffers from '../../../components/CompanyOffers';
import OfertaCard from '../../../components/custom/OfertaCard';
import CompanyDetails from '../../../components/CompanyDetails';
import CompanyLinks from '../../../components/custom/CompanyLinks';
import NavbarDetalle from '../../../components/custom/NavbarDetalle';
import DrawerNavbar from '../../../components/custom/Drawer/DrawerNavbar';
import { PlasmicDetalleEmpresa } from '../../../components/plasmic/job_run/PlasmicDetalleEmpresa';

import { IEmpresa } from '../../../shared/models';
import { getEmpresa, getEmpresas } from '../../../shared/middlewares';

import imagenEmpresa from '../../../public/Empresa.png';
import Icon8Icon from '../../../components/plasmic/job_run/icons/PlasmicIcon__Icon8';
import FooterCustom from '../../../components/custom/FooterCustom';

type LandingDetalleEmpresa = {
  empresa: IEmpresa;
};

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('🚀 Preparando Empresas');

  const paths: { params: any }[] = [];
  const { data: empresas } = await getEmpresas({ query: '?limit=1000000' });

  empresas?.forEach((empresa) => {
    paths.push({ params: { slugEmpresa: empresa?.slug } });
  });

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let slugEmpresa: string = params?.slugEmpresa + '';

  if (slugEmpresa === 'reinicia') console.log('⛽ Parametro: ' + slugEmpresa);

  const { data: empresa } = await getEmpresa({ slug: slugEmpresa });

  if (empresa?.nombre === 'Reinicia') console.log('😎 Nombre empresa: ' + empresa?.nombre);

  return {
    props: { empresa: empresa || null },
    revalidate: 30,
  };
};

function DetalleEmpresa({ empresa }: LandingDetalleEmpresa) {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  return (
    <>
      <NextSeo
        title={`Ofertas de Trabajo en ${empresa?.nombre} como Programador`}
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}` + `/empresas/${empresa?.slug}`}
        description={`¿Buscas trabajar en ${empresa?.nombre} como Desarrollador? Descubre aquí todas las Ofertas de Programador.`}
        openGraph={{
          type: 'website',
          description: `¿Buscas trabajar en ${empresa?.nombre} como Desarrollador? Descubre aquí todas las Ofertas de Programador.`,
          title: `Ofertas de Trabajo en ${empresa?.nombre} como Programador`,
          url: `${process.env.NEXT_PUBLIC_BASE_URL}` + `/empresas/${empresa?.slug}`,
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@JobRun_Dev',
        }}
      />

      <PlasmicDetalleEmpresa
        breadcrumb={
          <Breadcrumb
            breadcrumbItems={
              <>
                <BreadcrumbItem hierarchy="parent" breadcrumbParent={<Link href="/">JobRun</Link>} />

                <BreadcrumbItem hierarchy="parent" breadcrumbParent={<Link href="/empresas">Empresas</Link>} />

                <BreadcrumbItem hierarchy="child" breadcrumbChild={empresa?.nombre} />
              </>
            }
          />
        }
        heading={`Trabajos como Programador en ${empresa?.nombre}. Echa un vistazo a estas ofertas de empleo:`}
        navbar={<NavbarDetalle setOpenDrawer={setOpenDrawer} />}
        companyTitle={empresa?.nombre}
        flagIcon={empresa?.pais?.bandera || '❓'}
        companyImg={
          <Image
            width={82}
            height={82}
            loading="lazy"
            src={empresa?.imagen?.url || imagenEmpresa}
            alt={`Imagen de la empresa ${empresa?.nombre}`}
          />
        }
        workers={empresa?.numEmpleados == 1 ? '1 Empleado' : (empresa?.numEmpleados || 0) + ' Empleados'}
        location={empresa?.comunidad?.nombre}
        companyDescription={<div dangerouslySetInnerHTML={{ __html: empresa?.descripcion || '' }} />}
        companyDetails2={
          <>
            {empresa?.valores && (
              <CompanyDetails
                type="valores"
                companyValues={empresa?.valores?.map((valor, i) => (
                  <ValueItem
                    key={i}
                    color="grey"
                    valueText={valor?.nombre}
                    valueIcon={<Icon8Icon width="32px" height="32px" />}
                  />
                ))}
              />
            )}

            <CompanyDetails type="enlaces" companyLinks={<CompanyLinks empresa={empresa} />} />
          </>
        }
        companyOffers={
          <CompanyOffers
            ofertasEmpresa={`Ofertas de ${empresa?.nombre}`}
            companyOffers={empresa?.ofertas?.map((ofertaEmpresa, i) => (
              <OfertaCard key={i} oferta={ofertaEmpresa} empresa={empresa} />
            ))}
          />
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
      <BreadcrumbJsonLd
        itemListElements={[
          { position: 1, name: 'JobRun', item: process.env.NEXT_PUBLIC_BASE_URL },
          { position: 1, name: 'Empresas', item: `${process.env.NEXT_PUBLIC_BASE_URL}/empresas` },
          { position: 2, name: empresa?.nombre, item: `${process.env.NEXT_PUBLIC_BASE_URL}/empresas/${empresa?.slug}` },
        ]}
      />
    </>
  );
}

export default DetalleEmpresa;
