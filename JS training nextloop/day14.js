// Screen Object, RegExp, Form Validation, Cookies & tasks. 

//Q.1--
// Screen Object -
// -The JavaScript screen object conatains information about user's screen.

//Q.2--
// Determine height & width of user's screen using screen object -
// console.log("The height of user's screen is: ", screen.height);
// console.log("The width of user's screen is: ", screen.width);

//Q.3--
// Properties of screen object - 
// -There are many properties of screen object that returns information of the browser such as-
// height, width, availHeight, availWidth, colorDepth, pixelDepth. 

//Q.4--
// Determine color depth of user's screen -
// function clrDepth(){
//     if(screen.colorDepth<=20){
//         document.body.style.background="#bab86c";
//     }
//     else{
//         document.body.style.background="#556b2f";
//     }
// }
// clrDepth();

//Q.5--
// Open a new window with specific size & location -
// function newWindow(){
//     window.open("https://www.google.com/", "myWindow", "width=400, height=400");
// }

//Q.6--
// RegExp in js - 
// -Regular Expression or RegEx is a pattern of characters which is used to match character combinations in strings.
// -In js, RegExp is a object with properties & methods.

//Q.7--
// Creating RegExp - 
// -We can create RegExp with 2 ways -
// syntax- 
// 1. var pattern = /pattern/attributes;
// 2. var pattern= new RegExp(pattern, attributes);

//Q.8--
// Some common RegExp patterns - 
// - [A-Z], [a-z], [0-9], [asdf], [^asdf]-not asdf letter check, [0-9A-Z], [^a-z].

//Q.9--
// Test a string against regex -
// let regex=/heyy/i;
// let str="Heyy, wassuup?";
// if(regex.test(str)){
//     console.log("String contains the pattern 'Hey'.")
// }else{
//     console.log("string doesn't contains the pattern 'Hey'.");
// }

//Q.10--
// Replace a part of string that matches RegExp - 
// syntax- replace(str, replacement); 
// let regex=/heyy/gi;
// let str="Heyy Uncle, Heyy Aunty!!";
// let replaced=str.replace(regex, "Helloo");
// console.log(replaced);

//Q.11--
// Why form validation is important -
// -It is important to validate the form submitted by the user because it can have inappropriate values.
// -Before submitting the form data to server, it is important to ensure all required form controls are filled out, in the correct format.

//Q.12--
// Some common form validation techniques - 
// -client-side validation. 
// -server-side validation.
// -validation on submit button. 
// -email validation. 
// -number validation.
// -password validation & so on. 

//Q.13--
// Validate an email address -
// function ValidateEmail(inputText){
// var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// if(inputText.value.match(mailformat))
// {
// alert("Valid email address!");
// document.form1.text1.focus();
// return true;
// }
// else
// {
// alert("You have entered an invalid email address!");
// document.form1.text1.focus();
// return false;
// }
//}

//Q.14--
// Validate a Phone number - 
// function phonenumber(inputText){
//   var phoneno = /^\d{10}$/;
//   if(inputText.value.match(phoneno))
//   {
//       return true;
//   }
//   else
//   {
//      alert("Not a valid Phone Number");
//      return false;
//   }
// }

//Q.15--
// Validate a password - 
// function checkPassword(inputText){
//     var passw = /^[A-Za-z]\w{7,14}$/;
//     if(inputText.value.match(passw)){
//         alert("Correct");
//         return true;
//     }else{
//         alert("Wrong Password");
//         return false;
//     }
// }

//Q.16--
// Cookies - 
// -Cookies are data, stored in small text files.
// -They are small pieces of texts sent to the browser by a website we visit.
// - Cookies let us store user information in web pages.
// -They are saved with name-value pairs like- username=john doe.

//Q.17--
// Create a cookie -
// document.cookie="username=Divya Waghmode";

//Q.18--
// Read a cookie -
// let x=document.cookie;
// console.log(x)

//Q.19--
// Delete a cookie - 
// document.cookie = "username=; expires=Thu, 27 Apr 2023 13:38:00 UTC; path=/;";

//Q.20--
// Set an expiration date for a cookies -
// document.cookie = "username=Divya Waghmode; expires=Thu, 27 Apr 2023 13:37:00 UTC";