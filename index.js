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
// Alt to above
const typeOfCars = new Array('Pickup Truck', 'Station Wagon', 'Minivan', 'Coupe', 'Sports Cars', 'Sedan', 'Convertible', 'Crossover', 'Hatchback', 'SUV');

// Access arrays via their index
// console.log(cars[0]); //Acura

cars[0] = 'Honda';
let cLength = cars.length;

// Looping array elements.
// FOR
// for(let i = 0; i<cLength;i++){
//   console.log(cars[i])
// }

// FOREACH  
cars.forEach(car => {
  console.log(car)
});

const fruits = ['Baby Bananas', 'Oranges', 'Peaches', 'Kiwi'];
fruits.push('Mango'); // Adds to the end
fruits.shift(); // Removes the first index of array
fruits.unshift('Baby Nanas'); // Removes the first index of array
fruits.splice(2,0, 'Lemon', 'Watermelon (Seeded)'), 
//2, Position to add new element.
//0, How many elements to remove.
//After 0, elements to be added to array.
fruits.splice(2,0), 

console.log(fruits)