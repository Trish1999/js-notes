//objects are used to store keyed collection of various data and complex utilities
//an object can be created by using curly brakets

const user={
    name:"trishna",
    age:"25",
    "hello world":true
}
user.name="minu";//modified the name 
console.log(user.name);//minu
console.log(user["hello world"]);//true
delete user["hello world"];
console.log(user);//{name:"trishna",age:"25"}
delete user.age;
console.log(user);//{name:"trishna"}

//-------------------------------------
const func=(function(a){
    delete a;//it does not effect because a is a local variable
    return a;
})(5);
console.log(func);//5

//delete only used to delete the a value from an object 

//add dynamic property
const property="firstName";
const name="trishna";

const user={
    [property]:name,
};
console.log(user);//{firstName:"trishna"}
console.log(user.firstName);//trishna

//-----------------------------
const user={
    name:"trishna",
    age:"25",
}

for(key in user){
    console.log(key);//name
                     //age
}

for(key in user){
    console.log(user[key]);//trishna
                           //25
}

// if in an object we have two keys with same name the first key will replaced with the second one

const obj={
    a:"one",
    b:"two",
    a:"three"
}

console.log(obj);//{a:"three",b:"two"}
//----------------------------------
const nums={
    a:100,
    b:200,
    title:"My nums"
};

multiplyByTwo(nums);

function multiplyByTwo(obj){
    for(key in obj){
        if(typeOf obj[key]==="number"){
            obj[key] *= 2;
        }
    }
}

console.log(nums);//{a:200,b:400,title:"My nums"};
//--------------------------------------------
 const a={};
 const b={key:"b"};
 const c ={key:"c"};

 a[b]=123;//a"[object Object]"":123]
 a[c]=456;

 console.log(a[b]);//456
 console.log(a);//{ [object Object]:456}

 //--------------------------------------------
 const user={
    name:"Trishna",
    age:24
 };

const stringObj=JSON.stringify(user);

 console.log(stringObj);//"name":"Trishna","age":24 //to convert object to string

 console.log(JSON.parse(stringObj));//{"name":"Trishna","age":24}  //to convert string to object

 //use: when we store items in local storage
 localStorage.setItem("test",stringObj);
 console.log(localStorage.getItem("test"));//"name":"Trishna","age":24
 localStorage.setItem("test",user);
  console.log(localStorage.getItem("test"));//[object Object]

//---------------------------------------------
//spread operator
console.log([..."trish"]);//["t","r","i","s","h"];

const user={name:"trish",age:24};
const admin={admin:true, ...user};

console.log(admin);//{admin:true,name:"trish",age:24}
//------------------------------------
const settings={
    username:"trish",
    lavel:20,
    health:90
}

const data=JSON.stringify(settings,["level","health"]);
console.log(data);//{"level":20,"health":90}

//------------------------------------
const shape={
    radius:10,
    diameter(){
        return this.radius*2;
    },
    perimeter:()=> 2* Math.PI*this.radius,
    };

    console.log(shape.diameter());//20
    console.log(shape.perimeter());//NAN //because arrow function point to the windows object 

//-------------------------------------
//descructuring

let user={
    name:"Trishna",
    age:24,
    fullName:{
        first:"trishna",
        last:"patel"
    },
 };

console.log(name);//Trishna

 const name="minu";
 const{name:nickName}= user;

 console.log(nickName);//trishna

const{fullname:{first}}=user;

console.log(first);//Trishna

//sprade operators can be used in between but rest parameter must be last in aparameter list

function getItems(fruit,fav,...args){
 //rest parameter at last
 return [...fruit,...args,fav];   
}
console.log(getItems(["banana","apple"],"pear","orange"));//["banana","apple","orange","pear"]

//-----------------------------------------------
let c={greeting:"hey"};
let d;

d=c;
c.greeting="hello";
console.log(d.greeting);//hello

//---------------------------------------
console.log({a:1}=={a:1});//false
console.log({a:1}==={a:1});//false

//This condition will always return 'false' since JavaScript compares objects by reference, not value.i simple way both objects are going to point a different memory location.
//---------------------------------------------
let person={name:"trish"};
const members=[person];
person=null;

console.log(members);//[0:{"name": "trish"}]
//because we are providing this person to members  with  0 index i.e member[0]

//but if 
person.name=null;

console.log(members);//[0:{"name": null}]
//----------------------------------------------

const value = {number:10};

const multiply=(x={...value})=>{
    console.log((x.number*=2));
}

multiply();//20
multiply();//20
multiply(value);//20
multiply(value);//40

//---------------------------------------------

function changeAgeAndReference(person){
    person.age=25;
    person={
        name:"trish",
        age:50,
    };
return person;
}
const personObj1={
    name:"minu",
    age:30
}

const personObj2= changeAgeAndReference(personObj1);
console.log(personObj1);//{name:"minu",age:25}
console.log(personObj2);//{name:"trish",age:50}

//-----------------------------------------------
//shallow copy:
//when one object hold the reference to another object that is called a shallow copy

//deep copy:
//when we completely clone a object into an another variable that is called a deep copy.(here we dont have any reference)

//how to deepcopy or clone an object

let user={
    name:"trishna",
    age:24
}

const objClone1=Object.assign({},user);
const objClone2=JSON.parse(JSON.stringify(user));

const objClone3={... user};
