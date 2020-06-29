import React from 'react';

function Code({
  id = undefined,
  children,
  className = undefined,
  escape = undefined,
  fragment = false,
  fragmentStyle = undefined,
  fragmentIndex = undefined,
  lineNumbers = undefined,
  noTrim = undefined,
}) {
  return (
    <pre
      data-id={id}
      id={id}
      data-fragment-index={fragmentIndex}
      className={
        className +
        (fragment ? ' fragment' : '') +
        (fragmentStyle ? ` ${fragmentStyle}` : '')
      }
    >
      <code
        data-noexcape={!escape}
        data-trim={!noTrim}
        data-line-numbers={lineNumbers}
      >
        {children.code}
      </code>
    </pre>
  );
}

export default Code;
