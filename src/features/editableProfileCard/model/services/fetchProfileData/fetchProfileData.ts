import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { User, userActions } from 'entities/User';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { Profile } from 'entities/Profile';

export const fetchProfileData = createAsyncThunk<
    Profile,
    string,
    ThunkConfig<string>
>(
    'profile/fetchProfileData',
    async (profileId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.get<Profile>(`/profile/${profileId}`);

            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
