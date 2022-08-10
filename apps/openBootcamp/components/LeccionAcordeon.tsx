import React from 'react';
import Link from 'next/link';

import LinkOb from './LinkOb';

import style from './LeccionAcordeon.module.css';

const LeccionAcordeon = ({ modulo, slugCurso }: any) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [unmounting, setUnmounting] = React.useState<boolean>(false);
  const [rotate, setRotate] = React.useState<boolean>(false);

  /**
   * Método para abrir y cerrar un módulo del acordeón
   */
  const showLecciones = () => {
    if (!isOpen) {
      setIsOpen(true);
      setRotate(true);

      setTimeout(() => setRotate(false), 150);
    } else {
      setIsOpen(false);
      setUnmounting(true);

      setTimeout(() => setUnmounting(false), 130);
    }
  };

  /**
   * Método para convertir el tiempo que llega de la base de datos a XX:XX
   * @param minutos
   * @returns String tiempo
   */
  const convertirTiempo = (minutos: number) => {
    let horas = Math.floor(minutos / 60);
    let horasString = horas < 10 ? `0${horas}` : `${horas}`;
    let minutosFloor = Math.floor(minutos % 60);
    let minutosString = minutosFloor < 10 ? `0${minutosFloor}` : `${minutosFloor}`;

    if (minutos === 60) return '60:00';
    else return `${horasString}:${minutosString}`;
  };

  /**
   * Método para convertir tiempo de modulo de la bbdd a X h X min
   * @param minutos
   * @returns String tiempo
   */
  const convertirTiempoModulo = (minutos: number) => {
    let horas = Math.floor(minutos / 60);
    let minutosFloor = Math.floor(minutos % 60);

    if (minutos < 60) return `${minutosFloor} min`;
    else return minutosFloor === 0 ? `${horas} h` : `${horas} h ${minutosFloor} min`;
  };

  return !(modulo.lecciones.length === 0) ? (
    <div className={style.container}>
      <div onClick={() => showLecciones()} className={style.titleBox}>
        <div className={style.titleTime}>
          <span style={{ fontWeight: 'bold' }}>{modulo.titulo}</span>

          <div className={style.timeAndButton}>
            <div className={style.timeLecciones}>
              <span>
                {modulo.lecciones.length} {modulo.lecciones.length === 1 ? 'Lección' : 'Lecciones'}
              </span>
              <span>·</span>
              <span>{convertirTiempoModulo(modulo.meta.duracion)}</span>
            </div>
          </div>
        </div>

        <div className={isOpen ? (rotate ? style.buttonOpening : style.buttonOpen) : style.buttonClose}>
          <LinkOb iconOnly="caretDown" />
        </div>
      </div>

      <div className={isOpen ? (rotate ? style.containerOpening : style.containerOpen) : style.containerClosing}>
        {modulo.lecciones.map((leccion: any, index: number) => (
          <div className={isOpen ? style.isOpen : unmounting ? style.unmounting : style.isClose} key={index}>
            <span>{leccion.titulo}</span>

            <div className={style.timeAndWatch}>
              {leccion.landing ? (
                <Link href={`/cursos/${slugCurso}/${leccion.slug}`} passHref>
                  <a className={style.a}>Ver Lección</a>
                </Link>
              ) : null}

              <span>{convertirTiempo(leccion.duracion)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className={style.container}>
      <div onClick={() => showLecciones()} className={style.titleBox}>
        <span style={{ fontWeight: 'bold' }}>{modulo.titulo}</span>

        <div className={style.timeAndLecciones}>
          <div className={style.arrowVisibility}>
            <LinkOb iconOnly="caretDown" />
          </div>

          <div className={style.timeLecciones}>
            <span>{convertirTiempo(modulo.meta.duracion)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeccionAcordeon;
