//window
//window is global object which is created along with the global execution context.
//global scope:any code you write inside a js file which is not inside a function
//when ever we create any variable in the global space it attached to the global scope

var a=10;//global scope
function b(){
    var x=10;
}

console.log(window.a);//10
console.log(x);//undefined
console.log(this.a);//10
//--------------------------------------
//this:in javascript this keyword refers to an object.

//this keyword refersto differen objects depending on how it is used:
//1.in an object method this refers to the object
//2.alone,this refers to the global object
//3.in a function this refers to the global object 
//4.in a function,in strict mode,this is undefined
//5.in an event this refes to the element that received the event

//this points to the window object
this==window//true
//----------------------------------------------------
//notes
//in browser global object is the window object
//in node js global object is the global object
//--------------------------------------------------------

this.a=5;
console.log(this.a);//in side globalcontext
//-----------------------------
let user={
    name:"trishna",
    age:24,
    getDetails(){
        console.log(this);//{name:"trishna",age:24,getDetails:f}
        console.log(this.name);//trishna
    },
};
user.getDetails();
//-------------------------------
let user={ 
    name:"trishna",
    age:24,
    childObj:{
        newName:"minu",
        getDetails(){
        console.log(this.newName,"and",this.name)//minu and undefined
    },//its only point to the immidiate parent .i.e childObj
    },//arrow function pointing to the window object
};
user.childObj.getDetails();

//-----------------------------------
const user={
     name:"trishna",
     logMessage(){
        console.log(this.name);//trishna
     }
};

setTimeout(function(){
    user.logMessage();
},1000);
