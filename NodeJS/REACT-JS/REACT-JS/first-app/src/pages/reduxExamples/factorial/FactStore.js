import { configureStore } from "@reduxjs/toolkit";

import factReducer from "./FactSlicer"

export const factStore = configureStore({
    reducer:

    {factReducer:factReducer}
})