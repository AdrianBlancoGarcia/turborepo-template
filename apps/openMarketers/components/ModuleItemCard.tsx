import * as React from 'react';
import { PlasmicModuleItemCard, DefaultModuleItemCardProps } from './plasmic/open_marketers/PlasmicModuleItemCard';
import { HTMLElementRefOf } from '@plasmicapp/react-web';

export interface ModuleItemCardProps extends DefaultModuleItemCardProps {}

function ModuleItemCard_(props: ModuleItemCardProps, ref: HTMLElementRefOf<'div'>) {


  return <PlasmicModuleItemCard root={{ ref }} {...props} />;
}

const ModuleItemCard = React.forwardRef(ModuleItemCard_);
export default ModuleItemCard;
