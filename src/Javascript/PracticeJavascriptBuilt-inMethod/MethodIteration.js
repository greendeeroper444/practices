const numbers = [1, 2, 3, 4, 5];

// 1. forEach() Executes a function for each array element, returns nothing.
console.log("forEach():");
numbers.forEach((num, i) => console.log(`Index ${i}: ${num}`));

// 2. map() Creates a new array by transforming each element with a function, returns new array.
const doubled = numbers.map(num => num * 2);
console.log("\nmap():", doubled); // [2, 4, 6, 8, 10]

// 3. filter() Creates a new array with elements that pass a test condition.
const even = numbers.filter(num => num % 2 === 0);
console.log("filter():", even); // [2, 4]

// 4. reduce() Reduces array to a single value by applying a function left-to-right.
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("reduce():", sum); // 15

// 5. reduceRight() Reduces array to a single value by applying a function right-to-left.
const subtractRight = numbers.reduceRight((acc, num) => acc - num);
console.log("reduceRight():", subtractRight); // ((((5 - 4) - 3) - 2) - 1) = -5

// 6. every() Tests if ALL elements pass a condition, returns true/false.
const allPositive = numbers.every(num => num > 0);
console.log("every():", allPositive); // true

// 7. some() Tests if ANY element passes a condition, returns true/false.
const hasGreaterThan4 = numbers.some(num => num > 4);
console.log("some():", hasGreaterThan4); // true

// 8. find() Returns the first element that matches a condition.
const firstEven = numbers.find(num => num % 2 === 0);
console.log("find():", firstEven); // 2

// 9. findIndex() Returns the index of the first element that matches a condition.
const firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
console.log("findIndex():", firstEvenIndex); // 1

// 10. findLast() Returns the last element that matches a condition.
const findLast = numbers.findLast(num => num < 5);
console.log("findLast():", findLast); // 4

// 11. findLastIndex() Returns the index of the last element that matches a condition.
const findLastIndex = numbers.findLastIndex(num => num < 5);
console.log("findLastIndex():", findLastIndex); // 3
