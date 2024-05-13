import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'username' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('newUsername'),
        )).toEqual({ username: 'newUsername' });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: 'password' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('newPassword'),
        )).toEqual({ password: 'newPassword' });
    });
});
