import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsPageRecomendationSliceReducer } from './ArticleDetailsPageRecomendationSlice';
import { articleDetailsCommentReducer } from './ArticleDetailsCommentSlice';

export const articleDetailsPageRecuder = combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsPageRecomendationSliceReducer,
    comments: articleDetailsCommentReducer,
});
