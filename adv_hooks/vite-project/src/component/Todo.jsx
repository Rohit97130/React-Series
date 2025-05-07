import React, { useState } from 'react'
import uuid from 'react-uuid';

import {TiTick, TiTrash} from  'react-icons/ti'


function Todo() {
    const [list , setList] = useState([]);

    const[task,settask] = useState(
        {
           title:"",
           by:""
        }
    );

    const handleChange =(e)=>{
        const key = e.target.name;
        const value = e.target.value;
        settask({...task,[key]:value});
    }

    const addTask = ()=>{

        const updated = {...task, id:uuid() ,"isDone":false};
        console.log(updated);
        
        setList([...list,updated]);
    }

    const markDone = (id)=>{
          
        const index = list.findIndex((item)=> item.id===id);

        const doneTask = [...list];
        doneTask[index].isDone = true;
        setList(doneTask);
    }

    const deleteTask = (id)=>{
        const filerlist = list.filter((item)=> item.id!==id);
        setList([...filerlist]);
    }


     
  return (
     <>
       <div>
          <h1 >My TodoList</h1>
           <div>
            I want to do <input type="text" className="text" name="title" onChange={handleChange}/> by{' '}
            <input type="date" className="date" name="by" onChange={handleChange} /> {' '}
            <button className='wishBtn' onClick={addTask}>Add a task</button>
           </div> 

           <ul>
              {list.map((item)=>(
                  <li key={item.id}>
                    <span style={{textDecoration: item.isDone?'line-through':''}}>
                       <strong>{item.title}</strong> is due by {item.by}
                    </span>
                    <span><TiTick size={24} onClick={()=>{markDone(item.id)}} /></span>
                    <span><TiTrash size={24} onClick={()=>{deleteTask(item.id)}}/></span>
                  </li>
              ))}
           </ul>
       </div>
     </>
  )
}

export default Todo