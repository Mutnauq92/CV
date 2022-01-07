// const personDetails = [
//   {

//     personalDetails: {
//       firstName: "Mohlabi",
//       lastName: "Mohapi"
//     },
//     academicBackground: {
//       school: "Pele-Ya-Pele",
//       year: 2010
//     },
//     workExperience: {
//       company: "Imperial Renault",
//       position: "Mechanic"
//     }

//   },
//   {

//     carsOwned: {
//       car1: {
//         make: "Audi",
//         model: "A6",
//         year: 2004
//       }
//     }

//   }
// ];

// function getProperty(objectName, nestedObjName, objProp){
//   let requestInfo = objectName.nestedObjName.objProp;
//   return requestInfo;
// }


// console.log(getProperty(personDetails[0],personalDetails,"firstName"));

// console.log(personDetails[0].personalDetails);
// console.log(personDetails[1].carsOwned.car1.make);

// const personArray = [
//   {
    
//     person: {
//       fname: "Mohlabi",
//       lname: "Mohapi"
//     },
//     education: {
//       school: "PYP",
//       year: 2010
//     }

//   },
//   {
    
//     cars: {
//       make: "Audi",
//       model: "A6 3.0L V6 Quattro"
//     },
//     gadgets: {
//       laptop: "Lenovo",
//       model: "X1 Carbon 3rd Generation"
//     }

//   }
// ];


// function requestInfo(objectName,arrayPosition, chooseArray, chooseProp){
//   return objectName[arrayPosition].chooseArray.chooseProp;
// }

// function getInfo(){
//   const objName = prompt("Choose object: ");
//   const arrPos = prompt("Choose array position: ");
//   const arrName = prompt("Choose array: ");
//   const propName = prompt("Choose property name: ");

//   requestInfo(objName,arrPos,arrName,propName);
  
// }

// console.log(getInfo());

// const testArr = [
//   {

//     p1: {
//       fname: "Mo",
//       lname: "Mi"
//     },
//     p2: {
//       fname: "Mix",
//       lname: "Masala"
//     }

//   },
//   {

//     p3: {
//       fname: "Mos",
//       lname: "Mil"
//     },
//     p4: {
//       fname: "Mixed",
//       lname: "Malik"
//     }

//   }
  
// ];

// function getInfo(mainArr, arrPos, objPos,propName){
//   return mainArr[arrPos][objPos][propName];
// }

// console.log(getInfo(testArr, 1, "p3", "fname"));


// function getInfo(mainArr, arr1, obj1, prop1){
//   let par1 = mainArr;
//   let par2 = arr1;
//   let par3 = obj1;
//   let par4 = prop1;

//   const allInfo = par1[par2].par3
// }
// myArray = [];

// for(let i = 9; i > 0; i -= 2){
//   myArray.push(i);
// }
// console.log(myArray);

// Setup
/**========================================================= CONTACTS CHALLENGE =========================================== */
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   // Only change code below this line
//   for(let i = 0; i < contacts.length; i++){
//     if(contacts[i].firstName === name){
//       if(contacts[i].hasOwnProperty(prop)){
//         return contacts[i][prop];
//       } else {
//         return "No such property"
//       };
//     }
//   }
  
//   return "No such contact"
//   // Only change code above this line
// }

// console.log(lookUpProfile("Akira", "likes"));
// console.log(lookUpProfile("Kristian", "lastName"));

/**================================================== Math.random() ============================================================ */

/**
 * function randomRange(myMin, myMax) {
  // Only change code below this line
  let result = Math.floor((Math.random() * (myMax - myMin + 1)) + myMin);
  return result;
  // Only change code above this line
}
 */

//======================================================= // max and min // ========================================================

// ================================================= TERNARY OPERATOR ==============================================================

/**
 * function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(1));

function countdown(n){
  if(n < 1){
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}

console.log(countdown(9));
*/
/**
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0){
    return [startNum];
  } else {
    var numArray = rangeOfNumbers(startNum, endNum - 1);
    numArray.push(endNum);
    return numArray;
  }
  return [];
};
*/

//==================================== SPREAD OPERATOR ========================================
// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 2];
// let arr2;

// arr2 = [...arr1];  // Change this line

// console.log(arr1);
// console.log(arr2);

//=================================== OBJECT DESTRUCTURING ====================================

// const LOCAL_FORECAST = {
//   yesterday: { low: 61, high: 75 },
//   today: { low: 64, high: 77 },
//   tomorrow: { low: 68, high: 80 }
// };

