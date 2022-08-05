import React, { useState } from 'react';

import { REGIONENUM, REGIONVIEWENUM } from '../../../../shared/models';

import Button from '../../../Button';

import filterStyle from './FilterRegion.module.css';
import filterCommonStyle from './FilterCommon.module.css';

const REGION_FILTERS = [
  { label: REGIONVIEWENUM.LATAM, value: REGIONENUM.LATAM },
  { label: REGIONVIEWENUM.EUROPA, value: REGIONENUM.EUROPA },
];

function FilterRegion({
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
  const [cierreFilterRegion, setCierreFilterRegion] = useState(false);

  function cerrarFiltroRegion() {
    setCierreFilterRegion(true);
    setFilterSelected('');

    setTimeout(() => {
      setCierreFilterRegion(false);
    }, 300);
  }

  return (
    <div>
      <div
        className={filterStyle.selectSecondLevel}
        style={
          filterSelected === 'region'
            ? { borderRadius: '10px 0px 0px 0px', borderRight: '1px solid #171717' }
            : cierreFilterRegion
            ? { borderRadius: '10px 0px 0px 0px', borderRight: '1px solid #171717' }
            : { borderRadius: '10px 0px 0px 10px', borderRight: '1px solid #171717' }
        }
        onClick={() =>
          filterSelected === 'region' ? cerrarFiltroRegion() : filtros?.region ? null : setFilterSelected('region')
        }
      >
        <div className={filterCommonStyle.buttonContent}>
          <div className={filterCommonStyle.buttonContent_Title}>
            <span style={{ fontSize: '18px', textAlign: 'start' }}>Región</span>

            {filtros?.regionLabel && <span className={filterCommonStyle.buttonContent_Label}>{filtros?.regionLabel}</span>}
          </div>

          {filtros?.region ? (
            <div
              onClick={() => {
                setTimeout(() => setFiltros({ ...filtros, region: undefined, regionLabel: undefined }), 200);
              }}
            >
              <Button dropdown="closeBlack" />
            </div>
          ) : (
            <Button dropdown={filterSelected === 'region' ? 'upBlack' : 'downBlack'} />
          )}
        </div>
      </div>

      {filterSelected === 'region' && (
        <div className={filterStyle.desplegableRegionAbierto}>
          {REGION_FILTERS.map((filter, i) => (
            <div
              key={i}
              className={filterStyle.regionFilters}
              style={filter?.value === 'europa' ? {} : { borderBottom: '1px solid rgba(250, 250, 250, 0.2)' }}
              onClick={() => {
                setFiltros({ ...filtros, region: filter.value, regionLabel: filter.label });
                cerrarFiltroRegion();
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

export default FilterRegion;
