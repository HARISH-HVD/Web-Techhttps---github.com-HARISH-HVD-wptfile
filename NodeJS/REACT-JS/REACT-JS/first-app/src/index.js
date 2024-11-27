import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom"
//pages
import App from './App';
import Login from './pages/login';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import AddToCart from './pages/AddToCart';
import Calculatorr from './pages/Calculatorr';
import { Counter, CounterCallBack } from './pages/Counter';
import { CounterReducer } from './pages/Reducer/CounterReducer';
import { ReduxProvider } from './pages/reduxExamples/ReduxProvider';
import { Provider } from 'react-redux';
import { loginstore } from './pages/reduxExamples/login/LoginStore';
import { UseRefExample } from './pages/UseRefExample';


//pages

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={loginstore}>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<App />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/product' element={<Product />} />
      <Route path='/addtocart' element={<AddToCart />} />
      <Route path='/calc' element={<Calculatorr />}/>
      <Route path='/reducerCounter' element={<CounterReducer />}/>
      {/* <Route path='/count' element={<Counter />}/> */}
      <Route path='/count' element={<CounterCallBack />}/>
      <Route path='/redux' element={<ReduxProvider />}/>
      <Route path='/eo' element={<ReduxProvider />}/>
      <Route path='/ref' element={<UseRefExample />}/>
      
     </Routes>
    </BrowserRouter>
  </Provider>


  // {/* <App /> */}

  // {/* {profiles.map((p, i) => {     this is also a type for multiple lines
  // return <App name="Pratham" age={21} path={"car2.jpeg"} />
  // })} */}



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();