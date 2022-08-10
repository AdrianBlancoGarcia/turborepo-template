import * as React from 'react';

import { HTMLElementRefOf } from '@plasmicapp/react-web';
import { PlasmicStickyBanner, DefaultStickyBannerProps } from './plasmic/open_marketers/PlasmicStickyBanner';

import styles from '../styles/Navbar.module.css';

export interface StickyBannerProps extends DefaultStickyBannerProps {}

function StickyBanner_(props: StickyBannerProps, ref: HTMLElementRefOf<'div'>) {
  const [scroll, setScroll] = React.useState<boolean>(true);

  /**
   * UseEffect para detectar scroll y que el sticky sea visible
   */
  React.useEffect(() => {
    const detectScrolling = () => {
      if (window.pageYOffset > 0) setScroll(true);
      else setScroll(false);
    };

    detectScrolling();

    window.addEventListener('scroll', detectScrolling);

    return () => {
      window.removeEventListener('scroll', detectScrolling);
    };
  }, []);

  return (
    <PlasmicStickyBanner
      root={{ ref }}
      {...props}
      className={styles.banner_container + ' ' + (scroll ? styles.banner_container__show : styles.banner_container__hidden)}
    />
  );
}

const StickyBanner = React.forwardRef(StickyBanner_);
export default StickyBanner;
