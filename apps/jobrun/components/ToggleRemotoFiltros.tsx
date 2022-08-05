import * as React from 'react';

import { HTMLElementRefOf } from '@plasmicapp/react-web';

import { PlasmicToggleRemotoFiltros, DefaultToggleRemotoFiltrosProps } from './plasmic/job_run/PlasmicToggleRemotoFiltros';

export interface ToggleRemotoFiltrosProps extends DefaultToggleRemotoFiltrosProps {
  onClick?: (e?: any) => void | any;
}

function ToggleRemotoFiltros_({ onClick, ...props }: ToggleRemotoFiltrosProps, ref: HTMLElementRefOf<'div'>) {
  return <PlasmicToggleRemotoFiltros root={{ ref }} onClick={onClick} {...props} />;
}

const ToggleRemotoFiltros = React.forwardRef(ToggleRemotoFiltros_);
export default ToggleRemotoFiltros;
