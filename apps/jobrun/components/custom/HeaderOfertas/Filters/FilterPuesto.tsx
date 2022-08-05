import React from 'react';

import Button from '../../../Button';
import { ICategoria } from '../../../../shared/models';

import filterStyle from './FilterPuesto.module.css';
import filterCommonStyle from './FilterCommon.module.css';

function FilterPuesto({
  filtros,
  filterSelected,
  categorias = [],
  setFiltros = (e?: any) => {},
  setFilterSelected = (e?: any) => {},
}: {
  filtros: any;
  filterSelected: string;
  categorias: ICategoria[];
  setFiltros: (e?: any) => void;
  setFilterSelected: (e?: any) => void;
}) {
  function cerrarFiltroPuesto() {
    setFilterSelected('');
  }

  return (
    <div>
      <div
        className={filterStyle.selectSecondLevel}
        style={{ borderRight: '1px solid #171717' }}
        onClick={() =>
          filterSelected === 'puesto' ? cerrarFiltroPuesto() : filtros?.puesto ? null : setFilterSelected('puesto')
        }
      >
        <div className={filterCommonStyle.buttonContent}>
          <div className={filterCommonStyle.buttonContent_Title}>
            <span style={{ fontSize: '18px', textAlign: 'start' }}>Especialidad</span>

            {filtros?.puestoLabel && <span className={filterCommonStyle.buttonContent_Label}>{filtros?.puestoLabel}</span>}
          </div>

          {filtros?.puesto ? (
            <div
              onClick={() => {
                setTimeout(() => {
                  setFiltros({ ...filtros, puesto: undefined, puestoLabel: undefined, puestoSlug: undefined });
                }, 200);
              }}
            >
              <Button dropdown="closeBlack" />
            </div>
          ) : (
            <Button dropdown={filterSelected === 'puesto' ? 'upBlack' : 'downBlack'} />
          )}
        </div>
      </div>

      {filterSelected === 'puesto' && (
        <div className={filterStyle.desplegablePuestoAbierto}>
          <div style={{ overflow: 'auto', width: '100%', height: '100%' }}>
            {categorias
              .filter((filter: any) => filter?.nombre?.toLowerCase() !== 'remoto')
              .map((filter, i) => (
                <div
                  key={i}
                  className={filterStyle.puestoFilters}
                  style={i === categorias?.length - 1 ? {} : { borderBottom: '1px solid rgba(250, 250, 250, 0.2)' }}
                  onClick={() => {
                    setFiltros({ ...filtros, puesto: filter.id, puestoLabel: filter.nombre, puestoSlug: filter.slug });
                    cerrarFiltroPuesto();
                  }}
                >
                  {filter.nombre}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterPuesto;
