import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/test/static.jpg';
import ProfilePage from './ProfilePage';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    decorators: [StoreDecorator({
        profile: {
            form: {
                username: 'Nickname',
                age: 30,
                first: 'Name',
                lastname: 'Surname',
                city: 'City',
                country: Country.Russia,
                currency: Currency.RUB,
                // avatar,
            },
        },
    })],

} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {

};
