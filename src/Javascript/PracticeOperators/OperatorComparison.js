// == Equal operator - compares values (loose equality)
let val1 = 5;
let val2 = '5';
console.log('Equal (==):', val1 == val2); // true

// === Strict equal operator - compares values and types
let num = 5;
let str = '5';
console.log('Strict equal (===):', num === str); // false

// != Not equal operator - checks if values are not equal (loose)
let first = 10;
let second = '5';
console.log('Not equal (!=):', first != second); // true

// !== Strict not equal operator - checks values and types are not equal
let alpha = 5;
let beta = '5';
console.log('Strict not equal (!==):', alpha !== beta); // true

// > Greater than operator - checks if left is greater than right
let left = 10;
let right = 5;
console.log('Greater than (>):', left > right); // true

// < Less than operator - checks if left is less than right
let small = 3;
let large = 8;
console.log('Less than (<):', small < large); // true

// >= Greater than or equal operator
let score1 = 85;
let score2 = 85;
console.log('Greater than or equal (>=):', score1 >= score2); // true

// <= Less than or equal operator
let price1 = 50;
let price2 = 75;
console.log('Less than or equal (<=):', price1 <= price2); // true
