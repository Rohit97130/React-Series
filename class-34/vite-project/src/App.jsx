import React, { useState } from 'react';
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
    console.log(newWatchList);
  };

  const handleremove = ()=>{
      
  }

  return (
    <>
     <BrowserRouter>
      <Nav_bar />
          <Routes>
       <Route path="/" element={ <> <Banner/>  <Movies addToWatchlist = {addToWatchList} watchList={watchList}/> </>} />
        <Route path="/watchList" element={<WatchList watchlist = {watchList}/>} />
      </Routes> 
     
    </BrowserRouter>
     </>
  );
}

export default App;
