import React from 'react'
import Child3 from './Child3'
import Child4 from './Child4'

// import { useContext } from 'react'
// import { Parkcontext } from './Parkcontext'

function Parent2() {
  // const rulesAndregulation = useContext(Parkcontext)

  // console.log("parent->" , rulesAndregulation);
  
  return (
    <>
     <div className='parent'>Parent2</div>
     <Child3/>
     <Child4/>
    </>
   
  )
}

export default Parent2