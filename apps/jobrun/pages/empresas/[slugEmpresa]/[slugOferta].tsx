import * as React from 'react';

import Image from 'next/future/image';
import { NextSeo } from 'next-seo';
import { GetStaticPaths, GetStaticProps } from 'next/types';

import Banner from '../../../components/Banner';
import Button from '../../../components/Button';
import ValueItem from '../../../components/ValueItem';
import Breadcrumb from '../../../components/Breadcrumb';
import CompanyDetails from '../../../components/CompanyDetails';
import NavbarDetalle from '../../../components/custom/NavbarDetalle';

import Icon8Icon from '../../../components/plasmic/job_run/icons/PlasmicIcon__Icon8';

import imagenEmpresa from '../../../public/Empresa.png';

import {
  IEmpresa,
  IOferta,
  JORNADAENUM,
  JORNADAVIEWENUM,
  PRESENCIALIDADENUM,
  PRESENCIALIDADVIEWENUM,
} from '../../../shared/models';
import { getEmpresa, getEmpresas, getOferta, getOfertas } from '../../../shared/middlewares';

import { PlasmicDetalleOferta } from '../../../components/plasmic/job_run/PlasmicDetalleOferta';

import StickyBanner from '../../../components/StickyBanner';
import CompanyLinks from '../../../components/custom/CompanyLinks';
import RequisitosContent from '../../../components/custom/RequisitosContent';
import BeneficiosList from '../../../components/custom/BeneficiosList';
import OfertasRelacionadas from '../../../components/custom/OfertasRelacionadas';
import DrawerNavbar from '../../../components/custom/Drawer/DrawerNavbar';

import { BreadcrumbOferta, BreadCrumbOfertaSCHEMA } from '../../../components/custom/Breadcrumbs/BreadcrumbOferta';
import FooterCustom from '../../../components/custom/FooterCustom';
import { useMediaQuery } from '../../../shared/utils';

type LandingDetalleOferta = {
  empresa: IEmpresa;
  oferta: IOferta;
  ofertas: IOferta[];
};

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('💰 Preparando Ofertas');

  const paths: { params: any }[] = [];
  const { data: empresas } = await getEmpresas({ query: '?limit=1000000' });

  empresas?.forEach((empresa) => {
    empresa?.ofertas?.forEach((oferta) => {
      if (oferta.slug) paths.push({ params: { slugEmpresa: empresa?.slug, slugOferta: oferta?.slug } });
    });
  });

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let slugEmpresa: string = params?.slugEmpresa + '';
  let slugOferta: string = params?.slugOferta + '';

  const { data: empresa } = await getEmpresa({ slug: slugEmpresa });
  const { data: oferta } = await getOferta({ slug: slugOferta });
  const { data: ofertas } = await getOfertas({ query: '?limit=1000000' });

  return {
    props: { empresa, oferta, ofertas },
    revalidate: 30,
  };
};

