import {Meta, StoryObj} from '@storybook/react';
import {TextInput, TextInputProps} from './TextInput';
import {Envelope} from 'phosphor-react';

export default {
    title: 'Components/Input',
    component: TextInput.Root,
    args: {
        children: (
            <TextInput.Input placeholder='Digite aqui...' />
        ),
    }
} as Meta

export const Default: StoryObj<TextInputProps> = {};
export const InputWithIcon: StoryObj<TextInputProps> = {
    args: {
        children: [
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,
            <TextInput.Input placeholder='Digite aqui...' />
        ],
    }
};