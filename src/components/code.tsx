import React from 'react';
import { BaseProps, getClassName } from './BaseComponent';

export interface Props extends BaseProps {
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
  className,
  escape,
  fragment,
  fragmentStyle,
  fragmentIndex,
  lineNumbers,
  noTrim,
}: Props) {
  return (
    <pre
      data-id={id}
      id={id}
      data-fragment-index={fragmentIndex}
      className={getClassName(className, fragment, fragmentStyle)}
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
