/// <reference types="react" />
import { MakeProps } from './BaseComponent';
export interface CodeProps {
    children: {
        code: string;
    };
    language?: string;
    escape?: boolean;
    lineNumbers?: string | true;
    noTrim?: boolean;
    autoAnimateId?: string;
}
declare function Code({ id, children, language, escape, fragmentIndex, lineNumbers, noTrim, autoAnimateId, ...props }: MakeProps<CodeProps, 'pre'>): JSX.Element;
export default Code;
