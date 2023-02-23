
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './App'


function Cart() {
    const { cart, setCart } = useContext(CartContext)

    console.log(cart)

    function removeItem(e, selectItem) {
        e.preventDefault()
        setCart(
            cart.filter((product) => {

                return product.id !== selectItem

            })
        )
    }
    return (
        <div className='cart_page'>
            {(cart.length !== 0)
                ? cart.map((item) => {
                    return (
                        <div key={item.id} className='cart_item'>
                            <img className='cartImage' src={item.image}></img>
                            <div className='product_detail'>
                                <h3>{item.title}</h3>
                                <h3>Price: ${item.price}</h3>
                                <label htmlFor='quantity'>Quantity:</label>
                                <input type='number' min='1' max='5' defaultValue='1' id='quantity'></input>
                                <Link to='' onClick={(e) => { removeItem(e, item.id) }} >Remove</Link>
                            </div>
                        </div>)
                })


                : <h1>Cart is Empty...</h1>


            }


        </div>
    )
}

export default Cart