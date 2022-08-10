import React from 'react';
import AccordionButton from './AccordionButton';
import LeccionAcordeon from './LeccionAcordeon';
import style from './AcordeonLecciones.module.css'

const AcordeonLecciones = ({ curso }: { curso?: any }) => {
  const [numLecciones, setNumLecciones] = React.useState(5);
  const [button, setButton] = React.useState(true);
  const [modulos, setModulos] = React.useState([]);

  /**
   * UseEffect que suma 5 modulos más en el acordeon de modulos, y ademas desactiva el botón si detecta fin de carrera.
   */
  React.useEffect(() => {
    setModulos(curso?.modulos?.filter((modulo: any, index: number) => index <= numLecciones - 1));

    if (numLecciones >= curso?.modulos?.length) setButton(false);
  }, [numLecciones, curso]);

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {modulos?.map((modulo: any, index: number) => (
        <LeccionAcordeon key={index} modulo={modulo} slugCurso={curso?.slug} className={style.transition} />
      ))}

      <div style={{ marginTop: '20px', width: '100%', cursor: 'pointer' }} onClick={() => setNumLecciones(numLecciones + 5)}>
        {
          button ? 
          (curso?.modulos?.length <= 5 ? null : <AccordionButton buttonText={'Mostrar más'} />)
          :
          null
        }
      </div>
    </div>
  );
};

export default AcordeonLecciones;
