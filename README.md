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

Note that this approach creates a new object with the same prototype as the original object, but the properties are not copied by value.
These are some of the most common ways to clone an object in JavaScript. Each approach has its own advantages and disadvantages, depending on the specific use case.

QUESTION 5
Here's how you can use a for...in loop to log out each of the presidential candidates

const presidentialCandidates = {
   AAC: 'Omoyele Sowore',
   ACCORD: 'Christopher Imumolen',
   APC: 'Bola Ahmed Tinubu',
   LP: 'Peter Obi',
   NNPP: 'Rabiu Kwankwaso',
   PDP: 'Atiku Abubakar',
};

for (const party in presidentialCandidates) {
  console.log(`${presidentialCandidates[party]} is the presidential candidate of ${party}`);
}

OUTPUT

Omoyele Sowore is the presidential candidate of AAC
Christopher Imumolen is the presidential candidate of ACCORD
Bola Ahmed Tinubu is the presidential candidate of APC
Peter Obi is the presidential candidate of LP
Rabiu Kwankwaso is the presidential candidate of NNPP
Atiku Abubakar is the presidential candidate of PDP

This loop iterates over the keys of the presidentialCandidates object using the for...in syntax, and then uses string interpolation to log out the candidate's name and the party they represent in the desired format.
