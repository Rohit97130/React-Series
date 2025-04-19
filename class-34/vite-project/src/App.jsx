import React, { useEffect, useState } from 'react';
import Nav_bar from './component/Nav_bar';
import Movies from './component/Movies';
import WatchList from './component/WatchList';
import Banner from './component/Banner';
import Pagination from './component/Pagination';

import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {

  const[watchList,setWatchList] = useState([]);

  const addToWatchList = (movieObj) => {
    const newWatchList = [...watchList, movieObj];
    setWatchList(newWatchList);
    localStorage.setItem('movies' , JSON.stringify(newWatchList));
    // console.log(newWatchList);
    console.log('addtowatchlist');
    
  };

  const handledelete = (movieObj)=>{
     let movies  = JSON.parse(localStorage.getItem('movies'));

     movies = movies.filter((movie)=>{
         return movieObj.id !== movie.id
     })
     localStorage.setItem('movies',JSON.stringify(movies));

    let temp = watchList.filter((obj)=>{
       return movieObj.id!==  obj.id;
    })
    setWatchList([...temp]);

}

  useEffect(()=>{
    let localStoragedata = localStorage.getItem('movies');
    console.log('mounted1');
    
    if(!localStoragedata) return;
      setWatchList(JSON.parse(localStoragedata));
  },[]);

  return (
    <>
     <BrowserRouter>
      <Nav_bar />
          <Routes>
       <Route path="/" element={ <> <Banner/>  <Movies addToWatchlist = {addToWatchList} watchList={watchList}/> </>} />
        <Route path="/watchList" element={<WatchList watchlist = {watchList} setWatchList={setWatchList} handledelete={handledelete} />} />
      </Routes> 
     
    </BrowserRouter>
     </>
  );
}

export default App;
