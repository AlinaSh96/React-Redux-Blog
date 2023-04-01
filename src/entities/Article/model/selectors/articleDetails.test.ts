import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
    getArticleDatailsData,
    getArticleDatailsError,
    getArticleDatailsIsLoading,
} from './articleDetails';

describe('articleDetails.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'subtitle',
        };
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };
        expect(getArticleDatailsData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getArticleDatailsData(state as StateSchema)).toEqual(undefined);
    });

    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDatailsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should work with empty state isLoading', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getArticleDatailsIsLoading(state as StateSchema)).toEqual(false);
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error',
            },
        };
        expect(getArticleDatailsError(state as StateSchema)).toEqual('error');
    });

    test('should work with empty state error', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getArticleDatailsError(state as StateSchema)).toEqual(undefined);
    });
});
