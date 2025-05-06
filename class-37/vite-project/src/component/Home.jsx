import React from 'react'
import Product from './Product'

function Home() {
  return (
    <div>
        <h2 className='heading'> Welcome to  the redux toolkit store</h2>
        <section>
            <h3 >Product</h3>
            <Product/>
              
        </section>
    </div>
  )
}

export default Home