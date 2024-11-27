import { useState } from "react"
import { Container } from "./Container"
import { createContext } from "react"


export const userContext=createContext()

export const Profile=()=>
{
    const [user,setUser]=useState([
    {
        name:"vijay",
        age:25,
        mobile:"9874563210",
        email:"salgaonkar@gmail.com",
        city:"paanji"
    },
    {
        name:"Ghaturgachh",
        age:55,
        mobile:"9874563269",
        email:"khana@gmail.com",
        city:"Lanka"
    }
   ]
  )
    //profile ke andr => container =>profilecard => profiledeatils
    return(
        <>
        <userContext.Provider value={{user,setUser}}>
        <Container/>
        </userContext.Provider>
        </>
    )
}

