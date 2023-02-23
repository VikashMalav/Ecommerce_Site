import React, { useState,createContext,useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home'
import Header from './Header'
import About from './About'
import Contect from './Home'
import Cart from './Cart'
import Contact from './Contact';
import './Style.css'
import Singlepage from './SinglePage';



export const CartContext=createContext({})

function Main() {
  const[cart,setCart]=useState(
    (localStorage.getItem('product')===null)?[]:JSON.parse(localStorage.getItem('product')))
  

  function handleclick( e,id) {
    e.preventDefault()
    setCart([...cart, id])
    // console.log(cart)



}
useEffect(()=>{
  localStorage.setItem('product',JSON.stringify(cart))
},[cart])

  return (
  <CartContext.Provider value={{cart,setCart,handleclick}} >
    <BrowserRouter>
            <Header/>
            <Routes>
                
                <Route path='/' element={<Home />}></Route>
                <Route path='/products/:id' element={<Singlepage/>}></Route>
                <Route path='/contect' element={<Contect />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
               

            </Routes>
        </BrowserRouter>
        </CartContext.Provider>
  )
}

export default Main