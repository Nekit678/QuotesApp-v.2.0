import { createSlice } from "@reduxjs/toolkit";
import { TagType, getQuotesPageResponseItem } from "../../models/types";

interface initialStateType {
    quotes: getQuotesPageResponseItem[]
    likedId: string[]
    tagList: TagType[]
}


let initialState: initialStateType = {
    tagList: [{ tag: "", title: "Лучшие цитаты" }, { tag: "history", title: "История" },
    { tag: "technology", title: "Технологии" }, { tag: "education", title: "Образование" },
    { tag: "future", title: "Будущее" }],

    quotes: [],
    likedId: []
}

const appSlice = createSlice(
    {
        name: "app",
        initialState: initialState,
        reducers: {
            addQuotes(state, action: { type: string, payload: getQuotesPageResponseItem[] }) {
                state.quotes = [...state.quotes, ...action.payload]
            },
            resetQuotes(state, action: { type: string, payload?: null }) {
                state.quotes = []
            },
            toggleLike(state, action: { type: string, payload: { id: string } }) {
                const index = state.likedId.indexOf(action.payload.id)
                if (index === -1) {
                    state.likedId.push(action.payload.id)
                }
                else {
                    state.likedId.splice(index, 1)
                }
            }
        }
    }
)


export const { addQuotes, toggleLike, resetQuotes } = appSlice.actions
export default appSlice.reducer