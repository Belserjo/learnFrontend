import type { Meta, StoryObj } from '@storybook/react';
import { CountrySelect } from './CountrySelect';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'entities/CountrySelect',
    component: CountrySelect,

} satisfies Meta<typeof CountrySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},

};
