import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/CommentList',
    component: CommentList,

} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
