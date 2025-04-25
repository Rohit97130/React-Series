import React from 'react'

function Child2({fn}) {
  return (
    <div className='child'>Child2 -- {fn()}</div>

  )
}

export default Child2