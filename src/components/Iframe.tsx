import React from 'react';
import { MakeProps, getClassNameProps } from './BaseComponent';

export interface IFrameProps {
  height?: number;
  src: string;
  lazy?: boolean;
  preload?: boolean;
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
}: MakeProps<IFrameProps, 'iframe'>) {
  return (
    <iframe
      {...getClassNameProps(props)}
      data-id={id}
      id={id}
      src={lazy ? undefined : src}
      data-src={lazy ? src : undefined}
      data-preload={preload}
      width={width}
      height={height}
      data-fragment-index={fragmentIndex}
    />
  );
}

export default IFrame;
