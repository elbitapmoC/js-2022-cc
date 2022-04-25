//SEARCH Methods ----------------------------
// indexOf - can not take regex values
// lastIndexOf
// startsWith
// endsWith
// search - cannot take a second argument (for start position)

let str = "of... I'm uh... looking for the owner of this one of a kind glass slipper. of... Uh... Have you seen her?"
let a = str.indexOf('glass'); // 54
a = str.slice(54);

let newStr = str.replace(/of/gi, 'offer');
a = newStr.lastIndexOf('offer'); // searches backward
a = newStr.slice(47)

a = str.indexOf('of', 40) // second param is the start position. //49
a = str.slice(49);

// // MATCH---
// // match - searches a string and returns the matches in an aray.
a = str.match(/of/ig) // [ "of", "of", "of", "Of" ]

// // INCLUDES---
// // includes - checks if a string contains a specific value
a = str.includes('owner'); // true
// a = str.includes('!');

// // STARTS WITH---
// // startsWith - checks if a string starts w/ a specific value
// a = str.startsWith('I'); // true
// a = str.startsWith('i'); // falses

// // ENDS WITH---
// // endsWith - checks if a string starts w/ a specific value
// a = str.endsWith('?'); // true
// a = str.endsWith('.'); // false

function reverseString(str){
  return str.split("").reverse().join("");
}

// function reverseString(str) {
//   let a = str.split('').reverse();
//   let b = a.join('');
//   console.log(b);
// }

str = 'Normal String';
console.log(`
before: ${str}
after: ${reverseString(str)}
`);
// console.log(a);