import Header from "./Header";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "./reduxExamples/login/LoginSlicer";


export default function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const resultRef=useRef()
    const auth = useSelector((state) => state.loginReducer.auth)
    const msg = useSelector((state) => state.loginReducer.msg)

    function sendData(event) {
        event.preventDefault()
        dispatch(authenticate(data))
        // navigate("/product", { state: { name: " Harish" } })
    }

    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    const [data,setData]=useState({email:"",password:""})

    useEffect(() => {
        if (auth) {
            navigate("/product")
        }
        else {
            resultRef.current.innerText=msg
        }
    }, [auth,msg])


    return (
        <>
            <Header />
            <div className="alert alert-primary" role="alert">
                <h1>Login Page</h1>
                <h3 style={{backgroundColor:"red"}} ref={resultRef}></h3>
                <form className="w-25" id="login-form" onSubmit={sendData}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input value={data.email} type="email" className="form-control" id="email"
                            onChange={(event)=> 
                                setData({...data,email:event.target.value})}
                            
                            aria-describedby="emailHelp" />

                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password"
                            onChange={(event)=> 
                                setData({...data,password:event.target.value})}
                        />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary me-2">Submit</button>
                    <button type="register" className="btn btn-primary">Register</button>
                </form>
                Email-id:{data.email}
                <br />
                password:{data.password}
            </div>
            <Footer />
        </>
    );
}
