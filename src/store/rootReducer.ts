/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux';

import { baseApi } from '@Services/api';
import { LoginSlice as LoginReducer } from '@Containers/Login/loginSlice';

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  login: LoginReducer.reducer
});

export default rootReducer;
