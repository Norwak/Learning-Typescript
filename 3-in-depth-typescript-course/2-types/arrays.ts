let carMakers: string[] = [];
carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

let carsByMake: string[][] = [];
carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with 'map'
carMakers.map((car): string => car.toUpperCase());

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('11.12.2023');
importantDates.push(new Date());