//debouncing:
//it limits the execution of a function call and waits for a certain amount of time before running it again.

//show button pressed times,increase triggered times in every 800ms of debounce

const btn=document.querySelector(".increment_btn");
const btnPress=document.querySelector(".increment_pressed");
const count=document.querySelector(".increment_count");

var pressedCount=0;
var triggerCount=0;

const debounceCount=_.debounce(()=>{
    count.innerHTML=++triggerCount;
},800);

btn.addEventListener("click",()=>{
    btnPress.innerHTML= ++pressedCount;
    debounceCount();
});

//throttling:
//it is a technique to limit the execution of an event handler function,even this event triggers continously due to user actions.


//show button pressed times,increase triggered times in every 800ms of throttle

const btn=document.querySelector(".increment_btn");
const btnPress=document.querySelector(".increment_pressed");
const count=document.querySelector(".increment_count");

var pressedCount=0;
var triggerCount=0;

const throttleCount=_.throttle(()=>{
    count.innerHTML=++triggerCount;
},800);

btn.addEventListener("click",()=>{
    btnPress.innerHTML= ++pressedCount;
    throttleCount();
});
//--------------------------------------------------
//debounce polyfill
const btn=document.querySelector(".increment_btn");
const btnPress=document.querySelector(".increment_pressed");
const count=document.querySelector(".increment_count");

var pressedCount=0;
var triggerCount=0;

const myDebounce=(cb,d)=>{
    let timer;

    return function(...args){
        if(timer) clearTimeout(timer);
        timer =setTimeout(()=> {
            cb(...args);
        },d);
    }
}

const debounceCount=myDebounce(()=>{
    triggerCount+=1;
    count.innerHTML=triggerCount;
},800);

btn.addEventListener("click",()=>{
    btnPress.innerHTML= ++pressedCount;
    debounceCount();
});
//-----------------------------------------------------
//throttling polyfill

const btn=document.querySelector(".increment_btn");
const btnPress=document.querySelector(".increment_pressed");
const count=document.querySelector(".increment_count");

var pressedCount=0;
var triggerCount=0;

const start=new Date().getTime();

const myThrottle=(cb,d)=>{
    let last=0;

    return(...args)=>{
        let now=new Date().getTime();
        if(now-last<d) return;
        last=now;
        return cb(...args);
    };
};

const throttled=myThrottle(()=>{
    count.innerHTML=++triggerCount;
},1000);

btn.addEventListener("click",()=>{
    btnPress.innerHTML= ++pressedCount;
    throttleCount();
});