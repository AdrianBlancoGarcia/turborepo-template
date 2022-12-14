// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import Link from 'next/link';
import * as React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import BreadcrumbItem from '../components/BreadcrumbItem';
import Drawer from '../components/Drawer';
import Navbar from '../components/Navbar';
import { PlasmicEmpresas } from '../components/plasmic/open_marketers/PlasmicEmpresas';

import styles from '../styles/Navbar.module.css';
import drawerStyles from '../styles/Drawer.module.css';
import Button from '../components/Button';
import LinkOm from '../components/LinkOm';
import { BreadcrumbJsonLd } from 'next-seo';

function Empresas() {
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);

  return (
    <div style={{ position: 'relative' }}>
      <PlasmicEmpresas
        breadCrumb={
          <Breadcrumb
            breadcrumbItems={
              <>
                <BreadcrumbItem breadcrumbParent={<Link href="/">OpenMarketers</Link>} />
                <BreadcrumbItem breadcrumbChild="Empresas" child="child" />
              </>
            }
          />
        }
        navbar={
          <Navbar
            showLoginButton={false}
            cta={{ href: '', title: 'Contrata talento'}}
            className={styles.navbar_container}
            openDrawer={() => setOpenDrawer(true)}
            linksList={[
              { href: '#caracteristicas', title: '¿Qué nos hace diferentes?', isLink: true },
              { href: '#certificado', title: 'Validamos conocimientos', isLink: true },
              { href: '#plataforma', title: 'Software propio de formación', isLink: true },
            ]}
          />
        }
      />
      <Drawer
        className={
          drawerStyles.drawer_container +
          ' ' +
          (openDrawer ? drawerStyles.drawer_container__show : drawerStyles.drawer_container__hidden)
        }
        links={[
          { href: '#caracteristicas', title: '¿Qué nos hace diferentes?', isLink: true },
          { href: '#certificado', title: 'Validamos conocimientos', isLink: true },
          { href: '#plataforma', title: 'Software propio de formación', isLink: true },
        ]?.map((link, index) => (
          <Link key={`navbar-link-${index}`} href={link.href} passHref>
            {link.isLink ? (
              <LinkOm href={link.href} onClick={() => setOpenDrawer(false)}>
                {link.title}
              </LinkOm>
            ) : (
              <Button color="navLink" size="small" onClick={() => setOpenDrawer(false)}>
                {link.title}
              </Button>
            )}
          </Link>
        ))}
        drawerButton={<Button drawer="close" data-cy="close_drawer" onClick={() => setOpenDrawer(false)} />}
        buttons={
          <div style={{ width: '100%', display: 'flex', columnGap: '20px' }}>
            {/*TODO: Meter href */}
            <Button data-cy="cta_drawer" size="small" color="gradient" className={'cta_estudiantes ' + drawerStyles.w100}>
              Contrata talento
            </Button>
          </div>
        }
      />
      <BreadcrumbJsonLd
        itemListElements={[
          { position: 1, name: 'OpenMarketers', item: process.env.NEXT_PUBLIC_BASE_URL },
          { position: 2, name: 'Empresas', item: `${process.env.NEXT_PUBLIC_BASE_URL}/empresas` },
        ]}
      />
    </div>
  );
}

export default Empresas;
