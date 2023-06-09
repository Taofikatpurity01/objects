# objects
QUESTION 4
There are several ways to clone an object in JavaScript

Object.assign(): This method copies all enumerable own properties from one or more source objects to a target object and returns the target object. It can be used to create a shallow copy of an object.

const originalObj = { a: 1, b: 2, c: 3 };
const newObj = Object.assign({}, originalObj);
console.log(newObj); // { a: 1, b: 2, c: 3 }

Spread operator: This is a newer way to create a shallow copy of an object in JavaScript. It spreads the properties of an object into a new object.

const originalObj = { a: 1, b: 2, c: 3 };
const newObj = { ...originalObj };
console.log(newObj); // { a: 1, b: 2, c: 3 }

JSON.parse() and JSON.stringify(): This approach involves converting an object to a JSON string, and then parsing the string back into an object. This creates a deep copy of the object, but has some limitations (such as not being able to copy functions or undefined properties).

const originalObj = { a: 1, b: { c: 2 } };
const newObj = JSON.parse(JSON.stringify(originalObj));
console.log(newObj); // { a: 1, b: { c: 2 } }

Object.create(): This method creates a new object with the specified prototype object and properties. It can be used to create a new object that is a copy of an existing object.

const originalObj = { a: 1, b: 2, c: 3 };
const newObj = Object.create(originalObj);
console.log(newObj); // {}
console.log(newObj.a); // 1
console.log(newObj.b); // 2
console.log(newObj.c); // 3
