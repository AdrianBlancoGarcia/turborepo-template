import React, { useState } from 'react';
import Header from '../../Header';
import FilterItems from '../../FilterItems';
import { ICategoria, ITecnologia } from '../../../shared/models';

import FilterPuesto from './Filters/FilterPuesto';
import FilterRegion from './Filters/FilterRegion';
import FilterModalidad from './Filters/FilterModalidad';
import FilterExperiencia from './Filters/FilterExperiencia';
import FilterTecnologias from './Filters/FilterTecnologias';

import style from './HeaderOfertas.module.css';

function HeaderOfertas({
  filtros,
  setFiltros,
  categorias,
  tecnologias,
  setOpenDrawer,
}: {
  filtros: any;
  categorias: ICategoria[];
  tecnologias: ITecnologia[];
  setFiltros: (e?: any) => void;
  setOpenDrawer: (e?: any) => void;
}) {
  const [filterSelected, setFilterSelected] = useState('');

  return (
    <>
      <Header
        filters={
          <>
            <FilterItems _class="modalidad" content={<FilterModalidad filtros={filtros} setFiltros={setFiltros} />} />

            <FilterItems
              _class="puesto"
              content={
                <div className={style.secondLevelFilterGroup}>
                  <FilterRegion
                    filtros={filtros}
                    setFiltros={setFiltros}
                    filterSelected={filterSelected}
                    setFilterSelected={setFilterSelected}
                  />

                  <FilterPuesto
                    filtros={filtros}
                    setFiltros={setFiltros}
                    categorias={categorias}
                    filterSelected={filterSelected}
                    setFilterSelected={setFilterSelected}
                  />

                  <FilterExperiencia
                    filtros={filtros}
                    setFiltros={setFiltros}
                    filterSelected={filterSelected}
                    setFilterSelected={setFilterSelected}
                  />

                  <FilterTecnologias
                    filtros={filtros}
                    setFiltros={setFiltros}
                    tecnologias={tecnologias}
                    filterSelected={filterSelected}
                    setFilterSelected={setFilterSelected}
                  />
                </div>
              }
            />
          </>
        }
      />
    </>
  );
}

export default HeaderOfertas;
