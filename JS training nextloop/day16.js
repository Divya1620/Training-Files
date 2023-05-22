// Constructor Functions, prototypes, JSON & Its methods & task.  

// Constructor Function-- 
// -A constructor is a special function that creates and initializes an object instance of a class.
// -In js, a constructor gets called when an object is created using a new function.

// function ConstructFunction(name,age,live,qualification){ //Constructor Function
//     // properties- 
//     this.name=name;
//     this.age=age;
//     this.live=live;
//     this.qualification=qualification;

//     // methods- 
//     this.method=function(){
//         retuen (`${this.name} ${this.age} ${this.live} ${this.qualification}`);
//     }
// }

// Prototype-- 
// -All js objects inherit  properties & methods from a prototype.
// -We can't add new propety or method to existing object constructor. That's why we use the prototype to add new properties & methods to an existing object constructor.
// Syntax- function_name.prototype.property=value;

// ConstructFunction.prototype.length=15; //Adding a new property using prototype
// ConstructFunction.prototype.newFun=()=> {return "Helloo";}  //Adding a new method using prototype

// const obj=new ConstructFunction("Jack John",26,"USA","B.Tech"); //Creating an object instance

// console.log(obj);
// console.log(obj.live);
// console.log(obj.length); 
// console.log(obj.newFun());

// JSON-- 
// -JavaScript Object Notation(JSON) is a standard text based format for representing structured data based on JavaScript Object syntax. It is commonly used for transmitting data in web applications.
// -JSON format is similar to the creating code for js objects.
// -We use 2 methods for converting data with JSON-
// 1. JSON.parse()- Converting JSON string to a JavaScript object.
// 2. JSON.stringify()- Converting an object into a JSON string.

// const json='{"name":"Jack", "classes":{"class":12}, "age":25}';
// const json='{"name":"Jack","age":[10,15,25], "classes":{"sec":"A"}}'; //Creating a JSON string
// console.log(JSON.parse(json)); //Converting JSON string to a js object

// function Bike(name,color,model){
//     this.name=name;
//     this.color=color;
//     this.model=model;

//     this.bikeData=function(){
//         return `${this.name} ${this.color} ${this.model}`;
//     }
// }
// const obj=new Bike("R15","Black", "Yamaha R15 V4");
// console.log(obj);
// console.log(JSON.stringify(obj)); //Converting object instance into JSON string