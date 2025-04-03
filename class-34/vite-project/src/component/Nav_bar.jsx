import React from 'react'

import Logo from '../Movie.com.png'
function Nav_bar() {
  return (
    <div className='flex space-x-8 items-center pl-3 py-4 '>
        <img className='w-[50px]' src={Logo}/>

        <a href="/" className='text-blue-500 font-bold'>Movies</a>

        <a href="/watchList" className='text-blue-500  font-bold '>WatchList</a>
        
        <h1>dfnd</h1>

    </div>
  )
}

export default Nav_bar