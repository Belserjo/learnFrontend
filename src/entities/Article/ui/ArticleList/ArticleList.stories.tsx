import type { Meta, StoryObj } from '@storybook/react';
import { ArticleList } from './ArticleList';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'entities/Article/ArticleList',
    component: ArticleList,

} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Primary: Story = {
//     args: {},
// };
