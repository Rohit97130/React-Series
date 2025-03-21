//this file works as a module

function add(a,b){
    console.log(a+b);
}
function sub(a,b){
    console.log(a-b);
}
function mul(a,b){
    console.log(a*b);
}
function div(a,b){
    console.log(a/b);
}

//!this concept is called modularity that simply means you can use the same code or export  anywhere anytime in any other  js file
module.exports ={
    addition: add,
    subtraction: sub,
    multiplication: mul,
    division: div
}