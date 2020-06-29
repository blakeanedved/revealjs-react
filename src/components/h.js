import React from 'react';

function H({
  id = undefined,
  className = undefined,
  fragment = false,
  fragmentStyle = undefined,
  fragmentIndex = undefined,
  size = '1',
  children,
}) {
  if (size === '1') {
    return (
      <h1
        data-id={id}
        id={id}
        className={
          className +
          (fragment ? ' fragment' : '') +
          (fragmentStyle ? ` ${fragmentStyle}` : '')
        }
        data-fragment-index={fragmentIndex}
      >
        {children}
      </h1>
    );
  }

  if (size === '2') {
    return (
      <h2
        data-id={id}
        id={id}
        className={
          className +
          (fragment ? ' fragment' : '') +
          (fragmentStyle ? ` ${fragmentStyle}` : '')
        }
        data-fragment-index={fragmentIndex}
      >
        {children}
      </h2>
    );
  }

  if (size === '3') {
    return (
      <h3
        data-id={id}
        id={id}
        className={
          className +
          (fragment ? ' fragment' : '') +
          (fragmentStyle ? ` ${fragmentStyle}` : '')
        }
        data-fragment-index={fragmentIndex}
      >
        {children}
      </h3>
    );
  }

  if (size === '4') {
    return (
      <h4
        data-id={id}
        id={id}
        className={
          className +
          (fragment ? ' fragment' : '') +
          (fragmentStyle ? ` ${fragmentStyle}` : '')
        }
        data-fragment-index={fragmentIndex}
      >
        {children}
      </h4>
    );
  }

  if (size === '5') {
    return (
      <h5
        data-id={id}
        id={id}
        className={
          className +
          (fragment ? ' fragment' : '') +
          (fragmentStyle ? ` ${fragmentStyle}` : '')
        }
        data-fragment-index={fragmentIndex}
      >
        {children}
      </h5>
    );
  }

  if (size === '6') {
    return (
      <h6
        data-id={id}
        id={id}
        className={
          className +
          (fragment ? ' fragment' : '') +
          (fragmentStyle ? ` ${fragmentStyle}` : '')
        }
        data-fragment-index={fragmentIndex}
      >
        {children}
      </h6>
    );
  }
}

export default H;
