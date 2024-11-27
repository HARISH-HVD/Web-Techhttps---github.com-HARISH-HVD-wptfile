import { Link } from "react-router-dom"
import { logout } from "./reduxExamples/login/LoginSlicer"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Menu() { //it is default export
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.loginReducer.auth)
    const signOut = useSelector((state) => state.loginReducer.signOut)
    const navigate = useNavigate()

    useEffect(() => {
        if (signOut) {
            navigate("/login")
        }
    }, [signOut])

    return (
        <>

            <header className="shadow">
                <div className="row ">
                    <div className="col-12 p-0">
                        <div className="alert alert-primary text-center  mb-0" role="alert">
                            A Hub of Daily Needs for Everyone!
                        </div>
                    </div>
                </div>

                <div className="row bg-primary nav-row">
                    <div className="col-4 p-0">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                            <div className="container-fluid">
                                {/* <a className="navbar-brand" href="#"> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-lightning-charge" viewBox="0 0 16 16">
                                    <path
                                        d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z" />
                                </svg>
                                {/* </a> */}
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                                            <Link className="nav-link active" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            {/* <a className="nav-link " href="contact.html">Contact</a> */}
                                            <Link className="nav-link " to="/contact">Contact</Link>
                                        </li>
                                        <li className="nav-item">
                                            {/* <a className="nav-link " href="about.html">About</a> */}
                                            <Link className="nav-link " to="/about">About</Link>

                                        </li>
                                        <li className="nav-item">
                                            {/* <a className="nav-link " href="about.html">About</a> */}
                                            <Link className="nav-link " to="/product">Product</Link>

                                        </li>
                                        <li className="nav-item">
                                            {/* <a className="nav-link " href="about.html">About</a> */}
                                            <Link className="nav-link " to="/calc">Calculatorr</Link>

                                        </li>
                                        <li className="nav-item">
                                            {/* <a className="nav-link " href="about.html">About</a> */}
                                            <Link className="nav-link " to="/count">Counter</Link>

                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Reducer
                                            </a>
                                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a class="dropdown-item bg bg-success" href="/reducerCounter">Counter</a></li>
                                            </ul>
                                        </li>
                                        {/* <li className="nav-item">
                                        <a className="nav-link " href="services.html">Services</a>
                                    </li> */}
                                        {auth ? <li className="nav-item">
                                            <button className="btn btn-success" onClick={() => dispatch(logout())}>Logout</button>
                                        </li>
                                            : <>

                                                <li className="nav-item" />
                                                {/* <a className="nav-link btn btn-outline-warning btn-sm px-3 "
                                            href="login.html">Login</a> */}
                                                <Link className="nav-link " to="/login">Login</Link>
                                                <li className="nav-item">
                                                    {/* <a className="nav-link btn btn-outline-warning btn-sm px-3 ms-2"
                                            href="register.html">Register</a> */}
                                                    <Link className="nav-link " to="/register">Register</Link>
                                                </li>
                                            </>}

                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="col-6"></div>
                    <div className="col-2">
                        <ul className="nav">

                            <li className="nav-item p-0 mt-2">
                                <a className="nav-link" href="https://x.com/?lang=en">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-twitter" viewBox="0 0 16 16">
                                        <path
                                            d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                                    </svg></a>
                            </li>
                            <li className="nav-item p-0 mt-2">
                                <a className="nav-link" href="https://github.com/"><svg xmlns="http://www.w3.org/2000/svg"
                                    width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                </svg></a>
                            </li>
                            <li className="nav-item p-0 mt-2">
                                <a className="nav-link" href="https://opencollective.com/"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-opencollective" viewBox="0 0 16 16">
                                    <path fill-opacity=".4"
                                        d="M12.995 8.195c0 .937-.312 1.912-.78 2.693l1.99 1.99c.976-1.327 1.6-2.966 1.6-4.683 0-1.795-.624-3.434-1.561-4.76l-2.068 2.028c.468.781.78 1.679.78 2.732z" />
                                    <path
                                        d="M8 13.151a4.995 4.995 0 1 1 0-9.99c1.015 0 1.951.273 2.732.82l1.95-2.03a7.805 7.805 0 1 0 .04 12.449l-1.951-2.03a5.07 5.07 0 0 1-2.732.781z" />
                                </svg></a>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link btn btn-outline-warning btn-sm px-3 ms-2"
                                            href="register.html">Register</a> */}
                                <Link className="nav-link btn btn-success p-1 mt-3" to="/addtocart" >IN-Cart</Link>
                            </li>
                            {/* <button type="button" className="btn btn-success p-1 mt-3">Download</button> */}
                        </ul>

                    </div>
                </div>
                <div className="row shadow" width="100%">
                    <div className="col-3 p-0">
                        <div className="input-group py-2">
                            <input type="text" className="form-control" placeholder="Search docs..."
                                aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span className="input-group-text" id="basic-addon2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-search" viewBox="0 0 16 16">
                                    <path
                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="col-7"></div>
                    <div className="col-2 py-2">
                        <button type="button" className="btn btn-success">Your Orders</button>
                    </div>
                </div>
            </header>
            

        </>
    )
}