import React from 'react';
import { BaseProps, getClassName } from './BaseComponent';

export interface Props extends BaseProps {
  height?: number;
  lazy?: boolean;
  preload?: string;
  src: string;
  width?: number;
}

function IFrame({
  id,
  className,
  fragment,
  fragmentStyle,
  fragmentIndex,
  height,
  lazy,
  preload,
  src,
  width,
}: Props) {
  return (
    <iframe
      data-id={id}
      id={id}
      className={getClassName(className, fragment, fragmentStyle)}
      src={lazy ? undefined : src}
      data-src={lazy ? src : false}
      data-preload={preload}
      width={width}
      height={height}
      data-fragment-index={fragmentIndex}
    />
  );
}

export default IFrame;
