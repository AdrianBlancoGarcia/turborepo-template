import React from 'react'
import { IEmpresa, IOferta } from '../../shared/models'
import RelatedOffers from '../RelatedOffers'
import OfertaCard from './OfertaCard'

function OfertasRelacionadas({empresa, ofertas, oferta}:{empresa: IEmpresa, ofertas: IOferta[], oferta: IOferta}) {
  return (
    <>
    {empresa?.ofertas && (
        <div
          style={empresa?.ofertas?.length <= 1 ? { display: 'none' } : { display: 'flex', width: '100%', height: '100%' }}
        >
          <RelatedOffers
            otrasOfertas={'Otras ofertas de ' + oferta?.categoria?.nombre}
            companyOffers={ofertas
              ?.filter((ofertaRelacionada) => ofertaRelacionada?.categoriaId === oferta?.categoriaId)
              ?.map((ofertaRelacionada, i) => (
                <OfertaCard key={i} oferta={ofertaRelacionada} />
              ))}
          />
        </div>
      )}
    </>
  )
}

export default OfertasRelacionadas