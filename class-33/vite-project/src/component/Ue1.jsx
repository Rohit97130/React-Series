import React, {useEffect, useState} from 'react'

function Ue1() {
  
    const[Count, SetCount] = useState(0);
    const[myvalue,Setmyvalue] = useState('');


    function handleValue(e){
        Setmyvalue(e.target.value);
    }
    //!Syntax of use Effect (it runs evertimme after refresh)

    // useEffect(()=>{
    //     console.log('Use Effect is there');   
    //     document.title = `This is a count ${Count}`
    // }  it will run only at the time of component mounting as well as at                                                  the update of state
    // )

    useEffect(()=>{
        console.log('Use Effecttttttttt is there');   
        document.title = `This is a count ${Count}`
    },[]  //it will run only at the time of component mounting not at the update stage
//this will only  run when  you  mount not when you updata because of empty array(dependency)
    )

    useEffect(()=>{
        console.log('Use Effect is there');   
        document.title = `This is a count ${Count}`
    },[Count])
    //this will only  run when  you  mount and updation of state varible  Count not when you updata other thing
    //It will always run at the last asynchronoush function
    console.log("Counter mounting");  


  return (
    <div>
        <h1>This is my count value: {Count}</h1>
        <button onClick={()=>SetCount(Count+1)}>Increment</button>
        <button onClick={()=>SetCount(Count-1)}>decrement</button>
        <input onChange={()=>handleValue} type="text" value={myvalue}/>
     
    </div>
  )
}

export default Ue1