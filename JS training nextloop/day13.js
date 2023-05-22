// Date object & window objects & tasks. 

//Q.1-- 
// Date object & it's purpose -
// -The Date Object is an inbuilt data type of javascript language. It is used to work with dates & times. The Date object is created by using new keyword i.e., new Date().
// -We can use different Date constructors to create date object. It provides methods to get and set day, month, year, hour, minute and seconds.

//Q.2--
// Creating a Date Object -
// syntax-
// new Date()
// new Date(milliseconds)
// new Date(dataString)
// new Date(year,month,day,hour,minute,second,millisecond)
// Ex.-
// const d = new Date();
// console.log(d)

//Q.3--
// History Object - 
// -The JavaScript History Object contains the list of URL visited by the user & allows us to move back or forward in the history list.
// -history.back :- It is same as clicking back in the browser.
// -history.forward :- It is same as clicking forward in the browser.

//Q.4--
// Accessing current URL using location object - 
// -The window.location object can be used to get the current page address(URL) & to redirect the browser to a new page.
//  console.log("The current URL of this page is: " + location.href);

//Q.5--
// Purpose of window object in js -
// -The Window Object represents a window in browser. An object of window is created automatically by the browser.

//Q.6--
// Opening a new window using a window object -
// -we can open a new window with window.open() method.
// const newWindow = window.open("https://www.geeksforgeeks.org/javascript-date-objects/", "New Window");
// console.log("Opening a new window by window object" + open("https://www.geeksforgeeks.org/javascript-date-objects/", "New Window"));
// console.log(newWindow);
// -& we can close that opened window with window.close() method.

//Q.7--
// Navigator Object - 
// -The window.navigator object contains information about the visitor's browser.
// It is used for browser detection & can be used to get browser information such as appName, appCodeName, userAgent etc.

//Q.8--
// Checking user's browser is chrome using navigator object - 
// -we can check user's browser with navigator.appName.
// console.log(navigator.appName);

//Q.9--
// Purpose of screen object -
// -The window.screen object contains information about user's screen.

//Q.10--
// Getting height & width of user's screen with screen object -
// console.log("The HEIGHT of screen is- "+screen.height);
// console.log("The WIDTH of screen is- "+screen.width);

//Q.11--
// Returning the current time in hours & minutes -
// var date=new Date();
// var hr=date.getHours();
// var min=date.getMinutes();
// console.log("current time is "+hr+":"+min);

// let date=new Date();
// let hoursMin=date.toLocaleTimeString('en-US',{
//     hour: '2-digit',
//     minute: '2-digit'
// });
// function gettingTime(){
// console.log("The Current Time is- ",hoursMin);
// }
// gettingTime();

//Q.12--
// Create a pop window & close button using a window object -
// let myWindow; 
// function openWindow(){
//     myWindow=window.open("https://images.unsplash.com/photo-1632165258904-21ca36a01ee0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHVnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60","","width=200,height=100"); 
// }
// function closeWindow(){
//     myWindow.close();
// }

//Q.13--
// Aspect ratio of user's screen using screen object - 
// console.log("Screen Height is: ", screen.height);
// console.log("Screen Width is: ", screen.width);

//Q.14--
// Allows user to navigate to the previous page -
// function goBack(){
//     history.back();
// }

//Q.15--
// Redirect the user to a new URL after a specified delay(e.g., 5000) -
// function newURL(){
//     location.assign("https://www.google.com/");
// }