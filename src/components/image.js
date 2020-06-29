import React from 'react';

function Image({
  id = undefined,
  alt = undefined,
  className = undefined,
  fragment = false,
  fragmentStyle = undefined,
  fragmentIndex = undefined,
  height = undefined,
  src,
  width = undefined,
}) {
  return (
    <img
      data-id={id}
      id={id}
      className={
        className +
        (fragment ? ' fragment' : '') +
        (fragmentStyle ? ` ${fragmentStyle}` : '')
      }
      src={src}
      alt={alt}
      width={width}
      height={height}
      data-fragment-index={fragmentIndex}
    />
  );
}

export default Image;
