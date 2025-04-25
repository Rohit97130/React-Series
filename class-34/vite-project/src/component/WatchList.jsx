import React, { useEffect, useState } from 'react'
import genreData from '../utility/genre';

import { useContext } from 'react';
import { Moviecontext } from './moviecontext';

function WatchList() {
  
   const{watchList,setWatchList,handledelete} = useContext(Moviecontext)
 



    const[searchvalue , Setsearchvalue] = useState('');
    const[genreList, SetgenereList] = useState([]);
    const[currentGenre , SetcurrentGenre] = useState('All Genres');
    
    function handleSearch(e){
       Setsearchvalue(e.target.value);
    }

    const handleFilter = (genre)=>{
       SetcurrentGenre(genre);
    }
    
    const handleascending = (()=>{
        let sortedAscending = watchList.sort((movieObjA , movieObjB)=>{
           return movieObjA.vote_average-movieObjB.vote_average
        })
        setWatchList([...sortedAscending]);
    })
    const handledecending = (()=>{
        let sorted_descending = watchList.sort((movieObjA , movieObjB)=>{
           return movieObjB.vote_average-movieObjA.vote_average
        })
        setWatchList([...sorted_descending]);
    })

    const handle_decending_popularity =(()=>{
      let sorted_descending = watchList.sort((movieObjA , movieObjB)=>{
         return movieObjB.popularity-movieObjA.popularity
      })
      setWatchList([...sorted_descending]);
  })

  const handle_ascending_popularity =(()=>{
   let sorted_ascending = watchList.sort((movieObjA , movieObjB)=>{
      return movieObjA.
      popularity-movieObjB.popularity
   })
   setWatchList([...sorted_ascending]);
})






   

    useEffect(()=>{
      let temp = watchList.map((movieObj)=>{
         return genreData[movieObj.genre_ids[0]];
      })
      console.log('mounted watchlist');
      // console.log(temp);

      temp = new Set(temp);
      console.log(temp);
      
      SetgenereList(['All Genres',...temp]);
    },[watchList])

  return ( 
    <> 
       {/* Genre  based filter  */}

       <div className='flex justify-center '>
           {genreList.map((genre)=>{
              return <div onClick={()=>{handleFilter(genre)}} className= { currentGenre===genre?'flex justify-center text-white font-bold items-center h-[3rem] w-[9rem] bg-blue-500 rounded-xl m-4':'flex justify-center text-white font-bold items-center h-[3rem] w-[9rem] bg-gray-500 rounded-xl m-4'}>{genre}</div>
           })}
           
       </div>

       {/* Search field  */}
      <div className='flex justify-center my-10'>
         <input onChange={handleSearch} placeholder = 'Search Movie' className='bg-gray-200 h-[3rem] w-[18rem] px-4 border-1 outline-none' type="text" value={searchvalue} />
      </div>

      <div className='m-4 '>
         <table className='w-full text-center   rounded-md overflow-hidden'>
          <thead className=' border border-gray-200 bg-gray-200'>
          <tr>
             <th>Name</th>
             <th><i onClick={handledecending} class="fa-solid fa-arrow-up"></i> Rating <i onClick={handleascending} class="fa-solid fa-arrow-down"></i></th>
             <th><i onClick={handle_decending_popularity} class="fa-solid fa-arrow-up"></i> Popularity  <i onClick={handle_ascending_popularity} class="fa-solid fa-arrow-down"></i></th>
             <th>Genre</th>
             <th></th>
           </tr>
          </thead>

          <tbody >
             {watchList.filter((movieObj)=>{
               if(currentGenre=== 'All Genres'){
                  return true;
               }
                else{
                return genreData[movieObj.genre_ids[0]]===currentGenre;
                }
})
             .filter((movieObj)=>( //incasse of circular bracket we do not need to writer return
                movieObj.title.toLowerCase().includes(searchvalue.toLowerCase())
             ))
             .map((movieObj)=>{
                return  <tr className='border-b-1 border-gray-200'>
                <td className="flex items-center px-6 py-4" >
                  <img className='h-[6rem] w-[10rem] object-cover  rounded' src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}/>
                 <div className='mx-10'>{movieObj.title}</div>
                </td>
                <td>{movieObj.vote_average}</td>
                <td>{movieObj.popularity}</td>
                <td>{genreData[movieObj.genre_ids[0]]
                }</td>
 
                <td onClick={()=>{handledelete(movieObj)}} className='text-red-500 cursor-pointer'>Delete</td>
              </tr>
             })}

          </tbody>


         </table>
      </div>
    </>
  )
}

export default WatchList