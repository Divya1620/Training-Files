// Destructuring, promises/Async Await, Modules, class, class inheritance & Its prototype & task.

// Destructuring-- 
// -Destructuring is a JavaScript Expression that makes it possible to unpack values from arrays,or properties from object, into distinct variables.

// Q.1--
// Destructure ["Tiger","Lion","Dog","Cat","Rat"] and put 'Tiger' and 'Cat' in new variables (tiger,cat) - 

// const animals=["Tiger","Lion","Dog","Cat","Rat"];
// const [animal1,,, animal2]=animals;
// console.log(animal1);
// console.log(animal2);  

// Q.2--
// Destructure {username:"John",id:5,age:33} and save username and age in separate variables - 
// const obj={
//     username:"John",
//     id:5,
//     age:33
// }
// const {username,age}=obj;
// console.log(`My Name is ${username} & age is ${age}`);

// Promise--
// -A Promise is a special JavaScript Object. They are used to handle asynchronous operations in js.
// -Promise is used to find out if the asynchronous operation is successfully completed or not.
// Syntax- let promise= new Promise(function (resolve,reject) {
    //code
// });
// -The promise constructor takes only 1 argument which is a callback function.
// -The callback function takes two arguments resolve & reject.
// -A promise has 4 states- pending, fullfilled, rejected settled.
 
// Async & Await-- 
// -async makes a function return a promise.
// -await makes a function wait for a promise.
// Syntax- async function fun_name(){
    //code;
// }
// -The keyword async before a function makes the function return a promise.

// Q.3,4,5,6,7,8--
// Create a function that accepts 1 argument (id) and returns a promise -
// Resolve the promise if 'id' is greater than 5 and return "User is valid" as resolved data -
// Reject the promise if 'id' is less than or equal to 5 and return "User is invalid" as error -

// Call the able function and console log the return value (Promise) -
// Handle the resolve state using 'then' and console log the resolved data -
// Handle the reject state using 'catch' and console log the error -

// function createPromise(id){
//     const pro = new Promise( (resolve,reject) => {
//         if(id>5){
//             resolve("User is valid");
//         } else{
//             reject("User is invalid");
//         }
//     });
//     return pro;
// }
// createPromise(10).then( (data) => {
//     console.log(data);
// }).catch( (err) => {
//     console.log(err);
// }).finally( () => {
//     console.log("Goodd");
// });

// Q.9 & 10--
// Call the function again and await the result (using async await) -
// Console log the awaited result -
// async function asyncFun(){
//     const data=await createPromise(20);
//     console.log(data);
// }
// asyncFun();

// Classes--
// -Classes are a template for creating objects.
// -They encapsulate data with code to work on that data.
// -use the class keyword to create a class then classname with uppercase first letter & always add a method name constructor().
// Syntax- class ClassName{
//     constructor(params){
//         //properties
//     }
//     //methods
// }

// Q.11 & 12--
// Create a Class called 'Animal' -properties => size,speed -methods => walk() -static methods => info()
// Create a Child Class called 'Bear' -properties => color -methods => eat()

// class Animal{
//     constructor(size,speed){
//         this.size=size;
//         this.speed=speed;
//     }
//     walk(){
//         console.log("Walking "+this.size+this.speed);
//     }
//     static info(){
//         console.log("Information");
//     }
// }
// let animal=new Animal("100kg"," 5KM/hr");
// animal.walk();
// Animal.info();

//Inheritance--
// class Bear extends Animal{
//     constructor(size,color){
//         super(size);
//         this.color=color;
//     }
//     eat(){
//         return `The bear is ${this.color} in colour & his weight is ${this.size}`;
//     }
// }
// const animal= new Bear("110kg","Grey");
// console.log(animal,__proto__);
// console.log(animal);
// const sweet = ["laddu","jalebi", "imarti","rasmalai","kaju katli","rasgulla","pedha","gulab jamun","dudh paak","keasr katli","misti doi","sondesh","kesar petha","kaddu ka petha","shrikhand","falooda","icecream","kulfi","cake","pestry","moong halwa","gajar halwa","rajbhog","rabadi","shikanji","lassi","badam halwa","dry fruits halwa", "anjeer barfi", "pista barfi", "besan laddu", "boondi laddu", "raaita", "boondi", "chocolate", "mojito", "tea", "cold coffee", "hot coffee", "coffee frape", "hazelnut coffee", "hot chocolate", "coffee with brownie", "dryfruit laddu", "mango shake", "lemonade", "soda", "jalani jaljeera", "aam pana", "coco-cola","limca","jeeru","fenta","mazza", "slice", "fruity", "appy fizz", "khopra paak", "moti paak", "kalakand", "coconut barfi", "kheer", "rava laddo", "malpua", "sewayian", "payasam", "puran poli", "lauki halwa", "coconut laddu", "chocolate laddu", "ragi laddu", "mysore paak", "fruit custard", "gajak", "peanut chikki", "badam laddu", "badam kheer", "cham cham sweet", "chocolate burfi", "mawa barfi", "pineapple kesari", "almond barfi", "pumpkin kheer", "dates laddu", "aata laddu", "oats laddu", "tilli laddu", "karanji", "shakar pare", "besan burfi", "sweet pongal", "malai laddu", "fried modak", "beetroot halwa", "banana cake", "shahi tukda", "rava modak", "chocolate modak", "pancakes", "waffles", "sweet appam", "bread halwa", "butter cake", "cheese cake", "pappaya halwa", "sheer khurma", "choco chips cookies", "nankhatai", "chocolate buiscuits", "gond laddu", "sabudana kheer", "dates halwa", "basundi", "phirni", "peanut laddo", "anarsa", "milk peda", "kesar peda", "soan papdi", "murabba", "kala jamun", "mawa baati", "til petha", "aam papad", "aamras", "balushahi", "ghevar", "makhan bada", "paan", "sohan halwa", "mithe bhajiye", "dharwar peda", "singori"];
// for (const i in sweet){
//     console.log(`${sweet[i]}-${i}`);
// }

// Q.14--
// Modules-- 
// -JavaScript modules allow you to break up your code into separate files.
// -Modules are imported from external files with import statement.
// -Modules also rely on type-"module" in the <script> tag.
// -There are two types of exports in external files-named exports & default exports.
// Named Exports- export{function_name, var_name, obj_properties_name}; on the bottom of external file.
// Default Exports- export default fun_name(whole function or something).
// -We can import with 2 ways in internal file.
// import{obj_name, function_name, prop_name} from "./external file name"; for named exports.
// import fun_name from "./external file name"; for default exports. (fun_name without curly braces).

// Import the variable and function in another file -

// import {obj,demo} from "./json.js"  //named import
// console.log(obj);
// demo();

// import demo1 from "./json.js"  //default import
// demo1();