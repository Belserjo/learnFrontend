import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import i18n from 'i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo } from 'react';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t } = useTranslation();

    const toggle = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggle}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    );
});
