//SEARCH Methods ----------------------------
// indexOf - can not take regex values
// lastIndexOf
// startsWith
// endsWith
// search - cannot take a second argument (for start position)

let str = "I'm of looking for the owner of this one of a kind glass slipper. Of, Have you seen her?"
let a = str.indexOf('glass'); // 51
a = str.slice(51);

let newStr = str.replace(/of/gi, 'offer');
a = newStr.lastIndexOf('offer'); // searches backward
a = newStr.slice(75)

a = str.indexOf('of', 30) // second param is the start position. //41

// MATCH---
// match - searches a string and returns the matches in an aray.
a = str.match(/of/ig) // [ "of", "of", "of", "Of" ]

// INCLUDES---
// includes - checks if a string contains a specific value
a = str.includes('owner'); // true

// STARTS WITH---
// startsWith - checks if a string starts w/ a specific value
a = str.startsWith('I'); // true
a = str.startsWith('i'); // false

// ENDS WITH---
// endsWith - checks if a string starts w/ a specific value
a = str.endsWith('?'); // true
a = str.endsWith('.'); // false

function reverseString(str) {
  let a = str.split('').reverse();
  let b = a.join('');
  console.log(b);
}

reverseString(str);
// console.log(a);