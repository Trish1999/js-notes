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

// if in an object we havr two keys with same name the first key will replaced with the second one



