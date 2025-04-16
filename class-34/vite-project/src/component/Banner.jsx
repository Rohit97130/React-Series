import React, { useEffect, useState } from 'react'

function Banner() {
   
  const backdropimage = [
     
{backdrop_path: '/hGLywNhy1Fo1rNFHsNZsXGS69B8.jpg', id: 696506, title: 'Mickey 17', original_title: 'Mickey 17'},
{backdrop_path: '/sNx1A3822kEbqeUxvo5A08o4N7o.jpg', id: 1195506, title: 'Novocaine', original_title: 'Novocaine'},
{backdrop_path: '/tYzhkVPWXsORLOCPXIBixboKIjS.jpg', id: 324544, title: 'In the Lost Lands', original_title: 'In the Lost Lands'},
{backdrop_path: '/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg', id: 950387, title: 'A Minecraft Movie', original_title: 'A Minecraft Movie'},
{backdrop_path: '/akwb8tI97GpmIBzBkigA6v7rAdJ.jpg', id: 1087891, title: 'The Amateur', original_title: 'The Amateur'},
{backdrop_path: '/wi2CEFSyoxoBWdFeVmTeqnlX3qI.jpg', id: 1233575, title: 'Black Bag', original_title: 'Black Bag'},
{backdrop_path: '/96w2p3xKIgvuSTJsNVnvNFqOhPJ.jpg', id: 1317088, title: 'The Assessment', original_title: 'The Assessment'},
{backdrop_path: '/qTfbBxJnTX6G3p9dGsgi6HFNCFZ.jpg',title: 'Thunderbolts*'},

{backdrop_path: '/iYY8wiLHASWDxhGWTXfqr4XOAGG.jpg',title: 'Next Avengers: Heroes of Tomorrow'},
// {backdrop_path: '/e0PVYBaGdKLtvyIp2uEUzT1JUO7.jpg',title: 'Next Avengers: Heroes of Tomorrow'},

{backdrop_path: '/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',title: 'Avenger Endgame'}
  ]
  
  const [index, setIndex] = useState(0);

   useEffect(()=>{
     const random = Math.floor(Math.random()*10);
     setIndex(random);
     console.log(random);
   },[])



  return (
   
        <div className='w-[100vw] h-[20vh] md:h-[80vh] bg-cover bg-center flex items-end' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${backdropimage[index].backdrop_path})`
        }}>  
         {/* https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg  ->Avenger */}
            <div className='text-white w-full text-center text-xl'>{backdropimage[index].title}</div>
           
        </div>
       
  )
}

export default Banner