import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile, updateProfileData } from 'entities/Profile';
import { PayloadAction } from '@reduxjs/toolkit';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileReducer, profileActions } from './profileSlice';

const data = {
    username: 'Nickname',
    age: 30,
    first: 'Name',
    lastname: 'Surname',
    city: 'City',
    country: Country.Russia,
    currency: Currency.RUB,
};
describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({
                username: 'username',
            }),
        )).toEqual({
            form: { username: 'username' },
        });
    });

    test('test cancel edit profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { username: '' },
        };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual(
            {
                readonly: true,
                ValidateErrors: undefined,
                data,
                form: data,
            },
        );
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
            error: undefined,
        });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual(
            {
                isLoading: false,
                readonly: true,
                validateErrors: undefined,
                form: data,
                data,
            },
        );
    });
});
