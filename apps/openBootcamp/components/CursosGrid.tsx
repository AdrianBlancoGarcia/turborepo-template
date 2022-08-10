import Link from 'next/link';
import Image from 'next/image';

import { ICurso } from '../shared/models';

import CourseLandingItem from './CourseLandingItem';

import style from './CursosGrid.module.css';

const CursosGrid = ({ cursos }: { cursos: ICurso[] }) => {
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
              <CourseLandingItem
                courseTitle={curso?.titulo}
                courseImg={
                  <Image
                    loading="lazy"
                    layout="fill"
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
