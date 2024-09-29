// let globalVar = "I am global";
// function displayGlobal() {
//     console.log(globalVar); // Accessible here
// }
// displayGlobal(); // Output: "I am global"
// console.log(globalVar); // Output: "I am global"



function myFunction(){
let localVar = "I am local";
console.log(localVar); 
}
myFunction();

if(true){
    let blockVar = "I am block scope";
    console.log(blockVar); //
}
// console.log(blockVar); 



// Global Scope 
let globalVar = 'i am global';

function displayGlobal(){
    console.log(globalVar); // Accessible here
}
displayGlobal(); 
console.log('down ', globalVar);