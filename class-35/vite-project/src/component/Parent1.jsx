import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
function Parent1({parkInfo}) {
  return (
      <>
      <div className='parent'>Parent1  -- {parkInfo.rollerCoaster}</div>
      <Child1 parkInfo= {parkInfo}/>
      <Child2  fn ={parkInfo.ticketforWaterSlide}/>
    </>

  )
}

export default Parent1