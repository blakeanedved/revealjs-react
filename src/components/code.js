import React from 'react';

function Code({
  id = undefined,
  children,
  className = undefined,
  escape = undefined,
  fragmentIndex = undefined,
  lineNumbers = undefined,
  noTrim = undefined,
}) {
  return (
    <pre data-id={id}>
      <code
        data-noexcape={!escape}
        data-trim={!noTrim}
        data-line-numbers={lineNumbers}
        data-fragment-index={fragmentIndex}
        className={className}
      >
        {children.code}
      </code>
    </pre>
  );
}

export default Code;
