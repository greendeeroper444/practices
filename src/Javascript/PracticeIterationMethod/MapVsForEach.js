
//=======ONLY forEach CAN DO ========
// let sum = 0;

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(num => {
//     sum += num; // accumulate total
// });

// console.log("Total Sum:", sum); //15

//======= CAN'T DO using map ======
// let sum = 0;

// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.map(num => {
//     sum += num; //side effect
//     // console.log(num)
// });

// console.log("Total Sum:", sum); // 15, but the `result` array is [undefined, undefined, ...]

//======= CAN'T DO using map ======
// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.forEach(num => num * num);

// console.log("Squares:", squares); // Squares: undefined because there is changes in the value


//=======ONLY map CAN DO ========
const numbers = [1, 2, 3, 4, 5];

//correct usage: map returns a new array of squares
const squares = numbers.map(num => num * num);

console.log("Squares:", squares); //Squares: [ 1, 4, 9, 16, 25 ]