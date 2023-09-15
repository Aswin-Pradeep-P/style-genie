import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { baseApi, authApi } from '@Services/api';

import rootReducer from './rootReducer';

const middlewareList = (getDefaultMiddleware: any) => {
  const list = [baseApi.middleware, authApi.middleware];

  // eslint-disable-next-line no-empty
  if (process.env.NODE_ENV === 'development') {
  }

  return getDefaultMiddleware().concat(list);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware: any) => middlewareList(getDefaultMiddleware)
});

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
