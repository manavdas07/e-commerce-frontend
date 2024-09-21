import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import myntralogo from '../Assets/myntra_logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { NavLink } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'

const Navbar = () => {
    const [menu,setmenu]=useState("shop")
    const {getTotalCartItems}= useContext(ShopContext)
    const menuRef= useRef()
    const dropdown_toggle= (e)=>{
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');   
    }

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={myntralogo} alt="Error"/>
        <p>Myntra</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setmenu("shop")}}><NavLink style={{textDecoration:'none'}} to='/'>Shop</NavLink>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("men's wear")}}><NavLink style={{textDecoration:'none'}}  to='/mens wear'>Men's Wear</NavLink>{menu==="men's wear"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("women's wear")}}><NavLink style={{textDecoration:'none'}}  to='/womens wear'>Women's Wear</NavLink>{menu==="women's wear"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("kid's wear")}}><NavLink style={{textDecoration:'none'}}  to='/kids wear'>Kid's Wear</NavLink>{menu==="kid's wear"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
      :<NavLink to='/login'><button>Login</button></NavLink>}
       <NavLink to='/cart'> <img src={cart_icon} alt="Error"/></NavLink>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
