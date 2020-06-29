import React from 'react';

function IFrame({
  id = undefined,
  className = undefined,
  fragmentIndex = undefined,
  height = undefined,
  lazy = undefined,
  preload = undefined,
  src,
  width = undefined,
}) {
  return (
    <iframe
      data-id={id}
      className={className}
      src={lazy ? false : src}
      data-src={lazy ? src : false}
      data-preload={preload}
      width={width}
      height={height}
      data-fragment-index={fragmentIndex}
    />
  );
}

export default IFrame;
