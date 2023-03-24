import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mocked('axious', true);

const mockedAxious = jest.mocked(axios, true);

describe('loginByUsername.test', () => {
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;

    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });
    /* test('success loading', async () => {
        const userValue = {
            username: '123',
            id: '1',
        };
        mockedAxious.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const action = loginByUsername({
            username: '123',
            password: '123',
        });
        const result = await action(dispatch, getState, undefined);

        expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxious.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toEqual('fulfilled');
        expect(result.payload).toBe(userValue);
    });

    test('error loading', async () => {
        const userValue = {
            username: '123',
            id: '1',
        };
        mockedAxious.post.mockReturnValue(Promise.resolve({ status: 400 }));
        const action = loginByUsername({
            username: '123',
            password: '123',
        });
        const result = await action(dispatch, getState, undefined);

        expect(mockedAxious.post).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    }); */

    test('success loading', async () => {
        const userValue = {
            username: '123',
            id: '1',
        };
        mockedAxious.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({
            username: '123',
            password: '123',
        });

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxious.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toEqual('fulfilled');
        expect(result.payload).toBe(userValue);
    });

    test('error loading', async () => {
        const userValue = {
            username: '123',
            id: '1',
        };
        mockedAxious.post.mockReturnValue(Promise.resolve({ status: 400 }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({
            username: '123',
            password: '123',
        });

        expect(mockedAxious.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
