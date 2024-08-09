import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/ListBox',
    component: ListBox,
    parameters: {
        layout: 'centered',
    },

} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        items: [
            { value: '1', content: '1' },
            { value: '2', content: '2' },
            { value: '3', content: '3', disabled: true },
            { value: '4', content: '4' },
        ],
        defaultValue: 'Выбери значение',
        value: 'value',
        label: 'Значение',
    },
};
export const Disabled: Story = {
    args: {
        items: [
            { value: '1', content: '1' },
            { value: '2', content: '2' },
            { value: '3', content: '3' },
            { value: '4', content: '4' },
        ],
        defaultValue: 'Выбери значение',
        value: 'value',
        label: 'Значение',
        readonly: true,
    },
};

export const DirectionTop: Story = {
    args: {
        items: [
            { value: '1', content: '1' },
            { value: '2', content: '2' },
            { value: '3', content: '3', disabled: true },
            { value: '4', content: '4' },
        ],
        defaultValue: 'Выбери значение',
        value: 'value',
        label: 'Значение',
        direction: 'top',
    },
};
