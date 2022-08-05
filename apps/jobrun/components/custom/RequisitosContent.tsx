import React from 'react';

import ItemBadge from '../ItemBadge';
import OfferRequirements from '../OfferRequirements';

import { EXPERIENCIAVIEWENUM, IOferta } from '../../shared/models';

function RequisitosContent({ oferta }: { oferta: IOferta }) {
  return (
    <>
      {oferta?.experiencia && (
        <OfferRequirements
          type="skills"
          experienceYears={
            oferta?.experiencia === EXPERIENCIAVIEWENUM.JUNIOR
              ? '(Experiencia de 0 a 2 años)'
              : oferta?.experiencia === EXPERIENCIAVIEWENUM.SEMISENIOR
              ? '(Experiencia de 2 a 5 años)'
              : oferta?.experiencia === EXPERIENCIAVIEWENUM.SENIOR
              ? '(Experiencia superior a 5 años)'
              : 'No especificado.'
          }
          skillItems={oferta?.tecnologias?.map((tecnologia, i) => (
            <ItemBadge type="skill" key={i} label={tecnologia?.nombre} />
          ))}
        />
      )}

      {oferta?.idiomas && (
        <OfferRequirements
          type="languages"
          languageItems={oferta?.idiomas?.map((idioma, i) => (
            <ItemBadge key={i} type="language" label={idioma?.nombre} />
          ))}
        />
      )}

      {oferta?.requisitosArray && (
        <OfferRequirements
          type="others"
          list={oferta?.requisitosArray?.map((requisito: string, i: number) => (
            <li key={i}>{requisito}</li>
          ))}
        />
      )}
    </>
  );
}

export default RequisitosContent;
