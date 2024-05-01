import type { Meta, StoryObj } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
// import avatar from 'shared/assets/test/statick.jpg';
import { ProfileCard } from './ProfileCard';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,

} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        data: {
            username: 'Nickname',
            age: 30,
            first: 'Name',
            lastname: 'Surname',
            city: 'City',
            country: Country.Russia,
            currency: Currency.RUB,
            avatar: 'https://cs12.pikabu.ru/post_img/big/2022/10/24/2/1666571824193118478.jpg',
        },
    },

};

export const WithError: Story = {
    args: {
        error: 'error',
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
