import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface ButtonProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode,
    asChild?: boolean;
}

export default function Button({ children, asChild}: ButtonProps) {
    const Comp = asChild ? Slot : 'span'
    return (
        <Comp
            className={clsx(
                'rounded bg-cyan-500 py-4 px-3 text-gray-800 font-sans font-semibold w-full text-sm hover:bg-cyan-300',
            )}
        >{children}</Comp>
    )
}