import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../types/profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
    test('should return array of validateErrors', () => {
        const errors = [
            ValidateProfileError.INCORRECT_PROFILE_CITY,
            ValidateProfileError.INCORRECT_PROFILE_DATA,
            ValidateProfileError.INCORRECT_PROFILE_AGE,
            ValidateProfileError.NO_DATA,
            ValidateProfileError.SERVER_ERROR,
        ];
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: errors,
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
    });
    test('should work with empty state ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
