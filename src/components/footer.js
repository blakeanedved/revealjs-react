import React from 'react';

function Footer({
  id = undefined,
  className = undefined,
  fragment = false,
  fragmentStyle = undefined,
  fragmentIndex = undefined,
  children,
}) {
  return (
    <footer
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
    </footer>
  );
}

export default Footer;
