import { createSlice } from "@reduxjs/toolkit";
import { TagType, getQuotesPageResponseItem } from "../../models/types";

interface initialStateType {
    quotes: getQuotesPageResponseItem[]
    tagList: TagType[]
}


let initialState: initialStateType = {
    tagList: [{ tag: "", title: "Лучшие цитаты" }, { tag: "history", title: "История" },
    { tag: "technology", title: "Технологии" }, { tag: "education", title: "Образование" },
    { tag: "future", title: "Будущее" }, { tag: "family", title: "Семья" }],
    quotes: []
}

const appSlice = createSlice(
    {
        name: "app",
        initialState: initialState,
        reducers: {
            addQuotes(state, action: { type: string, payload: getQuotesPageResponseItem[] }) {
                const list = [...state.quotes, ...action.payload]
                const uniqueList = list.filter((value, index, self) =>
                    index === self.findIndex((t) => (
                        t._id === value._id
                    )));
                state.quotes = uniqueList
            },
            resetQuotes(state, action: { type: string, payload?: null }) {
                state.quotes = []
            }
        }
    }
)


export const { addQuotes, resetQuotes } = appSlice.actions
export default appSlice.reducer