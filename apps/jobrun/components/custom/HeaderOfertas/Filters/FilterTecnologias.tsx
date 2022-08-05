import React, { useState } from 'react';

import Button from '../../../Button';
import { ITecnologia } from '../../../../shared/models';

import filterStyle from './FilterTecnologias.module.css';
import filterCommonStyle from './FilterCommon.module.css';

function FilterTecnologias({
  filtros,
  filterSelected,
  tecnologias = [],
  setFiltros = (e?: any) => {},
  setFilterSelected = (e?: any) => {},
}: {
  filtros: any;
  filterSelected: string;
  tecnologias: ITecnologia[];
  setFiltros: (e?: any) => void;
  setFilterSelected: (e?: any) => void;
}) {
  const [cierreFilterTecnologia, setCierreFilterTecnologia] = useState(false);

  function cerrarFiltroTecnologia() {
    setCierreFilterTecnologia(true);
    setFilterSelected('');

    setTimeout(() => {
      setCierreFilterTecnologia(false);
    }, 300);
  }

  return (
    <div>
      <div
        className={filterStyle.selectSecondLevel}
        style={
          filterSelected === 'tecnologia'
            ? { borderRadius: '0px 10px 0px 0px' }
            : cierreFilterTecnologia
            ? { borderRadius: '0px 10px 0px 0px' }
            : { borderRadius: '0px 10px 10px 0px' }
        }
        onClick={() =>
          filterSelected === 'tecnologia'
            ? cerrarFiltroTecnologia()
            : filtros?.tecnologia
            ? null
            : setFilterSelected('tecnologia')
        }
      >
        <div className={filterCommonStyle.buttonContent}>
          <div className={filterCommonStyle.buttonContent_Title}>
            <span style={{ fontSize: '18px', textAlign: 'start' }}>Tecnología</span>

            {filtros?.tecnologiaLabel && (
              <span className={filterCommonStyle.buttonContent_Label}>{filtros?.tecnologiaLabel}</span>
            )}
          </div>

          {filtros?.tecnologia ? (
            <div
              onClick={() => {
                setTimeout(() => {
                  setFiltros({ ...filtros, tecnologia: undefined, tecnologiaLabel: undefined, tecnologiaSlug: undefined });
                }, 200);
              }}
            >
              <Button dropdown="closeBlack" />
            </div>
          ) : (
            <Button dropdown={filterSelected === 'tecnologia' ? 'upBlack' : 'downBlack'} />
          )}
        </div>
      </div>

      {filterSelected === 'tecnologia' && (
        <div className={filterStyle.desplegableTecnologiaAbierto}>
          <div style={{ overflow: 'auto', width: '100%', height: '100%' }}>
            {tecnologias.map((tecnologia: ITecnologia, i: number) => (
              <div
                key={i}
                className={filterStyle.tecnologiaFilters}
                style={i === tecnologias.length - 1 ? {} : { borderBottom: '1px solid rgba(250, 250, 250, 0.2)' }}
                onClick={() => {
                  setFiltros({
                    ...filtros,
                    tecnologia: tecnologia?.id,
                    tecnologiaSlug: tecnologia.slug,
                    tecnologiaLabel: tecnologia.nombre,
                  });

                  cerrarFiltroTecnologia();
                }}
              >
                {tecnologia?.nombre}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterTecnologias;
