// let unit = Number(prompt("Consumption"));
// let amount = 0;
// if(unit > 400){
//     amount += (unit - 400) * 13;
//     unit = 400;
// }
//  if(unit >= 201 && unit <=400){
//     amount += (unit - 200) * 8;
//     unit=200;
//  }
//   if(unit >=101 && unit<=200){
//     amount += (unit - 100) * 6;
//     unit = 100;
//   }
//    amount += unit*4;

//    console.log(amount);

// let fact = 1;
// for(let i=1;i<=5;i++){
//     console.log(`${fact}*${i} + `);
//     fact=fact*i;
// }
// console.log( "= "+fact);

// let pr = prompt("Give System a number : ");
// let sum=0;
// if(isNaN(pr)){
//     console.log("Invalid Input");
// }
// else {
//     let n = Number(pr);
    
//     if(n === NaN){
//         console.log("Not a number");
//     }
//     else if(n == 0){
//         console.log("Enter +ve or -ve number");
//     }
//     else{
//         // sum = (n*(n+1))/2;
//         // console.log(sum);
//         for(let i=0;i<=n;i++){
//             sum = sum + i;
//         }
//         console.log(sum);
//     }
// }

// let a =Number(prompt("enter number: "));
// for(let i=3;i<=Math.sqrt(a);i++){
//     if(a%i==0){
//         console.log("non prime");
//     }
//     else{
//         console.log("prime");
//     }
// }

//Reverse a number
// let a=1234;
// let sum=0;
// while(a>0){
//     sum=sum*10+a%10;
//     a=Math.floor(a/10);
// }
// console.log(sum);

//Strong Number

// let a=40585;
// let og=a;
// let sum=0;
// while(a>0){
//     let k=a%10;
//     let fact=1;
//     for(let i=1;i<=k;i++){
//         fact=fact*i;
//     }
//     sum=sum+fact;
//     a=Math.floor(a/10);
// }
// if(sum==og){
//     console.log("strong number");
// }
// else{
//     console.log("not an strong number");
// }



