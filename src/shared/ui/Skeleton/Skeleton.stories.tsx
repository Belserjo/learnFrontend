import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/Skeleton',
    component: Skeleton,

} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        width: '100%',
        height: 200,
    },
};

export const PrimaryLight: Story = {
    args: {
        width: '100%',
        height: 200,
    },
};
PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const PrimaryBlack: Story = {
    args: {
        width: '100%',
        height: 200,
    },
};
PrimaryBlack.decorators = [ThemeDecorator(Theme.BLACK)];

export const Circle: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
};
