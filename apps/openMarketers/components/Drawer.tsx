import * as React from 'react';

import { HTMLElementRefOf } from '@plasmicapp/react-web';
import { PlasmicDrawer, DefaultDrawerProps } from './plasmic/open_marketers/PlasmicDrawer';

export interface DrawerProps extends DefaultDrawerProps {}

function Drawer_(props: DrawerProps, ref: HTMLElementRefOf<'div'>) {
  return <PlasmicDrawer root={{ ref }} {...props} />;
}

const Drawer = React.forwardRef(Drawer_);
export default Drawer;
