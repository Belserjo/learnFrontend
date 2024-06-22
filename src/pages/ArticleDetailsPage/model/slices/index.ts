import { combineReducers } from '@reduxjs/toolkit';
import { ArticlesDetailsPageSchema } from '../types';
import {
    articleDetailsRecommendationsSliceReducer,
} from './articleDetailsRecommendationsSliceReducer';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

export const articlesDetailsPageReducer = combineReducers<ArticlesDetailsPageSchema>({
    recommendations: articleDetailsRecommendationsSliceReducer,
    comments: articleDetailsCommentsReducer,
});
