import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./LoginSlicer"
import { thunk } from "redux-thunk";


export const loginstore=configureStore({
    reducer:{
        loginReducer
    },
    //middleware used for thunks
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(thunk)
})
