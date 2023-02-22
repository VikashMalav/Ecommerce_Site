import React from 'react'
import { useState,useEffect } from "react";
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './App';
function Singlepage() {
const {id}=useParams()
const {cart,handleclick}=useContext(CartContext)

const [Shopsingledata, Setsingledata] = useState('')
useEffect(() => {
    axios.get('https://fakestoreapi.com/products/'+id)
    .then((response)=>{
        Setsingledata(response.data)
        console.log(response.data)
    })

  
}, [])

  return (
    
        <div className='page'>
         <div className='image'>
         <img src={Shopsingledata.image}></img>
         </div>
         <div className='datile'>
         <h2>Price : $ {Shopsingledata.price}</h2>
         <h2>{Shopsingledata.title}</h2>
         <p>{Shopsingledata.description}</p>
         {
        (cart.includes(Shopsingledata.id))
        ?<p>Added to Cart</p> 
        :<Link to='' onClick={(e)=>{handleclick(e,Shopsingledata.id)}} className='btn'  >Add To Cart</Link>
        }
         </div>
    </div>
    
    
   
  )
}

export default Singlepage