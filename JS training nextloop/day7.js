// Switch Case, Try & Catch method, events, Global Events, Keyboard Events.

//Switch Case--
// -The switch statement is used to perform different actions based on different conditions.
// -The switch statement is use to select one of many block of code to be executed.
// Syntax- switch(expression){
//     case 1:
//         code;
//         break;
//     case 2:
//         code;
//         break;
//     default:
//         code;
// }
// -The switch expression is evaluated once.
// -The value of expression is compared with each case.
// -If there is a match, the associated block of code is executed.
// -If there is no match, the default block of code is executed.

// let day;
// switch(new Date().getDay()) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day =  "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
// };
// console.log(`Today is ${day}`);

// break & default keywords--

// break keyword-
// -The break keyword is used to break the switch block, this will stop the execution inside switch block.
// -If we ommit the break keyword, the next case will be executed even if the evaluation doesn't match.
// let day=5;
// switch(day){
//     case 5:
//         console.log("Saturday");
//     case 6:
//         console.log("Sunday");
// }

// default keyword-
// -The default keyword specifies the code to run if there is no case match.

// function switchBlock(key){
//     switch(key){
//         case 1:
//             console.log("Hello");
//             break;
//         case 2:
//             console.log("Heyy");
//             break;
//         default:
//             console.log("Are you there..???");
//     }
// }
// switchBlock(22);

// Error Handling--
// -JavaScript provides error-handling mechanism to catch runtime errors using try-catch-finally block.
// Syntax-
// try{
//     code that may throw an error;
// }
// catch(error){
//     code to be executed if an error occurs;
// }
// finally{
//     code to be executed regardless of an error occurs or not;
// }
// -try: wrap suspicious code that may throw an error.
// -catch: code to do something in catch block when an error occurs.
// -finally: code in finally block will always be executed regardless of an error occurs or not.

// try{
//     console.log(data);
// }
// catch(error){
//     console.log("Error occurs");
// }
// finally{
//     console.log("It will execute every time");
// }

// throw statement-
// -The throw statement allows you to create a custom error.
// try{
//     throw "OOPS, Error Occured";
// } 
// catch(err){
//     console.log(err);
// }

// Events--
// -Events are actions or occureneces that happens in a system. 
// -JavaScript's interaction with HTML is handled through events. These events are connected to elements in the Document Object Model(DOM).
// -When the page loads, it is called an event. When the user clicks a button, that click too is a event.

// 1.onclick Event-
// function onclickEvent(){
//     alert("Hello  theree..!!");
// }

// 2.onchange Event-
// function onchangeEvent(){
//     const x = document.getElementById("fname");
//     x.value = x.value.toUpperCase(); 
// }

// 3.onmuseover & onmouseout Event- 
// function mouseoverEvent(obj){
//     obj.innerHTML="Mouse Over";
// }
// function mouseoutEvent(obj){
//     obj.innerHTML="Mouse Out";
// }

// 4.onload Event-
// function onloadEvent(){
//     alert("This message was triggered  from the onload event");
// }

// 5.onfocus Event- 
// function onfocusEvent(){
//     document.getElementById("input1").style.background="crimson";
// }

// 6.onkeydown Event- 
// function onkeydownEvent(){
//     alert("You pressed a key inside input field");
// }