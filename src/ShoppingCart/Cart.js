
import { useContext } from 'react'
import { CartContext } from './App'


function Cart() {
    const { cart } = useContext(CartContext)

    console.log(cart)

    return (
     <div className='cart_page'>
            {cart.map((item) => {
                return (
                    <div key={item.id} className='Cart_item'>
                        <img className='cartImage' src={item.image}></img>
                        <h3>{item.title}</h3>
                        <h3>${item.price}</h3>
                    </div>)
            })

            }
        </div>
    )
}

export default Cart