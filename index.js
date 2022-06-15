let x = "5";
let y = 2;
let z = 3;
// console.log(x + y + z); // IF you put a number in "" (x), the rest of the numbers will be treated as strings as well.

// $ and _ are treated as letters.

// scope
function test(){

  if(true){
    var test1 = 'VAR TEST 1';
    let test2 = 'LET TEST 2';
  }

  console.log(test1);
  console.log(test2);
}

// test();
const cars = ['a','b','c'];
console.log(typeof cars);
