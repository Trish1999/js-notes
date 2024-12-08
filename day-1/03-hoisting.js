//Hoisting :
//during the creation phase javascript  moves your variables and functions to top of code is called hoisting
//javascript assign the memory to all variable before initialization.

console.log(count);//undefined        | var count
var count=1;       //                  | console.log(count);
                   //                  | count=1;

//hoisted in temporal deadzone:(time between the declaration and initialization of let and const variable)

console.log(count);//error        
let count=1;

console.log(count);//error        
const count=1;

//example
getName();//hello
console.log(x);//undefined
console.log(getName);//getName(){console.log("hello");}

var x=7;
function getName(){
    console.log("hello");
}