// Only change code below this line
  
// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;
// const difference = highToday - lowToday;

// const {today: {low:lowToday, high: highToday}} = LOCAL_FORECAST;

// Only change code above this line

// const source = [1,2,3,4,5,6,7,8,9,10];
// function removeFirstTwo(list) {
//   // Only change code below this line
//   const [a, b, ...arr] = list // Change this line
//   // Only change code above this line
//   return arr;
// }
// const arr = removeFirstTwo(source);

// console.log(arr);

// Only change code below this line
// class Thermostat{
//   constructor(CTemp){
//     this.CTemp = CTemp;
//   }

//   get writer(){
//     return (5/9) * (this.CTemp - 32);
//   }

//   set writer(updateTemp) {
//     this.CTemp = (updateTemp * 9)/ (5 + 32);
//   }
// }
// // Only change code above this line

// const thermos = new Thermostat(76); // Setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in Celsius
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in Celsius

// class Thermostat {
//   constructor(fahrenheit) {
//     this.fahrenheit = fahrenheit;
//   }
  
//   get temperature() {
//     return (5 / 9) * (this.fahrenheit - 32);
//   }
  
//   set temperature(celsius) {
//     this.fahrenheit = (celsius * 9.0) / 5 + 32;
//   }
// }

// const array1 = [1, 2, 3, 4, 5, 6];

// function hello(arg1, pos){
//   if(arg1 === 5) {
//     return `Found the bug at ${pos}`;
//   } else if(arg1 > 5) {
//     return "No bug in here";
//   }
// }

// for (let i = 0; i < array1.length; i++) {
//   if(i === 5) {
//     let pos = array1[i];
//     console.log(hello(i, pos));
//   } else {
//     continue;
//   }
// }

// const memberNames = {
//   fname: "Mohlabi",
//   lname: "Mohapi",
//   age: 29
// }

// const {fname, lname, age} = memberNames;

// const makeServerRequest = new Promise((resolve, reject) => {
//   // responseFromServer is set to true to represent a successful response from a server

//   if(fname === "Mohlab") {
//     resolve(` ${fname} exists as a member`);
//   } else {  
//     reject(`${fname} is not a member yet`);
//   }
// });

// makeServerRequest.then(result => {
//     console.log(result);
//   });

// makeServerRequest.catch(error => {
//   console.log(error);
// });
// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /.un/; // Change this line
// let result = unRegex.test(exampleStr);

// console.log(result);

// let fruits = ["Apple", "Mango", "Banana", "Orange", "Orange", "Orange"];

// console.log(fruits);

// let correctFruits = fruits.splice(4, 2, "Pear", "Grape");

// console.log(fruits);

// let mainObj = {
//   user1: {
//     fname: "Mohlabi",
//     lname: "Mohapi",
//     siblings: {
//       sibling1:{
//         fname: "Nkadimo",
//         lname: "Mohapi",
//         age: 43,
//         kids: {
//         total: 1,
//         gender: "male"
//               }
//             }
//           },
//       sibling2: {
//         fname: "Lerato",
//         lname: "Mohapi",
//         age: 25,
//         kids: {
//           total: 2,
//           gender: "Male & Female"
//         }
//       }
//      }
// }
// delete mainObj.user1.siblings.sibling1.age;

// console.log(mainObj.user1.siblings.sibling1);

// function reverseString(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }


// console.log(reverseString("bobley"));

//====================== N FACTORIAL ========================

// function factorial(num) {
//   if(num <= 0){
//     return 1;
//   } else {
//     return factorial(num -1) * num;
//   }
// }

// let chooseFactorial = prompt("Choose a number to factorialize: ");
// console.log(factorial(chooseFactorial));

//================== FIND LONGEST TRING ===================

// function longestWord(str) {
//   // convert a word into an array
//   let newArray = str.split(" ");
//   // find the length of the array
//   // initialize length tracker
//   let maxLength = 0;
//   // return the longest array length
//   for(let i = 0; i < newArray.length; i++) {
//     let currentWord = newArray[i].length;
//     if(currentWord > maxLength){
//       // set the current word to the maximumLength
//       maxLength = currentWord;
//     }
//   }

//   return longestArray;
  
// }

// let str1 = "This is the longest string";
// let str2 = "Longest string here is the mandalion";
// console.log(longestWord(str1));
// console.log(longestWord(str2));

