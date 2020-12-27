/// <reference types="react" />
import { Props as BaseProps } from "./BaseComponent";
export declare type SpanProps = Exclude<BaseProps, "component">;
declare const _default: {
    (props: Pick<BaseProps, "className" | "fragment" | "fragmentStyle" | "children" | "id" | "fragmentIndex">): import("react").DetailedReactHTMLElement<{
        'data-id': string | undefined;
        id: string | undefined;
        className: string | undefined;
        'data-fragment-index': number | undefined;
        children: import("react").ReactNode;
    }, HTMLElement>;
    displayName: string;
};
export default _default;
