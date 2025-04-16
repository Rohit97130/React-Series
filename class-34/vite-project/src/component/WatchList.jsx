import React from 'react'

function WatchList({watchlist}) {
  return (
    <> 
       {/* Genre field  */}

       {/* Search field  */}
      <div className='flex justify-center my-10'>
         <input placeholder = 'Search Movie' className='bg-gray-200 h-[3rem] w-[18rem] px-4 border-1 outline-none' type="text" />
      </div>

      <div className='m-4 '>
         <table className='w-full text-center   rounded-md overflow-hidden'>
          <thead className=' border border-gray-200 bg-gray-200'>
          <tr>
             <th>Name</th>
             <th>Rating</th>
             <th>Popularity</th>
             <th>Genre</th>
             <th></th>
           </tr>
          </thead>

          <tbody >
             {watchlist.map((movieObj)=>{
                return  <tr className='border-b-1 border-gray-200'>
                <td className="flex items-center px-6 py-4" >
                  <img className='h-[6rem] w-[10rem] object-cover  rounded' src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}/>
                 <div className='mx-10'>{movieObj.title}</div>
                </td>
                <td>{movieObj.vote_average}</td>
                <td>{movieObj.popularity}</td>
                <td>Rating</td>
 
                <td className='text-red-500'>Delete</td>
              </tr>
             })}

          </tbody>


         </table>
      </div>
    </>
  )
}

export default WatchList