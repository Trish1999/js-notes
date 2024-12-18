//As javascript is a loosely typed or implicitly language(the data type will be according to the value assigned)

//JavaScript data types are classied into 2 categories

//1. Primitive Types-----number ,string, boolean, null ,undefined
//2. Non Primitive Types-----array,object 

//1.number
// Number type denfies numeric value .
//A string starting with numeric value can be converted into number by using parsing methods like parseInt() and parseFloat()
let num;
num= -10;  //(negative number)
num=10  ;  //(positive number)
num=34.53 ;//(Floating Point)
num=446.456; //(Double)
num=3450.45 ;//(Decimal)
num=0b1010; //(Binary)
num=0fd10 ; //(Hexadecimal)
num=0o754 ; //(Octa)
num=2e3 [2x10^3] ; //(Exponent)

//string
//String is a literal with group of characters enclosed in
//a) Single Quotes ' '
//b) Double Quotes " "
//c) Backticks ` `
//ES5+ versions introduced "backtick" which can have embeded expression [data binding expression] using "${ }"
let name;
name="minu";
name='minu';
let nm=`hello ! i am ${name}`;//hello i am minu
//To Print non-printable characters we have to use "\"
let path = "\"D:\\Images\\image.jpg\"";
document.write("Path=" + path);//Path="D:\Images\image.jpg"

//Boolean
//it is Used for Decision Making using tue and false,
//Booleans are commonly used in conditional statements like if, else, and while
//Falsy values: false, 0, -0, 0n, "" (empty string), null, undefined, and NaN
//let a=true;
//let b=false;

//undefined:
//it is like a place holder where no value is assigned to that variable.
var a=undefined;//bad practice in js
console.log(x); // undefined

//null:
//null defines the intentional absence of value
//means variable has been declared and given the value of null(valid JSON datatype)
const a=null;

//array:
//The Array object,  enables storing a collection of multiple items under a single variable name.
let arr= ["a","b","c"];

//Object
// Objects are used to store and manage data in a structured 
// where each property consists of a key-value pair.format.
//you can add, modify, or delete properties dynamically.
let emp={
    name:"minu",
    age:24
}
