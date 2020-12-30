import React from 'react';
import { MakeProps, getClassNameProps } from './BaseComponent';

export interface ImageProps {
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
}: MakeProps<ImageProps, 'img'>) {
  return (
    <img
      {...getClassNameProps(props)}
      data-id={id}
      id={id}
      src={src}
      alt={alt}
      width={width}
      height={height}
      data-fragment-index={fragmentIndex}
    />
  );
}

export default Image;
