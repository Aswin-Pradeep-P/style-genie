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
    getOutfitDetails: builder.mutation({
      query: (payload) => ({
        url: `/api/default-options?id=${payload.id}`,
        method: RequestTypes.GET
      })
    }),
  })
});

export const { useGetHomePageMutation, useGetCategoryItemsMutation, useGetOutfitDetailsMutation } = profileApis;
