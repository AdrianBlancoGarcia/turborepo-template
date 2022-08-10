import * as React from 'react';

import { HTMLElementRefOf } from '@plasmicapp/react-web';
import { PlasmicBreadcrumb, DefaultBreadcrumbProps } from './plasmic/open_bootcamp_v_2_0/PlasmicBreadcrumb';

export interface BreadcrumbProps extends DefaultBreadcrumbProps {}

function Breadcrumb_(props: BreadcrumbProps, ref: HTMLElementRefOf<'div'>) {
  return <PlasmicBreadcrumb root={{ ref }} {...props} />;
}

const Breadcrumb = React.forwardRef(Breadcrumb_);
export default Breadcrumb;
