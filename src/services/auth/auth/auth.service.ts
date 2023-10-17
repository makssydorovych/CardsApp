import { baseApi } from "@/services/base-api.ts";
import { LoginArgs, LoginResponseType } from "@/services/auth/auth/auth.types.ts";

export const authService = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponseType, LoginArgs>({
            query: (params) => ({
                url: 'v1/auth/login',
                method: 'POST',
                body: params,
            }),
            invalidatesTags: ['Me'],
        }),
    }),
});

export const { useLoginMutation } = authService;
