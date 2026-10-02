//Basic programs for understanding

// let a=10;
// let b=20;
// // let c=a+b;
// // console.log(c);
 
//  function add(a,b){
//     return (a+b);
// }
// console.log(add(12,20));

// a=10;
// console.log(a);
// var a;
//no error because it allows hoisting 

// console.log(a);
// var a=10;(it can be redeclare , reassign (functional scope))
//undefined(value)

// console.log(b);
// let b=10;(block scope)
//error because it allows hoisting but stayz in TDZ

//Type coirsen
// console.log(5+"5");
// console.log(5-"5");

// console.log(typeof(null));(object)
// console.log(typeof(NaN));(number)
// console.log(typeof(undefined));(undefined)

// let a=20;
//  let b=30;
//   console.log("sum"+a+b);//concatinationsum2030
//   console.log("sum"+a-b);//NAN
// console.log(a+b+"sum");50// sum

// //User Input

// const readline=require ("readline");
// const r=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// r.question("What is your name",(answer)=>{
//     console.log(`hello,${answer}`);
//     let age = Number(answer);
//     console.log(age);
   
//     console.log();

//     if(typeof (age) === "string"){
//         console.log("string");
//     }
//     else {
//         console.log("Number");
//     }
//     r.close();
// });


//For taking the user input on console we use prompt("your question");
//for console
// let namee=prompt("what is your name?");
// let age=Number(prompt("what is your age?"));
// console.log(namee);
// console.log(age);

// Swapping

//using third varriable
// let a=Number(prompt("enter 1st number : "));
// let b=Number(prompt("enter 2nd number : "));
// let temp=0;
// temp=a;
// a=b;
// b=temp;
// console.log(a,b);

//using without third varrible
// let a=Number(prompt("enter 1st number : "));
// let b=Number(prompt("enter 2nd number : "));

// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a,b);

// using destrucrting
// let a=Number(prompt("enter 1st number : "));
// let b=Number(prompt("enter 2nd number : "));

// [a,b] = [b,a]
// console.log(a,b);