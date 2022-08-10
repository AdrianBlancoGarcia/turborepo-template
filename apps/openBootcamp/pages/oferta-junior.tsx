import * as React from 'react';

import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next/types';

import OfertaDetail from '../components/OfertaDetail/OfertaDetail';

export const getStaticProps: GetStaticProps = async () => {
  const offer = {
    nombre: 'Junior Software Engineer',
    descripcion:
      'Somos una empresa referente en odontología a domicilio, tercera edad y personas dependientes, que creamos una  tecnología para que los dentistas puedan realizar sus tratamientos onsite. Como Junior Software Engineer sos una parte clave para nuestro producto digital en constante evolución: vas a aprender y  trabajar con múltiples tecnologías tanto en nuestra aplicación móvil, como con nuestro CRM, en backoffice, sistema de voz y proyectos súper desafiantes. Queremos que entres como junior y crezcas junto a nosotros.',
    tareas: [
      'Se encargará de mantener y mejorar la tecnología que hace posible la atención odontológica a domicilio a través de una app propia.',
      'Estará a cargo de los futuros proyectos del área tecnológica de la compañía.',
      'Trabajo con BBDD y múltiples lenguajes (Google Flutter, Swift/Objective C, Node JS, Rest API, Backend), integraciones tecnológicas.',
      'Investigación y mejora mediante nuevas tecnologías',
    ],
    habilidades: [
      'Conocimiento en Google Flutter.',
      'Contacto previo con aplicaciones de IPhone y Android.',
      'Conocimientos de bases de datos relacionales, y si sabes de no relacionales, aún mejor.',
      'Haber programado en sistemas cliente/servidor (REST Api’s, NodeJs…).',
      'Desarrollo Web.',
    ],
    modalidad: 'Trabajo Presencial con Home Office y flexibilidad en Barcelona.',
    salario: 'Salario acorde a experiencia.',
    typeform:'https://imagina-formacion.typeform.com/to/xMSBZdJm',
    beneficios: [
      'Capacitación intensiva los primeros 3 meses.',
      'Posibilidad de crecimiento en la compañía.',
      'GYM.',
      'Fisioterapia.',
      'Plan de carrera.',
      'Bonus por objetivos.',
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
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/oferta-junior`}
        description="Fórmate como desarrollador FullStack de forma gratuita."
        openGraph={{
          type: 'website',
          description: `Fórmate como desarrollador FullStack de forma gratuita.`,
          title: `${process.env.NEXT_PUBLIC_BASE_NAME} | Oferta Junior Software Engineer`,
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/oferta-junior`,
        }}
      />

      <div style={{ position: 'relative' }}>
        <OfertaDetail data={offer} />
      </div>
    </>
  );
}

export default OfertaJunior;
