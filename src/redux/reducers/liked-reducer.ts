import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
    likedId: string[]
}


let initialState: initialStateType = {
    likedId: []
}

const likedSlice = createSlice(
    {
        name: "app",
        initialState: initialState,
        reducers: {
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


export const {toggleLike} = likedSlice.actions
export default likedSlice.reducer