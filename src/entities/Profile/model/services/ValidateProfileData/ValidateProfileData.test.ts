import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/profile';
import { ValidateProfileData } from './ValidateProfileData';

const data = {
    username: 'Nickname',
    age: 30,
    first: 'Name',
    lastname: 'Surname',
    city: 'City',
    country: Country.Russia,
    currency: Currency.RUB,
};

describe('ValidateProfileData.test', () => {
    test('success validate data', async () => {
        const result = ValidateProfileData(data);

        expect(result).toEqual([]);
    });
    test('without first and lastname', async () => {
        const result = ValidateProfileData({ ...data, first: '', lastname: '' });
        expect(result).toEqual([ValidateProfileError.INCORRECT_PROFILE_DATA]);
    });
    test('without age', async () => {
        const result = ValidateProfileData({ ...data, age: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_PROFILE_AGE]);
    });
    test('without city', async () => {
        const result = ValidateProfileData({ ...data, city: '' });
        expect(result).toEqual([ValidateProfileError.INCORRECT_PROFILE_CITY]);
    });
    test('without data', async () => {
        const result = ValidateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_PROFILE_DATA,
            ValidateProfileError.INCORRECT_PROFILE_AGE,
            ValidateProfileError.INCORRECT_PROFILE_CITY,
        ]);
    });
});
