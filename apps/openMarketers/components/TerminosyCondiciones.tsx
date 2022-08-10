import * as React from 'react';
import {
  PlasmicTerminosyCondiciones,
  DefaultTerminosyCondicionesProps,
} from './plasmic/open_marketers/PlasmicTerminosyCondiciones';
import { HTMLElementRefOf } from '@plasmicapp/react-web';

export interface TerminosyCondicionesProps extends DefaultTerminosyCondicionesProps {}

function TerminosyCondiciones_(props: TerminosyCondicionesProps, ref: HTMLElementRefOf<'div'>) {
  return <PlasmicTerminosyCondiciones root={{ ref }} {...props} />;
}

const TerminosyCondiciones = React.forwardRef(TerminosyCondiciones_);
export default TerminosyCondiciones;
