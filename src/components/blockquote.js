import React from 'react';

function BlockQuote({
  id = undefined,
  className = undefined,
  fragment = false,
  fragmentStyle = undefined,
  fragmentIndex = undefined,
  children,
}) {
  return (
    <blockquote
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
    </blockquote>
  );
}

export default BlockQuote;
