import React from 'react';

import Button from '../../../Button';

import { EXPERIENCIAENUM } from '../../../../shared/models';

import filterStyle from './FilterExperiencia.module.css';
import filterCommonStyle from './FilterCommon.module.css';

const EXPERIENCIA_FILTERS = [
  { label: 'Sin experiencia', value: EXPERIENCIAENUM.JUNIOR },
  { label: 'Junior', value: EXPERIENCIAENUM.SEMISENIOR },
  { label: 'Senior', value: EXPERIENCIAENUM.SENIOR },
];

function FilterExperiencia({
  filtros,
  filterSelected,
  setFiltros = (e?: any) => {},
  setFilterSelected = (e?: any) => {},
}: {
  filtros: any;
  filterSelected: string;
  setFiltros: (e?: any) => void;
  setFilterSelected: (e?: any) => void;
}) {
  function cerrarFiltroExperiencia() {
    setFilterSelected('');
  }

  return (
    <div>
      <div
        className={filterStyle.selectSecondLevel}
        style={{ borderRight: '1px solid #171717' }}
        onClick={() =>
          filterSelected === 'experiencia'
            ? cerrarFiltroExperiencia()
            : filtros?.experiencia
            ? null
            : setFilterSelected('experiencia')
        }
      >
        <div className={filterCommonStyle.buttonContent}>
          <div className={filterCommonStyle.buttonContent_Title}>
            <span style={{ fontSize: '18px', textAlign: 'start' }}>Experiencia</span>

            {filtros?.experienciaLabel && (
              <span className={filterCommonStyle.buttonContent_Label}>{filtros?.experienciaLabel}</span>
            )}
          </div>

          {filtros?.experiencia ? (
            <div
              onClick={() => {
                setTimeout(() => {
                  setFiltros({ ...filtros, experiencia: undefined, experienciaLabel: undefined });
                }, 200);
              }}
            >
              <Button dropdown="closeBlack" />
            </div>
          ) : (
            <Button dropdown={filterSelected === 'experiencia' ? 'upBlack' : 'downBlack'} />
          )}
        </div>
      </div>

      {filterSelected === 'experiencia' && (
        <div className={filterStyle.desplegableExperienciaAbierto}>
          {EXPERIENCIA_FILTERS.map((filter, i) => (
            <div
              key={i}
              className={filterStyle.experienciaFilters}
              style={filter?.value === 'senior' ? {} : { borderBottom: '1px solid rgba(250, 250, 250, 0.2)' }}
              onClick={() => {
                setFiltros({ ...filtros, experiencia: filter.value, experienciaLabel: filter.label });

                cerrarFiltroExperiencia();
              }}
            >
              {filter.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterExperiencia;
