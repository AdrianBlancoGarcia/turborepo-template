import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from '../Logo';
import NavBar from '../NavBar';
import Button from '../Button';
import LinkJr2 from '../LinkJr2';
import { useMediaQuery } from '../../shared/utils';

function NavbarHome({ setOpenDrawer, isHome, page }: { isHome?: boolean; setOpenDrawer: any; page?: any }) {
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isDrawer = useMediaQuery('(max-width: 1200px)');

  return (
    <NavBar
      page={page}
      links={
        <>
          <LinkJr2
            data-cy="link_ofertas"
            link="/ofertas"
            label="Ofertas de empleo"
            color={page === 'detail' ? 'white' : 'clear'}
          />

          <LinkJr2
            data-cy="link_ob"
            isButton
            label="Formación gratuita"
            color={page === 'detail' ? 'white' : 'clear'}
            onClick={() => router.push(process.env.NEXT_PUBLIC_WEB_URL + '')}
          />
        </>
      }
      navButtons={
        <>
          <Button
            data-cy="cta_soy_empresa"
            color="grey"
            label="Soy empresa"
            onClick={() => router.push(process.env.NEXT_PUBLIC_TYPEFORM_EMPRESAS + '')}
          />

          <Button
            data-cy="cta_unete"
            label="Únete a JobRun"
            color={page === 'detail' ? 'gradientRound2' : 'black'}
            onClick={() => router.push(process.env.NEXT_PUBLIC_TYPEFORM_CANDIDATOS + '')}
          />
        </>
      }
      navLogo={
        isHome ? (
          <Link href="/" prefetch={false}>
            <Logo logo={page === 'detail' ? 'complexWhite' : isMobile ? 'simpleBlack' : 'complexBlack'} />
          </Link>
        ) : (
          <Logo logo={page === 'detail' ? 'complexWhite' : isMobile ? 'simpleBlack' : 'complexBlack'} />
        )
      }
      menuButton={
        <div style={!isDrawer ? { display: 'none' } : { display: 'flex', width: '100%', height: '100%' }}>
          <Button data-cy="button_drawer" menu="black" onClick={() => setOpenDrawer(true)} />
        </div>
      }
    />
  );
}

export default NavbarHome;
