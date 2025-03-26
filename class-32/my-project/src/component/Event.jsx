
import React from 'react'

function Event() {

    function handleclick(){
        console.log('Button clicked');  
    }
  return (
     <div>
        <h1>Event handling</h1>
        <button onClick={handleclick} >Click me</button>
     </div>
  )
}

export default Event