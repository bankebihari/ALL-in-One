 
 // fundamental of javascript 
 //arrays and objects 
 // function return 
 // async js coding
 //foreach map filter find indexOf


// note :- any kind of datatype can store in array even afunction and another array 
// var arr=[1,2,3,4,];
// arr.forEach(function(val){
//     console.log(val+"helo");
// })



//map fn = > it's form a new array 
//  var arr=[1,2,3,4];
//  var newarr= arr.map(function(val){
//     return val*3;
//  })

//  console.log(newarr);


// //filter => create a new arry for using the fn 
// var arr=[1,2,3,4];
// var newarr= arr.filter(function(val){
//     if(val>3){
//         return  true;
//     }
//     else return false;
// })
// console.log(newarr);

//find  it's form a new array 

// var arr=[1,2,3,4];
// var ans =arr.find(function(val){
//     if(val==2)return val;

// }) 
// console.log(ans);

// //indexOf  => it's return a index of array element  if elemt is not there it will return -1;

// var arr=[1,2,3,4,5,55];
// console.log(arr.indexOf(3));
// console.log(arr.indexOf(10));


// objects

// //{} is also an object , key value pair are objects

//  var obj={
//     name: "banke",
//     age: 23,

// }
// obj.name;
// obj.freeze(obj);
// obj.name=35;

// function   
//notes=> parameters of fn are  the length of fn  and type of function is objects

// function abcd(a,b,c){
//    return 12;
// }
// console.log(abcd.length);
// console.log(typesOf(abcd));

// var ans=abcd();
// console.log(ans);


//async js  