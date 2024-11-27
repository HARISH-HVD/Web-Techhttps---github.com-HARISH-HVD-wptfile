import { useEffect, useRef } from "react"

export const UseRefExample=()=>
{
    const emailRef=useRef()

    function changeColor()
    {
        emailRef.current.style.backgroundcolor="grey"
        emailRef.current.style.color="white"
        emailRef.current.value="Patty"
    }
    useEffect(()=>{
        emailRef.current.focus()
    },[])

    return(<>

    <input type="email" ref={emailRef} placeholder="Enter Email-id"/>
    <button onClick={changeColor}>Change Color</button>
    
    </>)
}