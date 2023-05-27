import { QuoteData } from "../../models/types"
import { RootState } from "../store"

export const getQuotes = (state: RootState): QuoteData[] => {
    const quotes = state.app.quotes
    const likedQuotes = state.liked.likedId

    const result = quotes.map((item): QuoteData => ({
        _id: item._id, author: item.author,
        content: item.content, liked: likedQuotes.includes(item._id)
    }))
    return result
}   