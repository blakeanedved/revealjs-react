import React from 'react';
import { MakeProps, getClassNameProps } from './BaseComponent';

export interface CodeProps {
  children: { code: string };
  language?: string;
  escape?: boolean;
  lineNumbers?: string | true;
  noTrim?: boolean;
  autoAnimateId?: string;
}

function Code({
  id,
  children,
  language,
  escape,
  fragmentIndex,
  lineNumbers,
  noTrim,
  autoAnimateId,
  ...props
}: MakeProps<CodeProps, 'pre'>) {
  return (
    <pre
      {...getClassNameProps(props)}
      data-id={autoAnimateId || id}
      id={id}
      data-fragment-index={fragmentIndex}
    >
      <code
        className={language}
        data-noescape={!escape}
        data-trim={!noTrim}
        data-line-numbers={autoAnimateId ? lineNumbers || true :lineNumbers}
      >
        {children.code}
      </code>
    </pre>
  );
}

export default Code;
