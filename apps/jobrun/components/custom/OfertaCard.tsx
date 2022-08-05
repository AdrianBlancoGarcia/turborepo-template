import React from 'react';
import Image from 'next/future/image';

import {
  IOferta,
  IEmpresa,
  JORNADAENUM,
  JORNADAVIEWENUM,
  EXPERIENCIAVIEWENUM,
  PRESENCIALIDADENUM,
  PRESENCIALIDADVIEWENUM,
} from '../../shared/models';

import Tag from '../Tag';
import OfferCard from '../OfferCard';

import OfferCardDetailsItem from '../OfferCardDetailsItem';

import imagenEmpresa from '../../public/Empresa.png';

function OfertaCard({ oferta, empresa }: { oferta: IOferta; empresa?: IEmpresa }) {
  return (
    <OfferCard
      data-cy='offer_card'
      offerTitle={oferta?.nombre}
      href={`/empresas/${oferta?.empresa?.slug || empresa?.slug}/${oferta?.slug}`}
      businessIcon={
        <Image
          width={52}
          height={52}
          loading="lazy"
          src={oferta?.empresa?.imagen?.url || empresa?.imagen?.url || imagenEmpresa}
          alt={`Imagen de la empresa ${oferta?.empresa?.nombre || empresa?.nombre}`}
        />
      }
      businessName={oferta?.empresa?.nombre || empresa?.nombre || '-'}
      salario={`${oferta?.salarioMin}€ - ${oferta?.salarioMax}€`}
      experiencia={
        oferta?.experiencia === EXPERIENCIAVIEWENUM.JUNIOR
          ? 'Sin experiencia'
          : oferta?.experiencia === EXPERIENCIAVIEWENUM.SENIOR
          ? 'Senior'
          : oferta?.experiencia === EXPERIENCIAVIEWENUM.SEMISENIOR
          ? 'Junior'
          : 'No especificado'
      }
      tags={oferta?.tecnologias?.map((tag, i) => (
        <Tag key={i} content={tag?.nombre} />
      ))}
      detailItems={
        <>
          <OfferCardDetailsItem
            type="jornada"
            title={
              oferta?.jornada === JORNADAENUM.COMPLETA
                ? JORNADAVIEWENUM.COMPLETA
                : oferta?.jornada === JORNADAENUM.PARCIAL
                ? JORNADAVIEWENUM.PARCIAL
                : ''
            }
          />

          <OfferCardDetailsItem
            type="remote"
            title={
              oferta?.presencialidad === PRESENCIALIDADENUM.REMOTO
                ? PRESENCIALIDADVIEWENUM.REMOTO
                : oferta?.presencialidad === PRESENCIALIDADENUM.PRESENCIAL
                ? PRESENCIALIDADVIEWENUM.PRESENCIAL
                : oferta?.presencialidad === PRESENCIALIDADENUM.MIXTO
                ? PRESENCIALIDADVIEWENUM.MIXTO
                : ''
            }
          />

          <OfferCardDetailsItem type="ciudad" title={oferta?.comunidad?.nombre} />
        </>
      }
    />
  );
}

export default OfertaCard;
