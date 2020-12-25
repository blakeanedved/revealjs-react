import React from 'react';
import { generateBaseComponent, Props as BaseProps } from './BaseComponent';

export const H1 = generateBaseComponent('h1');
export const H2 = generateBaseComponent('h2');
export const H3 = generateBaseComponent('h3');
export const H4 = generateBaseComponent('h4');
export const H5 = generateBaseComponent('h5');
export const H6 = generateBaseComponent('h6');

export interface Props extends Omit<BaseProps, 'component'> {
  size: 1 | 2 | 3 | 4 | 5 | 6;
}

function H(props: Props) {
  const { size, ...rest } = props;
  switch (size) {
    case 1:
      return <H1 {...rest} />;
    case 2:
      return <H2 {...rest} />;
    case 3:
      return <H3 {...rest} />;
    case 4:
      return <H4 {...rest} />;
    case 5:
      return <H5 {...rest} />;
    case 6:
      return <H6 {...rest} />;
  }
}

export default H;
