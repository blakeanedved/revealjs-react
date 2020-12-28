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
declare function Code({ id, children, language, escape, fragmentIndex, lineNumbers, noTrim, ...props }: CodeProps): JSX.Element;
export default Code;
