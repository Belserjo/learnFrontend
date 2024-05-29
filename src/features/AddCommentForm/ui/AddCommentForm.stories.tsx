import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import addCommentForm from './AddCommentForm';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'features/AddCommentForm',
    component: addCommentForm,
    decorators: [StoreDecorator({})],

} satisfies Meta<typeof addCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        onSendComment: action('onSendComment'),
    },
};
