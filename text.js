function test() {
    let test=[];
    let arr=["a","undo","b","undo","undo","l"];
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
console.log(test())