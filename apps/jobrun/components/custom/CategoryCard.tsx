import React from 'react';
import Link from 'next/link';

import { ICategoria } from '../../shared/models';
import CategoriaCard from './CategoriaCard';

function CategoryCard({ categoria, label, href }: { categoria?: ICategoria; label?: string; href: string }) {
  return (
    <Link href={href} prefetch={false}>
      <a>
        <CategoriaCard label={categoria?.nombre || label} icono={categoria?.icono?.svg} fondo={categoria?.fondo?.url} />
      </a>
    </Link>
  )
}

export default CategoryCard;
