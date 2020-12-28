import React from 'react';
import { BaseProps, getClassName } from './BaseComponent';

export interface LinkProps extends BaseProps {
  children: React.ReactNode;
  href?: string;
  slide?: string | [string, string];
}

function Link({
  id,
  children,
  fragmentIndex,
  href,
  slide,
  ...props
}: LinkProps) {
  return (
    <a
      data-id={id}
      id={id}
      href={
        href ||
        (slide &&
          `#/${
            typeof slide === 'string'
              ? parseInt(slide, 10) - 1
              : `${parseInt(slide[0], 10) - 1}/${parseInt(slide[1], 10) - 1}`
          }`)
      }
      className={getClassName(props)}
      data-fragment-index={fragmentIndex}
    >
      {children}
    </a>
  );
}

export default Link;
