import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers/app-reducer";
import { serverApi } from "./backend/api";


let store = configureStore(
    {
        reducer: {
            app: appReducer,
            [serverApi.reducerPath]: serverApi.reducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(serverApi.middleware)

    }
)


export type RootState = ReturnType<typeof store.getState>
export default store;