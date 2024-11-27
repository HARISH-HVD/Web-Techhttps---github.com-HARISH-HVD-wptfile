import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const loginslice=createSlice({
    name:"login",
    initialState:{
        user:"",
        auth:false,
        msg:"",
        signOut:false,
        res:false
    },
    reducers:{
        setResponse:function(state,action)
        {
            const responseData=action.payload

            if(responseData.login){
            
                state.auth=true
                state.user=responseData.person
                state.msg="Login Successful"
                state.signOut=false
            }
            else
            {

                state.auth=false
                    state.user=""
                    state.msg="Login Failed"
                    state.signOut=false
            }

            // if(credentials.email=="hd@gmail.com"&& credentials.password=="1234")
            // {
            //     state.auth=true
            //     state.user=credentials.email
            //     state.msg="Login Successful"
            //     state.signOut=false
            // }
            // else{
            //     state.auth=false
            //     state.user=""
            //     state.msg="Login Failed"
            //     state.signOut=false
            // }
        },

        logout:function(state,action)
        {
            state.auth=false
            state.msg="Logout Successfully"
            state.user=""
            state.signOut=true
        },

        setReg:function(state,action)
        {
            const regData=action.payload
            //axios
            
            console.log(regData)
            state.msg="Registered Successfully"
            state.res=true
        }
    }
})

export const {logout,setResponse,setReg}=loginslice.actions
export default loginslice.reducer

export const authenticate=(credentials)=>async (dispatch)=>    //by default parameter dispatch 
{
    try{
    const response=await axios.post("http://localhost:8000/login",credentials)
    console.log(response.data)
        dispatch(setResponse(response.data))
    }
    catch(err)
    {
        console.error(err)
    }
}

export const register=(userData)=>async (dispatch)=>    //by default parameter dispatch 
{
    try{
    const response=await axios.post("http://localhost:8000/register",userData)
    console.log(setReg(response.data))
        dispatch(setReg(response.data))
    }
    catch(err)
    {
        console.error(err)
    }
}


