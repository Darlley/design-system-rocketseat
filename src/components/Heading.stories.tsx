import {Meta, StoryObj} from '@storybook/react';
import Heading, {HeadingProps} from './Heading';

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Small',
        size: 'sm'
    },
    asChild: {
        table: {
            disable: true
        }
    }
} as Meta

export const Default: StoryObj<HeadingProps> = {
};

export const Medium: StoryObj<HeadingProps> = {
    args: {
        children: 'Medium',
        size: 'md'
    },
};

export const Large: StoryObj<HeadingProps> = {
    args: {
        children: 'Large',
        size: 'lg'
    }
};

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        children: (
            <h1>Testando</h1>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
};