// function findLongestWordLength(str) {
//   // convert the string into an array
//   let newArray = str.split(" ");
//   // initialize the length counter
//   let maxLength = 0;
//   // loop through each of new arrays
//   for(let i = 0; i < newArray.length; i++) {
//     // store the current word
//     let currentWord = newArray[i].length;
//     if(currentWord > maxLength){
//       // set the current word to maxLength
//       maxLength = currentWord;
//     }
//   }
//   return maxLength;
// }

// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

//============================ FIND AN ARRAY WITH LARGEST NUMBER ===========================
// function arrayWithLargestNumber(mainArray) {
//   let results = [];
//   for(let i = 0; i < mainArray.length; i++) {
//     let largestNumber = mainArray[i][0];
//     for(let j = 1; j < mainArray[i].length; j++) {
//       if(mainArray[i][j] > largestNumber) {
//         largestNumber = mainArray[i][j];
//       }
//     }
//     results[i] = largestNumber;
//   }
//   return results;
// }
// 1. Create a variable to store the results as an array.
// 2. Create an outer loop to iterate through the outer array.
// 3. Create a second variable to hold the largest number and initialise it with the first number. This must be outside an inner loop so it won’t be reassigned until we find a larger number.
// 4. Create said inner loop to work with the sub-arrays.
// 5. Check if the element of the sub array is larger than the currently stored largest number. If so, then update the number in the variable.
// 6. After the inner loop, save the largest number in the corresponding position inside of the results array.
// 7. And finally return said array.
// let array1 = [
//   [0, 43, 3,43,43],
//   [23,432,34,42,342],
//   [2342,23425,23,52,252]
// ];

// console.log(arrayWithLargestNumber(array1));

// function confirmEnding(userstring, ending) {
//   return userstring.slice()
// }

// let mystr = "Mohlabo";

// console.log(confirmEnding(mystr, "i"));

// function repeatString(userStr, num) {
//   // return userStr num times
//   let newStr = "";
//   for(let i = 0; i < num; i++) {
//     if(num >= 1){
//       newStr += userStr;
//     } else {
//       return `Cannot repeat ${userStr} ${num} times as ${num} is less than 1:`;
//     }
//   }
//   return newStr;
// }

// console.log(repeatString("love", 0));

// function repeatStringNumTimes(str, num) {
//   var accumulatedStr = "";

//   while (num > 0) {
//     accumulatedStr += str;
//     num--;
//   }

//   return accumulatedStr;
// }

// console.log(repeatStringNumTimes("love", 2));
// let dog = {
//   name: "Spot",
//   numLegs: 4,
//   sayLegs: function() {
//     // return "This dog has " + dog.numLegs + " legs";
//     return `This dog has ${dog.numLegs} legs`;
//   }
// };

// console.log(dog.sayLegs());

// class Bird {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//     this.numLegs = 2;
//   }
// }

// let Dog = function(dname, dcolor) {
//   this.name = dname;
//   this.color = dcolor;
//   this.numLegs = 4;
// }

// let breddy = new Dog("Bredy", "Brown and White");

// console.log(breddy instanceof Dog);

// function Person(fname, lname, userage, ethnicgroup) {
//   this.firstname = fname;
//   this.lastname = lname;
//   this.age = userage;
//   this.ethnicity = ethnicgroup;
//   // this.numEyes = 2;
// }

// Person.prototype.numEyes = 2;

// let p1 = new Person("Mohlabi", "Mohapi", 29, "Black");

// let personArray = [];
// let protos = [];

// for(let newProperty in p1) {
//   if(p1.hasOwnProperty(newProperty)){
//     personArray.push(newProperty);
//   } else {
//     protos.push(newProperty);
//   }
// }

// console.log(personArray);
// console.log(protos);
// function Human(){}
// Human.prototype.numEyes = function() {return 2;}
// Human.prototype

// function Person(firstname, lastname, userage, usergender) {
//   this.fname = firstname;
//   this.lname = lastname;
//   this.age = userage;
//   this.gender = usergender;
// }

// Person.prototype = Object.create(Human.prototype);
// Person.prototype.constructor = Person;

// function Animal() { }
// Animal.prototype.eat = function() {
//   console.log("nom nom nom");
// };
// function Bird() { }
// Bird.prototype = Object.create(Animal.prototype);
// Bird.prototype.constructor = Bird;
// console.log(p1 instanceof Person)

// console.log(Bird instanceof Animal);

