/// <reference types="react" />
import { MakeProps } from './BaseComponent';
export interface CodeProps {
    children: {
        code: string;
    };
    language?: string;
    escape?: boolean;
    lineNumbers?: string;
    noTrim?: boolean;
}
declare function Code({ id, children, language, escape, fragmentIndex, lineNumbers, noTrim, ...props }: MakeProps<CodeProps, 'pre'>): JSX.Element;
export default Code;
