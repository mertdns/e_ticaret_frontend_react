import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"
import productSlice  from "./productSlice";
import userSlice from "./userSlice";

export const store = configureStore({
    reducer:{
        app:appSlice,
        product:productSlice,
        user:userSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch