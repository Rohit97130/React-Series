import React from 'react'
import { useState } from 'react'


//dynamic import 
function Dynamic() {
    const [movies , setMovies ] = useState([]);
    const getMovies =()=>{
     import('../obj').then((module)=>{        //code spliting ->dynamic import -> it will get into  bundle only  when button  will  be click or other chunk  of code will  be apperar not in bundle
         console.log(module.obj);
         setMovies(module.obj) ;
     })
    }


  return (
    <>
    <button onClick={getMovies}>Show MOvie</button>
    <h1>{movies.length>0? JSON.stringify(movies):' '}</h1>
 </>
  )
}

export default Dynamic