//currying is a function that takes one argument at a time and returns a new function expecting the next argument.

//f(a,b) to f(a) (b)

function f(a){
     return function(b){
     return `${a} ${b}`;
};
}

console.log(f(5)(6));//5 6

console.log(f(6));  //     function(b){
                    //        return `${a} ${b}`;
                    //     };


 //why we use currying?-----
 //1.to avoid passing the same variable again and again
 //to create higher order functions
 // to make your function pure and less prone to errors

//without currying
 function sum(a,b,c){
    return a+b+c;
 }
 console.log(sum(2,6,1));//9

//with currying
 function sum(a){
    return function(b){
        return function(c){
            return a+b+c;
        };
    };
}

console.log(sum(2)(6)(1));//9

//----------------------------------------
function evaluate(operation){
    return function(a){
        return function(b){
         if (operation === "sum") return a+b;
         else if(operation === "mul") return a*b;
         else if(operation === "div") return a/b;
         else if(operation === "sub") return a-b;
         else return "invalid";
        };
    };
}
console.log(evaluate("sum")(4)(2));//6
console.log(evaluate("mul")(4)(2));//8
console.log(evaluate("div")(4)(2));//2
console.log(evaluate("sub")(4)(2));//2

//----------------------------------------

//infinite currying

function add(7){
    return function (b){
        if(b) return add(a+b);
        return a;
    }
}
console,log(add(5)(2)(4)(8)());//19

//partial application transform a function into another function with small arity i.e the number of arguments that a function receives

function sum(a){
    return function(b,c){
        return a+b+c;
    };
}
const x=sum(10);
console.log(x(5,6));
console.log(x(3,2));
or 
console.log(sum(20)(1,4));

//curry() implementation converts f(a,b,c) into f(a)(b)(c)

function curry(func){
    return function curriedFunc(...args){
        if(args.length >= func.length){
            return func(...args);
        }else{
            return function(...next){
                return curriedFunc(...args,...next);
            };
        }
    };
}
const sum=(a,b,c,d)=>a+b+c+d;
const totalSum=curry(sum);
console.log(totalSum(1)(6)(5)(6));



     
