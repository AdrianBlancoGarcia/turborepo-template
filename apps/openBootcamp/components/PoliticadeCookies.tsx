import * as React from 'react';
import {
  PlasmicPoliticadeCookies,
  DefaultPoliticadeCookiesProps,
} from './plasmic/open_bootcamp_v_2_0/PlasmicPoliticadeCookies';
import { HTMLElementRefOf } from '@plasmicapp/react-web';

export interface PoliticadeCookiesProps extends DefaultPoliticadeCookiesProps {}

function PoliticadeCookies_(props: PoliticadeCookiesProps, ref: HTMLElementRefOf<'div'>) {
  return <PlasmicPoliticadeCookies root={{ ref }} {...props} />;
}

const PoliticadeCookies = React.forwardRef(PoliticadeCookies_);
export default PoliticadeCookies;
