import axios from 'axios'
import React from 'react'
import { useState, useEffect } from "react";
import { useContext } from 'react'
import { CartContext } from './App';
import { Link } from 'react-router-dom';


function Home() {
    const { cart ,handleclick} = useContext(CartContext)
    const [Shopdata, Setdata] = useState([])
    

   


    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/')
            .then((response) => {
                Setdata(response.data)
                // console.log(response.data)
            })


    }, [])

   
   
  return (
        <div className='box'>
            {Shopdata.map((item, index) => {
                return (
                    <div className='itembox' key={index} >
                        <Link className='redirtsingle' to={`products/${item.id}`} >
                            <img src={item.image}></img>
                            <h3>$ {item.price}</h3>
                            {/* <h3>{item.category}</h3> */}
                            <p>{item.title}</p>
                        </Link>
                        {(cart.find(list=>list.id===item.id)!==undefined) ? <p>Added To Cart</p> :
                            (<Link className='btn' to='product' onClick={(e) => handleclick( e,{id:item.id,image:item.image,price:item.price,title:item.title})}>Add To Cart</Link>)
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default Home