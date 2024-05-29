import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'entities/Comment/CommentList',
    component: CommentList,

} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'hello',
                user: { id: '1', username: 'Name' },
            },
            {
                id: '2',
                text: 'hello 2',
                user: { id: '2', username: 'Name2' },
            },
        ],
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
        comments: [],
    },
};
