import { configureStore } from "@reduxjs/toolkit";
import eoReducer from "./EOSlicer"

export const eoStore=configureStore({
    reducer:{
        eoReducer:eoReducer
    }
})