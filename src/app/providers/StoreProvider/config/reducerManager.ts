import {
    AnyAction, Reducer, ReducersMapObject, combineReducers,
} from '@reduxjs/toolkit';
import {
    MountedReducer, ReducerManager, StateSchema, StateSchemaKey,
} from './StateSchema';

export function createReducerManager(initialReducers:ReducersMapObject<StateSchema>)
: ReducerManager {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);
    let keysToRemove: Array<StateSchemaKey> = [];

    const moundedReducer: MountedReducer = {};
    return {
        getReducerMap: () => reducers,
        getMountedReducer: () => moundedReducer,
        reduce: (state: StateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((key) => {
                    delete state[key];
                });
                keysToRemove = [];
            }
            return combinedReducer(state, action);
        },

        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }

            reducers[key] = reducer;
            moundedReducer[key] = true;
            combinedReducer = combineReducers(reducers);
        },

        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }

            delete reducers[key];
            keysToRemove.push(key);
            moundedReducer[key] = false;
            combinedReducer = combineReducers(reducers);
        },
    };
}
