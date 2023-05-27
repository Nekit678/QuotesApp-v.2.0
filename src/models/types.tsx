export interface ButtonProps {
    text: string
    click?: () => (void)
}

export interface TagType {
    tag: string
    title: string
}

export interface PageTemplateProps {
    quotes: QuoteData[]
    title: string
    lastPage?: boolean
    loadIsFetching?: boolean

    likeFn: (id: string) => (void)
    showMoreFn?: () => (void)
    resetQuotes?: () => (void)
}

export interface QuoteData {
    _id: string
    content: string
    author: string
    liked: boolean
}

export interface QuoteProps extends QuoteData {
    likeFn: (id: string) => (void)
}


export interface QuoteListProps {
    quotes: QuoteData[]
    likeFn: (id: string) => (void)
}

export interface LikeButtonProps {
    liked: boolean
    likeFn: () => (void)
}

export interface getQuotesPageResponseItem {
    _id: string
    content: string
    author: string
    tags: string[]
}

export interface getQuotesPageResponse {
    totalPages: number
    results: getQuotesPageResponseItem[]
}

export interface getQuotesPageRequest {
    page: number
    tag?: string
}