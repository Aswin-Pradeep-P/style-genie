import { baseApi } from '@Services/api';
import { RequestTypes } from '@Constants/api';

const profileApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getHomePage: builder.mutation({
      query: (payload) => ({
        url: `/api/outfit`,
        method: RequestTypes.GET
      })
    }),
    getCategoryItems: builder.mutation({
      query: (payload) => ({
        url: `/api/outfit?category=${payload.type}`,
        method: RequestTypes.GET
      })
    }),
    login: builder.mutation({
      query: () => ({
        url: `/api/login`,
        method: RequestTypes.GET
      })
    }),
    getProfile: builder.mutation({
      query: (payload) => ({
        url: `/api/user-profiles?id=${payload.id}`,
        method: RequestTypes.GET
      })
    }),
    getMeasurements: builder.mutation({
      query: (payload) => ({
        url: `/api/user-measurement?id=${payload.id}`,
        method: RequestTypes.GET
      })
    }),
  })
});

export const { useGetHomePageMutation, useGetCategoryItemsMutation, useLoginMutation, useGetProfileMutation, useGetMeasurementsMutation } = profileApis;
