import React from 'react';
import { BaseProps, getClassName } from './BaseComponent';

export interface ImageProps extends BaseProps {
  alt?: string;
  height?: number;
  width?: number;
  src: string;
}

function Image({
  id,
  alt,
  fragmentIndex,
  height,
  src,
  width,
  ...props
}: ImageProps) {
  return (
    <img
      data-id={id}
      id={id}
      className={getClassName(props)}
      src={src}
      alt={alt}
      width={width}
      height={height}
      data-fragment-index={fragmentIndex}
    />
  );
}

export default Image;
