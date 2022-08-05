import React from 'react';
import { IOferta } from '../../shared/models';
import TabBarItem from '../TabBarItem';
import OfertaCard from './OfertaCard';

export function OfertasDestacadas({ ofertas, state }: { ofertas: IOferta[]; state: number }) {
  return (
    <>
      {ofertas
        ?.filter((oferta, index) => (state === 0 ? oferta?.presencialidad === 'remoto' : oferta?.categoriaId === state) && index < 6)
        ?.map((oferta, i) => (
          <OfertaCard oferta={oferta} key={i} />
        ))}
    </>
  );
}

export function Tabs({ tabs, state, setState }: { tabs: [{ label: string; state: number }]; state: number; setState: any }) {
  return (
    <>
      {tabs.map((tab, i) => (
        <div key={i} style={{ width: 'fit-content', height: 'fit-content' }} onClick={() => setState(tab?.state)}>
          <TabBarItem label={tab?.label} key={i} state={tab?.state === state ? 'active' : 'nonActive'} />
        </div>
      ))}
    </>
  );
}
