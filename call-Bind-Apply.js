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
