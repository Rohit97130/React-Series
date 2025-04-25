import React from 'react'

import { useContext } from 'react'
import { Parkcontext } from './Parkcontext'



function Child3() {
    const rulesAndregulation = useContext(Parkcontext)


    console.log("Children ->" , rulesAndregulation);
    
  return (
    <div>Child3 nfdnfjdnv -- {rulesAndregulation.ticketForMerryGoRound()}</div>
  )
}

export default Child3