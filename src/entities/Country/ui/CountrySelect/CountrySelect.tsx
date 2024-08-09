import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

export const CountrySelect = memo((props:CountrySelectProps) => {
    const { t } = useTranslation();
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;
    const countryOptions = useMemo(() => Object.entries(Country).map((val) => ({
        value: val[0],
        content: val[1],
    })), []);
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            className={classNames('', {}, [className])}
            defaultValue={t('Укажите страну')}
            value={value}
            items={countryOptions}
            onChange={onChangeHandler}
            readonly={readonly}
            label={t('Укажите страну')}
            direction="top"

        />
    );
});
