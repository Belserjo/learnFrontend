import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Avatar } from './Avatar';
import AvatarImg from './statick.jpg';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/Avatar',
    component: Avatar,

} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        src: AvatarImg,
        size: 150,
        alt: 'picture',
    },
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Small: Story = {
    args: {
        src: AvatarImg,
        size: 50,
        alt: 'picture',
    },
};
export const NonImage: Story = {
    args: {
        src: '',
        size: 150,
        alt: 'picture',
    },
};
