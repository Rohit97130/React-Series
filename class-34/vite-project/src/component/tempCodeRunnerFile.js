


//call back compartor
const number  = [2,100,4,600];

const sortnumbers = number.sort((a,b)=>{
    console.log('a->',a , 'b->' ,b);

    if(a<b){
        return -1;
    }
    else if(a>b){
        return 1;
    }
    else{
        return 0;
    }
    
})
// number.forEach((num)=>{
//     console.log(num + ' ' + String(num).charCodeAt(0));  
// })
console.log(sortnumbers);