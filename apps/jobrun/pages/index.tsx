import { useState } from 'react';

import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

const OffersSection = dynamic(() => import('../components/OffersSection'));
const DrawerNavbar = dynamic(() => import('../components/custom/Drawer/DrawerNavbar'));

import Banner from '../components/Banner';
import Button from '../components/Button';
import NavbarHome from '../components/custom/NavbarHome';
import HeroSliderItem from '../components/HeroSliderItem';
import { OfertasDestacadas, Tabs } from '../components/custom/OfertasDestacadas';

import { IOferta } from '../shared/models';
import { getOfertas } from '../shared/middlewares';

import { PlasmicHome } from '../components/plasmic/job_run/PlasmicHome';
import Icon2RIcon from '../components/plasmic/job_run/icons/PlasmicIcon__Icon2Rsvg';

import { PlasmicHeroSliderItem__VariantMembers } from '../components/plasmic/job_run/PlasmicHeroSliderItem';

import buttonStyle from '../styles/HeroButton.module.css';
import FooterCustom from '../components/custom/FooterCustom';
import { useMediaQuery } from '../shared/utils';

type HomeProps = {
  tabs: [{ label: string; state: number }];
  ofertasDestacadas: IOferta[];
};

const categoriasHeroItems: { label: string; link: string; variant: PlasmicHeroSliderItem__VariantMembers['category'] }[] = [
  { label: 'En remoto', link: '/ofertas/remoto', variant: 'remoto' },
  { label: 'FullStack', link: '/ofertas/fullstack', variant: 'fullStack' },
  { label: 'Front-End', link: '/ofertas/front-end', variant: 'frontEnd' },
  { label: 'Back-End', link: '/ofertas/back-end', variant: 'backEnd' },
];

export const getStaticProps: GetStaticProps = async () => {
  const ofertasDestacadas = await getOfertas({ query: '?descatado=true' });

  const tabs = [
    { label: 'OFERTAS EN REMOTO', state: 0 },
    { label: 'FULLSTACK', state: 3 },
    { label: 'FRONTEND', state: 1 },
    { label: 'BACKEND', state: 2 },
  ];

  return {
    props: { tabs, ofertasDestacadas: ofertasDestacadas?.data || [] },
    revalidate: 60,
  };
};

function Home({ tabs, ofertasDestacadas = [] }: HomeProps) {
  const router = useRouter();

  const [state, setState] = useState(0);
  const isMobile = useMediaQuery('(max-width: 1200px)');
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <NextSeo
        title="Únete a JobRun y encuentra empleo como desarrollador"
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}`}
        description="¿Buscas Empleo como Desarrollador? Descubre aquí todas las Ofertas de Trabajo como Programador."
        openGraph={{
          type: 'website',
          description: '¿Buscas Empleo como Desarrollador? Descubre aquí todas las Ofertas de Trabajo como Programador.',
          title: 'Únete a JobRun y encuentra empleo como desarrollador',
          url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@JobRun_Dev',
        }}
      />
        <PlasmicHome
          navbar={<NavbarHome isHome setOpenDrawer={setOpenDrawer} />}
          categoriasHero={categoriasHeroItems.map((item, idx) => (
            <HeroSliderItem
              key={idx}
              href={item.link}
              title={item.label}
              category={item.variant}
              ctaOfertas={
                <Button
                  showEndIcon
                  size="linkOnly"
                  color="whiteText"
                  label="Ver ofertas"
                  href={item.link}
                  icon={<Icon2RIcon width="20px" height="20px" color="#FFF" />}
                  onClick={() => router.push(item.link)}
                />
              }
            />
          ))}
          ctaHero={
            <Button
              data-cy="cta_hero"
              color="gradientRound"
              label="Apuntate al cambio"
              size={isMobile ? 'strech' : 'large'}
              className={buttonStyle.gradientButton}
              onClick={() => router.push(process.env.NEXT_PUBLIC_TYPEFORM_CANDIDATOS + '')}
            />
          }
          ctaTalento={
            <Button
              data-cy="cta_talento"
              size="large"
              color="yellow"
              label="Contrata talento"
              onClick={() => router.push(process.env.NEXT_PUBLIC_TYPEFORM_EMPRESAS + '')}
            />
          }
          ctaTalentoMobile={
            <Button
              data-cy="cta_talento_mobile"
              size="strech"
              color="yellow"
              label="Contrata talento"
              onClick={() => router.push(process.env.NEXT_PUBLIC_TYPEFORM_EMPRESAS + '')}
            />
          }
          ctaPublicar={
            <Button
              data-cy="cta_publicar"
              color="navy"
              label="Publicar una oferta"
              size={isMobile ? 'strech' : 'medium'}
              onClick={() => router.push(process.env.NEXT_PUBLIC_TYPEFORM_EMPRESAS + '')}
            />
          }
          ctaFormacion={
            <Button
              data-cy="cta_formacion"
              color="whiteTransparent"
              label="Acceder a las formaciones"
              size={isMobile ? 'strech' : 'medium'}
              onClick={() => router.push(process.env.NEXT_PUBLIC_CAMPUS_URL + '')}
            />
          }
          ctaOfertas={
            isMobile ? (
              <Button data-cy="cta_ofertas" color="darkBlue" label="Ver todas las ofertas" size="strech" href="/ofertas" />
            ) : (
              <Button data-cy="cta_ofertas" color="darkBlue" label="Ver todas las ofertas" size="medium" href="/ofertas" />
            )
          }
          banner={
            <Banner
              ctaRecomendacion={
                <Button
                  data-cy="cta_recomendacion"
                  color="white"
                  size="medium"
                  label="Ver ofertas que recomendar"
                  onClick={() => router.push(process.env.NEXT_PUBLIC_TYPEFORM_RECOMENDADOS + '')}
                />
              }
            />
          }
          offersSection={
            <OffersSection
              tabBar={<Tabs tabs={tabs} state={state} setState={setState} />}
              offerContent={<OfertasDestacadas ofertas={ofertasDestacadas} state={state} />}
            />
          }
          footer={<FooterCustom />}
        />

      <DrawerNavbar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </>
  );
}

export default Home;
