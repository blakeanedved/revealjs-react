import React from 'react';
import { BaseProps, getClassName } from './BaseComponent';

export interface Props extends BaseProps {
  alt?: string;
  height?: number;
  width?: number;
  src: string;
}

function Image({
  id = undefined,
  alt = undefined,
  className = undefined,
  fragment = undefined,
  fragmentStyle = undefined,
  fragmentIndex = undefined,
  height = undefined,
  src,
  width = undefined,
}: Props) {
  return (
    <img
      data-id={id}
      id={id}
      className={getClassName(className, fragment, fragmentStyle)}
      src={src}
      alt={alt}
      width={width}
      height={height}
      data-fragment-index={fragmentIndex}
    />
  );
}

export default Image;
