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
            avatar: 'https://sun6-20.userapi.com/s/v1/ig1/5m-fx30S9InZ_MED5NdKNRKJiziFYykuHQKsaV1HCgSu5a-Xv4hZXEcsrKg-LOtV23g8vwFY.jpg?size=980x980&quality=96&crop=0,0,980,980&ava=1',
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
