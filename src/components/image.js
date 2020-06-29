import React from 'react';

function Image({
  id = undefined,
  alt = undefined,
  className = undefined,
  fragmentIndex = undefined,
  height = undefined,
  src,
  width = undefined,
}) {
  return (
    <img
      data-id={id}
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      data-fragment-index={fragmentIndex}
    />
  );
}

export default Image;
