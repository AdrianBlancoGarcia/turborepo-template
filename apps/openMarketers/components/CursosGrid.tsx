import Link from 'next/link';
import Image from 'next/image';

import { ICurso } from '../shared/models';

import style from './CursosGrid.module.css';
import ModuleItemCard from './ModuleItemCard';

const CursosGrid = ({ cursos }: { cursos: ICurso[] }) => {
  
  const minToH = (m: any) => {
    if (m === null) return '-'
    const h = Math.floor(m / 60) + 'h';
    return h;
  };

  return !cursos ? (
    <>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8]?.map((item, index: number) => (
        <div key={index}>
          <div className={style.skeleton} />
        </div>
      ))}
    </>
  ) : (
    <>
      {cursos?.map((curso: ICurso, index: number) => (
        <div key={index}>
          <Link href={`/cursos/${curso?.slug}`} passHref>
            <a className={style.cursoItem}>
              <ModuleItemCard
                detailsTitle={(minToH(curso?.meta?.duracionTotal))}
                titulo={curso?.titulo}
                moduleIcon={
                  <Image
                    loading='lazy'
                    layout='fill'
                    alt={curso?.keyword || `Curso de ${curso?.titulo}`}
                    src={`data:image/svg+xml;utf8,${curso?.icono}`}
                  />
                }
              />
            </a>
          </Link>
        </div>
      ))}
    </>
  );
};

export default CursosGrid;
