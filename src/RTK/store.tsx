import { configureStore } from "@reduxjs/toolkit";
import curProReducer from './curProductsSlice'

export const store = configureStore({
    reducer:{
        curPro: curProReducer,
    }
})

export type Rootstore = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch