// 1.Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.
// -The charAt() method returns the character at a specified index. 
// - we use n-1 bcz string's index starts from 0. 
// function myFunction(a, n){
//     // let string = a;
//     // let index = n-1;
//     // return string.charAt(index);

//     return a[n-1];
// }
// console.log(myFunction("hello",3));

// 2.Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

// function myFunction(arr){
//     const arraySlice = arr.slice(3);
//     return arraySlice;

//     const arrayFilter = arr.filter((item,index) => index>2);
//     return arrayFilter;
// }
// const a=[10,20,30,40,50,60];
// console.log(myFunction(a)); 

// 3.Write a function that takes a string as argument. The string contains the substring 'is'. Return the index of 'is'.
// -split() method splits a string into an array of substrings.
// -In split method if i put (" ") space in a seperator then the words are splitting and if don't put space ("") like this then characters are splitting.

// function myFun(string){
//     const myStr=string.split(" ");
//     return myStr[1];
// }
// const str1="world is beautiful";
// const str2='lalalla jajja isis numb is';
// console.log(myFun(str1));
// console.log(myFun(str2));

// 4.Write a function which takes 2 arrays and returns unique values.
// function myFun(arr){
//     const uniqueValues=(new Set(arr));
//     const uniqueValues=arr.filter((item,index,a) => a.indexOf(item) === index);
//     return uniqueValues;
// }
// const array1 = [10,40,50,20,40,60,50];
// console.log(myFun(array1));

// function myFun(a,b){
//     // const value1=(new Set(a));
//     // const value2=(new Set(b));
//     // const uniqueValues = value1.concat(value2)

//     const value1=a.filter((item,index,arr) => arr.indexOf(item) === index);
//     const value2=b.filter((item,index,arr) => arr.indexOf(item) === index);
//     const uniqueValues = value1.concat(value2);
//     return uniqueValues;
// }
// const array1=[10,40,50,20,40,60,50];
// const array2=[30,80,70,30,70];
// console.log(myFun(array1,array2));

// 5.find prime numbers from array using function.
// function isPrime(arr){
//     return arr.filter((num) => {
//     if(num <= 1){
//         return false;
//     } else {
//         for(let i = 2; i<num; i++){
//             if(num % i === 0){
//                 return false;
//             }
//         }
//         return true;
//     }
// });
// }
// const numbers = [1,2,3,4,5,6,7,8,9,15,12,17,16,13];
// const primeNumbers = isPrime(numbers);
// console.log(`Prime Numbers are:- ${primeNumbers}`);

// 6.find fibonacci series from array using function.
// function fibonacci(fib){
//     const result = [];
//     for(let i=2; i<=10; i++){
//         //Formula to calculate fibonacci series is--
//         // (fn = fn-1 + fn-2 )
//         fib[i] = fib[i-1] + fib[i-2];
//         result.push(fib[i]);
//     }
//     return result;
// }
// const fibonacciSeries=[2,5];
// const answer=fibonacci(fibonacciSeries);
// console.log(answer);

// 7.write a function to return color by putting r g b values in function.
// function myFun(r,g,b){
//     // return `rgb(${r},${g},${b})`;
//     // return ["rgb(",r,",",g,",",b,")"].join("");
//     const Color = `rgb(${r}, ${g}, ${b})`;
//     return Color;
//     // return`rgb(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)})`;
// }
// const result=myFun(255,255,255);
// // console.log(result);
// document.body.style.backgroundColor=result;

// function myFun(r,g,b){
//     return rgb(`r:${r},g:${g},b:${b}`);
// }
// const Color=myFun(255,107,18);
// console.log(Color);

// function myFun(r,g,b){
//     const Color = `rgb(${r}, ${g}, ${b})`;
//     const boxElement = document.createElement('div');
//     boxElement.style.backgroundColor = Color;
//     boxElement.textContent = 'Hello there..!!';
  
//     return boxElement;
// //     return (
// //            <Box sx={{backgroundColor:Color}}>
// //               Hello there..!!
// //             </Box>
// // )
// }
// const result = myFun(255,255,255);
// console.log(result);

// 8.Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
// To illustrate:
// largestSwap(27) ➞ false
// largestSwap(43) ➞ true
// If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.
// Examples
// largestSwap(14) ➞ false
// largestSwap(53) ➞ true
// largestSwap(99) ➞ true

// function swappingDigits(number){
//     const reversedNumberString = [...(number + "")].reverse().join("");
//     const reversedNumber = parseInt(reversedNumberString);
//     return number >= reversedNumber;
// }
// console.log(swappingDigits(16)); //16 >= 61 -- false;
// console.log(swappingDigits(44)); //44 >= 44 -- true;
// console.log(swappingDigits(52)); //52 >= 25 -- true;

// I found this approach is good. In this we convert the number into string & split it into array of characters with spread operator then reverse method reverses the order of elements and join method joins back the array of characters into string.
// Then parseInt method converts the reversed string into an integer then we check the condition.

// function swappingDigits(number){
//     const firstDigit = Math.floor(number / 10);
//     const secondDigit = number % 10;

//     const swappedNumbers = secondDigit * 10 + firstDigit;
//     return number >= swappedNumbers;
// }
// console.log(swappingDigits(14));
// console.log(swappingDigits(53));
// console.log(swappingDigits(99));
// console.log(swappingDigits(16));

// 9.Find the factorial of a given number--
// function factorial(number){
//     if(number === 0){
//         return 1;
//     } else{
//         let fact = 1;
//         for(let i=1; i<=number; i++){
//             fact *= i;
//         }
//         return fact;
//     }
// }
// console.log(factorial(5));

// function factorial(number){
//     if(number === 0){
//         return 1;
//     } else{
//         return number * factorial(number-1);
//     }
// }
// console.log(factorial(6))

// 10.Program to check if 2 strings are anagram of each other. 
// function myFun(first,second){
//     const a=first.toLowerCase();
//     const b=second.toLowerCase();

//     const firstWord = a.split("").sort().join("");
//     const secondWord = b.split("").sort().join("");

//     return firstWord === secondWord;
// }
// console.log(myFun("grab", "brag"));

// 11.Write a function that converts age to days,years,months.
// function convertingAge(age) {
//     const days = age * 365;
//     const years = age;
//     const months = age * 12;
//     return(`${days} Days, ${years} Years, ${months} Months`);
// }
// const result = convertingAge(25);
// console.log(result);

// 12.Write a function that converts dob into an age, days, years and months.
function convertingDOB(dob){
    const today = new Date();
    const birthDate = new Date(dob);

    const ageInMilliseconds = today - birthDate;

    const milliseconds = ageInMilliseconds;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = day * 365;

    const ageInYears = Math.round(milliseconds / year);
    const ageInMonths = ageInYears * 12;
    const ageInDays = ageInYears * 365;
    const ageInHours = Math.round(milliseconds / hour);
    const ageInMinutes = Math.round(milliseconds / minute);
    const ageInSeconds = Math.round(milliseconds / second);
    
    return(
        `Age in Years is: ${ageInYears},
        Age in Months is: ${ageInMonths},
        Age in Days is: ${ageInDays},
        Age in Hours is: ${ageInHours},
        Age in Minutes is: ${ageInMinutes},
        Age in Seconds is ${ageInSeconds}`
    );
}
const result = convertingDOB("1998-05-25");
console.log(result);