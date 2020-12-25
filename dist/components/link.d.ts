import React from 'react';
import { BaseProps } from './BaseComponent';
export interface Props extends BaseProps {
    children: React.ReactNode;
    href?: string;
    slide?: string | [string, string];
}
declare function Link({ id, children, className, fragment, fragmentStyle, fragmentIndex, href, slide, }: Props): JSX.Element;
export default Link;
