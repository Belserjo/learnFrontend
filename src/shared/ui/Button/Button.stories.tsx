import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

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
        theme: ButtonTheme.CLEAR,
    },
};
Clear.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Outlined: Story = {
    args: {
        children: 'Outline theme',
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlinedSizeL: Story = {
    args: {
        children: 'Outline theme',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};

export const OutlinedSizeXL: Story = {
    args: {
        children: 'Outline theme',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
};

export const BackgroundTheme: Story = {
    args: {
        children: 'BackgroundTheme',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundInvertedTheme: Story = {
    args: {
        children: 'BackgroundInvertedTheme',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const SquareSizeM: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
    },
};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareSizeXL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};
