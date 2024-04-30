import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from '../getCounterValue/getCounterValue';

describe('getCounterValue.test', () => {
    test('some text', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
