// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// we create a variable called "name" and set it to "Dane"
// we create a condition that if name is set to "Mary" the console will greet with "hi Mary!"
// since name is not "Mary" the console will log "How do you do?"
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// we create the variables "secret" and "code"
// we set "code" to equal "123"
// we create condition that if code equals 123, secret will equal "super" and code will multiply by 2
// we create another condition that will make secret equal "duper" if code is greater than 250
// code is not greater than 250 so secret will console log to "super"

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// we create variables "isStudent", "age" and "zip" and set to "true", "34" and "55407"
// we create a conditional to check if "zip" is greater than 80000 and if being a student is true
//  we create a conditional to check if age is less than 30 and if  being a student is false
// we create a condition to check if being a student is true, we create a condition to ask about the weather if none of the other conditions apply
// console will log 'Welcome to Prime!' because student is true, and all prior things did not apply

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

//color0ne and colorTwo are set to eachothers values per instructions and should be flipped
// let color0ne = 'blue';
// let colorTwo = 'red';
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// instructions ask for both color0ne and colorTwo to be changed if mix is true
// needs to add
// if (mix === true) {
//  colorTwo = 'purple';
// }
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
// should be let time as a variable that wont always be the same
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
// this will result in the console logging "no entry"
// the instructions did not call for a not entry option but it could work if you flip where "no entry" and "enter are"


// let age = 21;
// const minAge = 21;

// if(minAge <= age) {
//   console.log('enter');
// } else {
//  console.log('no entry');
// }

// or just remove it
// let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('enter');
} 

*/

