import type { Meta, StoryObj } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
// import avatar from 'shared/assets/test/static.jpg';
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
            // avatar: 'https://sun6-22.userapi.com/s/v1/if2/duATzHsPkPQ8viqRatWYToqxa5ba-Rypw--E2tMFqua-nZlHk-GV-qg_VG8fgazN_I7g-i-_az_2C_nZaIRNQRoD.jpg?size=100x100&quality=96&crop=280,80,640,640&blur=7,3&ava=1',
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
