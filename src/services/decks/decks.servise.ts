import {baseApi} from "@/services/base-api.ts";
import {CreateDecksArgs, Deck, DecksResponse, GetDeckParams} from "@/services/decks/decks.types.ts";


export const DeckService = baseApi.injectEndpoints({
    endpoints: builder => {
        return {
            getDecks: builder.query<DecksResponse, GetDeckParams | void>({
                query: (params) => {
                   return {
                        url: `v1/decks`,
                       params: params ?? { },
                    }
                },
                providesTags: ['Decks'],
            }),
            createDeck: builder.mutation<Deck, CreateDecksArgs>({
                query: body=>({
                    url: `v1/decks`,
                    method: 'POST',
                    body,
                }),
                invalidatesTags: ['Decks']
            })
        }
    },
})
export const {useGetDecksQuery} = DeckService