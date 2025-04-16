import React ,{useState} from 'react'

function Form() {
    const[Firstname , setFirstName] = useState('')
    const[LastName , setLastName] = useState('');
    let handlefirst = (e)=>{
       setFirstName(e.target.value);
    //    console.log(e.target.value);
    }
    let handlesecond = (e)=>{
       setLastName(e.target.value);
    }


   let buttonhandle = (e)=>{
        e.preventDefault();
        console.log({fname:Firstname ,
          lname:LastName
        });
   }

  return (  
    <div>
        <h1>This is my Form</h1>

        <form action="">
            <label >FirstName: </label>
            <input onChange={handlefirst} type="text" value={Firstname}/>

            <label >LastName: </label>
            <input onChange={handlesecond} type="text" value={LastName}/>

            <button onClick={buttonhandle} >Submit button</button>
            {/* {Firstname} */}
        </form>
    </div>
  )
}

export default Form