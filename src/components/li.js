import React from 'react';

function Li({
  id = undefined,
  className = undefined,
  fragment = false,
  fragmentStyle = undefined,
  fragmentIndex = undefined,
  children,
}) {
  return (
    <li
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
    </li>
  );
}

export default Li;
