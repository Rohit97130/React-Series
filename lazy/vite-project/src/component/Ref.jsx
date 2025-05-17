import React, { useState , useRef} from 'react'

//useRef allow to  use dom  property in dom 
function Ref() {

     const[name , setname] = useState('');
     const[name2 , setname2] = useState('');
     

     const refElement =  useRef()
     const refElement2 = useRef()
    
    //  console.log(refElement);
     
     const clear = ()=>{
        setname('');
        refElement.current.focus();
     }

     const clear2 = ()=>{
        setname2('');
        refElement2.current.focus();
     }

     const changeColor = ()=>{
        refElement.current.style.color = 'red';
        refElement2.current.style.color = 'blue';

        refElement.current.style.background = 'yellow';
     }

  return (
    <div>
        <h1>Use Ref</h1>

        <input ref={refElement} type="text" value={name} onChange={(e)=>setname(e.target.value)} />
        <input ref={refElement2} type="text" value={name2} onChange={(e)=>setname2(e.target.value)} />
        <button onClick={clear}>Clear</button>
        <button onClick={clear2}>Clear2</button>
        <button onClick={changeColor}>changecolor</button>
    </div>
  )
}

export default Ref