import {createSlice} from  '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: 'cart',

    initialState: [],
    reducers:{
        addToCart(state ,action){
             state.push(action.payload)
        },
        //[]
        removeCart(state , action){
            console.log(action.type);
            
             return state.filter((cartproduct)=>{
               return cartproduct.id!==action.payload;
           })
        }
    }

})

export const{addToCart , removeCart} = cartSlice.actions

export default cartSlice.reducer