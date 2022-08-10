import * as React from 'react';
import { PlasmicBreadcrumbItem, DefaultBreadcrumbItemProps } from './plasmic/open_bootcamp_v_2_0/PlasmicBreadcrumbItem';
import { HTMLElementRefOf } from '@plasmicapp/react-web';

export interface BreadcrumbItemProps extends DefaultBreadcrumbItemProps {}

function BreadcrumbItem_(props: BreadcrumbItemProps, ref: HTMLElementRefOf<'div'>) {
  return <PlasmicBreadcrumbItem root={{ ref }} {...props} />;
}

const BreadcrumbItem = React.forwardRef(BreadcrumbItem_);
export default BreadcrumbItem;
