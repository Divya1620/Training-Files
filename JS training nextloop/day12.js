// Timing functions, setTimeout, setInterval, clearInterval & tasks.

//Q.1--
// Timing Functions - 
// -Timing events are the events that helps to execute a piece of code at a specific time interval. These events are directly available at HTml DOM window object.

//Q.2--
// It's purpose -
// -The purpose of timing function is to execute a task or any function at a particular time.

//Q.3--
// creating timing functions -
// -There are 2 types of timing functions in js- setTimeout() & setInterval().
// syntax- setTimeout(function, milliseconds) 
// syntax- setInterval(function, milliseconds)

//Q.4--
// Difference b/w setTimeout() & setInterval() -
// -setTimeout() executes a function, after waiting a specified number of milliseconds.
// -setInterval() repeats the execution of the function continuously, after waiting a specified number of milliseconds.

//Q.5--
// setTimeout function - 
// function setTimeoutFunction(){
//     alert("Timeout Function");
// }
// setTimeout(setTimeoutFunction,2000);

//Q.6--
// stop the execution of setTimeout function -
// -The clearTimeout method stops the execution of setTimeout() function.
// syntax- myVar = setTimeout(function, milliseconds);
// clearTimeout(myVar);

// function cancelSetTimeout(){
//     alert("Cancel Timeout Function");
// }
// myVar=setTimeout(cancelSetTimeout,3000);
// clearTimeout(myVar);

//Q.7--
// setInterval function - It repeats a given function at every given time-interval.
// function setIntervalFunction(){
//     console.log("Interval Function");
// }
// setInterval(setIntervalFunction,2000);

//Q.8--
// stop the execution of setInterval function -
// -The clearInterval method stops the execution of setInterval() function.
// syntax- let myVar = setInterval(function, milliseconds);
// clearInterval(myVar);

// function cancelSetInterval(){
//     console.log("Cancel Interval Function");
// }
// let myVar=setInterval(cancelSetInterval,4000);

//Q.9--
// Difference b/w clearTimeout() & clearInterval() -
// -clearTimeout() method clears the time out that has been previously set by the setTimeout() function. 
// -clearInterval() method clears the interval that has been previously set by the setInterval() function.

//Q.10--
// Minimum & Maximum delay time - 
// -Minimum delay time is- 10,000 ms or 10 seconds.
// -Maximum delay time is- 2,147,483,647 ms (about 24.8 days). 

//Q.11--
// Passing arguments to a timing function -
// function myFunction() {
//     setTimeout(alertMsg, 3000, "Hello there..!!");
//   }
//   function alertMsg(message) {
//       alert(message)
//   }
//   myFunction();

//Q.12--
// Create a countdown timer - 
// function timer1(){
//     console.log(`Running timer after 2 seconds`);
// }
// function timer2(){
//     console.log(`Running timer after 4 seconds`);
// }
// function timer3(){
//     console.log(`Running timer after 6 seconds`);
// }
// function timer4(){
//     console.log(`Running timer after 8 seconds`);
// }
// function timer5(){
//     console.log(`Running timer after 10 seconds`);
// }
// setTimeout(timer1, 2000);
// setTimeout(timer2, 4000);
// setTimeout(timer3, 6000);
// setTimeout(timer4, 8000);
// setTimeout(timer5, 10000);