import React , {useEffect} from 'react'

import axios from 'axios';

import { addToCart } from '../store/cartSlice';

import {useState} from 'react'

import { useDispatch,useSelector} from 'react-redux';


import { fetchProduct } from '../store/productslice';


function Product() {
    // const[products, setproducts] = useState([]);

     const dispatch = useDispatch();

     //get product and status from Redux
     const {data:products , status} = useSelector((state)=> state.product);
    
    

     
  

     useEffect(()=>{
        // const fetchProducts= async()=>{
        //       const response = await axios.get('https://fakestoreapi.com/products');
        //       console.log(response.data);
        //        setproducts(response.data);
        // }
        // axios.get('https://fakestoreapi.com/products').then((res)=>{
        //     console.log(res.data);
        //     setproducts(res.data);
        // })
        // fetchProducts();




        dispatch(fetchProduct());
     },[]);
    if (status === 'loading') return <p>Loading products...</p>;
    if (status === 'error') return <p>Error..... Occured</p>;

     const handleAdd = (product)=>{
         //the job is to add the product to  the state
          console.log('butt');
          
          dispatch(addToCart(product));
     }

  return (
    <>
     
    <div className='productswrapper'>
        {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={()=>handleAdd(product)} className="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
    </>
  )

  
}

export default Product