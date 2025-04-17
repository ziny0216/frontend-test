import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistedCountReducer } from '@/lib/features/couter/couterSlice';

const rootReducer = combineReducers({
  counter: persistedCountReducer,
});
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ serializableCheck: false }),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
