//javascript is a light-weight interpreted programming language.

//javascript is synchronous single-threaded language,
//means js can execute one command at a time ,it will go to next line once the current line got executed.

//javascript is a loosely typed dynamic language.
//means no need to define the datatype during variable declaration.

//its a object oriented programming language.

//a javascript code work in the following ways
//1.code compilation
//the code is compiled to check the error and determine the appropriate scope of variable.
//it has three phase: 1.lexing 2.parsing 3.code generation

//2.code execution
//the code is executed inside the execution context.

//execution context: the enviroment that enables the javascript code to get executed is we call execution context..
//its the combination of two components

//1.variable enviroment(memory):
//its a sort of an enviroment in which all these variables and functions are stored as akeyvalue pairs.

//2.thread of execution(code):
//it is like a thread in which code is written and executed line by line at a time.

//types of execution context
//1.globalexecution context
//GEC also called the base/default execution .
//any javascript code which does not reside in any function will be in the global execution context.

//2.functional execution context
//it is a context which is created by the jsengine when any function call is found.
//every function has its own FEC.
//FEC can access the entire code of GEC but GEC can not access all the code of FEC.

//3.eval execution context
//any js code that gets executed within the eval function creates and holds its own execution context,howeverit is not used by developer.
//----------------------------------------------------------------------------
//JavaScript output Techniques

//1. alert() ------alert("your message")
//It can display output in a message box.
// It will not allow to cancel

//2. confirm()----ag = confirm("your message");
//- It is similar to alert box but allows to cancel.
//returns true on OK false on Cancel

//3. document.write()----document.write("your message");
//It can display output on new screen.

//4. console methods [log(), warn(), error(), info(), debug()]
//console.log("message")
//console.error("message")
//console.log("line1 \n line2")
//We use these method to log the tracking messages.


//5. innerText----document.querySelector("p").innerText = "some message";
//It is an output technique used for containers that can display text

//6. innerHTML-----document.querySelector("p").innerHTML = "msg | markup";
//It is similar to innerText but allows markup.

//7. outerHTML----document.querySelector("p").outerHTML = "msg | markup";
//It removes the existing element and renders the current element.

//-----------------------------------------------
//JavaScript Input Techniques

//a) prompt()----prompt("Message", "Default_Value");
//It is an input box that allows user to input any string value.

//b) Form input elements
//You can use HTML form input elements like
// textbox
// checkbox
// radio
// listbox
// textarea etc..