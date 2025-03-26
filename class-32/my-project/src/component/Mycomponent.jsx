// function Mycomponent(){
//   let name = 'Steve'
//   const showMessage = ()=>{
//     return 'I am Saying Hello'
     
//   }
  
//   return <h2>My name is {name} {showMessage()}</h2>
// }





//!lets talk about component reusability using props

// function Mycomponent(props){
//   return <h2>My name is {props.name} {props.greeting} </h2>
// }
 
function Mycomponent({name='rohit',greeting,cars}){
  return <h2>My name is {name} {greeting} {cars}</h2>
}


export default Mycomponent

