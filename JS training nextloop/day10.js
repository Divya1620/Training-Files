// Js console Object, js loops-while,do while,for loop. 

// Console Object--
// -The console object provides access to the browser's debugging console. 
// -It is a property of the window Object. 
// -The console object is accessed with- window.console or console.methodName.

// Methods--
// console.log("Hello"); //Outputs a message to the console
// console.log("Heyy");
// console.clear(); //Clears the console
// console.warn("Warning"); //Outputs a warning message to the console
// console.error("Shows Error"); //Outputs an error message to the console

// JS Loops--
// -Loops are used to repeatedly run a block of code until a certain condition is met. 
// -Loops can execute a block of code a number of times. 
// -There are different kinds of loops such as for loop, while loop, do/while loop, for/in loop, for/of loop.

// 1.for loop-
// -The for loop iterates the elements for the fixed number of times. It should be used if number of iterations is known. 
// Syntax- for(initialization;condition;increment or decrement){
//     code;
// }
// -initialization means initializing the value & it executed one time before the execution of code. 
// -condition means evaluating the condition. If condition is true, the loop is executed otherwise it terminates. 
// -increment or decrement executed every time after the execution of code. 

// for(let i=1;i<=5;i++){
//     console.log(`i is ${i}`);
// }

// 2.for/in loop- 
// -The for in statement loops through the properties of an Object. 
// Syntax- for(var_name in object_name){
//     code; 
// }

// const person = {
//     name:"John Doe",
//     age:26,
//     live:"USA"
// };
// for(let x in person){
//     console.log(x); //keys
//     console.log(person[x]);//values
//     console.log(`${x} is ${person[x]}`);
// }

// 3.for/of loop- 
// -The for of statement loops through the values of an iterable Object. 
// Syntax- for(var_name of object/array_name){
//     code;
// }

// const fruits=["banana", "apple", "mango", "watermelon", "papaya"];
// for(let x of fruits){
//     console.log(x);
// }

// 4.while loop- 
// -The while loop iterates the elements for the infinite number of times. It should be used if number of iteration is not known. 
// Syntax- while(condition){
//     code; 
//     increment or decrement;
// }

// let i=10;
// while(i<=15){
//     console.log(i);
//     i++;
// }

// 5.do/while loop- 
// -The do while loop is a variant of the while loop. This loop will execute the code block at least once whether the condition is true or false. 
// Syntax- do{
//     code;
//     ++ or --;
// }while(condition);

// let i=15;
// do{
//     console.log(i);
//     i++;
// }while(i<=20);

// Break & Continue keyword-- 
// -The break statement is use to jump out of the loop. When a certain condition occurs it'll stop the execution inside loop.
// for(let i=0;i<=5;i++){
//     if(i==3){
//         break;
//     }
//     console.log(i);
// }

// -The continue statement is use to skip one iteration, if a specified condition occurs & then  continues with the next iteration in the loop. 
// for(let i=1; i<=6; i++){
//     if(i==4){
//         continue;
//     }
//     console.log(i);
// }