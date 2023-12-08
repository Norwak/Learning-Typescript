let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built-in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, true];

// Classes
class Car {

}
let car: Car = new Car();

// Object Literal
let point: {x: number; y: number} = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}

// 2) When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean; // honestly should be "let foundWord = false;"

for (let i = 0; i < words.length; i++) {
  const element = words[i];
  if (element === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
// intentional bad code
let numbers = [-10, -1, 12];
let numberAboveZero: boolean|number = false;

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (element > 0) {
    numberAboveZero = element;
  }
}