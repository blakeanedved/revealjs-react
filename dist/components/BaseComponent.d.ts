/// <reference types="react" />
export interface BaseProps {
    id?: string;
    className?: string;
    fragment?: boolean;
    fragmentStyle?: string;
    fragmentIndex?: number;
}
export declare type SimpleComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote' | 'div' | 'figcaption' | 'figure' | 'footer' | 'header' | 'li' | 'main' | 'ol' | 'p' | 'span' | 'ul';
export interface Props extends BaseProps {
    component: SimpleComponent;
    children: React.ReactNode;
}
export declare function getClassName(className: BaseProps["className"], fragment: BaseProps["fragment"], fragmentStyle: BaseProps["fragmentStyle"]): string | undefined;
export declare function generateBaseComponent(component: SimpleComponent): {
    (props: Omit<Props, 'component'>): import("react").DetailedReactHTMLElement<{
        'data-id': string | undefined;
        id: string | undefined;
        className: string | undefined;
        'data-fragment-index': number | undefined;
        children: import("react").ReactNode;
    }, HTMLElement>;
    displayName: string;
};
export default function BaseComponent({ component, id, className, fragment, fragmentStyle, fragmentIndex, children, }: Props): import("react").DetailedReactHTMLElement<{
    'data-id': string | undefined;
    id: string | undefined;
    className: string | undefined;
    'data-fragment-index': number | undefined;
    children: import("react").ReactNode;
}, HTMLElement>;
