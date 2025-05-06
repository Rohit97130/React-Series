import { configureStore } from "@reduxjs/toolkit"

import productReducer from "./productslice"

import cartReducer from "./cartSlice"


const store = configureStore({
    reducer:{
       cart: cartReducer,
       product:productReducer
    },
})


export default store