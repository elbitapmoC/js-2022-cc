// NEVER CREATE STRINGS AS OBJECTS ----------------------------
let x = new String('John');
let y = new String('Johnny Appleseed');
let z = "How much wood would a woodchuck chuck if a woodchuck could chuck wood?";
let randomWord = '                where MOMMY go?                  ';

// Returns false, comparing objects ALWAYS returns false.
// console.log(x.length); //4

// Extracting String Parts ----------------------------
// slice (start, end)
// substring (start, end)

let a = x.slice(0,2); // Jo
a = x.substring(1,3); // oh
a = y.substring(12); // Seed
a = x.slice(1); //ohn, by excluding the 2nd parameter this method will slice out the rest of the string.
a = y.slice(-4); //print out (4) of characters from the end
a = y.slice(7,6); // empty string
a = y.substring(8,6); // A

a = y.replace('Johnny', 'Opal') // replace returns a NEW string & returns ONLY the 1st match.
a = z.replace(/wood/g, 'lumber'); //global match, replaces all matches

// String Methods ----------------------------
// String Methods - They don't modify the OG string.
a = randomWord.toUpperCase();
a = randomWord.toLowerCase();
a = randomWord.trim(); // removes white spaces from the sides.

// Extracting string characters
a = z.charAt(2) // w

// String -> Array ----------------------------
a = z.split(' '); //Returns an array of words
a = z.split(''); //Returns an array of single characters


// console.log(a);
console.table(a);