//polyfils are our own implementation of inbuilt function in javascript;
const nums=[1,2,3,4];
//--------------------------------------
//Map function

Array.prototype.myMap=function(cb){
    let temp=[];
    for(let i=0;i<this.length;i++){
        temp.push(cb(this[i],i,this));
    }
  return temp;
}

const multiplay=nums.myMap((num,i,arr)=>{
    return num*3;
})
console.log(multiplay);//[3,6,9,12]

//------------------------------------------//customFilter function(polyfill)
// filter function

Array.prototype.myFilter=function(cb){
    let temp=[];
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){
        temp.push(this[i]);
        }
    }
  return temp;
}
const moreThenTwo=nums.myFilter((num)=>{
    return num>2;
})

console.log(moreThenTwo);//[3,4]

//----------------------------------------
//Reduce function

Array.prototype.myReduce=function(cb,initiaValue){
    var accumulator = initiaValue;

for(let i=0;i<this.length;i++){
    accumulator=accumulator ? cb(accumulator,this[i], i,this): this[i];
}
return accumulator;
};

const sum = nums.myReduce((acc,curr,i,arr)=>{
    return acc+curr;
},0);

console.log(sum);//10
//----------------------------------
let car1={
    color:"red",
    company:"ferrari",
}
//----------------------------------
//call function

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
//Apply function

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
//Bind function

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

//------------------------------------------------------
//Once functin 

function once(func,context){
    let run;

    return function(){
        if(func){
            ran=func.apply(context||this.arguments);
            func=null;
        }
        return ran;
    };
}
 const hello=once(()=> console.log("hello"));//hello 

 hello();//its runs multiple time but due to once function it run only once 
 hello();
 hello();
 hello();

 //------------------------------------------
 //memorize function

 function myMemoize(fn)
{
    const res={};
    return function(...args){
        var argsCache=JSON.stringify(args);
        if(!res[argsCache]){
            res[argsCache]=fn.call(context || this);
        }
            return res[argsCache];
    };
}

const clumsyProduct=(num1,num2)=> {
    for (let i=1;i<=100000000;i++){}
    return num1*num2;
};

const memoizedClumzyProduct=myMemoize(clumsyProduct);

console.time("first call");
console.log(clumsyProduct(9467,7649));//72413083
console.timeEnd("first call");//187.634033203125 ms

console.time("second call");
console.log(clumsyProduct(9467,7649));//72413083
console.timeEnd("second call");//179.046875 ms
//------------------------------------------
//promise function

