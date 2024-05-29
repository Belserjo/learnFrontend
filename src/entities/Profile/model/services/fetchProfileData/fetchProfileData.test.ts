import { TestAsyncThunk } from 'shared/lib/test/testAsyncThunk/testAsyncThunk';
import { fetchProfileData } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

const data = {
    id: '1',
    username: 'Nickname',
    age: 30,
    first: 'Name',
    lastname: 'Surname',
    city: 'City',
    country: Country.Russia,
    currency: Currency.RUB,
};

describe('fetchProfileData.test', () => {
    test('success fetch profile data', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });
    test('error login', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
