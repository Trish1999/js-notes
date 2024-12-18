//lexical scope:
//a variable defined outside a function can be accessible inside another function after a variable declaration
// If a function needs to access
//a variable, it first goes to its local memory. When it does not find it there, it goes to the memory of its lexical parent.
var name="minu";

//global scope
function local(){
    //local scope
    console.log(name);//minu
    var name2="trishna";
}
console.log(name2);//name 2 is not defined

local();

//closures:
//it gives you access to outer function's scope from an inner function.
//means A closure can remember and access variables and arguments reference of its outer function even after the function has returned.

function func(){
    var name="tri";
    function display(num){
        console.log(name,num);
    }
    return display;
}
func()(5);//tri 5

//Advantages of Closure:
//1.Module Design Pattern
//2.Currying
//2.Memoize
//3.Data hiding and encapsulation
//4.setTimeouts etc.

//Disadvantages of Closure:
//Over consumption of memory
//Memory Leak, Freeze browser

//closures have 3 scopes
//1.local scopes
//2.outer function scope
//3.global scope 

function createBase(num){
    return function(innernum){
        console.log(innernum+num);
    };
}
var addsix=createBase(6);
addsix(10);//16
addsix(21);//27

// display 0,1,2 using var only (by using clouser)

for (var i=0;i<3;i++){
    function inner(i){
    setTimeout(function log(){
        console.log(i);
    },i*1000); 
}
inner(i);
}

//use clouse to careate a private counter

function counter(){
    var counter=0

function add(increment){
        counter+=increment;
    }

function retrive(){
    return "counter-"+ counter;
}

return{
    add,
    retrive,
};
}
const c=counter();
c.add(5);
c.add(10);

console.log(c.retrive());//counter= 15

//module patteren
var Module=(fuction(){
    function privateMethod(){
        //logic
    }
    return{
        publicMethod:function(){
            //call privateMethod();
        },
    };
})();

//closure vs scope

 //scope defines what variable  you have access to 
 //types:global scope and local scope

 //when you create a function with in another function then the inner function is clouser
 //types:global scope,local scope,outer scope

