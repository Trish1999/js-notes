// //event propagation:
// //the process of deciding when and in which direction the event will be executed is called event propagation.
// //----------------------------------------
// //event bubbling:
// //the events are executed from buttom to up
// //button>form>div
// //------------------------------------------
// //eventcapturing/trickling
// //the event executed from top to bottom .
// //div>form>button

// const div=document.querySelector("div");
// const form=document.querySelector("form");
// const button=document.querySelector("button");

// div.addEventListener(
//     "click",
//     function(){
//         alert("div");
//     },
//     {
//         capture:true,
//     }
// );
// div.addEventListener(
//     "click",
//     function(){
//         alert("form");
//     },
//     {
//         capture:true,
//     }
// );
// div.addEventListener(
//     "click",
//     function(){
//         alert("button");
//     },
//     {
//         capture:true,
//     }
// );
// //div>form>button

// //how to stop bubbling and capturing
// const div=document.querySelector("div");
// const form=document.querySelector("form");
// const button=document.querySelector("button");

// div.addEventListener("click",function(e){
//     alert("div");
// });

// div.addEventListener("click",function(e){
//     e.stopPropagation();//it will stop showing alert after the button
//     alert("button");
// });

// div.addEventListener("click",function(e){
//     alert("form");
// });

// //event.target vs this.target vs event.cyrrentTrgets

const div=document.querySelector("div");
const form=document.querySelector("form");
const button=document.querySelector("button");

div.addEventListener("click",func);
form.addEventListener("click",func);
button.addEventListener("click",func);

function func(event){
    alert(
        "currentTarget="+ event.currentTraget.tagName+",target="+event.target.tagName+",this="+this.tagName
    );
}