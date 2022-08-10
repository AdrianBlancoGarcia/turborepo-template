import * as React from 'react';

import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next/types';

import OfertaDetail from '../components/OfertaDetailJava/OfertaDetail';
import OfertaDetailAngular from '../components/OfertaDetailAngular/OfertaDetail';

export const getStaticProps: GetStaticProps = async () => {
  const offer = {
    nombre: 'Prenomics - Jr. Angular',
    descripcion:
      '¿Te gusta el desarrollo de software y al mismo tiempo te preocupas por las necesidades del usuario y la interacción con el software? ¿Te interesa la experiencia del usuario y quieres estar en la intersección entre un diseño de software robusto y una interfaz de aplicación fluida y centrada en el usuario? Como Ingeniero de Software Front-End Junior, serás responsable de desarrollar componentes robustos y computacionalmente eficientes junto con una experiencia de usuario intuitiva que proporcione al usuario la información adecuada para las interacciones críticas.',
    tecnologias: [
      'Desarrollo de nuestra plataforma de analítica inteligente en Angular 11+',
      'Componentes stateless y stateful',
      'Almacenes reactivos de observables rxjs',
      'Pruebas con Karma, Jasmine, Protractor, Jest, Cypress',
      'Uso de varias librerías js muy potentes',
      'Todo lo que esté relacionado con los últimos desarrollos en tecnología frontend',
    ],
    requisitos: [
      'Apasionado por el desarrollo frontend y la ingeniería de software',
      'Experiencia probada con Javascript y desarrollo frontend',
      'Interés, conocimiento o, mejor aún, alguna experiencia práctica con un framework de frontend como Angular, React/NextJS/Gatsby, Vue/NuxtJS, etc',
      'Si tienes experiencia con Typescript, RxJS, Lodash, o cualquier otra librería JS relevante',
    ],
    modalidad: 'Presencialidad mixta con ubicación en Barcelona. Jornada completa.',
    salario: '22k - 30k €/Año',
    typeform: 'https://imagina-formacion.typeform.com/to/wPZV2enq',
    beneficios: [
      'Un entorno de trabajo cercano.',
      'Flexibilidad.',
      'Experiencias de team building.',
      'Política de retribución flexible en la que puedes elegir seguro médico.',
      'Cheques restaurante.',
      'Bonos transporte con un coste menor y que se descuenta del IRPF.',
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
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/angular-junior-barcelona`}
        description="Fórmate como desarrollador FullStack de forma gratuita."
        openGraph={{
          type: 'website',
          description: `Fórmate como desarrollador FullStack de forma gratuita.`,
          title: `${process.env.NEXT_PUBLIC_BASE_NAME} | Oferta Junior Software Engineer`,
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/angular-junior-barcelona`,
        }}
      />

      <div style={{ position: 'relative' }}>
        <OfertaDetailAngular data={offer} />
      </div>
    </>
  );
}

export default OfertaJunior;
