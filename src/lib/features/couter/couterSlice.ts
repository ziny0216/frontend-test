import { createSlice } from '@reduxjs/toolkit';
import storage from '@/lib/storage';
import { persistReducer } from 'redux-persist';

const countPersistConfig = {
  key: 'counter',
  storage,
  whitelist: ['value', 'status'],
};

export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
  },
});

export const persistedCountReducer = persistReducer(
  countPersistConfig,
  counterSlice.reducer,
);
export const { increment, decrement } = counterSlice.actions;
export default persistedCountReducer;
