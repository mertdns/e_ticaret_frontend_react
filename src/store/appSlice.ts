import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AppSliceType } from "../types/app";

const initialState : AppSliceType = {
    Theme:"light",
}

export const appSlice = createSlice({
    name:'app',
    initialState,
    reducers:{
        
    }
})

export const {  } = appSlice.actions;

export default appSlice.reducer;