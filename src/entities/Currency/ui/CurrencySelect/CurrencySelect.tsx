import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback, useMemo } from 'react';
import { Currency } from 'entities/Currency/model/types/currency';
import cls from './CurrencySelect.module.scss';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

export const CurrencySelect = memo((props:CurrencySelectProps) => {
    const { t } = useTranslation();
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;
    const currencyOptions = useMemo(() => Object.entries(Currency).map((val) => ({
        value: val[0],
        content: val[1],
    })), []);
    const onChangeHandler = useCallback((value) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={classNames(cls.input, {}, [className])}
            label={t('Укажите валюту')}
            options={currencyOptions}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}

        />
    );
});
