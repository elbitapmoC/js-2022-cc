try {
  throw new Error('Hit a tree!');
} catch (err) {
  console.log(err);
}

console.log('Value');
console.error('Error message');
console.debug('Debug Message');
console.table([[1,3], ['hello' ,'world']]);

console.count('key');
console.count();
console.countReset('key');
console.count('key');

console.time('key');
for (let index = 0; index <100; index++) {
  console.log(index);
}
// console.timeEnd('key');

console.trace();