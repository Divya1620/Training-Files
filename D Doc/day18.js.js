// localStorage, sessionStorage, Geolocation, ES6 concepts such as (let/const, Template Literals, Arrow Functions), HTML5 Canvas 

// localStorage--
// -We can store data as key/value pairs in a web browser using the local storage.
// -window.localStorage stores data with no expiration date/time.
// -We set the data in local storage with localStorage.setItem(key, value);
// -We can retreive data from local storage with localStorage.getItem(key);
// -We can remove data from local storage with localStorage.remove(key);
// -All data from local storage can be cleared with the clear() method. 

// sessionStorage--
// -It is similar with the local storage.
// -window.sessionStorage stores data for one session(data is lost when browser tab is closed).
// -We set the data in session storage with sessionStorage.setItem(key, value);
// -We can retreive data from session storage with sessionStorage.getItem(key); 

// Q.1,2 & 3--
// Add a item to localstorage called counter -
// Increment the counter item whenever user visits the page -
// Display the counter value in the html doc -

// function counter() {
//     var n = localStorage.getItem('on_load_counter');
//     if (n === null) {
//         n = 0;
//     } else {
//         n++;
//     }
//     localStorage.setItem("on_load_counter", n);
//     document.getElementById('demo').innerHTML = n;
// }
// counter(); 

// Geolocation--
// -The Geolocation API provides access to geographical location data associated with a user's device.This can be determined using GPS, WIFI, IP & so on.
// -To protect the user's privacy, the location is not available unless the user approves it.
// -We can use navigator.geolocation.getCurrentPosition() method to return the user's location. 
// -We can user navigator.geolocation.watchPosition() method to return the user's current position & continues to return updated position as the user moves.
// -Wecan user navigator.geolocation.clearWatch() method to stops the watchPosition() method. 

// Q.4--
// Log latitude & longitude using geo location api - 
// console.log(navigator.geolocation);

// function showPosition(position) {
//     console.log(`Latitude of current position is:  ${position.coords.latitude}
//     Longitude of current position is: ${position.coords.longitude}`);
// }
// navigator.geolocation.getCurrentPosition(showPosition);

// Q.5--
// Add a watch position method & track the position of device -
// function watchPos(){
//     navigator.geolocation.watchPosition( (position) => {
//         console.log(position);
//     });
// }
// watchPos();

// Let & Const--
// -let & const are a concept of ES6, they can't be ṛedeclared, must be declared before use & they have block scope.

// Q.6 & 7--
// Declare a const variable & assign value to it -
// Update that value then - 
// const obj = {
//     name:"Rahul"
// }
// obj.name="Rohit";
// console.log(obj.name);

// Q.8--
// Declare a let variable and assign a template string (Template Literal) as its value - 
// let name="Divya";
// let place="Indore";
// let data=`Hello, ${name} here!! I live in ${place}.`;
// console.log(data);

// Q.9--
// Add an arrow function & log the value of this keyword -
// let arrowFun= () => {
//     console.log(this);
// }
// arrowFun();

// Q.10--
// Draw an image using different canvas methods - 
// var C= document.getElementById("myCanvas");
// var ctx = C.getContext("2d");
// console.log(ctx);

//For line-
// ctx.moveTo(20,20)
// ctx.lineTo(200,50);
// ctx.strokeStyle="red";
// ctx.stroke();

// For circle-
// ctx.beginPath();
// ctx.arc(90, 40, 20, 30, 1 * Math.PI);
// ctx.lineWidth=40;
// ctx.stroke();
// ctx.fill();

// For Text-
// ctx.font = "20px Times New Roman";
// ctx.strokeText("Hello there",40,50);

// For Gradient-
// Create gradient
// var grd = ctx.createLinearGradient(0,0,200,0);
// grd.addColorStop(0,"red");
// grd.addColorStop(1,"white");
// // Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(10,10,150,80);

// Drawing image- 
// var C= document.getElementById("myCanvas");
// var ctx = C.getContext("2d");

// function gradient1(){
//     var grd1 = ctx.createLinearGradient(10,10,20,270);
//     grd1.addColorStop(0,"blue");
//     grd1.addColorStop(1,"white");
//     ctx.fillStyle = grd1;
//     ctx.fillRect(0,0,800,200);
// }
// gradient1();

// function gradient2(){
//     var grd2 = ctx.createLinearGradient(0,0,200,0);
//     grd2.addColorStop(0,"green");
//     ctx.fillStyle = grd2;
//     ctx.fillRect(0,200,800,200);
// }
// gradient2();

// function gradient3(){
//     var grd3 = ctx.createLinearGradient(0,0,200,0);
//     grd3.addColorStop(0,"crimson");
//     ctx.fillStyle = grd3;
//     ctx.fillRect(60,160,170,155);
// }
// gradient3();

// function roof(){
// ctx.moveTo(35, 180);
// ctx.lineTo(260, 180);
// ctx.lineTo(140, 90);
// ctx.fillStyle="red"
// ctx.fill();
// }
// roof();

// function text(){
//     ctx.font = "40px Arial";
//     ctx.fillStyle="yellow";
//     ctx.fillText("House",80,230);
// }
// text();

// function fillCircle(x, y, radius, color) {
//     ctx.fillStyle = color;
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, 2 * Math.PI);
//     ctx.fill();
// }
// fillCircle(550, 100, 60, "yellow");


// other--
// function roof(){
// ctx.moveTo(140,200)
// ctx.lineTo(250,80);
// // ctx.strokeStyle="red";
// // ctx.stroke();
// ctx.fillStyle="red";
// ctx.fill();
// }
// roof();

// function roof2(){
//     ctx.moveTo(340,200)
//     ctx.lineTo(250,80);
//     // ctx.strokeStyle="red";
//     // ctx.stroke();
//     ctx.fillStyle="red";
// ctx.fill();
// }
// roof2();

// function fillCircle(){
// ctx.beginPath();
// ctx.arc(550, 100, 60, 0, 2 * Math.PI);
// ctx.fillStyle = "yellow";
// ctx.fill();
// }
// fillCircle();

// function fillCircle(x, y, radius, color) {
//     ctx.fillStyle = color;
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, 2 * Math.PI);
//     ctx.fill();
// }
// fillCircle(550, 100, 60, "yellow");