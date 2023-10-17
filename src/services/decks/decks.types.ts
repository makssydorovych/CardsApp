

export type DecksResponse ={
    maxCardsCount: number
    pagination: Pagination
    items: Deck[]
}
export type Pagination = {
    totalPages: number
    currentPage: number
    itemsPerPage: number
    totalItems: number
}
export type Deck ={
    id: string
    userId: string
    name: string
    isPrivate?: boolean
    shots: number
    cover?: string | null
    rating: number
    isDeleted?: any
    isBlocked?: any
    created: string
    updated: string
    cardsCount: number
    author: Author
}
export type Author ={
    id: string
    name: string
}
export type CreateDecksArgs=Pick<Deck, 'name' | 'cover' | 'isPrivate'>
type Direction = 'asc' | 'desc'
type Field = 'name' | 'updates'
export type GetDeckParams ={
    name?: string
    authorId?: string
    orderBy?: `${Field}-${Direction}`
    currenPage?: number
}