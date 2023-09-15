import { BaseQueryApi, QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta
} from '@reduxjs/toolkit/dist/query/react';
import { Mutex } from 'async-mutex';

import LocalStorage from '@Utils/storage';
import { API_DOMAIN } from '@Constants/config';
import { Tokens } from '@Constants/common';
import { API_TAGS, RequestTypes } from '@Constants/api';

const mutex = new Mutex();

const fetchQ = fetchBaseQuery({
  baseUrl: 'https://b481-103-181-238-106.ngrok-free.app/',
  prepareHeaders: async (headers) => {
    const accessToken = LocalStorage.getItem(Tokens.ACCESS_TOKEN);

    headers.set('Content-Type', 'application/json');
    headers.set('caller', 'web_app');
    if (accessToken) headers.set('Authorization', `Bearer ${accessToken}`);

    return headers;
  }
});

const getRefreshHeaders = () => {
  const refreshToken = LocalStorage.getItem(Tokens.REFRESH_TOKEN);

  return { 'Content-Type': 'application/json', Authorization: `Bearer ${refreshToken}` };
};

const baseQuery: any = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
  try {
    await mutex.waitForUnlock();
    let result: QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta> = await fetchQ(
      args,
      api,
      extraOptions
    );

    if (result?.error?.status === 401)
      if (!mutex.isLocked()) {
        const release = await mutex.acquire();

        try {
          const refreshResult = await fetch(`${API_DOMAIN}token/refresh`, {
            method: RequestTypes.POST,
            headers: getRefreshHeaders()
          });
          const refreshResultData = await refreshResult.json();

          if (refreshResultData.successful) {
            LocalStorage.setItem(Tokens.ACCESS_TOKEN, refreshResultData.access_token);

            result = await fetchQ(args, api, extraOptions);
          } else {
            // onLogout();
          }
        } catch (error) {
          // onLogout();
        } finally {
          release();
        }
      } else {
        await mutex.waitForUnlock();
        result = await fetchQ(args, api, extraOptions);
      }

    return result;
  } catch (error) {
    return error;
  }
};

const authQuery: any = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
  const result = await fetchQ(args, api, extraOptions);

  return result;
};

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: () => ({}),
  tagTypes: API_TAGS,
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true
});

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: authQuery,
  endpoints: () => ({}),
  refetchOnMountOrArgChange: false,
  refetchOnReconnect: false
});
