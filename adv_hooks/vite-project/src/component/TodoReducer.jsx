import React, { useState, useReducer} from 'react'
import uuid from 'react-uuid';
import { Taskreducer } from './reducer';

import {FormReducer} from './reducer'

import {TiTick, TiTrash} from  'react-icons/ti'


function Todo() {

    const [state,dispatch] = useReducer(Taskreducer,[]);

    const [task , dispatchtask] = useReducer(FormReducer,
      {title: "",
       by: ""
      }
   );

    

    const handleChange =(e)=>{
       dispatchtask(
         {type:'HANDLE_TASK',
         field: e.target.name ,
         payload:e.target.value
         }
      )
    }






     
  return (
     <>
       <div>
          <h1 >My TodoList</h1>
           <div>
            I want to do <input type="text" className="text" name="title" onChange={handleChange}/> by{' '}
            <input type="date" className="date" name="by" onChange={handleChange} /> {' '}
            <button className='wishBtn' onClick={()=>dispatch({type:'ADD_TASK',payload:task})}>Add a task</button>
           </div> 

           <ul>
              {state.map((item)=>(
                  <li key={item.id}>
                    <span style={{textDecoration: item.isDone?'line-through':''}}>
                       <strong>{item.title}</strong> is due by {item.by}
                    </span>
                    <span><TiTick size={24} onClick={()=>dispatch({type:'DONE_TASK',payload:item.id})} /></span>
                    <span><TiTrash size={24} onClick={()=> dispatch({type:'REMOVE_TASK',payload:item.id})}/></span>
                  </li>
              ))}
           </ul>
       </div>
     </>
  )
}

export default Todo