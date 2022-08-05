import React from 'react';
import { useRouter } from 'next/router';

import Button from '../../Button';
import Drawer from '../../Drawer';
import LinkJr2 from '../../LinkJr2';

import styles from '../../../styles/Drawer.module.css';

function DrawerNavbar({ openDrawer, setOpenDrawer }: { openDrawer: boolean; setOpenDrawer: (boolean: boolean) => void }) {
  const router = useRouter();

  return (
    <Drawer
      className={
        styles.drawer_container +
        ' ' +
        (openDrawer
          ? styles.drawer_container__show + ' ' + styles.drawer_animation
          : styles.drawer_container__hidden + ' ' + styles.drawer_animation)
      }
      links={
        <>
          <LinkJr2 data-cy="link_ofertas_drawer" color="clear" label="Ofertas de empleo" link="/ofertas" />
          <LinkJr2
            data-cy="link_ob_drawer"
            color="clear"
            label="Formación gratuita"
            isButton
            onClick={() => router.push(process.env.NEXT_PUBLIC_WEB_URL + '')}
          />
        </>
      }
      mNavButtons={
        <>
          <Button
            data-cy="cta_soy_empresa_drawer"
            size="strech"
            color="grey"
            label="Soy empresa"
            onClick={() => router.push(process.env.NEXT_PUBLIC_TYPEFORM_EMPRESAS + '')}
          />

          <Button
            data-cy="cta_unete_drawer"
            size="strech"
            color="darkBlue"
            label="Únete a JobRun"
            onClick={() => router.push(process.env.NEXT_PUBLIC_TYPEFORM_CANDIDATOS + '')}
          />
        </>
      }
      drawerButton={<Button iconOnly="black" onClick={() => setOpenDrawer(false)} />}
    />
  );
}

export default DrawerNavbar;
