import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/Code',
    component: Code,

} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        text: `import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';
import {classNames} from "shared/lib/classNames/classNames";
import cls from "shared/ui/Code/Code.module.scss";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/Code',
    component: Code,

} satisfies Meta<typeof Code>;`,
    },
};
