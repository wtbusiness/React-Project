const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const panagram = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
  "perscholas",
  "a"
];

//Determine if every number is greater than or equal to 0

const isGreaterThanZero  = (currentValue) => currentValue >= 0;
console.log(nums.every(isGreaterThanZero));

// determine if every word shorter than 8 characters
const isShorterThan8 = (currentValue) => currentValue.length < 8;
console.log(panagram.every(isShorterThan8));

const numsLessThanFour = (currentValue) => currentValue < 4;

console.log(nums.filter(numsLessThanFour));

const divisibleByFive = (currentValue) => currentValue % 5;
console.log(nums.find(divisibleByFive));

// find the first word longer than 5

const longerThanFive = (arr) => {
  return arr.find((element) => element.length > 5);
};

console.log(
  longerThanFive(panagram)
);

//find the index of the first number that is divisible by 3
const findIndex = nums.findIndex(num => num % 3 === 0)
console.log(findIndex);

const findIndexOf = panagram.findIndex(element => element.length < 2);
console.log(findIndexOf);

 nums.forEach(num => console.log(num *3));

 panagram.forEach(element  => console.log(element.concat("!")));

 console.log(nums);
 console.log(panagram);

 //Thought Questions

 //What happened to the original array?
 //Didn't change

 //Can you store the values from a forEach method in a new array?

 //No

 ///////////////////////////////////////////////////

 //make a new array of each number multiplied by 100

 const map1 = nums.map(num => num * 100);
 console.log(map1);

 // make a new array of all the words in all uppercase

 const map2 = panagram.map(element => element.toUpperCase);
 console.log(map2);

 //What happened to the original array?


 //Can you store the values from a map method in a new array?

nums.forEach((num) => console.log(num % 7 == 0));
panagram.indexOf("a")









    
