import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios";

const STATUS = {
    IDLE :'idle',
    LOADING: 'loading',
    ERROR: 'error',
}



const productslice  = createSlice({
     name: 'product',
     initialState :{
        status:STATUS.IDLE,
        data:[]
     },

     extraReducers: (builder)=>{
          builder.addCase(fetchProduct.pending , (state,action)=>{
             state.status = STATUS.LOADING
          })
          builder.addCase(fetchProduct.fulfilled , (state,action)=>{
             state.data = action.payload
             state.status = STATUS.IDLE
          })
          builder.addCase(fetchProduct.rejected , (state,action)=>{
             state.status = STATUS.ERROR
          })
     }
})


  export const fetchProduct = createAsyncThunk("product/fetch" , async()=>{
    const res = await axios.get('https://fakestoreapi.com/products');
    const data = res.data;
    return data;
})


export default productslice.reducer