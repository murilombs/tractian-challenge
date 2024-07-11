import { configureStore } from "@reduxjs/toolkit";
import companieSlice from "../slice";

export const store = configureStore({
    reducer: {
        companies: companieSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;