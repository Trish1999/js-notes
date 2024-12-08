//map,filter and reduce are array method to iterate over an array and perform transformation and computation
//------------------------------------------MAP
const nums=[1,2,3,4];

const multiplay=nums.map((num,i,arr)=>{
    return num*3+i;
});

console.log(multiplay);//[3,7,11,15]
//map returns a new array
//---------------------------------------- FILTER
const nums=[1,2,3,4];

const moreThenTwo=nums.filter((num)=>{
    return num >2;
});

console.log(moreThenTwo);//[3,4]
//filters returns only those elements which fullfills the criteria
//-------------------------------------------REDUCE
const nums=[1,2,3,4];

const sum = nums.reduce((acc,curr,i,arr)=>{
    return acc + curr
},0);

console.log(sum);//10

//const sum = nums.reduce((accumulator,currentValue,index,arr)=>{},initialValue);
//accumulator= result of the previous computation
//currentValue= current element

//reduce method reduces an array of values down to just one value
//--------------------------------------

let students=[
    {name:"minu"; rollNumber:10,marks:80},
    {name:"sunu"; rollNumber:19,marks:90},
    {name:"kunu"; rollNumber:31,marks:84},
    {name:"tunu"; rollNumber:26,marks:30}
]
// return only name of the students in capital
const a= students.map(stu=>stu.name.toUpperCase());

// return only the details of those who scored more than 60 marks
const b= students.filter((stu)=> stu.marks>60);

//more than 60 marks and rollnumber greater then 15
 const c=students((stu)=> stu.marks > 60 && stu.rollNumber>15);

//sum of the all sudent marks
const d=students.reducr((acc,curr)=>acc+curr.marks,0);

//return only the names of students who scored more then 60
const e=students.filter((stu)=>stu.marks>60).map(stu=>stu.name);

//return total marks for students with marks greater than 60 
//after2 marks have been added to those who scored less then 60

const f=students.map((stu)=>{
    if(stu.marks<60){
        stu,marks+=20;
    }

    return stu;
    })
    .filter((stu)=>stu.marks>60)
    .reduce((acc,curr)=>acc+curr.mark,0)
