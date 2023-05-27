import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers/app-reducer";
import { serverApi } from "./backend/api";
import likedReducer from "./reducers/liked-reducer";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from "redux-persist/lib/storage"


const persistConfig = {
    key: "app",
    storage
}

const persistedReducer = persistReducer(persistConfig, likedReducer)


const store = configureStore(
    {
        reducer: {
            app: appReducer,
            liked: persistedReducer,
            [serverApi.reducerPath]: serverApi.reducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(serverApi.middleware).concat()

    }
)

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export default store;