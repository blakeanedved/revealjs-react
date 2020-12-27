/// <reference types="react" />
import { BaseProps } from './BaseComponent';
export interface CodeProps extends BaseProps {
    children: {
        code: string;
    };
    language?: string;
    escape?: boolean;
    lineNumbers?: string;
    noTrim?: boolean;
}
declare function Code({ id, children, language, className, escape, fragment, fragmentStyle, fragmentIndex, lineNumbers, noTrim, }: CodeProps): JSX.Element;
export default Code;
