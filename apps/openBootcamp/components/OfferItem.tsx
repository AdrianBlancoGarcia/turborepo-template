import * as React from 'react';
import { PlasmicOfferItem, DefaultOfferItemProps } from './plasmic/open_bootcamp_v_2_0/PlasmicOfferItem';
import { HTMLElementRefOf } from '@plasmicapp/react-web';

export interface OfferItemProps extends DefaultOfferItemProps {}

function OfferItem_(props: OfferItemProps, ref: HTMLElementRefOf<'div'>) {
  return <PlasmicOfferItem root={{ ref }} {...props} />;
}

const OfferItem = React.forwardRef(OfferItem_);
export default OfferItem;
