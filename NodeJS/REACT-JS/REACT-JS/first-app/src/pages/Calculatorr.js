import { useState } from "react"
import { Footer } from "./Footer"
import Header from "./Header"
import { Result } from "./Result"

export default function Calculatorr() {
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [values, setvalues] = useState({ n1:"", n2:"" })
    return (<>
        <Header />

        <input value={values.n1} onChange={(event) => setvalues({ ...values, n1: parseInt(event.target.value) })} />

        <input value={values.n2} onChange={(event) => setvalues({ ...values, n2: parseInt(event.target.value) })} />

        {/* <input  onChange={(event)=>setN1(parseInt(event.target.value.trim()))} value={n1}/>
    <input  onChange={(event)=>setN2(parseInt(event.target.value.trim()))} value={n2}/>
   <div>Result {n1+n2}</div>  */}

   <Result  values={values}/>

        <Footer />
    </>)
}