/// <reference types="react" />
import { MakeFullProps } from "./BaseComponent";
export declare type LiProps = MakeFullProps<'li'>;
declare const _default: {
    (props: MakeFullProps<"li">): import("react").DetailedReactHTMLElement<{
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
