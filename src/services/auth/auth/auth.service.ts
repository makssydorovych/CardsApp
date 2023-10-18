import {baseApi} from "@/services/base-api.ts";
import {LoginArgs, LoginResponseType} from "@/services/auth/auth/auth.types.ts";

export const authService = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        me: builder.query<any, void>({
            query: () => '/v1/auth/me',
            providesTags: ['Me']
        }),
        login: builder.mutation<LoginResponseType, LoginArgs>({
            query: (params) => ({
                url: 'v1/auth/login',
                method: 'POST',
                body: params,
            }),
            invalidatesTags: ['Me'],
        }),
        logout: builder.mutation<void, void>({
            query: () => ({
                url: '/v1/auth/logout'
            }),
            onQueryStarted: async (_, {getState, dispatch, queryFulfilled}) => {
                try {
                    await queryFulfilled
                    dispatch(authService.util.updateQueryData('me', undefined, draft=>{
                        return null
                    }))
                } catch (e) {
                    console.log(e)
                }
            }
        })
    }),
});

export const {useLoginMutation, useMeQuery} = authService;
