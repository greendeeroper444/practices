// + Addition operator - adds two numbers or concatenates strings
let a = 5;
let b = 3;
console.log('Addition operator', a + b); // 8

// - Subtraction operator - subtracts second number from first
let x = 10;
let y = 4;
console.log('Subtraction operator', x - y); // 6

// * Multiplication operator - multiplies two numbers
let num1 = 7;
let num2 = 3;
console.log('Multiplication operator', num1 * num2); // 21

// / Division operator - divides first number by second
let dividend = 15;
let divisor = 3;
console.log('Division operator', dividend / divisor); // 5

// % Modulus operator - returns remainder after division
//(10) divided by mod (3) = result (3), then the mod will be multiply the result so it will be 3 x 3 = result2 (9)
//then number(10) - result2 (9) = answer is 1
let number = 10;
let mod = 3; 
console.log('Modulus operator', number % mod); // 1

// ** Exponentiation operator - raises first number to power of second
//2 x 2 x 2 = 8
let base = 2;
let exponent = 3;
console.log('Exponentiation operator', base ** exponent); // 8



// ++ Increment operator - increases value by 1
let counter = 5;
console.log('Main Pre increment', ++counter); // 6 (pre-increment)
console.log('Main Post increment', counter++); // 6 (post-increment, then becomes 7)

// Pre Increment
let preincrement1 = 5;
let preincrement2 = ++preincrement1; // preincrement1 is preincremented to 6, then preincrement2 gets 6
console.log('Pre preincrement', preincrement1); // 6
console.log('Post preincrement', preincrement2); // 6

// Post Increment
let postincrement1 = 5;
let postincrement2 = postincrement1++; // postincrement2 gets 5, then postincrement1 becomes 6
console.log('Pre postincrement', postincrement1); // 6
console.log('Post postincrement', postincrement2); // 5

// -- Decrement operator - decreases value by 1
let count = 10;
console.log('Main Pre decrement', --count); // 9 (pre-decrement)
console.log('Main Post decrement', count--); // 9 (post-decrement, then becomes 8)

// Pre Decrement
let predecrement1 = 5;
let predecrement2 = --predecrement1; // predecrement1 is decremented to 4, then predecrement2 gets 4
console.log('Pre predecrement', predecrement1); // 4
console.log('Post predecrement', predecrement2); // 4

// Post Decrement
let postdecrement1 = 5;
let postdecrement2 = postdecrement1--; // postdecrement2 gets 5, then postdecrement1 becomes 4
console.log('Pre postdecrement', postdecrement1); // 4
console.log('Post postdecrement', postdecrement2); // 5

