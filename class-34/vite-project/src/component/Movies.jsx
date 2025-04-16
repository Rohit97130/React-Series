import React, { useEffect ,useState } from 'react'
import Moviescard from './Moviescard'
import axios from 'axios'
import Pagination from './Pagination';
function Movies({addToWatchlist,watchList}) {
   const[Movies,setMovies] = useState([]);
   //Movies = []
   const[pageNo,setpageNo] = useState(1);
  
  //  console.log(Movies);

  const handlenext= ()=>{
     setpageNo(pageNo+1);
  }
  const handleprev= ()=>{
     if(pageNo==1){
      setpageNo(pageNo)
      return; 
    } 
     setpageNo(pageNo-1);
  }
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=12f4a33ca05d7985a9d2ad6e50bcc941&language=en-US&page=${pageNo}`).then((res)=>{
          console.log(res.data.results); 
          setMovies(res.data.results);
    })
  },[pageNo]); 

  return (
    <div>
        <div className='font-bold text-xl text-center m-5'>
             <h1>Trending Movies</h1>
        </div>
        
         <div className='flex justify-around flex-wrap gap-8 '>

          {Movies.map((MovieObject)=>{
            return <Moviescard name={MovieObject.title} Posterpath={MovieObject.poster_path} addToWatchList ={addToWatchlist} MovieObj = {MovieObject} watchList={watchList} />
          })}


         </div>
          <Pagination nextFn = {handlenext} prevFn={handleprev} pagevalue={pageNo}/>
    </div>
  )
}

export default Movies 