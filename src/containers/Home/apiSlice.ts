import { baseApi } from '@Services/api';
import { RequestTypes } from '@Constants/api';

const profileApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getHomePage: builder.mutation({
      query: (payload) => ({
        url: `/api/outfit`,
        method: RequestTypes.GET
      })
    })
  })
});

export const { useGetHomePageMutation } = profileApis;
