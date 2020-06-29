import React from 'react';

function Link({
  id = undefined,
  children,
  className = undefined,
  fragmentIndex = undefined,
  href = undefined,
  slide = undefined,
}) {
  return (
    <a
      data-id={id}
      href={
        href ||
        `#/${
          typeof slide === 'string'
            ? parseInt(slide, 10) - 1
            : `${parseInt(slide[0], 10) - 1}/${parseInt(slide[1], 10) - 1}`
        }`
      }
      className={className}
      data-fragment-index={fragmentIndex}
    >
      {children}
    </a>
  );
}

export default Link;
