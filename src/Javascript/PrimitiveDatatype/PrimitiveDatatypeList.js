// JavaScript Primitive Data Types
// 1. Number
let age = 25;
let price = 19.99;
let negative = -100;
let infinity = Infinity;
let notANumber = NaN;

// 2. String
let name = "John Doe";
let message = 'Hello World';
let template = `My name is ${name}`;

// 3. Boolean
let isActive = true;
let isComplete = false;

// 4. Undefined
let x;
console.log(x); // undefined
let y = undefined;

// 5. Null
let data = null;
let empty = null;

// 6. Symbol (ES6+)
let sym1 = Symbol();
let sym2 = Symbol('description');
let sym3 = Symbol.for('key');

// 7. BigInt (ES2020+) 
let bigNumber = 123456789012345678901234567890n;
let anotherBig = BigInt(123456789012345678901234567890);