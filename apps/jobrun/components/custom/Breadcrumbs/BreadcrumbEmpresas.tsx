import React from 'react';
import Link from 'next/link';
import { BreadcrumbJsonLd } from 'next-seo';

import BreadcrumbItem from '../../BreadcrumbItem';

import breadcrumbStyle from '../../../styles/breadcrumb.module.css';

export function BreadcrumbEmpresa({
  nombreOferta,
  nombreEmpresa,
  slugEmpresa,
}: {
  nombreOferta: string;
  nombreEmpresa: string;
  slugEmpresa: string;
}) {
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
        breadcrumbParent={<Link href={'/empresas'}>Empresas</Link>}
      />

      <BreadcrumbItem
        className={breadcrumbStyle.breadcrumbParentChild}
        hierarchy="parent"
        breadcrumbParent={<Link href={'/empresas/' + slugEmpresa}>{nombreEmpresa}</Link>}
      />

      <BreadcrumbItem className={breadcrumbStyle.breadcrumbParentChild} hierarchy="child" breadcrumbChild={nombreOferta} />

      {/*TODO: Meter slot breadcrumb */}
      <BreadcrumbItem
        className={breadcrumbStyle.breadcrumbChildLast}
        hierarchy="childLast"
        breadcrumbChildLast={<Link href={'/empresas/' + slugEmpresa}>{nombreEmpresa}</Link>}
      />
    </>
  );
}

export function BreadCrumbEmpresaSCHEMA({ empresaSlug, empresaNombre, ofertaSlug, ofertaNombre }: any) {
  return (
    <BreadcrumbJsonLd
      itemListElements={[
        { position: 1, name: 'JobRun', item: process.env.NEXT_PUBLIC_BASE_URL },
        { position: 2, name: 'Empresas', item: process.env.NEXT_PUBLIC_BASE_URL + '/empresas' },
        { position: 3, name: empresaNombre, item: `${process.env.NEXT_PUBLIC_BASE_URL}/empresas/${empresaSlug}` },
        { position: 4, name: ofertaNombre, item: `${process.env.NEXT_PUBLIC_BASE_URL}/empresas/${empresaSlug}/${ofertaSlug}` },
      ]}
    />
  );
}
