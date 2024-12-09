//undefined:
//it is like a place holder where no value is assigned to that variable.
var a=undefined;//bad practice in js

//not defined:
//when the variable itself is not declared but called in code,then it is not defined.

console.log(x); // undefined
var x = 25;
console.log(x); // 25
console.log(a); //a is not defined

//null:
//null defines the intentional absence of value
//means variable has been declared and given the value of null(valid JSON datatype)
const a=null;