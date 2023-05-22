// mouse based events,touch based events, event listeners, addEventListener, removeEventListener. 

// Mouse based events--
// const div = document.querySelector(".div");
// div.addEventListener("click" , () => {
//     console.log("Div clicked");
// })
// div.addEventListener("mouseenter", () => {
//     console.log("Mouse in event is fired");
// })
// div.addEventListener("mousedown", () => {
//     console.log("Mousedown event is fired");
// })

//Touch based events--
// -Not so imp bcz it work on touched devices.

// Event Listeners--
// -An event listener in js is a way that you can wait for user interaction like a click or keypress & then run some code whenever that action happens.

// addEventListener--
// -The addEventListener() method is an inbuilt function of JavaScript. 
// -The addEventListener takes event as a string that will be triggered & we can add many event handlers to one Element. 
// Syntax- element.addEventListener(event, function, useCapture);
// -event:event can be any js valid event.
// -function:It is the function that we want to call when an event occurs.
// -useCapture:It is an optional parameter which contain boolean value & specify whether to use event capturing or bubbling.

// const btn = document.querySelector("#mybtn");
// btn.addEventListener("click", () => {
//     alert("Hello, I'm Event Listener...");
// })
// -Adding different types of events to the same element- 
// const btn = document.querySelector("#mybtn");
// btn.addEventListener("mouseover", () => {
//     console.log("Moused Over");
// })
// btn.addEventListener("click", () => {
//     console.log("Button get clicked");
// })
// btn.addEventListener("mouseout", mouseoutFun);
// btn.removeEventListener("mouseout", mouseoutFun);

// function mouseoutFun(){
//     console.log("Mouse out");
// }

// removeEventListener--
// -The removeEventListener() method removes event handlers that have been attached with the addEventListener() method.
// const btn=document.querySelector("#mybtn");
// btn.addEventListener("click", removeFun);
// btn.removeEventListener("click", removeFun);

// function removeFun() {
//   console.log("Hi")
// }