// Basic Types
let id: number = 5;
let company: string = 'Company Name';
let isPublished: boolean = true;
let x: any = 'Hello'; // i probably should never use that
x = true;

// i've been always using new Array(), rip me i guess, i was wrong
// let ids: number[] = new Array(1,2,3,4,5); // doesn't throw an error
// let arr: any[] = new Array(true, 1, 'Hello'); // throws an error

// Tuple
let person: [number, string, boolean] = [1, 'Dave', true];
// Tuple Array
let employee: [number, string][];
employee = [
  [1, 'John'],
  [2, 'Jane'],
  [3, 'George'],
];

// Union
let pid: string | number = 22;
pid = '22';

// Enum
enum Direction1 {Up, Down, Left, Right};
// console.log(Direction1.Up);

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
};
// console.log(Direction2.Up);

// Objects
type User = {
  id: number,
  name: string
}

const user: User = {
  id: 1,
  name: 'John'
}

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

// Void
function log(message: string | number): void {
  console.log(message);
}

// Interfaces
interface UserInterface {
  readonly id: number,
  name: string,
  age?: number
}

const user1: UserInterface = {
  id: 1,
  name: 'John'
}

type Point = number | string;
const p1: Point = 1;

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Classes
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person implements PersonInterface {
  id: number;
  name: string;
  // protected (access from class and subclasses)
  // private (access from this class)

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register(): string {
    return `${this.name} is now registered`;
  }
}

const dave = new Person(1, 'Dave');
const mike = new Person(2, 'Mike');

// Subclasses
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, 'Shawn', 'Developer');

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1,2,3,4]);
let strArray = getArray<string>(['John', 'Jane', 'Jeff']);
// numArray.push('Hello');