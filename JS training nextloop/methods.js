// Object.create(), Object.assign(), map, filter & reduce methods- 

// Object.create()--
// -JavaScript Object.create() method is used to create a new object with the specified prototype object and properties. 
// syntax- Object.create(prototype_object, propertiesObject);
// -prototypeObject:- It is the prototype object from which a new object has to be created.
// -propertiesObject:- It is an optional parameter. It specifies the properties of a new Object. 

// var person = Object.create(null);
// // console.log( person);
// person.name="Virat";
// console.log(person);

// const prototypeObject = {
//     fullName: function(){
//         return this.firstName+" "+this.lastName;
//     }
// }
// const person = Object.create(prototypeObject, {prop: {value: "hello there"}});
// console.log(person);
// person.firstName="John";
// person.lastName="Doe";
// console.log(person);

// Object.assign()--
// -JavaScript Object.assign() method is used to copy the values of one or more objects & pass them to another object. 
// syntax- Object.assign(target, ...sources);

// const target={a:1, b:2};
// const source={b:4, c:5};
// const newObj=Object.assign(target,source);
// console.log(target);

// const fname={firstName:"Tony"};
// const lname={lastName:"Shark"};
// const fullName=Object.assign(fname,lname);
// console.log(fullName);
// console.log(fullName===fname);

// map() method--
// -The map() method creates a new Array. 
// -It is used to iterate over an array and manipulate or change data items. 
// syntax- Array.map( (element,index,array){
//     code;
// })
// const numbers=[2,4,6,8,10];
// const output=numbers.map(x => x/2);
// const output=numbers.map(x=>x*2);
// console.log(output);

// const songs=[
//     {id:1, name:"Perfect", artist: "Ed Sheeran"},
//     {id:2, name:"Senorita", artist:"Shawn Mendes"},
//     {id:3, name:"Heat Waves", artist:"Glass Animals"},
//     {id:4, name:"Calm Down", artist:"Rema"}
// ];
// const songsDetails=songs.map(song=>song.name+" "+song.artist);
// console.log(songsDetails);

// filter() method--
// -The filter() method is used to create a new array.
// -It returns an array containing element that satisfies the condition like it filter out the elements. 
// -It returns a subset of the original array based on custom criteria. 
// syntax-Array.filter( (elem,index,array){
//     code;
// })

// const numbers=[1,2,3,4,5,6,7,8,9,10];
// const even = numbers.filter( x => x % 2 === 0);
// console.log(even);

// const odd = numbers.filter( x => x % 2);
// console.log(odd);

// const programmingLanguage = ["Java", "JavaScript", "Python", "Ruby", "PHP", "ReactJS", "Angular"];
// const output = programmingLanguage.filter(words=>words.length<8);
// console.log(output);

// reduce() method-- 
// -The reduce() method takes all the elements of array & reduces it into a single value. 
// syntax-Array.reduce( (culValue,elem,index,array){
//     code;
// })
// const numbers=[2,4,6,8,10];
// const output=numbers.reduce( (sum,value) => sum+value,2);
// console.log(output);

// Note:-
// -The map() method creates a new array by transforming every element in an array individually. 
// -filter() method creates a new array by removing elements that don't belong. 
// -reduce() method takes all array elements & reduce them into a single value.