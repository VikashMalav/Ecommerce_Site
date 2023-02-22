import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { CartContext } from './App'


function Cart() {
    const { cart } = useContext(CartContext)
    const [productAdded, setProductAdded] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/' + cart[cart.length - 1])
            .then((response) => {
                setProductAdded(response.data)
                console.log(response.data)
            })


    }, [cart])
    return (
        <div className='Cart_Page'>
            {/* { productAdded.filter((product,)=>{
                console.log(product.id)
                return product.id===Cart
            })
            } */}

            <img className='cartImage' src={productAdded.image}></img>
            <div>
                <h3>{productAdded.title}</h3>
                <h3>${productAdded.price}</h3>
            </div>
        </div>
    )
}

export default Cart