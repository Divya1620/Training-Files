// JS Event Propogation or Deletion, Event Bubbling, Event Capturing, DOM & JS style.

// Event Propogation--
// -Event propogation is a mechanism that defines how events propogate or travel through the DOM tree.
// -It determines in which order the elements receive the event.
// -There are 2 ways to handle this event prpogation order of HTML DOM is Event Bubbling & Event Capturing.

// Event Bubbling  & Capturing--
// -Event bubbling travels from the target to the root. Which means the inner element's event is handled first & then the outermost element's event will be handled.

// -Event capturing travels from the root to the target. Which means the outer element's event is handled first & then the innermost element's event will be handled.

// Syntax- addEventListener(event, function, useCapture);
// -we can specify the propogation using the useCapture parameter. When it is set to be false(the default value), then event uses bubbling propogation & when it is set to true, then there is a capturing propogation.

// document.getElementById("div1").addEventListener("click", () => {
//     alert("You've clicked on div element.")
// }, );
// document.getElementById("span1").addEventListener("click", (e) => {
//     e.stopPropagation();
//     alert("You've clicked on span element.")
// }, );
// document.getElementById("div2").addEventListener("click", (e) => {
//     e.stopPropagation();
//     alert("You've clicked on div element.")
// }, true);
// document.getElementById("span2").addEventListener("click", () => {
//     alert("You've clicked on span element.")
// }, true);

// -Calling event.stopPropagation() will prevent further propogation through the DOM tree & only run the event handler from which it was called.

// JS DOM--
// -DOM stands for Document Object Model. It is an application programming interface (API) for manipulating HTML documents.
// -The DOM represents an HTML document as a tree of nodes. The DOM provides functions that allow you to add, remove & modify parts of the document effectively.

// DOM Tree-
// -The DOM represents an HTML document as a hierarchy of nodes.
/* <html>
    <head>
        <title>JavaScript DOM</title>
    </head>
    <body>
        <h1>DOM--</h1>
        <p>Hello DOM!</p>
    </body>
</html> */

// DOM Methods- 
// -The DOM methods are "actions" you can perform on HTML Elements. 
// -The DOM properties are "values" of HTML Elements that you can set or change. 
// -document.getElementById(id)
// -document.getElementsByTagName(name)
// document.getElementsByClassName(name)

// document.getElementById("demo").innerHTML="Hello DOM";
// -In the above ex. the getElementById is a method & innerHTML is a property.
// document.getElementsByTagName("p").innerHTML;
// document.getElementsByClassName("intro");

// JS Style-- 
// -The DOM allows Js to change the style of HTML Elements. 
// syntax- document.getElementById(id).style.property = value; 

// document.getElementById("jsStyle").style.color="crimson";
// document.getElementById("jsStyle").style.backgroundColor="cyan";
// document.getElementById("jsStyle").style.padding="20px";
// document.getElementById("jsStyle").style.fontSize="25px";