import { useState } from 'react';

import Image from 'next/future/image';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { IEmpresa } from '../../shared/models';
import { getEmpresas } from '../../shared/middlewares';

import Banner from '../../components/Banner';
import Button from '../../components/Button';
import CompanyCard from '../../components/CompanyCard';
import NavbarDetalle from '../../components/custom/NavbarDetalle';
import DrawerNavbar from '../../components/custom/Drawer/DrawerNavbar';

import { PlasmicEmpresas } from '../../components/plasmic/job_run/PlasmicEmpresas';

import imagenEmpresa from '../../public/Empresa.png';
import FooterCustom from '../../components/custom/FooterCustom';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const empresas = await getEmpresas({ query: '?limit=1000000' });

  return {
    props: { empresas: empresas?.data || null },
    revalidate: 60,
  };
};

function Empresas({ empresas }: { empresas: IEmpresa[] }) {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <NextSeo
        title="Conoce las empresas que colaboran con JobRun"
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}` + '/empresas'}
        openGraph={{
          type: 'website',
          title: 'Conoce las empresas que colaboran con JobRun',
          url: `${process.env.NEXT_PUBLIC_BASE_URL}` + '/empresas',
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@JobRun_Dev',
        }}
      />
        <PlasmicEmpresas
          heading="Conoce las empresas que colaboran con JobRun"
          navbar={<NavbarDetalle setOpenDrawer={setOpenDrawer} />}
          totalCompanies={(empresas?.length || 0) + ' empresas ofertando'}
          companiesContent={empresas?.map((empresa, i) => (
            <CompanyCard
              data-cy="company_card"
              key={i}
              href={`/empresas/${empresa?.slug}`}
              companyName={empresa?.nombre}
              location={empresa?.comunidad?.nombre}
              flagIcon={empresa?.pais?.bandera || '❓'}
              workers={empresa?.numEmpleados == 1 ? '1 Empleado' : empresa?.numEmpleados + ' Empleados'}
              companyImg={
                <Image
                  width={72}
                  height={72}
                  loading="lazy"
                  src={empresa?.imagen?.url || imagenEmpresa}
                  alt={`Imagen de la empresa ${empresa?.nombre}`}
                />
              }
            />
          ))}
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
    </>
  );
}

export default Empresas;
