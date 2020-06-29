import React from 'react';

const formatMap = {
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

function Audio({
  id = undefined,
  autoplay = undefined,
  className = undefined,
  controls = undefined,
  fragment = false,
  fragmentIndex = undefined,
  fragmentStyle = undefined,
  lazy = undefined,
  loop = undefined,
  muted = undefined,
  preload = undefined,
  src,
}) {
  if (typeof src === 'object') {
    return (
      <audio
        data-id={id}
        id={id}
        className={
          className +
          (fragment ? ' fragment' : '') +
          (fragmentStyle ? ` ${fragmentStyle}` : '')
        }
        data-autoplay={autoplay}
        controls={controls}
        muted={muted}
        loop={loop}
        data-fragment-index={fragmentIndex}
      >
        {src.forEach((element) => (
          <source
            src={lazy ? false : element}
            data-src={lazy ? element : false}
            data-preload={preload}
            type={formatMap[/\.[^.]+$/.exec(element)]}
          />
        ))}
      </audio>
    );
  }

  return (
    <audio
      data-id={id}
      id={id}
      className={
        className +
        (fragment ? ' fragment' : '') +
        (fragmentStyle ? ` ${fragmentStyle}` : '')
      }
      data-autoplay={autoplay}
      src={lazy ? false : src}
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
