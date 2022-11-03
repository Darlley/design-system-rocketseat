import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode,
    asChild?: boolean;
}

export default function Heading({ size = 'md', children, asChild}: HeadingProps) {
    const Comp = asChild ? Slot : 'h1'
    return (
        <Comp
            className={clsx(
                'font-bold text-gray-100 font-sans',
                {
                    'text-xs': size === 'sm',
                    'text-sm': size === 'md',
                    'text-md': size === 'lg',
                }
            )}
        >{children}</Comp>
    )
}