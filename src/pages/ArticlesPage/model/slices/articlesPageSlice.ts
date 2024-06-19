import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article, ArticlesView } from 'entities/Article';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { ARTICLE_VIEW_STORAGE_KEY } from 'shared/consts/localstorage';
import { fetchArticlesList } from '../servises/fetchArticleList/fetchArticlesList';

export const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticlesView.SMALL,
        page: 1,
        hasMore: true,
        _inited: false,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticlesView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_STORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(ARTICLE_VIEW_STORAGE_KEY) as ArticlesView;
            state.view = view;
            state.limit = view === ArticlesView.SMALL ? 9 : 3;
            state._inited = true;
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchArticlesList.fulfilled,
                (
                    state,
                    action: PayloadAction<Article[]>,
                ) => {
                    state.isLoading = false;
                    articlesAdapter.addMany(state, action.payload);
                    state.hasMore = action.payload.length > 0;
                },
            )
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    reducer: articlesPageReducer,
    actions: articlesPageActions,
} = articlesPageSlice;
