import { baseApi } from '@Services/api';
import { RequestTypes } from '@Constants/api';

const loginApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    requestOtp: builder.mutation({
      query: (payload) => ({
        url: 'otp/request',
        method: RequestTypes.POST,
        body: payload
      })
    }),
    verifyOtp: builder.mutation({
      query: (payload) => ({
        url: 'otp/verify',
        method: RequestTypes.POST,
        body: payload
      })
    })
  })
});

export const { useRequestOtpMutation, useVerifyOtpMutation } = loginApis;
