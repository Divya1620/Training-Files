// Js AJAX, Fetch API, Math Object, Closures 

// AJAX--
// -AJAX stands for "Asynchronous JavaScript & XML".
// -It uses XMLHttpRequest object to communicate with servers. It send data to a server in the background.
// -AJAX allows you to send & receive data asynchronously without reloading the web page.
// -AJAX is asynchronous in nature which means it communicate with the server, exchange the data & update the page without refreshing/reloading the page.

// Q.1 & 2--
// Using AJAx send a GET request & log the data -
// Get the image url from the response and add an image tag with that url -
// function gettingReq() {
//  const getRequest = new XMLHttpRequest();
//  getRequest.onload = function (){
//     console.log(JSON.parse(this.responseText));
//  }
//  getRequest.open("GET","https://dog.ceo/api/breeds/image/random",true);
//  getRequest.send();
// }

// Q.3--
// Send the data to url as a POST request & log the data - 
// function sendingData(){
//     const sendRquest = new XMLHttpRequest();
//     sendRquest.onload = function(){
//         console.log(JSON.parse(this.responseText));
//     }
//     sendRquest.open("POST",'https://dummyjson.com/products/add',true);
//     sendRquest.setRequestHeader('Content-Type', 'application/json')
//     sendRquest.send('{"title": "BMW Pencil"}');
// }

// Fetch API--
// -The Fetch API is a promise-based interface that allows you to make HTTP requests to servers from web browsers.
// -It requires only 1 parameter which is the URL.
// syntax- let response = fetch(url);
// -The fetch() method returns a promise so we can use then() & catch() methods to handle it.
// fetch(url)
// .then(response => {
// //response
// })
// .catch(error => {
// //error
// })

// Q.4 & 5--
// Using Fetch send a GET request & log the data - 
// Showing the response with img tag -
// function getWithFetch(){
// const getRes = fetch("https://dog.ceo/api/breeds/image/random")
// .then(response => {
//     response.json()
//     .then(data => {
//         console.log(data);
//     })
// })
// }

// Q.6--
// Send the data to url as a POST method with fetch APT - 
    // const postWithFetch = async () => {
    //     const response = await fetch('https://dummyjson.com/products/add', {
    //         method: "POST",
    //         headers: { 'Content-Type': 'application/json' },
    //         body: '{"title": "BMW Pencil"}'
    //     } )
    //     const data = await response.json();
    //     console.log(data);
    // }

// Q.7--
// Calculate the area of a circle with radius=12 -
// function areaOfCircle(radius, pi){
//     return pi * radius * radius;
// }
// console.log("Area of a circle is: "+ areaOfCircle(12, Math.PI));

// Q.8--
// Calculate sin & cos of(0,45,180)degrees angles -
// console.log("0 degree angle of sin is: "+Math.sin(0 * Math.PI/180));
// console.log("45 degree angle of sin is: "+Math.sin(45 * Math.PI/180));
// console.log("180 degree angle of sin is: "+Math.sin(180 * Math.PI/180));

// console.log("0 degree angle of cos is: "+Math.cos(0 * Math.PI/180));
// console.log("45 degree angle of cos is: "+Math.cos(45 * Math.PI/180));
// console.log("180 degree angle of cos is: "+Math.cos(180 * Math.PI/180));

// Q.9--
// Calculate the min & max of (1,4,3,16,23,2) -
// console.log(Math.min(1,4,3,16,23,2));
// console.log(Math.max(1,4,3,16,23,2));

// Q.10--
// Log a random integer between 0 & 6 -\\\
// console.log(Math.floor(Math.random() * 6));