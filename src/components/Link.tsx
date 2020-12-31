import React from 'react';
import { MakeProps, getClassNameProps } from './BaseComponent';

export interface LinkProps {
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
}: MakeProps<LinkProps, 'a'>) {
  return (
    <a
      {...getClassNameProps(props)}
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
      data-fragment-index={fragmentIndex}
    >
      {children}
    </a>
  );
}

export default Link;
