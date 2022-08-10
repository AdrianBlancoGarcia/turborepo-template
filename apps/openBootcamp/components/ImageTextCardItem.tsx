import * as React from 'react';
import {
  PlasmicImageTextCardItem,
  DefaultImageTextCardItemProps,
} from './plasmic/open_bootcamp_v_2_0/PlasmicImageTextCardItem';
import { HTMLElementRefOf } from '@plasmicapp/react-web';

export interface ImageTextCardItemProps extends DefaultImageTextCardItemProps {}

function ImageTextCardItem_(props: ImageTextCardItemProps, ref: HTMLElementRefOf<'div'>) {
  return <PlasmicImageTextCardItem root={{ ref }} {...props} />;
}

const ImageTextCardItem = React.forwardRef(ImageTextCardItem_);
export default ImageTextCardItem;
