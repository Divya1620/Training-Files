// String & Its methods, Number & It's Methods.

// String--
// -A string is a sequence of characters that represents text.
// -It is used for storing & manipulating text.
// -A String is a zero or more characters written inside single or double quotes(',"") & in backticks(`).

// console.log("John");
// console.log('john doe');
// console.log(`John "Doe"`);

// Escape Characters-
// -In Js, we can escape a string by using the backslash(\) character.

// let str="It\'s Good"; //single quote
// let str="Are you \"Okay\"??"; //double quote
// let str="This symbol \\ is a backslash." //backslash
// let str="Hello \b there"; //backspace
// let str="Hello \n new line"; //new line
// console.log(str);

// String Methods-

//1.Length Property-
// -To find the length of a string, we can use the built-in length property.
// let str="abcd123ghjnwsn";
// console.log(str.length); //length property

// 2.slice() method-
// -The slice() method extracts a part of string & returns that extracted part in a new string.
// -It take two parameters(start,end).
// syntax= let var=str.slice(start,end);
// let str="Banana, Mango";
// console.log(str.slice(1,4));
// -If we ommit second params, the method will slice out rest of the string.
// console.log(str.slice(3));

// 3.substring() method-
// -substring() similar to the slice() method.
// syntax=str.substring(start,end);
// let str="Hello there";
// console.log(str.substring(6,9));

// 4.substr() method-
// -substr() is similar to the slice() method.
// -The difference is that second params specifies the length of the extracted part.
// syntax=substr(start,length);
// let str="Hello theree..";
// console.log(str.substr(0,10));

// 5.replace() method-
// -The replace() method replaces a specified value with another value in a string.
// syntax=replace(old value,new value);
// let str="Hello there there";
// console.log(str.replace("there", "World"));
// -It only replace the first match. 
// console.log(str.replace("there", "world"));

// 6.toUpperCase() method-
// -In toUpperCase() method a string is converted into uppercase letters.
// let str="hello world";
// console.log(str.toUpperCase());

// 7.toLowerCase() method-
// -In toLowerCase() method a string is converted into lowercase letters.
// let str="HELLO THEREE...";
// console.log(str.toLowerCase());

// 8.concat() method-
// -The concat() method joins 2 or more strings.
// let str1="Helloo, ";
// let str2="How'z You??";
// console.log(str1.concat(str2,"broo"));

// 9.trim() method-
// -The trim() method removes whitespace from both sides of a string.
// let str="        Hellooo....  ";
// console.log(str.trim());
// console.log(str);

// 10.indexOf() method-
// -The indexOf() method returns the first occurance of a string.
// let str="hello, pls let me know";
// console.log(str.indexOf("m"));

// 11.includes() method-
// -The includes() method returns true if a string contains a specified value otherwise returns false.
// let str="Hollaa hey hii hoyee";
// console.log(str.includes("hi"));

// Number--
// -Number is a data type & it can be written with or without decimals & without quotes too.

// let x=3;
// let y=4.14;
// console.log(x);
// console.log(y);
// console.log(typeof(x));

// Number Methods-

// 1.toString() method-
// -The toString() method returns a number as a string.
// let num=225;
// console.log(typeof(num));
// let str=num.toString();
// console.log(str);
// console.log(typeof(str));

// 2.toFixed() method-
// -The toFixed() method is used to format a number using fixed-point notation.(Give values kind of round of).
// let num=217.569788;
// console.log(num.toFixed());
// console.log(num.toFixed(1));
// console.log(num.toFixed(3));

// 3.Number() method-
// -The Number() method convert js variables to numbers. 
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number("10"));
// console.log(Number("10.10"));
// console.log(Number("John"));

// 4.parseInt() method-
// -The parseInt() method parses a string & returns a whole number.
// console.log(parseInt("hello"));
// console.log(parseInt("10.40"));
// console.log(parseInt("10,33"));
// console.log(parseInt("10 20"));

// 5.parseFloat() method- 
// -The parseFloat() method is same as a parseInt() method. 
// -It converts a string to a Number. 

// 6.Number.isInteger() method-
// -It returns true if the argument is an integer. 
// console.log(Number.isInteger(1312));
// console.log(Number.isInteger("1312"));
// console.log(Number.isInteger(1312.25));