// Js Array, object, oops concept & tasks.

//Q.1 & 2-- 
// -Create an array of five different fruits.
// -Use for in loop to log each fruit in Array. 
// const arr = ["Apple","Banana","Mango","Orange","Pomegranate"];
// for(let i in arr){
//     console.log(`${i} - ${arr[i]}`);
// }

//Q.3 & 4--
// -Create an object with three properties: name, age, and occupation.
// -Use a for-in loop to log each property and its value to the console.
// const obj = {
//     name: "Divya Waghmode",
//     age: 23,
//     Occupation: "Software Engineer"
// }
// for(let j in obj){
//     console.log(`${j}-${obj[j]}`);
// }

//Q.5-- 
// -Create a function that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.
// function sum(arr){
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i];
//         }
//         return sum;
// }
// let arr=[10,15,25,40,50];
// console.log(`The sum of given array is ${sum(arr)}`);

// function sum_array(arr){
//     return arr.reduce((x,y) => x+y);
// }
// const arr=[10,20,30,40,50];
// console.log(`The sum of array is ${sum_array(arr)}`);

//Q.6--
// -Create a function that takes an object as a parameter and logs each property.
// function objFunction({fname, age}){
//     return (fname + age);
// }
// let obj={
//     fname: "John Doe ",
//     age: 45
// }
// console.log(objFunction(obj));

// function objFunction(test){
//     console.log(test);
// }
// let obj = {
//     name: "John Doe",
//     age: 45
// };
// objFunction(obj);

//Q.7--
// -Create an array of five different cars, each with an object that includes the car's make, model, year, and color properties.
// const cars = [
//     {
//         carName:"BMW",
//         model: "X5",
//         year: 2020,
//         color: "Blue"
//     }, 
//     {
//         carName:"Audi",
//         model: "RS Q8",
//         year: 2021,
//         color: "Grey"
//     },
//     {
//         carName:"Verna",
//         model: "SX Opt Turbo DCT",
//         year: 2023,
//         color: "Black"
//     },
//     {
//         carName:"MG",
//         model: "Gloster",
//         year: 2022,
//         color: "Glaze Red"
//     },
//     {
//         carName:"KIA",
//         model: "Seltos",
//         year: 2019,
//         color: "Sparkling Silver"
//     }
// ];

//Q.8--
// -Use a for-in loop to log the make and model of each car to the console.
// for(let i in cars){
//     console.log("The make of car is: "+  cars[i]["carName"]+ " & model of car is: " +cars[i]["model"] );
// }

//Q.9--
// -Use a for-in loop to log the year and color of each car to the console.
// for(let i in cars){
//     console.log("Buy year is: "+cars[i]["year"]+" & the color is: "+cars[i]["color"]);
// }

//Q.10--
// -Use a for-in loop to log the entire object for each car to the console.
// for(let i in cars){
//     console.log(i,cars[i]);
// }

//Q.11--
// -What are the four main principles of OOP?
// OOPs:- Object-Oriented Programming (OOPs) is a programming language model which is organized around Objects rather than "actions" & data rather than "logic". 
// It's a methodology to design a program using classes & objects. It simplifies software development & maintenance  by providing some concepts such as-
// -Inheritance.
// -Encapsulation. 
// -Polymorphism.
// -Abstraction. 

//Q.12--
// Inheritance:- Inheritance is the process by which one class inherits the functions & properties of another class such as parents-child relationship.The main function of inheritance is the reusability of code.

//Q.13--
// Encapsulation:-Encapsulation means binding data variables & methods together in a class.

//Q.14--
// Polymorphism:- Polymorphism is a object-oriented approach that allows the developer to assign & perform several functions using a single function.
// For Ex.- "+" can be used for addition as well as string concatenation. 

// Q.15--
// Abstraction:- Abstraction means showing only the relevant details to the end-user & hiding irrelevant features that serve as a distraction.
// For Ex.-Phone calls we don't know the internal process, how car starts we just put the keys etc.