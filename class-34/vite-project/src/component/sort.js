// const number  = [2,100,4,600];

// const sortnumbers = number.sort()
// number.forEach((num)=>{
//     console.log(num + ' ' + String(num).charCodeAt(0));  
// })
// console.log(sortnumbers);


const alphabet  = ['a','b','P','d'];

alphabet.forEach((alpha)=>{
     console.log(alpha + ' ' + alpha.charCodeAt(0));  
})
//a 97
// b 98
// P 80
// d 100
const sortalpha = alphabet.sort();



console.log(sortalpha);








//call back compartor
const number  = [2,100,4,600];

const sortnumbers = number.sort((a,b)=>{
    // console.log('a->',a , 'b->' ,b);

    // if(a<b){
    //     return -1;
    // }
    // else if(a>b){
    //     return 1;
    // }
    // else{
    //     return 0;
    // }


    //shortcut
    return a-b
    // if negative swap
    
})
// number.forEach((num)=>{
//     console.log(num + ' ' + String(num).charCodeAt(0));  
// })
console.log(sortnumbers);