import React, { useState } from 'react';

import ToggleRemoto from '../../../ToggleRemoto';

function FilterModalidad({ setFiltros, filtros }: { setFiltros: any; filtros: any }) {
  const [isRemote, setIsRemote] = useState(filtros?.remote || false);

  return (
    <div style={{ width: '100%', height: '100%', minWidth: '200px' }}>
      <div
        onClick={() => {
          setIsRemote(!isRemote);
          setFiltros({ ...filtros, remote: !isRemote });
        }}
      >
        <ToggleRemoto isChecked={filtros?.remote ? filtros.remote : isRemote} />
      </div>
    </div>
  );
}

export default FilterModalidad;
