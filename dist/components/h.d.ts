import React from 'react';
import { Props as BaseProps } from './BaseComponent';
export declare const H1: {
    (props: Pick<BaseProps, "className" | "fragment" | "fragmentStyle" | "children" | "id" | "fragmentIndex">): React.DetailedReactHTMLElement<{
        'data-id': string | undefined;
        id: string | undefined;
        className: string | undefined;
        'data-fragment-index': number | undefined;
        children: React.ReactNode;
    }, HTMLElement>;
    displayName: string;
};
export declare const H2: {
    (props: Pick<BaseProps, "className" | "fragment" | "fragmentStyle" | "children" | "id" | "fragmentIndex">): React.DetailedReactHTMLElement<{
        'data-id': string | undefined;
        id: string | undefined;
        className: string | undefined;
        'data-fragment-index': number | undefined;
        children: React.ReactNode;
    }, HTMLElement>;
    displayName: string;
};
export declare const H3: {
    (props: Pick<BaseProps, "className" | "fragment" | "fragmentStyle" | "children" | "id" | "fragmentIndex">): React.DetailedReactHTMLElement<{
        'data-id': string | undefined;
        id: string | undefined;
        className: string | undefined;
        'data-fragment-index': number | undefined;
        children: React.ReactNode;
    }, HTMLElement>;
    displayName: string;
};
export declare const H4: {
    (props: Pick<BaseProps, "className" | "fragment" | "fragmentStyle" | "children" | "id" | "fragmentIndex">): React.DetailedReactHTMLElement<{
        'data-id': string | undefined;
        id: string | undefined;
        className: string | undefined;
        'data-fragment-index': number | undefined;
        children: React.ReactNode;
    }, HTMLElement>;
    displayName: string;
};
export declare const H5: {
    (props: Pick<BaseProps, "className" | "fragment" | "fragmentStyle" | "children" | "id" | "fragmentIndex">): React.DetailedReactHTMLElement<{
        'data-id': string | undefined;
        id: string | undefined;
        className: string | undefined;
        'data-fragment-index': number | undefined;
        children: React.ReactNode;
    }, HTMLElement>;
    displayName: string;
};
export declare const H6: {
    (props: Pick<BaseProps, "className" | "fragment" | "fragmentStyle" | "children" | "id" | "fragmentIndex">): React.DetailedReactHTMLElement<{
        'data-id': string | undefined;
        id: string | undefined;
        className: string | undefined;
        'data-fragment-index': number | undefined;
        children: React.ReactNode;
    }, HTMLElement>;
    displayName: string;
};
export interface Props extends Omit<BaseProps, 'component'> {
    size: 1 | 2 | 3 | 4 | 5 | 6;
}
declare function H(props: Props & {
    size: number;
}): JSX.Element;
export default H;
