import { createSlice } from "@reduxjs/toolkit";

const eoslicer=createSlice({
    name:"eo",
    initialState:{
        result:""
    },
    reducers:{
        checkEO:function(state,action)
        {
            const num=action.payload
            if(num==0 || num<0)
            {
                state.result=num+" cannot zero or negative"
            }
            else if(num==1)
            {
                state.result=num+" is universal"
            }
            else
            {
                if(num%2==0)
                {
                    state.result=num+" is even"
                }
                else
                {
                    state.result=num+" is odd"
                }
            }
        }
    }
})

export const {checkEO}= eoslicer.actions
export default eoslicer.reducer