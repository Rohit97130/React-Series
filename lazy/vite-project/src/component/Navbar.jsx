import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{display:'flex',justifyContent:'space-between'}}>
       <Link to="/" >HOME</Link>
       <Link to="/about" >About</Link>
       <Link to="/product" >Product</Link>
       <Link to="/testimonial" >Testimonial</Link>
    </div>
  )
}

export default Navbar