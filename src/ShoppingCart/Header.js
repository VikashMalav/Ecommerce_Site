import React,{useContext} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CartContext } from './App'
function Header() {
  const {cart}=useContext(CartContext)
  return (
    <div className='header'>
       <Link to='/' ><h1>Amazon</h1></Link>
       <li> <NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/contact'}>Contact Us</NavLink></li>
        <li><NavLink to={'/cart'}>Cart{(cart.length!==0)?<span className='cart_no'>{cart.length}</span>:''}</NavLink></li>
    </div>
  )
}

export default Header