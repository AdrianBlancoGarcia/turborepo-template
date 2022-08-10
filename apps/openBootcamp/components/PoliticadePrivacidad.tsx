import * as React from 'react';
import {
  PlasmicPoliticadePrivacidad,
  DefaultPoliticadePrivacidadProps,
} from './plasmic/open_bootcamp_v_2_0/PlasmicPoliticadePrivacidad';
import { HTMLElementRefOf } from '@plasmicapp/react-web';

export interface PoliticadePrivacidadProps extends DefaultPoliticadePrivacidadProps {}

function PoliticadePrivacidad_(props: PoliticadePrivacidadProps, ref: HTMLElementRefOf<'div'>) {
  return <PlasmicPoliticadePrivacidad root={{ ref }} {...props} />;
}

const PoliticadePrivacidad = React.forwardRef(PoliticadePrivacidad_);
export default PoliticadePrivacidad;
