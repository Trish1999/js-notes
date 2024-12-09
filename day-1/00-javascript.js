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


