import React, { useState, useTransition} from 'react'

function List() {
  
     const[input , setInput] = useState('');

     const [list , setlist] = useState([]);

     const[isPending , startTransition] = useTransition(); 

     const LIST_SIZE = 10000;
     
     const handleChange =(e)=>{
        //this field should not be affected
         setInput(e.target.value);
         

         //it sets the priority that input value does not affect by  this below loop
         startTransition(()=>{ //it says that it is low priority which help to prevent lac in input field
        const newList = []
        for(let i=0;i<LIST_SIZE;i++){
           newList.push(e.target.value);
        }
        // console.log(newList) 
        setlist(newList);
         })

     }
      
  return (
    <div>
      <input type="text" name="" onChange={handleChange} value={input}/>
      
      <ul>
      {isPending? <h1>Loading....</h1>:list.map((items)=>{
         return <li>{items}</li>
      })}
      </ul>
    </div>
  )
}

export default List