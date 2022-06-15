// It's common practice to declare arrays w/ const keyword.
// Arrays can be initialized w/ info
const cars = [
  'Acura: Honda Motor Company',
  'Alfa Romeo: Stellantis',
  'Audi: Volkswagen Group',
  'BMW: BMW Group',
  'Bentley: Volkswagen Group',
  'Buick: General Motors',
  'Cadillac: General Motors',
  'Chevrolet: General Motors'
];

// SPLICE - can have n number of arguments.
// SPLICE - Edits original array.
// cars.splice(0); // Clears entire array
// cars.splice(0,1); // Starts @ index 0 & removes value, stops before index 1
// cars.splice(4); // Starts @ 4th index, removes everything after index 4.

// SLICE - can have only 2 arguments
// SLICE - returns edited value as a new array.
const carsSliced = cars.slice(0,2);
// console.log(carsSliced);

// CONCAT - returns new array, and does not change original arr.
const newArr = cars.concat(['Tesla: Electric Cars, Solar & Clean Energy', 'Lucid Motors: Luxury Electric Cars'])
newArr.reverse(); // reverses the order.
// console.log(newArr);

// JOINS - similar to concat.
// JOINS - Makes this all into a string.
// console.log(cars.join('|'));

// Looping through arrays.
// Has no index access
// for 

// cars.forEach((car,i) => {
//   console.log(car, i);
// });

// const mappedArray = cars.map((value, index, array)=>{
//   return this.num;
// }, {num:10});

const nums = [1,2,3,10,4,5,6,7,8,9]
// const mappedArray = nums.map(function(value, index, array){
//   console.log(this.num); //We have access to the object passed in, with this keyword.
//   return value + index;
// }, {num:10});

// filter
//returns values that's greater than 1.
const mappedArray = nums.filter(function(val, i){
  return val > this.num;
},{num:1});
// console.log(mappedArray);

// find
// returns 1st value that returns true
const foundArr = nums.find(function(val, i){
  return val > this.num;
},{num:1});
// console.log(foundArr); // 2

const nums2 = [1,2,3,4,5,6,7,10,8,9]

// findIndex
// This one does NOT work w/ arrow functions.
const findIndexArr = nums2.findIndex(function(val, i){
  return val > this.num;
},{num:8});
// console.log(findIndexArr); // 7

const nums3 = [1,2,3]

const sum = nums3.reduce((accumulator, currentVal) =>{
  // console.log(`Acc: ${accumulator} + ${currentVal}(current)`);
  return accumulator + currentVal;
},0); // keep this param here so we don't skip the 1st iteration in the reduce function
// console.log(sum);

const sum2 = nums3.reduce((accumulator, currentVal) => {
  // console.log(`Acc: ${accumulator} + ${currentVal}(current)`);
  return accumulator + currentVal;
}); // skips 1st iteration
// console.log(sum2);

const diff = nums3.reduceRight((accumulator, currentVal)=> {
  // console.log(`Acc: ${accumulator} - ${currentVal}(current)`);
  return accumulator - currentVal;
},0);
// console.log(diff);

const diff2 = nums3.reduceRight((accumulator, currentVal) => {
  // console.log(`Acc: ${accumulator} - ${currentVal}(current)`); 
  return accumulator - currentVal;
});
// console.log(diff2);

// Sorting Arrays
arrToSort = [9,3,5,7,33,62,678,84,24,46,1]
console.log(arrToSort.sort()); // [ 1, 24, 3, 33, 46, 5, 62, 678, 7, 84, … ]
// This is not at all what we want.
// This breaks when there's more than 1 digit.

function compareNums(firstNum, secondNum){
  // you have also the option to set a first item
  // if(firstNum === 1) return -1;
  // else if (secondNum === 1) return 1;
  return firstNum - secondNum // ascending | lowest to highest.
  // return secondNum - firstNum; // decending | highest to lowest.
}

arrToSort.sort(compareNums);
console.log(arrToSort);