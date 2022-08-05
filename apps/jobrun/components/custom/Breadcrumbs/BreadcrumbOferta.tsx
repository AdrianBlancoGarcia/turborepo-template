import Link from 'next/link';
import React from 'react';
import BreadcrumbItem from '../../BreadcrumbItem';

import breadcrumbStyle from '../../../styles/breadcrumb.module.css';
import { BreadcrumbJsonLd } from 'next-seo';

export function BreadcrumbOferta({ nombreOferta }: { nombreOferta: string }) {
  return (
    <>
      <BreadcrumbItem
        className={breadcrumbStyle.breadcrumbParentChild}
        hierarchy="parent"
        breadcrumbParent={<Link href="/">JobRun</Link>}
      />

      <BreadcrumbItem
        className={breadcrumbStyle.breadcrumbParentChild}
        hierarchy="parent"
        breadcrumbParent={<Link href={'/ofertas'}>Ofertas</Link>}
      />

      <BreadcrumbItem className={breadcrumbStyle.breadcrumbParentChild} hierarchy="child" breadcrumbChild={nombreOferta} />

      {/*TODO: Meter slot breadcrumb */}
      <BreadcrumbItem
        className={breadcrumbStyle.breadcrumbChildLast}
        hierarchy="childLast"
        breadcrumbChildLast={<Link href={'/ofertas'}>Ofertas</Link>}
      />
    </>
  );
}

export function BreadCrumbOfertaSCHEMA({ empresaSlug, ofertaSlug, ofertaNombre }: any) {
  return (
    <BreadcrumbJsonLd
      itemListElements={[
        { position: 1, name: 'JobRun', item: process.env.NEXT_PUBLIC_BASE_URL },
        { position: 2, name: 'Ofertas', item: process.env.NEXT_PUBLIC_BASE_URL + '/ofertas' },
        { position: 3, name: ofertaNombre, item: `${process.env.NEXT_PUBLIC_BASE_URL}/empresas/${empresaSlug}/${ofertaSlug}` },
      ]}
    />
  );
}
