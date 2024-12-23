//Array objects have predefined methods, and they are the core of array functionalities in JavaScript. These methods will allow you to convert values to string, to add or remove values, to shift and many more data manipulation.

//ways to create array
// 1 Way: var numbers=[];
// 2 Way: var numbers=new Array();

// Multi Dimensional Arrays:
// Sometimes array can contain arrays as elements.i.e array inside array is possible. Suchtype of arrays are considered as multi dimensional arrays or nested arrays.
//var arr=[[]];//format
// Eg:var nums=[[10,20,30],[40,50,60]];
// console.log(nums[0])//[10,20,30]
// console.log(nums[0][0])//10


let arr=[1,2,3,4];

//1.toString() returns a string with array values separated by commas
arr.toString();//1,2,3,4

//2.join() returns anew string by concatinating all element of an array
arr.join("-");//1-2-3-4

//3.pop() removes the last element of an array
arr.pop();//[1,2,3]

//4.push() add new item to the end if an array
arr.push(5,6);//[1,2,3,4,5,6]

//5.shift() removes first elemnt and return it
arr.shift();//[2,3,4]

//6.unshift() add element to beginning and return a new array
arr.unshift(5,6);//[5,6,1,2,3,4]

//7.delete(operator) array element can be deleted using js.
//delete Array[index];
delete arr[1];//[1,empty,3,4]

//8.concat() used to joins two and more arrays and returns a new array.
let arr1=[1,2,3];
let arr2=[4,5,6];
let arr3=arr1.concat(arr2);
console.log(arr3);//[1, 2, 3, 4, 5, 6]

//9.sort() the element of an array and overwrites the original array
let arr=[5,3,1];
arr.sort();//[1,3,5]

//10.splice() method adds or removes array element.
//array.splice(indexedDB,howmany,item1,....,n-item)
console.log(arr.splice(1,2,"a","b"));
//[1,"a","b",4]

//11.slice() used to extract chars between specied index. 
console.log(arr);
arr.slice(1,3);//[2,3]

//12.reverse() reverse the order of the elements in an array.
arr.reverse();//[4,3,2,1]

//13.isArray() returns true if an object is an array otherwise false.
arr.isArray();//true

//14.indexOf() method returns the first index of a specified value ,retur -1.
//array.indexOf(item,startindex);
arr.indexOf(3,1);//2

//15.lastIndexOf(: returns the last index of a specified value returns -1 in no value found
arr.lastIndexOf(3,1);//-1

//16. find() returns the first element in the provided array.
arr.find((element)=> element >2);//3

//17.findIndex() returns the first element in an array that satisfies the provided testing function.if no elements satisfy the testing function ,then -1 is returned.
arr.findIndex((e)=>e>3);//3

//18.includes() returns true if an array contains a specified value.
arr.includes(2);//true

//19.entries() return an array iterator object with keyvalue pairs.

const array=arr.entries();
for(let x of array){
 console.log(x +"\n");//0,1
                         1,2
                         2,3
                         3,4
}

//20.every() whether all elements in the array pass the test implemented by the provided function.it returns a boolean value
arr.every((e)=> e<5);//true
all value should pass the condition

//21.some() test wheater at least one element in the array passed the condition.
arr.some(e=>e>2);//true

//22.fill() overwrite the element on an array for specified element.
arr.fill(value,start,end);
arr.fill(5,2,3);//[1, 2, 5, 4]

//23.copyWithin() copy array elements to another position in the array and it overwrites the existing value.
arr.copyWithin(target,start,end);
arr.copyWithin(1,2,3);//[1, 3, 3, 4]

//24.valueOf() returns the array itself and this method doesnot change the original array
arr.valueOf();//[1, 2, 3, 4]

//25.foreach() executed a provided function once for each array element it doesnot executed for empty element
arr.forEach((e)=>console.log(e*2));//2,4,6,8

//26.filter() method creates a new array filled with element that pass the condition.
arr.filter((e)=> e<3);//[1,2]

//27.reduce() method reduces an array of values down to just one value
arr.reduce((accumulator,currentValue,index,arr)=>{},initialValue);
arr.reduce((acc,curr)=>acc+curr,0);//10

//28.reduceRight()  returns a single CSSMathValue,the function accumulated result.
arr.reduceRight(callback(accumulator, currentValue, index, array), initialValue)
arr.reduceRight((acc,curr)=>acc+curr,"");//4321

//29.from() return an array from any object with length property.
arr.from(object,mapfunction, thisvalue)
Array.from("trish");// ['t', 'r', 'i', 's', 'h']

//30.findLast() returns the last element in the array that satisfies the provided testing function.
arr.findLast((element) => element % 2 === 0);//4

//31.keys() returns a new array iterator object that contains the keys (indexes) of the array.
console.log(arr.keys());

//32.values() returns a new array iterator object that contains the values of the array.
console.log(arr.values());

