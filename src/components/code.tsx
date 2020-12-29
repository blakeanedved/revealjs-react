import React from 'react';
import { MakeProps, getClassNameProps } from './BaseComponent';

export interface CodeProps {
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
}: MakeProps<CodeProps, 'pre'>) {
  return (
    <pre
      {...getClassNameProps(props)}
      data-id={id}
      id={id}
      data-fragment-index={fragmentIndex}
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
