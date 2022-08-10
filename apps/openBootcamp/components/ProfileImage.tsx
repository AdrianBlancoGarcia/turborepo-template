import * as React from 'react';
import { PlasmicProfileImage, DefaultProfileImageProps } from './plasmic/open_bootcamp_v_2_0/PlasmicProfileImage';
import { HTMLElementRefOf } from '@plasmicapp/react-web';

export interface ProfileImageProps extends DefaultProfileImageProps {}

function ProfileImage_(props: ProfileImageProps, ref: HTMLElementRefOf<'div'>) {
  // Use PlasmicProfileImage to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicProfileImage are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all ProfileImageProps here, but feel free
  // to do whatever works for you.

  return <PlasmicProfileImage root={{ ref }} {...props} />;
}

const ProfileImage = React.forwardRef(ProfileImage_);
export default ProfileImage;
