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
    getMaterials: builder.mutation({
      query: (payload) => ({
        url: `/api/materials?${payload.id}`,
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
        url: `/api/outfit?id=${payload.id}`,
        method: RequestTypes.GET
      })
    }),
    getCustomize: builder.mutation({
      query: (payload) => ({
        url: `/api/user/customize/${payload.id}?neckline=${payload.neckline}`,
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
    generateOutfits: builder.mutation({
      query: (payload) => ({
        url: '/api/designer/generate-from-text',
        method: RequestTypes.POST,
        body: payload
      })
    })
  }),
});


export const { useGetHomePageMutation, useGetCategoryItemsMutation, useGetOutfitDetailsMutation, useGetCustomizeMutation, useLoginMutation, useGetProfileMutation, useGetMeasurementsMutation, useGetMaterialsMutation ,useGenerateOutfitsMutation} = profileApis;
