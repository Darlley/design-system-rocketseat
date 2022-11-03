import {Meta, StoryObj} from '@storybook/react';
import Text, {TextProps} from './Text';

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Small',
        size: 'sm'
    }
} as Meta

export const Default: StoryObj<TextProps> = {
};

export const Medium: StoryObj<TextProps> = {
    args: {
        children: 'Medium',
        size: 'md'
    }
};

export const Large: StoryObj<TextProps> = {
    args: {
        children: 'Large',
        size: 'lg'
    }
};

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Testando</p>
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