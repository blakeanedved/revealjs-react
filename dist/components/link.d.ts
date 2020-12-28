import React from 'react';
import { BaseProps } from './BaseComponent';
export interface LinkProps extends BaseProps {
    children: React.ReactNode;
    href?: string;
    slide?: string | [string, string];
}
declare function Link({ id, children, fragmentIndex, href, slide, ...props }: LinkProps): JSX.Element;
export default Link;
