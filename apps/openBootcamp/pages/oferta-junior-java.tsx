import * as React from 'react';

import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next/types';

import OfertaDetail from '../components/OfertaDetailJava/OfertaDetail';

export const getStaticProps: GetStaticProps = async () => {
  const offer = {
    nombre: 'Programador Java Jr.',
    descripcion:
      'Para una empresa especializada en servicios de BPO, Factoría de Software y Soporte Avanzado buscamos desarrolladores Java que participen en un proyecto para la administración pública.',
    tecnologias: [
      'Servicio de firma electrónica, para la gestión de operaciones de firma de documentos.',
      'Sellado de documentos con CSV (Código Seguro de Verificación) y validación de firmas y certificados.',
      'Se usa también el componente de firma no criptográfica.',
      'BBDD Oracle.',
      'Sistemas de gestión documental. ',
      'Portafirmas electrónico.',
      'Nuxeo.',
      'Plugin de OCR.',
      'ENS.',
      'LDAP.',
      'PostgreSQL.',
      'DatapoweR.',
      '@FIRMA.',
    ],
    experiencia: 'Experiencia mínima de un año en análisis y programación en entornos de aplicaciones Java EE.',
    modalidad: 'Remoto, preferiblemente en Sevilla o Madrid por si la empresa requiere hacer reuniones en sus instalaciones.',
    salario: '18.000€ a 20.000€ brutos anuales.',
    titulacion: 'Al menos FPII relacionado con las TIC.',
    typeform:'https://imagina-formacion.typeform.com/to/EMQ65HqW',
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
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/oferta-junior-java`}
        description="Fórmate como desarrollador FullStack de forma gratuita."
        openGraph={{
          type: 'website',
          description: `Fórmate como desarrollador FullStack de forma gratuita.`,
          title: `${process.env.NEXT_PUBLIC_BASE_NAME} | Oferta Junior Software Engineer`,
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/oferta-junior-java`,
        }}
      />

      <div style={{ position: 'relative' }}>
        <OfertaDetail data={offer} />
      </div>
    </>
  );
}

export default OfertaJunior;
