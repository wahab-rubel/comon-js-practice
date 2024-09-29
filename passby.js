// let a = 10;

// function modifyValue(x){
//   x = 20;
//   console.log('inside modify function', x);
// }
// modifyValue(a);

// console.log('outside modify function', a);


// another same function method
let obj = { name: 'wahab'};
function modifyObject(objParam){
  objParam.name = 'rubel';
  console.log('inside modify function', objParam.name);
}
modifyObject(obj);
console.log('outside modify function', obj.name);