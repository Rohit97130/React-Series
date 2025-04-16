import React from 'react'

function Pagination({nextFn , prevFn,pagevalue}) {
  return (
    <div className='bg-gray-500 h-[35px] w-full  mt-8 flex justify-center items-center space-x-8'>
        <div onClick={prevFn} ><i className="fa-solid fa-arrow-left "></i></div>
        <div>{pagevalue}</div>
        <div onClick={nextFn}><i className="fa-solid fa-arrow-right"></i></div>
     
    </div>
  )
}

export default Pagination