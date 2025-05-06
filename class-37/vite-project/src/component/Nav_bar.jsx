import React from 'react'

import {Link} from 'react-router-dom'

import { useSelector } from 'react-redux'

function Nav_bar() {
  const noofProducts = useSelector((state)=> state.cart)
  return (
    <div 
        style={
            {display:'flex',
             justifyContent:'space-between',
             alignItems:'center',
            }
        }
       
    >
        <span className='logo'>Redux Store</span>
        <div className='nav'>
            <Link className='navLink' to="/">Home</Link>
            <Link className='navLink' to="/cart">Cart</Link>
        </div>
        <span className='cartCount'>Card Items:{noofProducts.length}</span>
    </div>
  )
}

export default Nav_bar