function DetalleOferta({ empresa, oferta, ofertas }: LandingDetalleOferta) {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <NextSeo
        noindex
        title=""
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/empresas/${empresa?.slug}/${oferta?.slug}`}
        description=""
        openGraph={{
          type: 'website',
          description: '',
          title: '',
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/empresas/${empresa?.slug}/${oferta?.slug}`,
        }}
        twitter={{ cardType: 'summary_large_image', site: '@JobRun_Dev' }}
      />
        <PlasmicDetalleOferta
          breadcrumb={<Breadcrumb breadcrumbItems={<BreadcrumbOferta nombreOferta={oferta?.nombre} />} />}
          offerTitle={oferta?.nombre}
          companyName={empresa?.nombre}
          navbar={<NavbarDetalle setOpenDrawer={setOpenDrawer} />}
          offerImg={
            <Image
              width={82}
              height={82}
              loading="lazy"
              src={empresa?.imagen?.url || imagenEmpresa}
              alt={`Imagen de la empresa ${empresa?.nombre}`}
            />
          }
          companyImg={
            <Image
              width={62}
              height={62}
              loading="lazy"
              src={empresa?.imagen?.url || imagenEmpresa}
              alt={`Imagen de la empresa ${empresa?.nombre}`}
            />
          }
          location={oferta?.comunidad?.nombre}
          detailRemote={
            oferta?.presencialidad === PRESENCIALIDADENUM.PRESENCIAL
              ? PRESENCIALIDADVIEWENUM.PRESENCIAL
              : oferta?.presencialidad === PRESENCIALIDADENUM.REMOTO
              ? PRESENCIALIDADVIEWENUM.REMOTO
              : oferta?.presencialidad === PRESENCIALIDADENUM.MIXTO
              ? PRESENCIALIDADVIEWENUM.MIXTO
              : ''
          }
          detailJornada={
            oferta?.jornada === JORNADAENUM.COMPLETA
              ? JORNADAVIEWENUM.COMPLETA
              : oferta?.jornada === JORNADAENUM.PARCIAL
              ? JORNADAVIEWENUM.PARCIAL
              : ''
          }
          companyName2={empresa?.nombre}
          companyLocation={empresa?.comunidad?.nombre}
          offerAdvantages={<BeneficiosList oferta={oferta} />}
          requirementsContet={<RequisitosContent oferta={oferta} />}
          detailSalary={`${oferta?.salarioMax} - ${oferta?.salarioMin} €`}
          offerDescription={<div dangerouslySetInnerHTML={{ __html: oferta?.descripcion || '' }} />}
          companyButton={
            <Button
              data-cy="company_button"
              color="black"
              size="strech"
              label="Ver Empresa"
              href={`/empresas/${empresa?.slug}`}
            />
          }
          companyDescription={<div dangerouslySetInnerHTML={{ __html: empresa?.descripcion || '' }} />}
          numEmpleados={empresa?.numEmpleados == 1 ? '1 Empleado' : `${empresa?.numEmpleados || 0} Empleados`}
          buttons={
            <>
              {/* <Button
                showStartIcon
                label=""
                color="grey"
                size="medium"
                icon={<ShareIconIcon width="24px" color="#6B0DF8" height="24px" />}
              /> */}

              <Button
                data-cy="first_inscribirse"
                color="purple"
                label="Inscribirse"
                href={process.env.NEXT_PUBLIC_TYPEFORM_CANDIDATOS + `?oferta_id=${oferta?.id}`}
              />
            </>
          }
          buttonsBottom={
            <>
              {/* <Button color="grey" label="Compartir Oferta" icon="" /> */}

              {!isMobile && (
                <Button
                  data-cy="second_inscribirse"
                  color="purple"
                  label="Inscribirse a la Oferta"
                  href={process.env.NEXT_PUBLIC_TYPEFORM_CANDIDATOS + `?oferta_id=${oferta?.id}`}
                />
              )}
            </>
          }
          companyDetails={
            <>
              {empresa?.valores && (
                <CompanyDetails
                  type="valores"
                  companyValues={empresa?.valores?.map((valor, i) => (
                    <ValueItem valueText={valor?.nombre} key={i} valueIcon={<Icon8Icon width="32px" height="32px" />} />
                  ))}
                />
              )}

              <CompanyDetails type="enlaces" companyLinks={<CompanyLinks empresa={empresa} />} />
            </>
          }
          relatedOffers={<OfertasRelacionadas ofertas={ofertas} oferta={oferta} empresa={empresa} />}
          banner={
            <Banner
              ctaRecomendacion={
                <Button
                  data-cy="cta_recomendacion"
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

      {isMobile ? (
        <StickyBanner
          bannerButton={
            <Button
              color="purple"
              href={process.env.NEXT_PUBLIC_TYPEFORM_CANDIDATOS + `?oferta_id=${oferta?.id}`}
              size="sticky"
              label="Inscribirse a la Oferta"
            />
          }
        />
      ) : null}
      <DrawerNavbar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />

      <BreadCrumbOfertaSCHEMA empresaSlug={empresa?.slug} ofertaSlug={oferta?.slug} ofertaNombre={oferta?.nombre} />
    </>
  );
}

export default DetalleOferta;
