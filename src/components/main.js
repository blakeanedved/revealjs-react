import React from 'react';

function Main({
  id = undefined,
  className = undefined,
  fragment = false,
  fragmentStyle = undefined,
  fragmentIndex = undefined,
  children,
}) {
  return (
    <main
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
    </main>
  );
}

export default Main;
