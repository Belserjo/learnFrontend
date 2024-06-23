import type { Meta, StoryObj } from '@storybook/react';
import ArticleEditPage from './ArticleEditPage';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/ArticleEditPage',
    component: ArticleEditPage,

} satisfies Meta<typeof ArticleEditPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
