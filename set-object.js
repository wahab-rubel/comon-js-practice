// const uniqueNumbers = new Set();
// uniqueNumbers.add(1);
// uniqueNumbers.add(2);
// uniqueNumbers.add(3);
// uniqueNumbers.add(1);
// uniqueNumbers.add(2);
// uniqueNumbers.add(4);

// console.log(uniqueNumbers.has(7));
// uniqueNumbers.delete(3);

// console.log(uniqueNumbers);


// const fruits = new Set(['apple', 'banana', 'mango']);

// for (let fruit of fruits) {
//     console.log(fruit);
// }

// class Person {
//   constructor(name, age) {
//       this.name = name;
//       this.age = age;
//   }
//   greet() {
//       console.log(`Hello, my name is ${this.name}`);
//   }
// }

// const promise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) resolve('Operation succeeded!');
//   else reject('Operation failed.');
// });



// const setA = new Set([1, 2, 3, 4]);
// const setB = new Set([1, 2, 3, 4]);
// const union = new Set([...setA, ...setB]);
// console.log(union);

// const intersection = new Set([...setA].filter(x => setB.has(x)));
// console.log(intersection);


function greet(name = 'Guest') {
  console.log(`Hello, ${name}`);
}
console.log('Hello world'.includes('world')); // true

const arr = ['a', 'b', 'c'];
for (let [index, element] of arr.entries()) {
    console.log(index, element); // Output: 0 'a', 1 'b', 2 'c'
}

console.log(Array.from(arr));

const arr2 = ['a', 'b', 'c'];
for(let key of arr2.keys()){
  console.log(key);
}