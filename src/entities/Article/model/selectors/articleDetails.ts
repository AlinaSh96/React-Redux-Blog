import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDatailsData = (state: StateSchema) => state.articleDetails?.data;
export const getArticleDatailsIsLoading = (state: StateSchema) => state.articleDetails?.isLoading || false;
export const getArticleDatailsError = (state: StateSchema) => state.articleDetails?.error;
