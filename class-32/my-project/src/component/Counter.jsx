import React ,{useState} from 'react'
//we are importing hooks as state is based or written in class component

function counter() {
 const[count , setCount] = useState(0);
 const[factor,setFactor] =useState(1);
 //setCount only work with count or manipulate
 //setCount is a method which can manipulate count
 function increment(){
    setCount(count+factor); 
 }
 function decrement(){
    if(count-factor<0){
        setCount(0);
    }
    else{
    setCount(count-factor);
    }
}


 function increment_factor(){
    setFactor(factor+1); 
 }
 function decrement_factor(){
    if(factor===0){
        setFactor(factor);
    }
    else{
    setFactor(factor-1);
    }
    
 }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h1>Factor:{factor}</h1>
      <button onClick={increment_factor}>Increment</button>
      <button onClick={decrement_factor}>Decrement</button>
    </div>
  )
}

export default counter