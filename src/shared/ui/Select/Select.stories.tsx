import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../Select/Select';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/Select',
    component: Select,

} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Значение',
        options: [
            { value: 'RUB', content: 'RUB' },
            { value: 'EUR', content: 'EUR' },
        ],
    },

};
