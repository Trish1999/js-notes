//debouncing:
//it limits the execution of a function call and waits for a certain amount of time before running it again.

console.log("abc");
const btn=document.querySelector(".increment_btn");
const btnPress=document.querySelector(".increment_pressed");
const count=document.querySelector(".increment_count");

var pressedCount=0;
var triggerCount=0;

btn.addEventListener("click",()=>{btnPress.innerHTML=++pressedCount;
count.innerHTML=++triggerCount;});
//throttling:
//it is a technique to limit the execution of an event handler function,even this event triggers continously due to user actions.


