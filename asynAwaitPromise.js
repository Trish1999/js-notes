//synchronous:execute line by bline

//Asynchronous: execute all the synchronouse code then execute others asynchronous function

//callbackhell:having so many nested callbacks inside another.

//promises:it reprsents the upcoming completion or a faliure of an asynchronous event.

const fun=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const result=true;
        if(result) resolve("promise resolved");
        else reject(new Error("promise rejected"));
    },2000);
}).then((res)=>{
    console.log(res);//promise resolved
}).catch((err)=>{
console.log(err);//promise rejected
});

//or

const fun1=Promise.resolve("promise resolved").then((res)=>console.log(res)).catch((err)=>console.log("error",err));//promise resolved
const fun2=Promise.reject("promise reject").then((res)=>console.log(res)).catch((err)=>console.log("error:",err));//error: promise rejected

//-----------------------------------------------------
//promis combinator: it basically helps us to execute more than one promise at one time and then return the result accordingly

//1.promise.all()
//it runs all the promises in parallel and as a result it return array of all the fullfilled promises.
//if one of the promises failed it going to fail the complete promis.all

//2.promise.race()
//it returns the first promise that fullfilled or rejected

//3.promise.allSettled()
//if any one of the promises fails its going to return all of the promises that are fullfilled as a array.

//4.promise.any()
//it returns the first fullfill promise and ignore all the rejected ones.

//------------------------------------------------------
//async-await
//it waits until the promise retuns a result

const result=async()=>{
try{
    const msg1=await messageone("hi");
    const msg2=await messagetwo("girl");
    console.log({msg1,msg2});
    }catch(err){
        console.log("failed",err)
    }
};

//custom promise
class CustomPromise {
    constructor(executor) {
        this.callback = null;

        const resolve = (value) => {
            if (this.callback) this.callback(value);
        };

        executor(resolve);
    }

    then(callback) {
        this.callback = callback;
    }
}

const customPromise = new CustomPromise((resolve) => {
    setTimeout(() => resolve("Custom Promise resolved!"), 1000);
});

customPromise.then(console.log);

//polyfill of promise




