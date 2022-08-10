import * as React from 'react';
import { useRouter } from 'next/router';

import Button from './Button';
import { HTMLElementRefOf } from '@plasmicapp/react-web';
import PlasmicNavbar, { DefaultNavbarProps } from './plasmic/open_marketers/PlasmicNavbar';

export interface NavbarProps extends DefaultNavbarProps {
  openDrawer?: () => void;
  showLoginButton?: boolean;
  cta?: { href: string; title: string; className?: string };
  linksList?: { href: string; title: string; isLink?: boolean }[];
}

function Navbar_(
  { cta, openDrawer = () => {}, showLoginButton, linksList = [], ...props }: NavbarProps,
  ref: HTMLElementRefOf<'div'>
) {
  const router = useRouter();
  const [isPhone, setIsPhone] = React.useState<boolean>(false);
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

  React.useEffect(() => {
    const detectResizing = () => {
      if (window.innerWidth <= 768) setIsPhone(true);
      else setIsPhone(false);
    };

    window.addEventListener('resize', detectResizing);

    detectResizing();

    return () => {
      window.removeEventListener('resize', detectResizing);
    };
  }, []);

  return (
    <PlasmicNavbar
      root={{ ref }}
      {...props}
      loginButton={
        showLoginButton &&
        !isPhone && (
          <Button
            color="darkGray"
            size="small"
            className="cta_login"
            data-cy="cta_campus__navbar"
            href={`${process.env.NEXT_PUBLIC_CAMPUS_URL}/login`}
          >
            Ir al campus
          </Button>
        )
      }
      navButton={
        isPhone ? (
          <Button drawer="open" data-cy="open_drawer" onClick={openDrawer} />
        ) : (
          <Button
            size="small"
            color="gradient"
            data-cy="cta_navbar"
            href={cta?.href || registerHref}
            className={cta?.className || 'cta_estudiantes_1'}
          >
            {cta?.title || 'Empieza ya'}
          </Button>
        )
      }
      links={linksList?.map((link, index) => (
        <Button key={`navbar-link-${index}`} href={link.href}>
          {link.title}
        </Button>
      ))}
    />
  );
}

const Navbar = React.forwardRef(Navbar_);
export default Navbar;
