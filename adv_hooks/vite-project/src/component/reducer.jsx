import uuid from 'react-uuid'


 export const Taskreducer = (state,action)=>{
      
     switch(action.type){
         case 'ADD_TASK':{
            const newTask = {...action.payload,"id":uuid(),isDone:false};
            return [...state,newTask];
         }
         case 'REMOVE_TASK':{
            const filerState = state.filter((item)=>item.id!==action.payload);
            return [...filerState];
         }
        
        case 'DONE_TASK':{
            const index = state.findIndex((item)=> item.id===action.payload);

            const doneTask = [...state];
            doneTask[index].isDone = true;
             return [...doneTask];
        }

     }
}


export const FormReducer = (state,action)=>{


    switch(action.type){

      case 'HANDLE_TASK':{
        return {
           ...state,
           [action.field]:action.payload
        }
      }
      
    }
}