const userMap = new Map();

userMap.set('name', 'Alice');
userMap.set('age', 23);
userMap.set({id: 1}, 'Admin');

console.log(userMap.get('name'));
console.log(userMap.get('age'));

userMap.delete('age');

console.log(userMap.size);

// Iterating over keys and values
for(let[key, value] of userMap){
  console.log(`${key}: ${value}`);
}

const complexKey = { key: 1 };
const map = new Map();
map.set(complexKey, 'Complex Value');
console.log(map.get(complexKey)); // Output: Complex Value


const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const result = Object.assign(target, source);
console.log(result); // Output: { a: 1, b: 4, c: 5 }

const user = {name: 'John', age: 23};
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));