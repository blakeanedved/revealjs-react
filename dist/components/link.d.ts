import React from 'react';
import { MakeProps } from './BaseComponent';
export interface LinkProps {
    children: React.ReactNode;
    href?: string;
    slide?: string | [string, string];
}
declare function Link({ id, children, fragmentIndex, href, slide, ...props }: MakeProps<LinkProps, 'a'>): JSX.Element;
export default Link;
