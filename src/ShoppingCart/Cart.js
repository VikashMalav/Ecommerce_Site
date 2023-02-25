
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
    function handleQuantity(e, id) {

        const updateQuantity = parseInt(e.target.value)
        const newquantity = cart.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: updateQuantity }
            }
            return item
        })

        setCart(newquantity)

        console.log(cart)
    }
    
       const checkoutPrice = cart.reduce((total,product)=>{
            return total+product.price*product.quantity
        },0)
        console.log(checkoutPrice)

      
    
    return (
        <>
        <div className='cart_page'>
            {(cart.length !== 0)
                ? cart.map((item) => {

                    return (<>
                        <div key={item.id} className='cart_item'>
                            <img className='cartImage' src={item.image}></img>
                            <div className='product_detail'>
                                <h3>{item.title}</h3>
                                {/* <h2>{item.quantity}</h2> */}
                                <h3>Price: ${item.price * item.quantity}</h3>
                                <label htmlFor='quantity'>Quantity:</label>
                                <input type='number' min='1' max='5' defaultValue={item.quantity} id='quantity' onChange={(e) => handleQuantity(e, item.id)}></input>
                                <Link to='' onClick={(e) => { removeItem(e, item.id) }} >Remove</Link>
                            </div>
                        </div>
                    </>
                    )
                })
                
                
                : <div className='empty_cart'><img src='empty cart.webp' alt='empty cart'></img></div>
                
                
            }

        </div>
    <div className='total'><h2 >Total Price:$ {(checkoutPrice.toFixed(2))}</h2></div>
    </>
    )
}

export default Cart