//call

var obj={name:"trish"};

function sayHello(age){
    return "hello"+ this.name +"is"+age;
}
console.log(sayHello.call(obj,24));//hello trish is 24

//apply(same as call only it takes all the argument as an array)

var obj={name:"trish"};

function sayHello(age,profession){
    return "hello"+ this.name +"is"+age+"and is an"+profession;
}
console.log(sayHello.apply(obj,[24,"ASE"]));//hello trish is 24 and is an ASE

//bind:instate of calling the function it provide an another function which we can call later on to execute the function.
//its a re-usable function

var obj={name:"trish"};

function sayHello(age,profession){
    return "hello"+ this.name +"is"+age+"and is an"+profession;
}

const bindfunc=sayHello.bind(obj);

console.log(bindfunc (24,"ASE"));//hello trish is 24 and is an ASE
console.log(bindfunc (20,"SE"));//hello trish is 20 and is an SE
//----------------------------------------------
//append an array to another array

const array=["a","b"];
const elements=[1,2,3];

array.push.apply(array,elements);//apply breakdown the element array

console.log(array);//["a","b",1,2,3]

//--------------------------------------------
//min and max 

const num=[5,6,7,3,1];

console.log(Math.min.apply(null,numbers));//1
console.log(Math.max.apply(null,numbers));//7

//----------------------------------------------------

//bind chaining (doesnot exist)

function f(){
    console.log(this.name);//john
}
f=f.bind({name:"john"}).bind({name:"ann"});

f();//once a function is bind to particular object it will always be bound to that particular object

//------------------------------------------------------------

//polyfill for call


let car1={
    color:"red",
    company:"ferrari",
}

function purchaseCar(currency,price){
    console.log(`i have purchased ${this.color} - ${this.company} car for ${currency}${price}`);
}

Function.prototype.myCall=function(context={},...args){
    if (typeof this !== "function"){
        throw new Error(this +" it's not callable");
    }

    if(!Array.isArray(args)){
        throw new TypeError("createListFromArrayLike called on non-object")
    }

    context.fn=this;
    context.fn(...args);
};

purchaseCar.myCall(car1,"$",60000);// i have purchased red farrari car for $60000
//------------------------------------------------------------
//pollyfill for apply

let car1={
    color:"red",
    company:"ferrari",
}

function purchaseCar(currency,price){
    console.log(`i have purchased ${this.color} - ${this.company} car for ${currency}${price}`);
}

Function.prototype.myApply=function(context={},args=[]){
    if (typeof this !== "function"){
        throw new Error(this +" it's not callable");
    }

    if(!Array.isArray(args)){
        throw new TypeError("createListFromArrayLike called on non-object")
    }

    context.fn=this;
    context.fn(...args);
};

purchaseCar.myApply(car1,["$",60000]);// i have purchased red farrari car for $60000

//---------------------------------------------------------
//pollyfill for bind


let car1={
    color:"red",
    company:"ferrari",
}

function purchaseCar(currency,price){
    console.log(`i have purchased ${this.color} - ${this.company} car for ${currency}${price}`);
}

Function.prototype.myBind=function(context={},...args){
    if (typeof this !== "function"){
        throw new Error(this +" can not be bound as it's not callable");
    }

    context.fn=this;
    return function(...newArgs){
        return context.fn(...args,...newArgs);
    };
    }
const newFunc= purchaseCar.myBind(car1);
console.log(newFunc("$",60000));// i have purchased red farrari car for $60000