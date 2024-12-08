//let-var-const:
//var was introduced to js when it was created 
//let and const introduced to js after ES6version come to market

//Scope: 
//certain area of a program where the defined variable is recognised beyond that it cant recognized
//types of scope:
//global scope,functionalscope, blog scope   etc

//let and const are blog scope but var is global scope

//let and const allows variable shadowing
function test(){
    let a="hello";

    if(true){
        let a="hi";
        console.log(a);// here the hi will shadowing hello 
    }
    console.log(a);
}
test();

//we can shawdow var variable by let but can not do the opposite 
//if we try to do that its called illegal shadowing it will show variable is undefined

function test(){
    var a ="hello";
    let b="bye";

    if(true){
        let a="hi";//var shodowing let (correct)
        var b="goodbye";//let shadowing var (incorrect)
        console.log(a);
        console.log(b)// here the hi will shadowing hello 
    }
    console.log(a);
}
test();

//we can redeclare a var as many time as we want 
//but cant redeclare in the same scope

var a;
var a; //correct
//-------------------------
{
    let a;
    let a;//incorrect
}
//--------------------------
let a;
{
    let a;//correct
}

//we can not declare a const without inisialization
let a;
var a;
const a=5;//initialisation required

//we can reinitialise let and var but can not reinitialise  const variable
const a=5;
a =10;//error










