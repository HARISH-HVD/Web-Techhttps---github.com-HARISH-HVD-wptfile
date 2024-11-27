import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlicer"

export const counterStore=configureStore({
    reducer:{
        counter:counterReducer  //this "counter" property name used to access state variables in app view(CounterView)  

    }
})