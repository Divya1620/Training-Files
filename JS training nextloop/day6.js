// callback functions, async-await, IIFE, Conditions & ternary Operator. 

// Callback Functions--
// -A callback is a function which is passed as an argument to another function.
// -This technique allows a function to call another function.
// -A callback function can run after another function has finished. 
// syntax- function print(callback){
//     callback();
// }

// function showData(name,amt){
//     alert(`Hello ${name} \n Your entered amount is ${amt}`);
// }
// function getData(callback){
//     const name = prompt("Please Enter Your Name: ");
//     const amt = prompt("Please Enter Some amount: ");
//     callback(name,amt);
// }
// getData(showData);

// function greeting(callback){
//     callback();
// }
// greeting( () => {
//     console.log("Hello there");
// });

// Async-Await-- 
// -will learn it in promise section.

// IIFE--
// -An Immediately Invoked Function Expression (known as IIFE or pronounced as IIFY) is a way to execute functions immediately, as soon as they created. 
// Syntax- (function(){
//     code
// })();
// -To understand IIFE, we need to understand 2 sets of parenthesis which are created using IIFE.
// -First set of parenthesis we used to tell the complier that it is not function declaration, it's function expression.
// -By the definition of IIFE we know that are function should run as soon as they created so for calling the function we used second set of parenthesis.

// (function(){
//     console.log("Hello there..!!!");
// }) ();

// Conditions-- 
// -Conditional Statements are used to perform different actions based on different conditions.
// -We have many conditional statements such as if, else, else if & switch.

// 1.if condition-
// -The if statement is use to specify a block of code to be executed if a specified condition is true.
// Syntax- if(condition){
// code to be executed if a condition is true;
// }
// var i=10;
// if(i<=10){
//     console.log("Hello Theree...");
// }

// 2.else condition- 
// -The else statement is use to specify a block of code to be executed if a specified condition is false.
// Syntax- if(condition){
//     code to be executed if a condition is true;
// } else{
//     code to be executed if a condition is false;
// }
// var i=10;
// if(i>=20){
//     console.log("Condition is true");
// } else{
//     console.log("Condition is false");
// }

// 3.else if condition-
// -The else if statement is use to specify a new condition if the first condition is false.
// Syntax- if(condition1){
//     code to be executed if condition1 is true;
// } else if(condition2){
//     code to be executed if condition1 is false & condition2 is true;
// } else{
//     code to be executed if condition1 & condition2 is false;
// }
// const marks=99;
// if(marks<=35){
//     console.log("Fail");
// } else if(marks<=55){
//     console.log("Pass");
// } else if(marks<=75){
//     console.log("Good Performance");
// } else if(marks<=85){
//     console.log("Very Good Performance");
// } else{
//     console.log("Excellent");
// }

// Ternary Operator-- 
// -The "Question Mark" or "Conditional" operator in js is a ternary operator.
// -It is the only operator in js that takes three operands.
// Syntax- Condition ? value if true :  valur if false;
// -condition: Expression. 
// -value if true: value to be exected if condition results in true state.
// -value if false: value to be executed if condition results in a false state.

// let marks = 50;
// let results = (marks<40) ? "Fail" : (marks<60) ? "Pass" : (marks<70) ? "Good" : "Excellent";
// console.log(results);