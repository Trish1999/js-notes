//functions declaration or function defination

function sum(n){
    return n+n ;
}

//function expression(when we declare a function inside a variable)

const sum=function(n){
    return n+n;
}

console.loh(sum(5));
// function with no name is called anonymous function 

//where a function can be treated like a variable that function are called firstclass functions
//in these cases function can be passed to other function can be used ,manipulated,and returned from thoes functions 

function sum(n){
    return n+n;
}
function displaySum(fn){
    console.log("sum of number" + fn(5));
}

displaySum(sum);

//IIFE= Immidiatelly Invoked Function Expression

(function sum(n){
    console.log(n+n);
})(5);//10


(function (x){
    return (function (y){
        console.log(x);//1
    })(2);
})(1);

//it will first search for the value of x in inner scope whe it didnot find it will search in the parent scope

//code on functional scope

var num1=20;
    num2=3;
    name="trishna";

function multiplay(){
    return num1 * num2;
}

multiplay(); //60

//nested function example

function getScore(){
    var num1=2;
    num2=3;

    function add(){
        return name+ "scored" + ( num1 + num2 );
    }
    return add();
}

getScore();//trishna scored 5


//function hoiesting
 fun();//hi
function fun(){
    console.log("hi");//in both places its give same result as function are hoiested completely
}
fun();//hi

//arrpow function
const add=(num1,num2) => {
    return num1+num2;
}

//without return key word

const square=(num)=>num*num;

//argument
const fn= ()=> {
    console.log(argument);
}//0k

//you ca not have a argument keu word in arrow function
















