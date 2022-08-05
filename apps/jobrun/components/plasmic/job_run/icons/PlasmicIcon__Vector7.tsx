// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector7IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector7Icon(props: Vector7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 14 11'}
      height={'1em'}
      width={'1em'}
      style={{
        fill: 'currentcolor',

        ...(style || {}),
      }}
      className={classNames('plasmic-default__svg', className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          'M11.755 2.652c.009.117.009.233.009.349 0 3.55-2.702 7.64-7.64 7.64A7.587 7.587 0 010 9.435c.216.025.424.034.649.034A5.38 5.38 0 003.983 8.32 2.69 2.69 0 011.47 6.46a2.857 2.857 0 001.215-.05A2.685 2.685 0 01.533 3.774v-.033c.358.199.773.324 1.213.34A2.681 2.681 0 01.549 1.845C.549 1.347.68.89.914.491A7.638 7.638 0 006.451 3.3a3.052 3.052 0 01-.066-.616A2.684 2.684 0 019.07 0c.773 0 1.471.324 1.962.848a5.304 5.304 0 001.704-.649 2.68 2.68 0 01-1.18 1.48 5.381 5.381 0 001.545-.416 5.763 5.763 0 01-1.346 1.389z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector7Icon;
/* prettier-ignore-end */
