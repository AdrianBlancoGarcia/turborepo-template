import React from 'react';
import Image from 'next/future/image';

import AdvantageItem from '../AdvantageItem';
import OfferAdvantages from '../OfferAdvantages';

import { IOferta } from '../../shared/models';

import Icon8Icon from '../plasmic/job_run/icons/PlasmicIcon__Icon8';

function BeneficiosList({ oferta }: { oferta: IOferta }) {
  return (
    <div style={{ display: 'flex', width: '100%', height: 'auto' }}>
      {oferta?.beneficios && (
        <OfferAdvantages
          list={oferta?.beneficios?.map((beneficio, i) => (
            <AdvantageItem
              key={i}
              advantageTitle={beneficio?.nombre}
              advantageText={beneficio?.descripcion}
              advantageIcon={
                beneficio?.icono?.svg ? (
                  <Image
                    width={32}
                    height={32}
                    loading="lazy"
                    alt={`Icono de ${beneficio?.icono?.nombre}`}
                    src={`data:image/svg+xml;utf8,${beneficio?.icono?.svg}`}
                  />
                ) : (
                  <Icon8Icon width={32} height={32} />
                )
              }
            />
          ))}
        />
      )}
    </div>
  );
}

export default BeneficiosList;
