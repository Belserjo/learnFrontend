import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
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

export const LoginFormError: Story = {
    args: {},
};
LoginFormError.decorators = [StoreDecorator({ loginForm: { error: 'ERROR' } })];

export const LoginFormLoading: Story = {

    args: {},

};

LoginFormLoading.decorators = [StoreDecorator({ loginForm: { isLoading: true } })];
