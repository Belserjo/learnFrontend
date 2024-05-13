import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/CommentCard',
    component: CommentCard,

} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
