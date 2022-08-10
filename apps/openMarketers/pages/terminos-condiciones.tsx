import { useRouter } from 'next/router';
import * as React from 'react';
import Button from '../components/Button';
import Drawer from '../components/Drawer';

import { PlasmicTerminosCondiciones } from '../components/plasmic/open_marketers/PlasmicTerminosCondiciones';

import drawerStyles from '../styles/Drawer.module.css';

export function getStaticProps() {
  return { props: {} };
}

function TerminosCondiciones() {
  const router = useRouter();
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);
  const [registerHref, setRegisterHref] = React.useState<string>(`${process.env.NEXT_PUBLIC_CAMPUS_URL}/register`);

  React.useEffect(() => {
    let newHref = process.env.NEXT_PUBLIC_CAMPUS_URL + '/register?';

    if (router.query?.grupo) newHref += `&grupo=${router.query?.grupo}`;
    if (router.query?.campanya) newHref += `&campanya=${router.query?.campanya}`;
    if (router.query?.palabraClave) newHref += `&palabraClave=${router.query?.palabraClave}`;

    if (router?.query?.utm_source) newHref += `&utm_source=${router?.query?.utm_source}`;
    if (router?.query?.utm_medium) newHref += `&utm_medium=${router?.query?.utm_medium}`;
    if (router?.query?.utm_campaign) newHref += `&utm_campaign=${router?.query?.utm_campaign}`;
    if (router?.query?.utm_term) newHref += `&utm_term=${router?.query?.utm_term}`;
    if (router?.query?.utm_content) newHref += `&utm_content=${router?.query?.utm_content}`;

    setRegisterHref(newHref);
  }, [router.query]);

  return (
    <>
      <PlasmicTerminosCondiciones />

      <Drawer
        className={
          drawerStyles.drawer_container +
          ' ' +
          (openDrawer ? drawerStyles.drawer_container__show : drawerStyles.drawer_container__hidden)
        }
        drawerButton={<Button drawer="close" data-cy="close_drawer" onClick={() => setOpenDrawer(false)} />}
        buttons={
          <div style={{ width: '100%', display: 'flex', columnGap: '20px' }}>
            <Button
              data-cy="cta_campus__drawer"
              color="blue"
              size="small"
              className={'cta_login ' + drawerStyles.w100}
              href={`${process.env.NEXT_PUBLIC_CAMPUS_URL}/login`}
            >
              Ir al campus
            </Button>

            <Button
              data-cy="cta_drawer"
              size="small"
              color="gradient"
              className={'cta_estudiantes ' + drawerStyles.w100}
              href={registerHref}
            >
              Empieza ya
            </Button>
          </div>
        }
      />
    </>
  );
}

export default TerminosCondiciones;
