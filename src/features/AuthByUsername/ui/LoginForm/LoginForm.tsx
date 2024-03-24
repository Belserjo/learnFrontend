import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo, useCallback } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { LoginByUsername } from '../../model/servises/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }:LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(LoginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                className={cls.input}
                type="text"
                placeholder={t('Введите логин')}
                autofocus
                onChange={onChangeUsername}
                value={username}

            />
            <Input
                className={cls.input}
                type="password"
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}

            />
            <Button
                className={cls.loginBtn}
                theme={ButtonTheme.OUTLINE}
                onClick={onLoginClick}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
