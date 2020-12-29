import { DetailedHTMLFactory, ReactHTML } from 'react';
export interface BaseProps {
    id?: string;
    className?: string;
    fragment?: boolean;
    fragmentStyle?: string;
    fragmentIndex?: number;
    fitText?: boolean;
}
export declare type MakeProps<Interface, T extends keyof ReactHTML> = Interface & BaseProps & SimpleComponentProps<T>[0];
export declare type MakeFullProps<T extends keyof ReactHTML> = BaseProps & SimpleComponentProps<T>[0] & {
    children: React.ReactNode;
};
export declare type SimpleComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote' | 'div' | 'figcaption' | 'figure' | 'footer' | 'header' | 'li' | 'main' | 'ol' | 'p' | 'span' | 'ul';
export declare type SimpleComponentProps<T extends keyof ReactHTML> = ReactHTML[T] extends DetailedHTMLFactory<infer Attributes, any> ? [Attributes, Element] : never;
export interface RevealProps {
    component: SimpleComponent;
    children: React.ReactNode;
}
export declare type Props<T extends keyof ReactHTML> = MakeProps<RevealProps, T>;
export declare function getClassNameProps(baseProps: BaseProps): {
    id?: string | undefined;
    fragmentIndex?: number | undefined;
} | {
    className: string;
    id?: string | undefined;
    fragmentIndex?: number | undefined;
};
export declare function generateBaseComponent<T extends SimpleComponent>(component: T): {
    (props: Omit<Props<T>, 'component'>): import("react").DetailedReactHTMLElement<{
        'data-id': string | undefined;
        id: string | undefined;
        'data-fragment-index': number | undefined;
        children: import("react").ReactNode;
        fragmentIndex?: number | undefined;
    } | {
        'data-id': string | undefined;
        id: string | undefined;
        'data-fragment-index': number | undefined;
        children: import("react").ReactNode;
        className: string;
        fragmentIndex?: number | undefined;
    }, HTMLElement>;
    displayName: string;
};
export default function BaseComponent<T extends keyof ReactHTML>({ component, id, fragmentIndex, children, ...props }: Props<T>): import("react").DetailedReactHTMLElement<{
    'data-id': string | undefined;
    id: string | undefined;
    'data-fragment-index': number | undefined;
    children: import("react").ReactNode;
    fragmentIndex?: number | undefined;
} | {
    'data-id': string | undefined;
    id: string | undefined;
    'data-fragment-index': number | undefined;
    children: import("react").ReactNode;
    className: string;
    fragmentIndex?: number | undefined;
}, HTMLElement>;
