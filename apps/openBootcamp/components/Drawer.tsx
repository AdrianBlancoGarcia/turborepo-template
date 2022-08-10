import * as React from 'react';
import { PlasmicDrawer, DefaultDrawerProps } from './plasmic/open_bootcamp_v_2_0/PlasmicDrawer';
import { HTMLElementRefOf } from '@plasmicapp/react-web';

export interface DrawerProps extends DefaultDrawerProps {}

function Drawer_(props: DrawerProps, ref: HTMLElementRefOf<'div'>) {
  return <PlasmicDrawer root={{ ref }} {...props} />;
}

const Drawer = React.forwardRef(Drawer_);
export default Drawer;
