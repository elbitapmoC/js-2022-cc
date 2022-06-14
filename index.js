const person = {
  fN: 'Ahkal',
  heritageName: 'Yahawadah',
  parent: true,
  fullName : function() {
    return `${this.fN} ban ${this.heritageName}` //'this' refers to the person object.
  }
}
// console.log(person.fullName());

// Map
const map = new Map();
map.set(123, 'Helooooooo');
map.set(456, 'Nurse');

// console.log(map.size);
// console.log(map.get(123));

// Set - ONLY has unique values.
// No Key-Value pairs.
const set = new Set();
set.add('No');
set.add('reps')
set.add('here')
console.log(set.has('no')); // false
console.log(set.delete('No'));
console.log(set.size); // 2
console.log(set);
