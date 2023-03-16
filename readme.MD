<!-- QUESTION -->
There are several way to clone in javascript
object.assign():this method capies all enumerable own properties from one or more source object to a target and return the target object.it can be use to create a shallow copy of an object

const originalObj={a:1, b:2, c:3};
const newObj=Object.assign({},origina;Obj);
console,lo(newObj);//{a:1, b:2, c:3}