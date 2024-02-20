import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
    },

} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'some text',
        theme: AppLinkTheme.PRIMARY,
    },

};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Inverted: Story = {
    args: {
        children: 'some text',
        theme: AppLinkTheme.INVERTED,
    },

};
