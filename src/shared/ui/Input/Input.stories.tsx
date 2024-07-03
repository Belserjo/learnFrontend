import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Input } from '../Input/Input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/Input',
    component: Input,

} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputPrimary: Story = {
    args: {
        placeholder: 'Input primary',
        value: 'some text',
        autofocus: true,

    },
};
InputPrimary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const InputDark: Story = {
    args: {
        placeholder: 'Input primary',
        value: 'some text',
        autofocus: true,
    },
};
