import { Article, ArticlesView } from 'entities/Article';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    view: ArticlesView;
    // pagination
    hasMore: boolean;
    limit?: number;
    page: number;

    _inited: boolean;
}
