import {createStore} from 'redux'

//Action constant :-> help to  give erroe whenever we write wrong
const deposit = 'deposit'
const withdraw = 'withdraw'
const checkbalance = 'checkbalance'


//1
const store = createStore(reducer)  //3 set the reducer to the store



//2 create Reducer
function reducer(state = {amount:1000, name:'rohit'}, action){
     if(action.type === deposit){  //why using variable just to avoid mistake of spelling
          return {amount: state.amount + action.payload, name:state.name};
     }
     if(action.type === withdraw){
          return {amount: state.amount - action.payload};
     }
     return state;
}

 console.log(store.getState());
 // getting the value of the state
 



 //Action  Creator
  function depositAction(value){
      return {type:'deposit', payload:value};
  }
 
  function withdrawAction(value){
      return {type:'withdraw', payload:value};
  }
 

  


store.subscribe(()=>{
     console.log(store.getState());
})


 console.log('Deposit Money');
 store.dispatch(depositAction(200)); //dispatch the action


 console.log('withdraw Money');
 store.dispatch (withdrawAction(300));

