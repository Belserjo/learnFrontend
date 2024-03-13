import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginForm } from './LoginForm';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'features/LoginForm',
    component: LoginForm,

} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoginFormPrimary: Story = {
    args: {},
};
LoginFormPrimary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const LoginFormDark: Story = {
    args: {},
};
