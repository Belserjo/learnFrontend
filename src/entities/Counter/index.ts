import { counterReducer } from 'entities/Counter/model/slices/counterSlice';
import { Counter } from './ui/Counter';
import type { CounterSchema } from './model/types/CounterSchema';

export {
    counterReducer,
    Counter,
    CounterSchema,
};
