import React from 'react'

function Object_p() {
    const productObject = [
        {name:'Laptop ',price: '34000 ' , brand:' HP'},
        {name:'Mouse ',price: '3000 ' , brand:' Samsung'},
        {name:'Pen ',price: '5000 ' , brand:' Vivo'}
    ]
  return (
    <div>
        <ul>
            {productObject.map((product,index)=>{
                return <li key={index}>
                  Name: {product.name}
                  Price: {product.price}
                  Brand: {product.brand}
                  </li>
            })}
        </ul>
    </div>
  )
}

export default Object_p