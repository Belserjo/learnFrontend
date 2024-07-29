import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/Flex',
    component: Flex,

} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
    args: {
        children: (
            <>
                <div>123</div>
                <div>123</div>
                <div>123</div>
            </>
        ),

    },
};

export const RowGap4: Story = {
    args: {
        children: (
            <>
                <div>123</div>
                <div>123</div>
                <div>123</div>
            </>
        ),
        gap: '4',

    },
};

export const RowGap8: Story = {
    args: {
        children: (
            <>
                <div>123</div>
                <div>123</div>
                <div>123</div>
            </>
        ),
        gap: '8',

    },
};
export const RowGap16: Story = {
    args: {
        children: (
            <>
                <div>123</div>
                <div>123</div>
                <div>123</div>
            </>
        ),
        gap: '16',

    },
};

export const RowGap24: Story = {
    args: {
        children: (
            <>
                <div>123</div>
                <div>123</div>
                <div>123</div>
            </>
        ),
        gap: '24',

    },
};

export const RowGap32: Story = {
    args: {
        children: (
            <>
                <div>123</div>
                <div>123</div>
                <div>123</div>
            </>
        ),
        gap: '32',

    },
};
export const Column: Story = {
    args: {
        children: (
            <>
                <div>123</div>
                <div>123</div>
                <div>123</div>
            </>
        ),
        direction: 'column',

    },
};

export const ColumnGap4: Story = {
    args: {
        children: (
            <>
                <div>123</div>
                <div>123</div>
                <div>123</div>
            </>
        ),
        direction: 'column',
        gap: '4',
    },
};

export const ColumnGap8: Story = {
    args: {
        children: (
            <>
                <div>123</div>
                <div>123</div>
                <div>123</div>
            </>
        ),
        direction: 'column',
        gap: '8',
    },
};

export const ColumnGap16: Story = {
    args: {
        children: (
            <>
                <div>123</div>
                <div>123</div>
                <div>123</div>
            </>
        ),
        direction: 'column',
        gap: '16',
    },
};

export const ColumnGap24: Story = {
    args: {
        children: (
            <>
                <div>123</div>
                <div>123</div>
                <div>123</div>
            </>
        ),
        direction: 'column',
        gap: '24',
    },
};

export const ColumnGap32: Story = {
    args: {
        children: (
            <>
                <div>123</div>
                <div>123</div>
                <div>123</div>
            </>
        ),
        direction: 'column',
        gap: '32',
    },
};

export const ColumnAlignEnd: Story = {
    args: {
        children: (
            <>
                <div>123</div>
                <div>123</div>
                <div>123</div>
            </>
        ),
        direction: 'column',
        align: 'end',
    },
};

export const ColumnAlignStart: Story = {
    args: {
        children: (
            <>
                <div>123</div>
                <div>123</div>
                <div>123</div>
            </>
        ),
        direction: 'column',
        align: 'start',
    },
};
