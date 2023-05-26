import { QuoteData } from "../../models/types"
import { RootState } from "../store"
// import { createSelector } from '@reduxjs/toolkit'


export const getQuotes = (state: RootState, page: number, tag: string): QuoteData[] => {

    // let all_tag_quotes = []

    // if (tag != "") {
    //     const f_tag = tag[0].toUpperCase() + tag.slice(1)
    //     all_tag_quotes = state.app.quotes.filter((item) => (item.tags.includes(f_tag)))
    // }
    // else{
    //     all_tag_quotes = state.app.quotes
    // }

    // const list = all_tag_quotes.slice(0, page * 5)
    const list = state.app.quotes
    const uniqueList = list.filter((value, index, self) =>
        index === self.findIndex((t) => (
            t._id === value._id
        )));

    const likedQuotes = state.app.likedId

    const quotes = uniqueList.map((item): QuoteData => ({
        _id: item._id, author: item.author,
        content: item.content, liked: likedQuotes.includes(item._id)
    }))
    return quotes
}   