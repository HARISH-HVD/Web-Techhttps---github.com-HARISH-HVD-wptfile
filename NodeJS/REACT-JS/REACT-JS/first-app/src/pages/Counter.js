import { useState , useCallback } from "react";
import { Footer } from "./Footer";
import Header from "./Header";
import { ResultCallback } from "./ResultCallback";
import { EvenOdd } from "./evenOdd/EvenOdd";

export function Counter()
{
    const [count,setcount]=useState(0)
    return (
        <>
        <Header/>

       <p> {count} </p> 
       <br/>
        <button className="btn-lg btn-danger" onClick={()=>setcount(count+1)}>+</button>
        <button className="btn-lg btn-success" onClick={()=>setcount(count-1)}>-</button>

        {/* <button className="btn-lg btn-danger" onClick={()=>setcount((precount)=>precount+1)}>+</button>
        <button className="btn-lg btn-success" onClick={()=>setcount((precount)=>precount-1)}>-</button> */}
        
        <Footer/>

        </>
    )
}

export function CounterCallBack()
{
    const [count,setcount]=useState(0)

    const logCount=useCallback(()=>
    {
        console.log("count="+count)
        
    },[count])

    const incCount=()=>
    {
        setcount((precount)=>precount+1)
    }

    return (
        <>
        <Header/>

       <p> {count} </p> 
       <br/>
        <button className="btn-lg btn-danger" onClick={incCount}>+</button>
        {/* <button className="btn-lg btn-success" onClick={()=>setcount(count-1)}>-</button> */}
        <ResultCallback logCount={logCount}/>

        {/* <button className="btn-lg btn-danger" onClick={()=>setcount((precount)=>precount+1)}>+</button>
        <button className="btn-lg btn-success" onClick={()=>setcount((precount)=>precount-1)}>-</button> */}

        {/* <hr/>
        <h1>Even Odd</h1>
        <EvenOdd/> */}

        <hr/>
        <h1>Even Odd</h1>
        <EvenOdd/>

        <Footer/>

        </>
    )
}

