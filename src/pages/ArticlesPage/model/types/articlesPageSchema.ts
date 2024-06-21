import {
    Article, ArticlesView, ArticleSortField, ArticleType,
} from 'entities/Article';
import { EntityState } from '@reduxjs/toolkit';
import { SortOrder } from 'shared/types';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    // pagination
    hasMore: boolean;
    limit: number;
    page: number;

    // filters
    view: ArticlesView;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType

    _inited: boolean;

}
