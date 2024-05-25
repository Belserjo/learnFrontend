import type { Meta, StoryObj } from '@storybook/react';
import addCommentForm from './AddCommentForm';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/AddCommentForm',
    component: addCommentForm,

} satisfies Meta<typeof addCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
