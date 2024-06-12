import type { Preview } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouteDecorator } from '../../src/shared/config/storybook/RouteDecorator/RouteDecorator';
import { StoreDecorator } from '../../src/shared/config/storybook/StoreDecorator/StoreDecorator';

const preview: Preview = {
    decorators: [
        (ThemeDecorator(Theme.BLACK)),
        (RouteDecorator),
        (StoreDecorator({
            loginForm: {
                username: 'username',
                password: 'pass',
            },
            profile: {
                data: {
                    username: 'username',
                    avatar: '',
                    country: 'Rus',
                    lastname: 'lastname',
                    age: 30,
                    city: 'city',
                    first: 'firstname',
                    currency: 'rub',
                },
                isLoading: false,
                error: '',
                form: {
                    username: 'username',
                    avatar: '',
                    country: 'Rus',
                    lastname: 'lastname',
                    age: 30,
                    city: 'city',
                    first: 'firstname',
                    currency: 'rub',
                },
            },
        })),
    ],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },

    },
};

export default preview;
