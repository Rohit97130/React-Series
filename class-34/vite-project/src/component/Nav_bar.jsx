import React from 'react'
import Logo from '../Movie.com.png'

import { Link } from 'react-router-dom';


function Nav_bar() {
  return (
    <div className='flex space-x-8 items-center pl-3 py-4'>
        <img className='w-[50px]' src={Logo} alt="Movie Logo"/>
        <Link to="/" className='text-blue-500 font-bold'>Movies</Link>
        <Link to="/watchList" className='text-blue-500 font-bold'>WatchList</Link>
    </div>
  )
}

export default Nav_bar