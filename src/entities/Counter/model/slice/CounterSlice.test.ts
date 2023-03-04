import { counterReducer, counterActions } from './CounterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('CounterSlice.test', () => {
    test('decriment', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            counterReducer(state, counterActions.decrement),
        )
            .toEqual({ value: 9 });
    });

    test('incriment', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            counterReducer(state, counterActions.increment),
        )
            .toEqual({ value: 11 });
    });

    test('should work with empty state', () => {
        expect(
            counterReducer(undefined, counterActions.increment),
        )
            .toEqual({ value: 1 });
    });
});
