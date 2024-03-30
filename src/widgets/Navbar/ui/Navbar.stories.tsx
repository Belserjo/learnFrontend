import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'widgets/Navbar',
    component: Navbar,

} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {

};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {

};

export const AuthUserDark: Story = {
    args: {},
};
AuthUserDark.decorators = [StoreDecorator({ user: { authData: {} } })];

export const AuthUserLight: Story = {
    args: {},
};
AuthUserLight.decorators = [
    StoreDecorator({ user: { authData: {} } }),
    ThemeDecorator(Theme.LIGHT),
];
