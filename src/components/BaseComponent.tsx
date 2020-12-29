import { createElement, DetailedHTMLFactory, ReactHTML } from 'react';

export interface BaseProps {
  id?: string;
  className?: string;
  fragment?: boolean;
  fragmentStyle?: string;
  fragmentIndex?: number;
  fitText?: boolean;
}

export type MakeProps<Interface, T extends keyof ReactHTML> = Interface & BaseProps & SimpleComponentProps<T>[0];
export type MakeFullProps<T extends keyof ReactHTML> = BaseProps & SimpleComponentProps<T>[0];

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

export type SimpleComponentProps<T extends keyof ReactHTML> =
  ReactHTML[T] extends DetailedHTMLFactory<infer Attributes, any>
  ? [Attributes, Element]
  : never;

export interface RevealProps {
  component: SimpleComponent;
}

export type Props<T extends keyof ReactHTML> = MakeProps<RevealProps, T>;

export function getClassNameProps(
  baseProps: BaseProps
) {
  const { className, fragment, fragmentStyle, fitText, ...props } = baseProps;
  const classes = className ? [className] : [];
  if (fragment) classes.push("fragment");
  if (fitText) classes.push("r-fit-text");
  if (fragmentStyle) classes.push(fragmentStyle);
  if (!classes.length) return props;
  return {
    ...props,
    className: classes.join(' '),
  }
}

export function generateBaseComponent<T extends SimpleComponent>(component: T) {
  const Component = (props: MakeFullProps<T>) =>
    BaseComponent<T>({ ...props, component });
  Component.displayName = `${component[0].toUpperCase()}${component.slice(1)}`;
  return Component;
}

export default function BaseComponent<T extends keyof ReactHTML>({
  component,
  id,
  fragmentIndex,
  children,
  ...props
}: Props<T>) {
  return createElement(component, {
    ...getClassNameProps(props),
    'data-id': id,
    id,
    'data-fragment-index': fragmentIndex,
    children,
  });
}
