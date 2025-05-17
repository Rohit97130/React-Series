

import './App.css'

import {BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
 
import Dynamic from './component/dynamic'
import { lazy , Suspense} from 'react'

import List from './component/List'
// browser will load only those componentent which need to be render, basically  it divided the component into chunk by the webpack(bundler)
//chunk  is only  loaded by browser only when  it render on  screen
// const Home = lazy(()=> import('./component/Home'));
// const About = lazy(()=> import('./component/About'));
// const Product = lazy(()=>import('./component/Product'));
// const Testimonial = lazy(()=> import('./component/Testimonial'));


import Ref from './component/Ref'

function App() {
     
  
   
  return (
    <>
       {/* <Dynamic/> */}
        {/* <Suspense fallback={<h1>Loading....</h1>}>
       <BrowserRouter>
         <Navbar/>
         <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/product' element={<Product/>} />
            <Route path='/testimonial' element={<Testimonial/>} />

         </Routes>
       </BrowserRouter>
       </Suspense> */}


        {/* <List/> */}

        <Ref/>
    </>
  )
}

export default App
