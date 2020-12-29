/// <reference types="react" />
import { MakeFullProps } from "./BaseComponent";
export declare type SpanProps = MakeFullProps<'span'>;
declare const _default: {
    (props: MakeFullProps<"span">): import("react").DetailedReactHTMLElement<{
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
export default _default;
