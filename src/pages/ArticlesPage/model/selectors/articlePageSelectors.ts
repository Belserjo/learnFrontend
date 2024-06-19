import { StateSchema } from 'app/providers/StoreProvider';
import { ArticlesView } from 'entities/Article';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error || '';
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || ArticlesView.SMALL;
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
export const getArticlesPageNum = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
export const getArticlesPageInited = (store: StateSchema) => store.articlesPage?._inited;