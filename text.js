//there is a arry of a,b and undo if there is a undo it will undo the element present before
//if no element left only undo left then it returns a empty array
function test() {
    let test=[];
    let arr=["a","undo","b","undo","undo","b"];
    for (let i=0;i<arr.length;i++){
        if(arr[i]==="undo"){
         if (test.length > 0) {
            test.pop(); 
        }}
         else{
            test.push(arr[i]);
         }  
    }
     return test;
}
console.log(test())//["b"]

//-----------------------------------------------------------
//print fizzbuzz if number is multiple of both 3 and 5 
//print Fizz for multiples of 3
//print Buzz for multiples of 5
//print the number if its not a multiple of 3 and 5
fizzBuzz(15);
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) { // Loop from 1 to n (inclusive)
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz"); // Log FizzBuzz for multiples of both 3 and 5
        } else if (i % 3 === 0) {
            console.log("Fizz"); // Log Fizz for multiples of 3
        } else if (i % 5 === 0) {
            console.log("Buzz"); // Log Buzz for multiples of 5
        } else {
            console.log(i); // Log the number if no condition is met
        }
    }
}

fizzBuzz(15);

//outout
1     
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
//--------------------------------------------------
