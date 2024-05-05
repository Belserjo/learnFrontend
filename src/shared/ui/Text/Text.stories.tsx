import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/Text',
    component: Text,

} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'TITLE',
        text: 'TEXT',
    },
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];
export const Dark: Story = {
    args: {
        title: 'TITLE',
        text: 'TEXT',
    },
};

export const ErrorLight: Story = {
    args: {
        title: 'TITLE',
        text: 'TEXT',
        theme: TextTheme.ERROR,
    },
};
ErrorLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ErrorDark: Story = {
    args: {
        title: 'TITLE',
        text: 'TEXT',
        theme: TextTheme.ERROR,
    },
};

export const TitleOnlyDark: Story = {
    args: {
        title: 'TITLE',
    },
};

export const TextOnlyDark: Story = {
    args: {
        text: 'TEXT',
    },
};

export const TitleOnlyLight: Story = {
    args: {
        title: 'TITLE',
    },
};
TitleOnlyLight.decorators = [ThemeDecorator(Theme.LIGHT)];
export const TextOnlyLight: Story = {
    args: {
        text: 'TEXT',
    },
};
TextOnlyLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const SizeL: Story = {
    args: {
        text: 'TEXT',
        title: 'TITLE',
        size: TextSize.L,
    },
};
