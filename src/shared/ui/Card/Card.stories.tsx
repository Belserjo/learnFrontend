import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../Text/Text';
import { Card } from './Card';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/Card',
    component: Card,

} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
// @ts-ignore
    args: {
        children: <Text title="Title" text="Text some" />,
    },
};
