import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticleList/fetchArticlesList';
import {
    getArticlesPageInited,
} from '../../selectors/articlePageSelectors';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;
        const inited = getArticlesPageInited(getState());
        if (!inited) {
            searchParams.forEach((value, key) => {
                // eslint-disable-next-line default-case
                switch (key) {
                case 'order':
                    dispatch(articlesPageActions.setOrder(value as SortOrder));
                    break;

                case 'sort':
                    dispatch(articlesPageActions.setSort(value as ArticleSortField));
                    break;

                case 'search':
                    dispatch(articlesPageActions.setSearch(value));
                    break;

                case 'type':
                    dispatch(articlesPageActions.setType(value as ArticleType));
                    break;
                }
            });

            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);
