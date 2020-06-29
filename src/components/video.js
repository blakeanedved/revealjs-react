import React from 'react';

const formatMap = {
  '3gp': 'video/3gpp',
  mpg: 'audio/mpeg',
  mpeg: 'audio/mpeg',
  mp4: 'video/mp4',
  m4a: 'video/mp4',
  m4p: 'video/mp4',
  ogv: 'video/ogg',
  ogg: 'video/ogg',
  mov: 'video/quicktime',
  webm: 'video/webm',
};

function Video({
  id = undefined,
  autoplay = undefined,
  className = undefined,
  controls = undefined,
  fragmentIndex = undefined,
  height = undefined,
  lazy = undefined,
  loop = undefined,
  muted = undefined,
  preload = undefined,
  width = undefined,
  src,
}) {
  if (typeof src === 'object') {
    return (
      <video
        data-id={id}
        className={className}
        data-autoplay={autoplay}
        controls={controls}
        muted={muted}
        loop={loop}
        height={height}
        width={width}
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
      </video>
    );
  }

  return (
    <video
      data-id={id}
      className={className}
      data-autoplay={autoplay}
      src={lazy ? false : src}
      data-src={lazy ? src : false}
      data-preload={preload}
      controls={controls}
      muted={muted}
      loop={loop}
      height={height}
      width={width}
      data-fragment-index={fragmentIndex}
    />
  );
}

export default Video;
