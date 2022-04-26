// Be careful with floating point numebers..
let x = 0.1 + 0.2;
let y = .3;
if (x == y ){
  console.log("Works");
} else console.log("Floating point arithmetic is not always 100% accurate.");

// When adding numbers, use +
let z = x+y;
// Using  + with numbers and strings, + will treat the number like a string.
let a = '0.1'+0.2;
console.log(a); // 0.10.2

console.log(isNaN(a)); //returns T or F

let aa = 777;
let ab;

// toString() - convert to string
ab= aa.toString(); // "777"

console.log(ab);

console.log(`
Number(true): ${Number(true)}
Number(false): ${Number(false)}
Number("10"): ${Number("10")}
Number("Jojo"): ${Number("Jojo")}
${parseInt("10.33")} 
`);
console.log(ab);
