import React from 'react'

import { useSelector,useDispatch } from 'react-redux'


import { removeCart } from '../store/cartSlice'


function Cart() {
  const products  = useSelector((state)=>state.cart)
  const dispatch = useDispatch();
  const handleRemove = (id)=>{
       console.log('handleremove');

       dispatch(removeCart(id));
  }

  return (
    <div>
    <h2>Cart Products</h2>

    

    {products.map((product) => {
      return (
        <div key={product.id} className="cartCard">
          <img src={product.image} />
          <h5 style={{maxWidth:'75px'}}>{product.title}</h5>
          <h5>{product.price}</h5>
          <button onClick={()=>handleRemove(product.id)} className="btn">Remove</button>
        </div>
      );
    })}
  </div>
  )
}

export default Cart