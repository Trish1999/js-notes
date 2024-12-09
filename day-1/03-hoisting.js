//Hoisting :
//during the creation phase javascript  moves your variables and functions to top of code is called hoisting
//javascript assign the memory to all variable before initialization.

console.log(count);//undefined        | var count
var count=1;       //                  | console.log(count);
                   //                  | count=1;

//hoisted in temporal deadzone:(time between the declaration and initialization of let and const variable)
//or  the area of block where a variable is inaccessible until the momemt the computer completely initialize it with a value


//Reference Error are thrown when variables are in temporal dead zone.
//Syntax Error doesn't even let us run single line of code.

console.log(count);//error        
let count=1;

console.log(count);//error        
const count=1;

//example of hoisting

getName();//hello
console.log(x);//undefined
console.log(getName);//getName(){console.log("hello");}

var x=7;
function getName(){
    console.log("hello");
}

//----------------------------------------------
//Types of Error: 
//1) Syntax, 2)Reference, 3) Type.
//1)Uncaught SyntaxError: 
//Identifier 'a' has already been declared
//This Error signifies that we are redeclaring a variable that is 'let' declared. No execution will take place.

//Missing initializer in const declaration
//This Error signifies that we haven't initialized or assigned value to a const declaration.

//2)Uncaught ReferenceError:
// x is not defined at ...
//This Error signifies that x has never been in the scope of the program.
//This literally means that x was never defined/declared and is being tried to be accesed.

//cannot access 'a' before initialization
//This Error signifies that 'a' cannot be accessed because it is declared as 'let' and since it is not assigned a value, it is its Temporal Dead Zone. Thus, this error occurs.

//3) Uncaught TypeError:
// Assignment to constant variable
//This Error signifies that we are reassigning to a const variable.