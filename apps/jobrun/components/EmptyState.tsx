import * as React from 'react';
import { PlasmicEmptyState, DefaultEmptyStateProps } from './plasmic/job_run/PlasmicEmptyState';
import { HTMLElementRefOf } from '@plasmicapp/react-web';

export interface EmptyStateProps extends DefaultEmptyStateProps {
  title?: string;
}

function EmptyState_({ title, ...props }: EmptyStateProps, ref: HTMLElementRefOf<'div'>) {
  return <PlasmicEmptyState root={{ ref }} title={title} {...props} />;
}

const EmptyState = React.forwardRef(EmptyState_);
export default EmptyState;
