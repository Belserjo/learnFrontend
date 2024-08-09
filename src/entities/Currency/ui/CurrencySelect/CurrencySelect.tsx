import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback, useMemo } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Currency } from '../../model/types/currency';

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
        <ListBox
            className={classNames('', {}, [className])}
            label={t('Укажите валюту')}
            items={currencyOptions}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="top"
            defaultValue={t('Укажите валюту')}

        />
    );
});
