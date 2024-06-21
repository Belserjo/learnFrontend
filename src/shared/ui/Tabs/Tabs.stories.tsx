import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/Tabs',
    component: Tabs,

} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        tabs: [
            {
                value: 'tab 1',
                content: 'tab 1 content',
            },
            {
                value: 'tab 2',
                content: 'tab 2 content',
            },
            {
                value: 'tab 3',
                content: 'tab 3 content',
            },
        ],
        value: 'tab 2',
        onTabClick: action('onTabClick'),
    },

};
