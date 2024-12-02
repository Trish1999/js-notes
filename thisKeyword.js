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

//------------------------------------
