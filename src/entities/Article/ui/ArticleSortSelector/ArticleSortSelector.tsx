import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo } from 'react';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from '../../model/types/article';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        sort,
        order,
        onChangeOrder,
        onChangeSort,

    } = props;
    const { t } = useTranslation();
    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            content: t('возрастанию'),
            value: 'asc',
        },
        {
            content: t('убыванию'),
            value: 'desc',
        },
    ], [t]);
    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            content: t('дате создания'),
            value: ArticleSortField.CREATED,
        },
        {
            content: t('названию'),
            value: ArticleSortField.TITLE,
        },
        {
            content: t('просмотрам'),
            value: ArticleSortField.VIEWS,
        },
    ], [t]);

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                options={sortFieldOptions}
                label={t('Сортировать по')}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                options={orderOptions}
                label={t('по')}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    );
});
