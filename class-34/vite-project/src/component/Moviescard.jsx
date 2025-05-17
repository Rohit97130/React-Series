import React, { useEffect } from 'react'

import { useContext } from 'react';
import { Moviecontext } from './moviecontext';
import { Link } from 'react-router-dom';


function Moviescard({name , Posterpath, MovieObj}) {
  
    let myContext = useContext(Moviecontext)
    
    

    function doesContain(){
    for(let i=0;i<myContext.watchList.length;i++){
         if(myContext.watchList[i].id === MovieObj.id){
            return true;//change the button to cross
         }
      }
        return false; //added to watchList
  }

  return (
    <div className='h-[40vh] w-[150px]  bg-center bg-cover flex flex-col justify-between items-end rounded-lg hover:scale-110 duration-300' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${Posterpath})`}}>
         
         {doesContain()?(
               <div onClick={()=>{myContext.handledelete(MovieObj)}} className='cursor-pointer  mr-1 mt-2 p-1 bg-black/50 rounded'>
                &#10060; 
               </div>
         ):(
          <div onClick={()=>{
            myContext.addToWatchList(MovieObj)
           }} className='cursor-pointer mr-1 mt-2 p-1 bg-black/50 rounded'>
            &#128525; 
           </div>
         )}
          
            


            <div className='text-white w-full text-center text-xl p-2 bg-gray-900/70 '>{name}</div>
         <Link to={`/details/${MovieObj.id}`}><i class="fa-solid fa-circle-info bg-gray-800 text-white hover:bg-gray-900  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"></i></Link>

        

        </div>
         
  )
}

export default Moviescard  