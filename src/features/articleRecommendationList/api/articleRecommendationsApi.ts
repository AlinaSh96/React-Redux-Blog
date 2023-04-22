import { rtkApi } from 'shared/api/rtkApi';

const recommendationsListApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendtionList: build.query({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});

export const useArticleRecommendationsList = recommendationsListApi.useGetArticleRecommendtionListQuery;
