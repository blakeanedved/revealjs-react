import { createElement } from 'react';

export interface BaseProps {
  id?: string;
  className?: string;
  fragment?: string;
  fragmentStyle?: string;
  fragmentIndex?: number;
}

export type SimpleComponent =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'blockquote'
  | 'div'
  | 'figcaption'
  | 'figure'
  | 'footer'
  | 'header'
  | 'li'
  | 'main'
  | 'ol'
  | 'p'
  | 'span'
  | 'ul';
export interface Props extends BaseProps {
  component: SimpleComponent;
  children: React.ReactNode;
}

export function getClassName(
  className: string | undefined,
  fragment: string | undefined,
  fragmentStyle: string | undefined,
) {
  const classes = className ? [className] : [];
  if (fragment) classes.push(fragment);
  if (fragmentStyle) classes.push(fragmentStyle);
  if (!classes.length) return undefined;
  return classes.join(' ');
}

export function generateBaseComponent(component: SimpleComponent) {
  const Component = (props: Omit<Props, 'component'>) =>
    BaseComponent({ ...props, component });
  Component.displayName = `${component[0].toUpperCase()}${component.slice(1)}`;
  return Component;
}

export default function BaseComponent({
  component,
  id,
  className,
  fragment,
  fragmentStyle,
  fragmentIndex,
  children,
}: Props) {
  return createElement(component, {
    'data-id': id,
    id,
    className: getClassName(className, fragment, fragmentStyle),
    'data-fragment-index': fragmentIndex,
    children,
  });
}
