// import { useEffect } from "react";
// import "./assets/css/style.css"
// // import lambo from "./assets/imgs/download.jpeg"


// // JSX (Java Script Extentions) rules
// // 1) Close all tags important/compulsory otherwise error 
// // 2) must return single jsx object means return only one tag    <></> this are blank tags called fragments
// // 3) dont use instead use class => className ,  for => htmlFor
// // 4) ternary operator ?: and map() function to iterate  

// import { useState } from "react";

// function App({ name, age, path }) {

//   //hooks :

//   //useState()
//   //useEffect()
//   //useContext()
//   //useReducer()
//   //useCallback()
//   //useRef()

//   const [n, setN] = useState("Raj")
//   const [ag, setAge] = useState(23)

//   function show() {
//     alert("Hello Boss")
//   }

//   // useEffect(()=>{

//   // },[dependencies(optional)])

//   // useEffect(() => 
//   // {
//   //   console.log("useEffect")
//   // })
//   //1)on render 2) no depen array when run on every state variable value changed

//   useEffect(() => {
//     // console.log("useEffect")
//     setTimeout(() => {
//       setN("Rakesh")
//       setAge(34)
//     }, 3000)

//     setInterval(() => {

//       document.querySelector("h2").style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`

//     }, 3000)
//   }, [])
//   //1)only on render 2) not run on any state variable value changed


//   // useEffect(() => {
//   //   console.log("useEffect")

//   // }, [n])
//   //1)only on render 2)run on provided state variable value changed


//   return (
//     <>
// <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">Navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Link</a>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a className="dropdown-item" href="#">Action</a></li>
//             <li><a className="dropdown-item" href="#">Another action</a></li>
//             <li><hr className="dropdown-divider" /></li>
//             <li><a className="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>
//       <form className="d-flex">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>

//       {/* <h1>Hello World : {props.name} Age:{props.age}</h1> */}
//       {/* <h1 style={{color:"red",backgroundColor:"black"}}>Hello Name : {name} Age:{age}</h1> */}
//       <h1 className="bg-color text-color">Hello Name : {name} Age:{age}</h1>
//       {/* <img src={lambo} height={200} alt=""/> */}
//       <img src={require(`./assets/imgs/${path}`)} alt="" height={200} width={400} />

//       <h3>{n}</h3>
//       <h2>{ag}</h2>

//       <button onClick={() => setN("Virat")}>Change Name</button>

//       <button onClick={show}>Alert msg</button>

//       <button onClick={() => alert("Thank You Boss")}>Alert </button>



//     </>
//   );
// }

// export default App;

//import compvariable from "compFilepath"
//<compVaraible/>

import "./assets/css/style.css"

import Header from "./pages/Header"
import { Footer } from "./pages/Footer"
import { Home } from "./pages/Home"

function App() {
  return (
    <>

      <Header />
      <Home />
      <Footer />

    </>
  )
}

export default App