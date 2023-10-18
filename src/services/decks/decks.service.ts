import {CreateDeckArgs, Deck, Decks, DeleteDeckParams, GetDecksParams, UpdateDeckParamsType,} from './decks.types.ts'

import {baseApi} from '@/services/base-api.ts'
import {RootState} from "@/services/store.ts";

export const DecksService = baseApi.injectEndpoints({
    endpoints: builder => {
        return {
            getDecks: builder.query<Decks, GetDecksParams | void>({
                query: params => ({
                    url: 'v1/decks',
                    params: params ?? {},
                }),
                providesTags: ['Decks'],
            }),
            createDeck: builder.mutation<Deck, CreateDeckArgs>({
                query: body => ({
                    url: 'v1/decks',
                    method: 'POST',
                    body,
                }),
                invalidatesTags: ['Decks'],
            }),
            deleteDeck: builder.mutation<void, DeleteDeckParams>({

                query: ({id}) => ({
                    url: `v1/decks/${id}`,
                    method: 'DELETE',
                }),
                onQueryStarted: async ({id}, {getState, queryFulfilled, dispatch}) => {
                    const state = getState() as RootState
                    const {searchByName, currentPage} = state.decks

                    const pathPesult = dispatch(DecksService.util.updateQueryData('getDecks', {currentPage, name: searchByName}, draft => {
                        draft?.items?.splice(draft?.items?.findIndex(deck => deck.id === id), 1)

                    }))
                    try {
                      await queryFulfilled
                    } catch (e) {
                      pathPesult.undo
                    }
                },
                invalidatesTags: ['Decks'],
            }),
            updateDeck: builder.mutation<Deck, UpdateDeckParamsType>({
                query: ({id, body}) => ({
                    url: `v1/decks/${id}`,
                    method: 'PATCH',
                    body,
                }),
                invalidatesTags: ['Decks'],
            }),
        }
    },
})

export const {
    useGetDecksQuery,
    useCreateDeckMutation,
    useDeleteDeckMutation,
    useUpdateDeckMutation,
} = DecksService
