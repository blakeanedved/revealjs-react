import React from 'react';
import { BaseProps, getClassName } from './BaseComponent';

export interface CodeProps extends BaseProps {
  children: { code: string };
  language?: string;
  escape?: boolean;
  lineNumbers?: string;
  noTrim?: boolean;
}

function Code({
  id,
  children,
  language,
  escape,
  fragmentIndex,
  lineNumbers,
  noTrim,
  ...props
}: CodeProps) {
  return (
    <pre
      data-id={id}
      id={id}
      data-fragment-index={fragmentIndex}
      className={getClassName(props)}
    >
      <code
        className={language}
        data-noescape={!escape}
        data-trim={!noTrim}
        data-line-numbers={lineNumbers}
      >
        {children.code}
      </code>
    </pre>
  );
}

export default Code;
