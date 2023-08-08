import { configureStore } from "@reduxjs/toolkit";
import showReducer from './slice/showSlice'

export const store = configureStore({
    reducer: {
        shows : showReducer,
    }
})