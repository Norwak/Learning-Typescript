"use strict";
// Basic Types
let id = 5;
let company = 'Company Name';
let isPublished = true;
let x = 'Hello'; // i probably should never use that
x = true;
// i've been always using new Array(), rip me i guess, i was wrong
// let ids: number[] = new Array(1,2,3,4,5); // doesn't throw an error
// let arr: any[] = new Array(true, 1, 'Hello'); // throws an error
// Tuple
let person = [1, 'Dave', true];
// Tuple Array
let employee;
employee = [
    [1, 'John'],
    [2, 'Jane'],
    [3, 'George'],
];
// Union
let pid = 22;
pid = '22';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
;
// console.log(Direction1.Up);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
;
const user = {
    id: 1,
    name: 'John'
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John'
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    // protected (access from class and subclasses)
    // private (access from this class)
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const dave = new Person(1, 'Dave');
const mike = new Person(2, 'Mike');
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['John', 'Jane', 'Jeff']);
// numArray.push('Hello');
