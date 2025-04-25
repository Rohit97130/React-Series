import React from 'react'

function Child1({parkInfo}) {
  return (
    <div className='child'>Child1 -- {parkInfo.ticketForRollerCoaster()}</div>
  )
}

export default Child1