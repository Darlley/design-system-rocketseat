import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps {
    children: ReactNode;
}
export function TextInputRoot({children}: TextInputRootProps){
    return (
        <div
            className={clsx(
                'flex gap-2 px-2 items-center w-full rounded bg-gray-800 outline-none focus-within:ring-2 ring-0 focus:ring-cyan-300',
            )}
        >
            {children}
        </div>
    )
}

export interface TextInputIconProps {
    children: ReactNode;
}
export function TextInputIcon(props: TextInputIconProps){
    return (
        <Slot className='w-6 h-6 text-gray-400'>
            {props.children}
        </Slot>
    )
}

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}
export function TextInputInput(props: TextInputProps) {
    return (
        <input
            className='flex flex-1 py-4 bg-transparent text-gray-100 text-xs placeholder:text-gray-400 outline-none ring-0'
            {...props}
        />
    )
}

export const TextInput = {
    Root: TextInputRoot,
    Icon: TextInputIcon,
    Input: TextInputInput,
}