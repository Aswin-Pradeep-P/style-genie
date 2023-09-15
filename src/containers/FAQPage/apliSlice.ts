import { baseApi } from '@Services/api';
import { RequestTypes } from '@Constants/api';

const profileApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.mutation({
      query: () => ({
        url: '',
        method: RequestTypes.GET
      })
    })
  })
});

export const { useGetProfileMutation } = profileApis;
