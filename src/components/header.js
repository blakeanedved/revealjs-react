import React from 'react';

function Header({
  id = undefined,
  className = undefined,
  fragment = false,
  fragmentStyle = undefined,
  fragmentIndex = undefined,
  children,
}) {
  return (
    <header
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
    </header>
  );
}

export default Header;
