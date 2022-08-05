import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from '../Logo';
import NavBar from '../NavBar';
import Button from '../Button';
import LinkJr2 from '../LinkJr2';
import { useMediaQuery } from '../../shared/utils';

function NavbarDetalle({ setOpenDrawer }: { setOpenDrawer: any }) {
  const router = useRouter();
  
  const isDrawer = useMediaQuery('(max-width: 1200px)');
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <NavBar
      page="detail"
      links={
        <>
          <LinkJr2 data-cy="link_ofertas" color="white" label="Ofertas de empleo" link="/ofertas" />
          <LinkJr2
            data-cy="link_ob"
            color="white"
            label="Formación gratuita"
            isButton
            onClick={() => router.push(process.env.NEXT_PUBLIC_WEB_URL + '')}
          />
        </>
      }
      navLogo={
        <Link href="/" prefetch={false}>
          <a>
            <Logo logo={isMobile ? 'simpleWhite' : 'complexWhite'} />
          </a>
        </Link>
      }
      navButtons={
        <>
          <Button
            data-cy="cta_soy_empresa"
            color="white"
            label="Soy empresa"
            onClick={() => router.push(process.env.NEXT_PUBLIC_TYPEFORM_EMPRESAS + '')}
          />

          <Button
            data-cy="cta_unete"
            color="gradientRound2"
            label="Únete a JobRun"
            onClick={() => router.push(process.env.NEXT_PUBLIC_TYPEFORM_CANDIDATOS + '')}
          />
        </>
      }
      menuButton={
        <div style={!isDrawer ? { display: 'none' } : { display: 'flex', width: '100%', height: '100%' }}>
          <Button data-cy="button_drawer" menu="white" onClick={() => setOpenDrawer(true)} />
        </div>
      }
    />
  );
}

export default NavbarDetalle;
