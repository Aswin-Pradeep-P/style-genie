import { baseApi } from '@Services/api';

export const extendedBaseQuery = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: `list_user`,
        method: 'GET'
      })
    }),
    createUser: builder.mutation({
      query: ({ ...data }) => ({
        url: 'create',
        method: 'POST',
        body: data
      })
    })
  })
});

export const { useGetUsersQuery, useCreateUserMutation } = extendedBaseQuery;