// (function () {
//   console.log("Chirp, chirp!");
//   console.log("Immediately invoked function!")
// })();
// let motionModule = (function(){
//   return {
//     glidemix: function(Obj){
//       Obj.glide = function() {
//         console.log("Peeew");
//       }
//     },
//     flymix: function(Obj) {
//       Obj.fly = function() {
//         console.log("Fly awaaay");
//       }
//     }
//   }
// })();

// // let bird = function() {}
// function bird(){}

// motionModule.glidemix(bird);
// bird.glide();
// motionModule.flymix(bird);
// bird.fly();

// let combinedArrays = arr1.concat(arr2);
// console.log(combinedArrays);

// let copyinside = arr1.copyWithin(1, 2, 4);
// console.log(copyinside);

// let arrayEntries = arr1.entries();
// console.log(arrayEntries.next().value);

// function testEvery(elem){
//   return elem < 9;
// }
// function functionName(elem) {
//   return elem.length < 6;
// }
// let everyTest = arrayNameMonths.every(functionName);
// console.log(everyTest);

// function funcName(elem){
//   return elem === 0;
// }

// let testFunc = array3.every(funcName);
// console.log(testFunc);
// console.log(arrayNameMonths);

// let arr1 = ["January", "February", "March", "April", "May"];
// let arr2 = [0, 1, 2, 3, 4, 5];
// let arr3 = [0, 0, 0, 0, 0];
// function addNums(){
//   return [0, 0, 3];
// }

// let filled = arr1.fill(addNums(), 0, 2);
// console.log(filled);
// function findApr(elem){
//   return elem.length >= 5;
// }

// let findApril = arr1.filter(findApr);
// console.log(findApril);
// function findMonth(elem) {
//   if(elem === "January") {
//     return `Month found`;
//   }
// }

// let monthFinder = arr1.find(findMonth);

// console.log(monthFinder);

//============================== OPENING AND CLOSING TABS ========================================
// tabs is an array of titles of each site open within the window
// const Window = function(tabs) {
//   this.tabs = tabs; // We keep a record of the array inside the object
// };

// // When you join two windows into one window
// Window.prototype.join = function(otherWindow) {
//   this.tabs = this.tabs.concat(otherWindow.tabs);
//   return this;
// };

// // When you open a new tab at the end
// Window.prototype.tabOpen = function(tab) {
//   this.tabs.push('new tab'); // Let's open a new tab for now
//   return this;
// };

// // When you close a tab
// Window.prototype.tabClose = function(index) {

//   // Only change code below this line

//   const tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
//   const tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab

//   this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

//   // Only change code above this line

//   return this;
//  };

// // Let's create three browser windows
// const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
// const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
// const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// // Now perform the tab opening, closing, and other operations
// const finalTabs = socialWindow
//   .tabOpen() // Open a new tab for cat memes
//   .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
//   .join(workWindow.tabClose(1).tabOpen());
// console.log(finalTabs.tabs);
//=============================== END OF TABS ==========================================================
//=============================== MODIFYING ARRAYS ====================================
// let grade8A = ["Mohlabi", "Mohapi", "Lerato", "Nkadimo", "Moipone"];

// // create a function to add a book without modifying original array
// function addLearner(classList, learnerName) {
//   // create a copy of arr
//   let newClassList = [...arr];

//   // add new learner to the class
//   newClassList.push(learnerName);

//   // return the newly modified array
//   return newClassList;
// }

// function removeLearner(classList, learnerName){
//   //create a copy of the classList
//   let newClassList = [...classList];

//   // search for the name of the given learner's name

//   const learnerIndex = newClassList.indexOf(learnerName);

//   // if the learner is in that class, remove them

//   if(learnerIndex >= 0){
//     newClassList.splice(learnerIndex, 1);
//   }

//   return newClassList;
// }


// let removeList = ["Mohlabi", "Mohapi", "Lerato"];
// let myName = "Mohlabi";

// function checkType(arg) {
//   return Array.isArray(arg);
// }

// function usingInst(arg){
//   return arg instanceof Array;
// }

// function usingConst(arg) {
//   let ans = arg.constructor === Array;
//   return ans;
// }

// console.log(usingConst(grade8A));

//================================= END OF FILE ===============================

//================================= USING .MAP() ==============================

const arr = [
  {
    myAge: "2",
    myOther: "3"
  }
];

function addThem(arg) {
  let newArr = arg.split("");
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < i.length; j++) {
      newArr.push(j);
    }
  }
  return newArr;
}
