import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo } from 'react';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }:LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <input
                className={cls.input}
                type="text"
            />
            <input
                className={cls.input}
                type="password"
            />
            <Button
                className={cls.loginBtn}
                theme={ButtonTheme.OUTLINE}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});

// 9:05
