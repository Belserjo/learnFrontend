import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from '../Modal/Modal';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/Modal',
    component: Modal,

} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalPrimary: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at deleniti doloremque expedita impedit nesciunt, optio quibusdam tempore vel. Quod.',
    },
};
ModalPrimary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ModalInverted: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at deleniti doloremque expedita impedit nesciunt, optio quibusdam tempore vel. Quod.',
    },
};
