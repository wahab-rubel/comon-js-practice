// function outerFunction(){
//   let outerVariable = 'i am outside!';

//   function innerFunction(){
//     console.log(outerVariable);
//   }
//   return innerFunction;
// }
// const myClosure = outerFunction();
// myClosure();


// same to be used
function outerFunction(){
  let outerVariable = 'i am outside!';

  function innerFunction(){
    console.log(outerVariable);
  }
  return innerFunction;
}

const myClosure = outerFunction();
myClosure();