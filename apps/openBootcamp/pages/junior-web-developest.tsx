import * as React from 'react';

import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next/types';

import OfertaDetail from '../components/OfertaDetailImagina/OfertaDetail';

export const getStaticProps: GetStaticProps = async () => {
  const offer = {
    nombre: 'Junior Web Developer & Tutor Online.',
    descripcion:
      'Desde Imagina, llevamos formando a más de 1200 empresas, los últimos 12 años, lo que se traduce en más de 50.000 expertos. Somos líderes en el área de la transferencia tecnológica, gracias a la confianza de nuestros clientes. La persona que entre con esta vacante se unirá al equipo de desarrollo y contenidos para mejorar nuestro campus y ERP, así como nuestros cursos.',
    pedimos: [
      'Conocimiento en ReactJS.',
      'Se valorará positivamente conocimientos en tecnologías de back, especialmente AdonisJS.',
      'Capacidad de aprendizaje y flexibilidad frente a nuevas tecnologias.',
    ],
    tareas: [
      'Mantenimiento de ERP y campus de la empresa.',
      'Corregir ejercicios, resolver dudas, generar y validar contenido sobre distintas tecnologías.'
    ],
    modalidad: 'Trabajo presencial en Valencia',
    salario: '18.000€ brutos anuales.',
    jornada: 'Jornada completa',
    typeform: 'https://imagina-formacion.typeform.com/to/qtZlZ22w',
    beneficios: [
      'Acceso a formación gratuita en tecnologías punteras.',
      'Gimnasio y piscina.',
    ],
  };
  return {
    props: { offer },
    revalidate: 60,
  };
};

function OfertaJunior({ offer }: { offer: {} }) {
  return (
    <>
      <NextSeo
        noindex
        title={`${process.env.NEXT_PUBLIC_BASE_NAME} | Oferta Junior Software Engineer`}
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/junior-web-developest`}
        description="Fórmate como desarrollador FullStack de forma gratuita."
        openGraph={{
          type: 'website',
          description: `Fórmate como desarrollador FullStack de forma gratuita.`,
          title: `${process.env.NEXT_PUBLIC_BASE_NAME} | Oferta Junior Software Engineer`,
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/junior-web-developest`,
        }}
      />

      <div style={{ position: 'relative' }}>
        <OfertaDetail data={offer} />
      </div>
    </>
  );
}

export default OfertaJunior;
