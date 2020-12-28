import React from 'react';
import { BaseProps, getClassName } from './BaseComponent';

export interface IFrameProps extends BaseProps {
  height?: number;
  lazy?: boolean;
  preload?: string;
  src: string;
  width?: number;
}

function IFrame({
  id,
  fragmentIndex,
  height,
  lazy,
  preload,
  src,
  width,
  ...props
}: IFrameProps) {
  return (
    <iframe
      data-id={id}
      id={id}
      className={getClassName(props)}
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
