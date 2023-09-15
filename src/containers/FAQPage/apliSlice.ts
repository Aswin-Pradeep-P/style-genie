import { baseApi } from '@Services/api';
import { RequestTypes } from '@Constants/api';

const profileApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfileTest: builder.mutation({
      query: () => ({
        url: '',
        method: RequestTypes.GET
      })
    })
  })
});

export const { useGetProfileTestMutation } = profileApis;
