//Array objects have predefined methods, and they are the core of array functionalities in JavaScript. These methods will allow you to convert values to string, to add or remove values, to shift and many more data manipulation.

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
console.log(arr);
console.log(arr.splice(1,2,"a","b"));
//[1,"a","b",4]

