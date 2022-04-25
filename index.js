// NEVER CREATE STRINGS AS OBJECTS ----------------------------
let x = new String('John');
let y = new String('Johnny-Appleseed');
let z = "How much wOOd would a woodchuck chuck if a wOodchuck could chuck wood?";
let randomWord = '                where MOMMY go?                  ';

// Returns false, comparing objects ALWAYS returns false.
// console.log(x.length); //4

// Extracting String Parts ----------------------------
// slice (start, end @/before)
// substring (start, end @/before)
// The ONLY difference between the two above... substring can not accept negative indexes.

let a = x.slice(0,2); // Jo
a = x.substring(1,3); // oh
a = y.substring(12); // seed
a = x.slice(1); //ohn, by excluding the 2nd parameter this method will slice out the rest of the string.
a = y.slice(-4); //print out (4) of characters from the end
a = y.slice(7,5); // empty string
a = y.substring(8,6); // -A

a = y.replace('Johnny', 'Opal') // replace returns a NEW string & returns ONLY the 1st match.
a = z.replace(/wood/g, 'lumber'); //global match, replaces all matches
a = z.replace(/oo/gi, '00'); // How much w00d would a w00dchuck chuck if a w00dchuck could chuck w00d?

// // String Methods ----------------------------
// // String Methods - They don't modify the OG string.
// a = randomWord.toUpperCase();
// a = randomWord.toLowerCase();
// a = randomWord.trim(); // removes white spaces from the sides.

// // Extracting string characters
// a = z.charAt(2) // w

// // String -> Array ----------------------------
// a = z.split(' '); //

// console.log(a);
console.table(a);