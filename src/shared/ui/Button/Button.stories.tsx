import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/Button',
    component: Button,

} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'TEST button',

    },
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];
export const Clear: Story = {
    args: {
        children: 'Clear theme',
        theme: ThemeButton.CLEAR,
    },
};
Clear.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Outlined: Story = {
    args: {
        children: 'Outline theme',
        theme: ThemeButton.OUTLINE,
    },
};
