import React from 'react';
import { getClassNameProps, MakeProps } from './BaseComponent';

export type AudioTypes =
 | '3gp'
 | 'aac'
 | 'flac'
 | 'mpg'
 | 'mpeg'
 | 'mp3'
 | 'mp4'
 | 'm4a'
 | 'oga'
 | 'ogg'
 | 'wav'
 | 'webm';

const formatMap: {
  [P in AudioTypes]: string;
} = {
  '3gp': 'audio/3gp',
  aac: 'audio/aac',
  flac: 'audio/flac',
  mpg: 'audio/mpeg',
  mpeg: 'audio/mpeg',
  mp3: 'audio/mp3',
  mp4: 'audio/mp4',
  m4a: 'audio/mp4',
  oga: 'audio/ogg',
  ogg: 'audio/ogg',
  wav: 'audio/wav',
  webm: 'audio/webm',
};

export interface AudioProps {
  autoplay?: boolean;
  controls?: boolean;
  lazy?: string;
  loop?: boolean;
  muted?: boolean;
  preload?: boolean;
  src: string;
}

function Audio({
  id,
  autoplay,
  className,
  controls,
  fragment,
  fragmentIndex,
  fragmentStyle,
  lazy,
  loop,
  muted,
  preload,
  src,
  ...props
}: MakeProps<AudioProps, 'audio'>) {
  if (Array.isArray(src)) {
    return (
      <audio
        {...getClassNameProps(props)}
        data-id={id}
        id={id}
        data-autoplay={autoplay}
        controls={controls}
        muted={muted}
        loop={loop}
        data-fragment-index={fragmentIndex}
      >
        {src.map((element) => (
          <source
            src={lazy ? false : element}
            data-src={lazy ? element : false}
            data-preload={preload}
            type={formatMap[/\.[^.]+$/.exec(element)?.[0] as AudioTypes] || 'mp3'}
          />
        ))}
      </audio>
    );
  }

  return (
    <audio
      {...getClassNameProps(props)}
      data-id={id}
      id={id}
      data-autoplay={autoplay}
      src={lazy ? '' : src}
      data-src={lazy ? src : false}
      data-preload={preload}
      controls={controls}
      muted={muted}
      loop={loop}
      data-fragment-index={fragmentIndex}
    />
  );
}

export default Audio;
