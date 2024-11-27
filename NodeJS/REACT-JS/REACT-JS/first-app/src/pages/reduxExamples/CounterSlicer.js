import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"CounterName",
    initialState:{
        count:0
    },
    reducers:{
        incrementCount:(state,action)=>
        {
            const incBy = action.payload
            state.count += parseInt(incBy)
        },
        decrementCount:(state,action)=>
        {
            const incBy = action.payload
            state.count -= parseInt(incBy)
        },
    }
})

export const {incrementCount,decrementCount}=counterSlice.actions  //counterSlice.actions returns an object of all function from reducer property of counterSlice then export them

export default counterSlice.reducer  //export reducer as default beacuse can change name when import in store