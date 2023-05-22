// No Session but self learning such as - 
// JS scopes-global,local,block scope, Hoisting, strict mode, this keyword, call(), apply() & bind() method. 

// JS Scopes--
// -Scopes determines the accessibility or visibility of variables. 
// -There are 3 types of scopes in js- Global Scope, Function/local Scope, Block Scope.

// 1.Global Scope-
// -Variables declared globally (outside any function) have Global Scope.
// -Global Variables can be accessed from anywhere in js.
// -Variables declared with var, let & const are similar when declared outside a block, they all have a global scope.

// var x=2;
// let y=4; 
// const z=6;
// console.log(`Value of X is ${x}, Value of Y is ${y}, Value of Z is ${z}`);

// function globalScope(){
//     console.log(`Value of X is ${x}, Value of Y is ${y}, Value of Z is ${z}`);
// }
// globalScope();

// 2.Function/Local Scope-
// -Variables declared inside a function have local/function scope.
// -They can only be accessed from within the function & can't be accessed from outside the function.

// function car(){
//     var car1="KIA";
//     let car2="MG";
//     let car3="XUV500;"
//     console.log(car1);
//     console.log(car2);
//     console.log(car3);
// }
// car();
// console.log(car1);
// console.log(car2);
// console.log(car3);

// 3.Block Scope-
// -Before ES6 JS had only global & function scope.
// -ES6 introduced 2 new keywords let & const.
// -These 2 keywords provide block scope in js.
// -Variables declared inside a block {} can't be accessed from outside the block.
// -var keyword doesn't have a block scope.

// {
//     let x=2;
//     const y=4;
//     console.log(x,y);
// }
// console.log(x,y);

// {
//     var z=10;
//     console.log(z);
// }
// console.log(z);

// Note:- If we assign a value to variable that has not been declared, it'll automatically become a global variable & can be accessed from anywhere.

// function car(){
//     car1="kia";
// }
// car();
// console.log(car1);
// {
//     car2="MG";
// }
// console.log(car2);

// JS Hoisting-- 
// -Hoisting is JavaScript's default behaviour of moving declarations to the top.
// -In Hoisting, only variable declarations are hoisted to the top not initializations.
// -A variable can be used before it has been declared.

// x=10;
// console.log(x);
// var x;

// -Variables declared with let & const are hoisted to the top of the block, but they will give error.
// x=5;
// console.log(x);
// let x;

// x=15;
// console.log(x);
// const x;
// -let will give referenceError & const will give suntaxError so our code will not run.

// -Only variable declarations are hoisted not initializations.
// var x;
// console.log(x);
// x=20;

// JS Strict Mode--
// -"use strict"; Defines that JavaScript code should be executed in "strict mode".
// -The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
// -Strict mode is declared by adding "use strict"; to the beginning of a script or a function.

// "use strict";
// x=3.20;
// console.log(x);

// function demo(){
//     y=20;
//     console.log(y);
// }
// demo();
// -This things will cause error b/c variable is not declared. Using variable, function, object & many things without declaring it or same name params are not allow in strict mode.

// JS this keyword-- 
// -In JavaScript, this keyword refers to an object it belongs to. 
// -The this keyword refers to different objects depending on how it is used:-
// -In an object method, this refers to the object.
// const person={
//     fname:"John",
//     lname:"Doe",
//     fullname: function(){
//         return this;
//         }
// }
// console.log(person.fullname());

// -Alone, this refers to the global object.
// console.log(this);

// -In a function, this refers to the global object.
// function thisFun(){
//     console.log(this);
// }
// thisFun();

// -In a function, in strict mode, this is undefined.
// function thisFun(){
//     "use strict";
//     console.log(this);
// }
// thisFun();

// Call() method-- 
// -The call() method is a predefined method in js.
// -With call() method, an object can use a method belongs to another object.

// const person = {
//     fullName: function(){
//         console.log(this.firstName+" "+this.lastName);
//     }
// }
// const person1 = {
//     firstName:"John",
//     lastName:"Doe"
// }
// const person2 = {
//     firstName:"Marry",
//     lastName:"Doe"
// }
// person.fullName.call(person1);
// person.fullName.call(person2,);

// Apply() method-- 
// -The apply() method is similar to the call() method. 
// -The difference is call() method takes arguments separately & apply() method takes arguments as an array.

// const person = {
//     fullName : function(city,country){
//         console.log(this.firstName+" "+this.lastName+" "+city+" "+country);
//     }
// }
// const person1 = {
//     firstName:"John",
//     lastName:"Doe"
// }
// person.fullName.apply(person1, ["New York", "USA"]); 

// Bind() method-- 
// -The bind() method allows an object to borrow a method from another object without copying.

// const student1 = {
//     name: "Jack",
//     grade:5,
//     introduction: function(){
//         console.log(`${this.name} studies in grade ${this.grade}.`);
//     }
// }
// const student2 = {
//     name: "Jimmy",
//     grade:6
// }
// let result = student1.introduction.bind(student2);
// result();

// const student1={
//     name:"laddu",
//     lname:`halwai, kii toh nikal padii 
//     q nahi niklegi bhai wo hai hi itne tarrrr...rrrreeeeeeeeeeeeeeeee
//     tumhe pata h woh kitna shi khana banate hai
//     uff kya hi lajawab
//     khaa kar majaa hi aa jata
//     man prafullit ho jata hai
//     esa lgta hai bas khate hi jaoo
//     tumhe pata hai abhi unhe kitna bada order mila tha?
//     kitna bada?
//     arey bahut bada cororo ka order tha wo 
//     arey bhaiya kya bat kr rhe ho
//     ha bhaiya shi m,
//     isiliye toh main bol rha hu ki laddu halwai ki nikal pdi
//     arey waah yr bhaiya shi m hi nikal pdi unki toh
//     wese kha ka or kiska order tha wo??
//     arey bhaiya wo mumbai ka ambani jii k yha ka order tha
//     arey bhaiay kiya batt kr riye ho, ambani jii k wha ka order tha fr to shi h
//     wese fr laddu halwai n itne rupayoo ka kya kra
//     arey bawa unne toh mast 1 bada bangla le liye phle toh sch.no.74 main
//     arey bhaiya kiya batt kr riye hoo
//     ha yr bhiya
//     or fr unne cham chamati bdi si car le li
//     arey waah yr bhiya konsi
//     esi wese nhi bhiya unne toh mst mercedes leli mercedes
//     ooo teri kiya batt kr riye hoo
//     laddu halwai toh sidhe halwai se cororepati bn gye wo bhi ambani ji ki wjh s
//     ha yr bhiyaa isliye toh m bol riya tha ki laddu halwai ki toh nikal padii...
//     hehehee shi h bhiya unki toh shi m nikl pdi..!!!!! `
// }
// console.log(student1.name);
// console.log(student1.lname);